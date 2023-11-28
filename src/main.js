import { createApp } from "vue";
import { createPinia } from "pinia";
import {
  Menu,
  List,
  Drawer,
  message,
  Dropdown,
  Table,
  Input,
  Popconfirm,
  Typography,
} from "ant-design-vue";
import "./style.css";

import router from "./router/index";
import axios from "axios";
window.axios = axios;

import App from "./App.vue";
import "ant-design-vue/dist/reset.css";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(Drawer);
app.use(List);
app.use(Menu);
app.use(Dropdown);
app.use(Table);
app.use(Input);
app.use(Popconfirm);
app.use(Typography);

app.mount("#app");
app.config.globalProperties.$message = message;
