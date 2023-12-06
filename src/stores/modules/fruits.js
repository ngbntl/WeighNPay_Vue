import { defineStore } from "pinia";
import fruitServices from "../../apis/modules/fruits";
import { useAuthStore } from "./auth";

export const useFruitStore = defineStore("useFruit", {
  state: () => ({}),

  actions: {
    async getAllFruits() {
      try {
        const response = await fruitServices.getFruits();
        return response.data;
      } catch (error) {
        console.error("Error fetching fruits:", error);
        throw error;
      }
    },

    async addFruit(fruit) {
      try {
        const response = await fruitServices.addFruit(fruit);
        console.log(response);
      } catch (error) {
        console.error("Error adding fruit:", error);

        throw error;
      }
    },

    async updateFruit(fruit) {
      try {
        const response = await fruitServices.updateFruit(fruit);
        console.log(response);
      } catch (error) {
        console.error("Error updating fruit:", error);
        throw error; // Rethrow the error for handling in calling components
      }
    },
    async deleteFruit(id) {
      try {
        const response = await fruitServices.deleteFruit(id);
        console.log(response);
      } catch (error) {
        console.error("Error deleting fruit:", error);
        throw error; // Rethrow the error for handling in calling components
      }
    },
  },
});
