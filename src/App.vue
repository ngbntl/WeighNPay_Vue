<template>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/header/TheHeader.vue'
import HomePage from "./pages/HomePage.vue"

export default {
  components: { HomePage, TheHeader },
}

</script>

<style>
body{
    background-color:#f5f5f9 ;
    overflow: hidden;
  }
</style>