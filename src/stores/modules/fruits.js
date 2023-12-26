import { defineStore } from "pinia";
import fruitServices from "../../apis/modules/fruits";
import { useAuthStore } from "./auth";

export const useFruitStore = defineStore("useFruit", {
  state: () => ({
    fruitstmp: [],
  }),

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
        return response; // return the response for handling in components
      } catch (error) {
        console.error("Error adding fruit:", error);
        throw error;
      }
    },

    async updateFruit(fruit) {
      try {
        const response = await fruitServices.updateFruit(fruit);
        console.log(response);
        return response; // return the response for handling in components
      } catch (error) {
        console.error("Error updating fruit:", error);
        throw error;
      }
    },

    async deleteFruit(id) {
      try {
        const response = await fruitServices.deleteFruit(id);
        console.log(response);
        return response; // return the response for handling in components
      } catch (error) {
        console.error("Error deleting fruit:", error);
        throw error;
      }
    },

    async getIdFruit() {
      try {
        const response = await fruitServices.getIdFruit();
        //console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error getting id fruit:", error);
        throw error;
      }
    },

    async getWeight() {
      try {
        const response = await fruitServices.getWeight();
        // console.log(response.data.weight);
        return response.data.weight;
      } catch (error) {
        console.error("Error getting weight:", error);
        throw error;
      }
    },
    async getImage(img) {
      try {
        const response = await fruitServices.getImage(img);
        let blob = new Blob([response.data], { type: "image" });
        const src = URL.createObjectURL(blob);

        localStorage.setItem("img", src);
        //console.log(localStorage.getItem("img"));
        return src;
      } catch (error) {
        console.log("Error al obtener la imagen");
        throw error;
      }
    },
  },
});
