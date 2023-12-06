import { defineStore } from "pinia";
export const useModal = defineStore("Modal", {
  state: () => ({
    isModalOpen: false,
  }),
  actions: {
    openModal() {
      this.isModalOpen = true;
      //console.log(this.isModalOpen);
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
});
