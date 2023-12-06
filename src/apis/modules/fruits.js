import Api from "../../apis";

export default {
  getFruits() {
    return Api().get("allFruits");
  },
  addFruit(fruit) {
    return Api().post("addFruit", fruit, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  updateFruit(fruit) {
    return Api().put(`updateFruit/${fruit.ID}`, fruit, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  deleteFruit(id) {
    return Api().delete(`deleteFruit/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
};
