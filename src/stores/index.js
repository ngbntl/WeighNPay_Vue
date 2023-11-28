import { Pinia } from "pinia";
import { createPinia, setActivePinia } from "../src/index.js";

import useAuthStore from "./modules/auth.js";
import UserStore from "./modules/user.js";

const pinia = createPinia();
setActivePinia(pinia);
pinia.use(useAuthStore);
pinia.use(UserStore);
export default pinia;
