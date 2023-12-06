import Api from "../../apis";

export default {
  login(data) {
    return Api().post("Login", {
      email: data.email,
      password: data.password,
    });
  },

  logout(data) {
    return Api().post(
      "logout",
      {
        email: data.email,
        password: data.password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  },
  register() {
    return Api().post("register");
  },
};
