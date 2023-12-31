import Api from "../../apis";

export default {
  getAllStaff() {
    return Api().get("ViewAll", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  addStaff(staff) {
    return Api().post("Register", staff, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  getAllBills() {
    return Api().get("ViewAllBill", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  addBill(bill) {
    return Api().post("bill", bill, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  update(user) {
    return Api().put("update", user, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  getUser() {
    return Api().get("view", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  activeAcc(ID) {
    return Api().put(`ActiveAcc/${ID}`, ID, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  lockAcc(ID) {
    return Api().put(`BanAcc/${ID}`, ID, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  getBill(ID) {
    return Api().get(`ViewBill/${ID}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
};
