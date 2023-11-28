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

        <div class="btn absolute right-32 top-0 mt-1 xs:hidden lg:flex">
            <button
                class="w-32 h-10 bg-white cursor-pointer rounded-md border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out mr-5">
                <router-link :to="{name: 'login'}">
                    <span class="font-medium text-[#333] group-hover:text-white">Đăng nhập</span>
                </router-link>
            </button>
            <button
                class="w-32 h-10 bg-white cursor-pointer rounded-md border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
                <span class="font-medium text-[#333] group-hover:text-white">Đăng ký</span>
            </button>
        </div>


    </div>

    <a-drawer v-model:open="open" class="custom-class" root-class-name="root-class-name" :root-style="{ color: 'blue' }"
        style="color: gray" title="Menu" placement="left">
        <p>Đăng nhập</p>
        <p>Đăng ký</p>

    </a-drawer>
</template>

<script>

import { ref } from 'vue';

export default {

    setup() {
        const open = ref(false);
        const showDrawer = () => {
            open.value = true;
        };

        return {
            open,
            showDrawer
        };
    }

};

</script>


<style scoped>

</style>