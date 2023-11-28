<template>
    <div class="relative bg-white h-12">
        <div class="relative text-left pt-2 pl-4 z-10  ">

            <svg height=" 32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32"
                @click="showDrawer()" class="lg:hidden hover:cursor-pointer" width="32px" xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path fill="#808080"
                    d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>

        </div>
        <div
            class="relative font-bold text-2xl text-purple-800 justify-center pt-1  xs:text-center  xs:-mt-9 lg:mt-0 lg:text-left lg:ml-14">

            <a href="/"> <span>WeighNPay</span></a>
        </div>


        <div class="absolute lg:mr-32 top-1 xs:right-5 xs:mr-0">

            <a-dropdown class="left-0" :trigger="['click']">
                <a class="ant-dropdown-link" @click.prevent>
                    <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                        id="avatarButton" type="button" data-dropdown-placement="bottom-start"
                        class="w-10 h-10 rounded-full cursor-pointer" alt="User dropdown">

                </a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item>
                            <div class="font-bold text-gray-500">{{users.name}}</div>
                            <div class=" truncate text-gray-500">{{users.email}}</div>
                        </a-menu-item>
                        <a-menu-item>
                            <a href="/account" class="block px-4 py-2 rounded-md hover:bg-gray-200  ">Tài khoản</a>
                        </a-menu-item>
                        <a-menu-item>
                            <a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-200">Cài đặt</a>
                        </a-menu-item>
                        <a-menu-item>
                            <a href="/" class="block px-4 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-200 ">Đăng
                                xuất</a>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>

        </div>




    </div>

    <a-drawer v-model:open="open" :width="250" class="custom-class relative w-40" root-class-name="root-class-name"
        :root-style="{ color: 'blue' }" style="color: gray" title="Menu" placement="left">

        <the-menu />

    </a-drawer>
</template>

<script>

import { ref } from 'vue';
import TheMenu from '../menu/TheMenu.vue';
import menuAdmin from '../menu/menuAdmin.vue';
export default {
    components: { TheMenu, menuAdmin },
    setup() {

        const open = ref(false);

        const showDrawer = () => {

            open.value = true;

        };

        const isDropdownOpen = ref(false);

        const users = ref({

            name: "Nguyễn Gia Bảo",

            email: "giabao5443@gmail.com",

            avt: "../assets/img/avt.jpg",

        });

        return {

            open,

            showDrawer,

            isDropdownOpen,

            users

        };

    },

};

</script>


<style scoped>
.ant-drawer{
    width: 100px;
}
</style>