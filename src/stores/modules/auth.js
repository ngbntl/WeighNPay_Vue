import { defineStore } from "pinia";
import AuthServices from "../../apis/modules/auth";
import router from "../../router";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    role: null,
    isLoggedIn: false,
  }),
  actions: {
    async login(credentials) {
      try {
        if (this.isLoggedIn) {
          console.log("Người dùng đã đăng nhập.");
        }
        const response = await AuthServices.login(credentials);
        localStorage.setItem("token", response.data.access_token);
        const identity = response.data.identity;
        //console.log(identity);
        if (identity.substring(0, 2) == "AD") {
          this.role = true;
          this.isLoggedIn = true;
          localStorage.setItem("role", this.role);
          localStorage.setItem("isLoggedIn", this.isLoggedIn);
          // console.log(localStorage.getItem("isLoggedIn"));
          router.push("admin/staffs");
        } else if (identity.subString(0, 2) == "NV") {
          this.role = false;
          this.isLoggedIn = true;
          localStorage.setItem("role", this.role);
          localStorage.setItem("isLoggedIn", this.isLoggedIn);
          router.push("staff");
        }
      } catch (error) {
        console.error("Lỗi đăng nhập:", error.message);
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
          this.role = null; // Xóa role khi người dùng đăng xuất
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
