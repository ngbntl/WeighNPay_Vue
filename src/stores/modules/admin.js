import { defineStore } from "pinia";
import adminServices from "../../apis/modules/admin";
import { useToast } from "vue-toastification";
import { message } from "ant-design-vue";

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
        const mess = response.data.message;
        if (mess == "User already exists. Please add a different one.") {
          useToast().warning("Người dùng đã tồn tại");
        } else {
          useToast().success("Thêm thành công");
        }

        console.log(response.data);

        return this.getAllStaff();
      } catch (error) {
        console.error("Error adding staff", error);
        useToast().error("Thêm thất bại");
      }
    },
    async addBill(bill) {
      try {
        const response = await adminServices.addBill(bill);

        const totalPrice = response.data.total_price;
        return totalPrice;
      } catch (error) {
        console.error("Error Adding Bill", error);
        useToast().error("Thêm thành công");
        throw error;
      }
    },
    async update(user) {
      try {
        const response = await adminServices.update(user);
        console.log(response.data);

        useToast().success("Cập nhật thông tin thành công!");
        return response.data.total_price;
      } catch (error) {
        console.error("Error updating user", error);
        useToast().error("Có lỗi xảy ra! Vui lòng thử lại");
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
    async activeAcc(ID) {
      try {
        const response = await adminServices.activeAcc(ID);
        if (response.message == "Account activated") {
          useToast.success("đã mở khóa");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async lockAcc(ID) {
      try {
        const res = await adminServices.lockAcc(ID);
        if (res.message == "Account banned") {
          useToast.success("Đã khóa tài khoản");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
});
