<template>
  <home-page />
  <router-view></router-view>
</template>

<script>
import HomePage from "./pages/HomePage.vue"

export default {
  components: { HomePage },
}

</script>

<style>
body{
    background-color:#f5f5f9 ;
    overflow: hidden;
  }
</style>