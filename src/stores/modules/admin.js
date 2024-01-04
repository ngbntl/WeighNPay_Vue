import { defineStore } from "pinia";
import adminServices from "../../apis/modules/admin";
import { useToast } from "vue-toastification";
import { message } from "ant-design-vue";

export const useAdminStore = defineStore("useAdmin", {
  state: () => ({
    cost: null,
    staffs: [],
    bills: [],
    locked: null,
    staffValidStates: [],
    user: {
      email: "",
      name: "",
    },
  }),
  actions: {
    async getAllStaff() {
      try {
        const response = await adminServices.getAllStaff();
        this.staffs = response.data;
        this.staffValidStates = response.data.map((data) => data.valid);
        this.getUser();
      } catch (error) {
        console.error("Error fetching staff:", error);
      }
    },
    async getAllBills() {
      try {
        const response = await adminServices.getAllBills();
        this.bills = response.data;
        console.log(this.bills);
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
        useToast().success("Thêm thành công");
        this.getAllBills();
        return totalPrice;
      } catch (error) {
        console.error("Error Adding Bill", error);
        useToast().error("Thêm thất bại");
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
        this.user.email = response.data.email;
        this.user.name = response.data.name;
        console.log(this.user);
        return response.data;
      } catch (error) {
        console.error("Error getting user", error);
      }
    },
    async activeAcc(ID) {
      try {
        const res = await adminServices.activeAcc(ID);
        if (res.message == "Account activated") {
          useToast().success("Đã mở tài khoản");
          // return false;
        }
      } catch (err) {
        console.log(err);
      }
    },

    async lockAcc(ID) {
      try {
        const res = await adminServices.lockAcc(ID);
        if (res.message == "Account banned") {
          useToast().success("Đã khóa tài khoản");
          //   return false;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
});
