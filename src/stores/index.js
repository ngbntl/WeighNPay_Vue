import { Pinia } from "pinia";
import { createPinia, setActivePinia } from "../src/index.js";

import useAuthStore from "./modules/auth.js";
import useFruitStore from "./modules/fruits.js";
import UserStore from "./modules/user.js";
import useModal from "./modules/modal.js";
import { useStaffMenu } from "./modules/staff-menu.js";

const pinia = createPinia();
setActivePinia(pinia);
pinia.use(useAuthStore);
pinia.use(UserStore);
pinia.use(useFruitStore);
pinia.use(useStaffMenu);
pinia.use(useModal);
export default pinia;
