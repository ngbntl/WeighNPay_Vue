<template>
    <div class="relative bg-white h-12">
        <div class="relative text-left pt-2 pl-4 z-10  " @click="showDrawer()">
            <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
            <svg height=" 32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32"
                class="lg:hidden" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <path fill="#808080"
                    d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>

        </div>
        <div
            class="relative font-bold text-2xl text-purple-800 justify-center pt-1 lg:text-left lg:ml-36 xs:text-center  xs:-mt-9 lg:mt-0 z-0">

            <a href="/"> <span>WeighNPay</span></a>
        </div>


        <div>
            <div class="absolute lg:mr-36 top-1 xs:right-5 xs:mr-0">
                <div v-if="check">
                    <a-dropdown class="left-0" :trigger="['click']">
                        <a class="ant-dropdown-link" @click.prevent>
                            <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                                id="avatarButton" type="button" data-dropdown-placement="bottom-start"
                                class="w-10 h-10 rounded-full cursor-pointer" alt="User dropdown">

                        </a>
                        <template #overlay>
                            <a-menu class="relative w-48">
                                <a-menu-item>
                                    <div class="font-bold text-gray-500">{{users.name}}</div>
                                    <div class=" truncate text-gray-500">{{users.email}}</div>
                                </a-menu-item>
                                <a-menu-item>
                                    <router-link :to="profileLink">
                                        <span class="block px-4 py-2 rounded-md hover:bg-gray-200  ">Tài khoản</span>
                                    </router-link>
                                </a-menu-item>
                                <a-menu-item>

                                    <a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-200">Cài đặt</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <span @click="logout()"
                                        class="block px-4 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-200 ">Đăng
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
                <div v-if="!check">
                    <div class="btn absolute right-32 top-0 mt-1 xs:hidden lg:flex">
                        <button
                            class="w-28 h-8 bg-white cursor-pointer rounded-md border-2 border-blue-600 shadow-[inset_0px_-2px_0px_1px_blue-500] group hover:bg-blue-600 transition duration-300 ease-in-out mr-5">
                            <router-link :to="{name: 'login'}">
                                <span class="font-medium text-[#333] group-hover:text-white">Đăng nhập</span>
                            </router-link>
                        </button>
                        <!-- <button
                            class="w-28 h-8 bg-white cursor-pointer rounded-md border-2 border-blue-600 shadow-[inset_0px_-2px_0px_1px_blue-500] group hover:bg-blue-600 transition duration-300 ease-in-out mr-5">
                            <router-link :to="{name:'register'}">
                                <span class="font-medium text-[#333] group-hover:text-white">Đăng ký</span>
                            </router-link>
                        </button> -->
                    </div>
                    <div>
                        <a-drawer v-model:open="open" class="custom-class" root-class-name="root-class-name"
                            :root-style="{ color: 'blue' } " style="color: gray" title="Menu" placement="left">
                            <p>Đăng nhập</p>
                            <p>Đăng ký</p>

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
import { reactive, ref, computed } from 'vue';
import { useAuthStore } from '../../stores/modules/auth';
import TheMenu from '../menu/TheMenu.vue';

export default {
    components: { TheMenu },

    setup() {
        const users = reactive({
            name: 'Bao',
            email: 'bao@gmail.com',
            avt: '../assets/img/avt.jpg',
        });

        const authStore = useAuthStore();
        const open = ref(false);
        const check = ref(localStorage.getItem('isLoggedIn') === 'true');

        const role = ref(localStorage.getItem("role"));
        const profileLink = computed(() => {
            return role.value === true ? { name: 'admin-profile' } : { name: 'staff-profile' };
        });
        const showDrawer = () => {
            open.value = true;

        };

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
            users,
            logout,
            check,
            role,
            profileLink
        };
    },
};
</script>

<style scoped>
.ant-drawer {
  width: 100px;
}
</style>
