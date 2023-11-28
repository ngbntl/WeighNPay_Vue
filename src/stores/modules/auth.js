import { defineStore } from "pinia";
import AuthServices from "../../apis/modules/auth";
export const useAuthStore = defineStore("auth", {
  state: () => ({}),
  actions: {
    async login(crenditials) {
      try {
        const response = await AuthServices.login(crenditials);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
