<template>
    <div class="w-full mt-3 absolute">

        <div class="md:w-1/6 lg:flex xs:hidden xs:w-1/12">
            <a-list bordered class="w-full ">
                <menu-staff />


            </a-list>

        </div>

    </div>
    <div class="relative w-2/3 lg:left-1/4 mt-12 xs:text-center lg:w-2/3 xs:w-full xs:mx-2 ">
        <router-view></router-view>
    </div>
</template>

<script>

import MenuStaff from '../../components/menu/MenuStaff.vue';




export default {
    middleware: 'auth',
    components: { MenuStaff },

}
</script>

<style scoped>
body{
   background-color: bisque;
   overflow: hidden;
  }
</style>