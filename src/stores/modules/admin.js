import { defineStore } from "pinia";
import adminServices from "../../apis/modules/admin";

export const useAdminStore = defineStore("useAdmin", {
  state: () => ({}),
  actions: {
    async getAllStaff() {
      try {
        const response = await adminServices.getAllStaff();
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching staff:", error);
      }
    },
  },
});
