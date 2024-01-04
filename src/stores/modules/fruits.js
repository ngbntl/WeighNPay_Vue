import { defineStore } from "pinia";
import fruitServices from "../../apis/modules/fruits";
import { useAuthStore } from "./auth";
import adminServices from "../../apis/modules/admin";
import { useToken } from "ant-design-vue/es/theme/internal";
import { useToast } from "vue-toastification";
export const useFruitStore = defineStore("useFruit", {
  state: () => ({
    fruits: [],
    fruitNames: [],
  }),

  actions: {
    async getAllFruits() {
      try {
        const response = await fruitServices.getFruits();
        this.fruits = response.data;
        //this.fruitNames = response.data.map((data) => data.name);
        console.log(this.fruitNames);
        return response.data;
      } catch (error) {
        console.error("Error fetching fruits:", error);
        throw error;
      }
    },

    async addFruit(fruit) {
      try {
        const response = await fruitServices.addFruit(fruit);
        useToast().success("Thêm thành công");
        console.log(response);
        return response;
      } catch (error) {
        console.error("Error adding fruit:", error);
        throw error;
      }
    },

    async updateFruit(fruit) {
      try {
        const response = await fruitServices.updateFruit(fruit);

        useToast().success("Cập nhật thành công");
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
        useToast().success("Xóa thành công");
        return response; // return the response for handling in components
      } catch (error) {
        console.error("Error deleting fruit:", error);
        throw error;
      }
    },

    async getIdFruit(id) {
      try {
        const response = await fruitServices.getIdFruit(id);
        if (response.data.message == "Fruit not Found!") {
          //console.log(response.data.image_path);
          useToast().error("Quả không hợp lệ");
          return response.data.image_path;
        } else if (response.data.message == "Too much fruits!") {
          useToast().error("Quá nhiều loại quả");
          return response.data.image_path;
        } else {
          return response.data;
        }
      } catch (error) {
        console.error("Error getting id fruit:", error);
        throw error;
      }
    },

    async getWeight(id) {
      try {
        const response = await fruitServices.getWeight(id);
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
        return src;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async getBill(ID) {
      try {
        const res = await adminServices.getBill(ID);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
