<template>
    <div class="relative bg-white h-12">

        <div
            class="relative font-bold text-2xl text-purple-800 justify-center pt-1 lg:text-left lg:ml-36 xs:text-center xs:-mt-9 lg:mt-0 z-0">
            <a href="/"> <span>WeighNPay</span></a>
        </div>
        <div>
            <div class="absolute lg:mr-36 top-1 xs:right-5 xs:mr-0">
                <div>
                    <div class="btn absolute right-32 top-0 mt-1 xs:hidden lg:flex">
                        <button
                            class="w-28 h-8 bg-white cursor-pointer rounded-md border-2 border-blue-600 shadow-[inset_0px_-2px_0px_1px_blue-500] group hover:bg-blue-600 transition duration-300 ease-in-out mr-5">
                            <router-link :to="{ name:'login' }">
                                <span class="font-medium text-[#333] group-hover:text-white">Đăng nhập</span>
                            </router-link>
                        </button>
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

import TheMenu from '../menu/TheMenu.vue';


export default {
    components: { TheMenu },


}
</script>
<style scoped>
.ant-drawer {
  width: 100px;
}
</style>