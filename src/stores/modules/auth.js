import { defineStore } from "pinia";
import AuthServices from "../../apis/modules/auth";
import router from "../../router";
import { useToast } from "vue-toastification";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    role: null,
    isLoggedIn: false,
  }),

  actions: {
    async login(credentials) {
      try {
        const response = await AuthServices.login(credentials);
        const message = response.data.message;
        if (message == "Cannot find email") {
          useToast().warning("Không tìm thấy email");
        } else if (message == "Wrong Password") {
          useToast().error("Sai mật khẩu");
        } else if (message == "Invalid account") {
          useToast().error("Tài khoản đang bị khóa");
        } else {
          useToast().success("Đăng nhập thành công");
        }
        console.log("API Response:", response.data.message);

        if (this.isLoggedIn) {
          console.log("Người dùng đã đăng nhập.");
        }

        const identity = response?.data?.identity;

        if (identity === undefined || identity === null) {
          console.error("Identity is undefined or null");
          return;
        }

        // Common logic for both roles
        this.role = identity.substring(0, 2) === "AD" ? "admin" : "staff";
        this.isLoggedIn = true;

        localStorage.setItem("role", this.role);
        localStorage.setItem("isLoggedIn", this.isLoggedIn);
        localStorage.setItem("token", response.data.access_token);
        // Router logic
        if (this.role === "admin") {
          router.push("admin/staffs");
        } else if (this.role === "staff") {
          router.push("staff/bills");
        }
      } catch (error) {
        // Error handling logic
        if (error.response) {
          console.error("Status:", error.response.status);
          console.error("Data:", error.response.data);
          const errorMessage = error.response.data.message;
          console.error("Error Message:", errorMessage);
          useToast().error(errorMessage);
        } else if (error.request) {
          console.error("No response received");
        } else {
          console.error("Error message:", error.message);
        }
      }
    },

    async logout() {
      try {
        const check = localStorage.getItem("isLoggedIn");
        console.log(check);
        if (!check) {
          console.log("Người dùng chưa đăng nhập.");
          return;
        } else {
          this.role = null;
          this.isLoggedIn = false;
          localStorage.removeItem("token");
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("role");
          router.push("/login");
        }
      } catch (error) {
        console.error("Lỗi đăng xuất:", error.message);
      }
    },

    async mounted() {
      await this.login();
    },
  },
});
