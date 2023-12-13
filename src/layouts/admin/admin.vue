<template>
    <the-header />
    <div class="w-full mt-3 absolute">

        <div class="md:w-1/6 lg:flex xs:hidden xs:w-1/12">
            <a-list bordered class="w-full ">
                <TheMenu />


            </a-list>

        </div>

    </div>
    <div class="relative w-2/3 lg:left-1/4 mt-12 xs:text-center lg:w-2/3 xs:w-full xs:mx-2 ">
        <router-view></router-view>
    </div>
</template>

<script>
import TheHeader from '../../components/header/TheHeader.vue';


import TheMenu from '../../components/menu/TheMenu.vue';


export default {
    middleware: 'auth',
    components: { TheMenu, TheHeader },

}
</script>

<style scoped>
body{
   background-color: bisque;
   overflow: hidden;
  }
</style>