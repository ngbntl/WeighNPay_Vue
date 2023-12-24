<script setup lang="ts">
import { useToast } from 'vue-toastification';
const toast = useToast();

const success = () => toast.success('You did it! 🎉');
</script>

<template>
    <div class="grid grid-cols-1">
        <div>
            <button class="bg-green-500 font-bold text-white py-2 px-4 my-2 rounded" @click="success">
                Show success
            </button>
        </div>
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
