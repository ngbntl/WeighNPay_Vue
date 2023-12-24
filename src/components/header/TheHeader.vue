<template>
    <div class="relative bg-white h-12">
        <div class="relative text-left pt-2 pl-4 z-10" @click="showDrawer()">
            <!-- SVG code -->
        </div>
        <div
            class="relative font-bold text-2xl text-purple-800 justify-center pt-1 lg:text-left lg:ml-36 xs:text-center xs:-mt-9 lg:mt-0 z-0">
            <a href="/"> <span>WeighNPay</span></a>
        </div>
        <div>
            <div class="absolute lg:mr-36 top-1 xs:right-5 xs:mr-0">
                <div>
                    <a-dropdown class="left-0" :trigger="['click']">
                        <a class="ant-dropdown-link" @click.prevent>
                            <a-avatar style="background-color: #217cf3">
                                <template #icon>
                                    <UserOutlined />
                                </template>
                            </a-avatar>
                        </a>
                        <template #overlay>
                            <a-menu class="relative w-48">
                                <a-menu-item>
                                    <div class="font-bold text-gray-500">{{ user.name }}</div>
                                    <div class="truncate text-gray-500">{{ user.email }}</div>
                                </a-menu-item>
                                <a-menu-item>
                                    <router-link :to="{ name: role === 'admin'?'admin-profile':'staff-profile' }">
                                        <span class="block px-4 py-2 rounded-md hover:bg-gray-200">Tài khoản</span>
                                    </router-link>
                                </a-menu-item>

                                <a-menu-item>
                                    <span @click="logout"
                                        class="block px-4 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-200">Đăng
                                        xuất</span>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                    <div>
                        <a-drawer v-model:open="open" :width="250" class="custom-class relative w-40"
                            root-class-name="root-class-name" :root-style="{ color: 'blue' }" style="color: gray"
                            title="Menu" placement="left">
                            <the-menu />
                        </a-drawer>
                    </div>
                </div>

            </div>
            <div>
            </div>
        </div>
    </div>
</template>

<script>

import { UserOutlined } from '@ant-design/icons-vue';
import { computed, reactive, ref, watch } from 'vue';
import { useAuthStore } from '../../stores/modules/auth';
import TheMenu from '../menu/TheMenu.vue';
import { useAdminStore } from '../../stores/modules/admin';

export default {
    components: { TheMenu, UserOutlined },
    setup() {
        const user = reactive({
            name: "",
            email: "",
        });
        const useAdmin = useAdminStore();
        const authStore = useAuthStore();
        const open = ref(false);
        const role = ref("");
        role.value = localStorage.getItem("role");



        const showDrawer = () => {
            open.value = true;
        };

        useAdmin.getUser().then(users => {
            user.email = users.email;
            user.name = users.name;
        });

        const logout = () => {
            const credentials = {
                email: localStorage.getItem('email'),
                password: localStorage.getItem('password'),
            };
            authStore.logout(credentials);
        };



        return {
            open,
            showDrawer,
            authStore,
            useAdmin,
            role,
            user,
            logout,


        };
    },
};
</script>
<style scoped>
.ant-drawer {
  width: 100px;
}
</style>