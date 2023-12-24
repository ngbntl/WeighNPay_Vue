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
    return Api().post("update", user, {
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
    return Api().post("ActiveAcc", ID, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  lockAcc(ID) {
    return Api().post("BanAcc", ID, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
};
