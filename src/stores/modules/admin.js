import { defineStore } from "pinia";
import adminServices from "../../apis/modules/admin";

export const useAdminStore = defineStore("useAdmin", {
  state: () => ({
    cost: null,
  }),
  actions: {
    async getAllStaff() {
      try {
        const response = await adminServices.getAllStaff();
        //console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching staff:", error);
      }
    },
    async getAllBills() {
      try {
        const response = await adminServices.getAllBills();
        // console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching bills", error);
      }
    },
    async addStaff(staff) {
      try {
        const response = await adminServices.addStaff(staff);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error adding staff", error);
      }
    },
    async addBill(bill) {
      try {
        const response = await adminServices.addBill(bill);

        const totalPrice = response.data.total_price;
        return totalPrice;
      } catch (error) {
        console.error("Error Adding Bill", error);
        // Nếu có lỗi, bạn có thể xử lý nó ở đây hoặc ném lại để bên gọi hàm xử lý
        throw error;
      }
    },
    async update(user) {
      try {
        const response = await adminServices.update(user);
        console.log(response.data);
        return response.data.total_price;
      } catch (error) {
        console.error("Error updating user", error);
      }
    },
    async getUser() {
      try {
        const response = await adminServices.getUser();
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error getting user", error);
      }
    },
  },
});
