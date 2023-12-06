import Api from "../../apis";

export default {
  getAllStaff() {
    return Api().get("view", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
};
