<template>
    <Header />
    <div class="relative scroll-container">

        <Slide class="absolute mt-4" />
        <div class="grid grid-cols-5 mt-0 mx-36">
            <Card v-for="useFruit in useFruits" :key="useFruit.name" :fruitProps="useFruit" />
        </div>
    </div>
    <router-view />
</template>
<script>
import { ref, onMounted } from 'vue';
import Card from '../components/fruits/Card.vue';
import Header from '../components/header/Header.vue';
import { useFruitStore } from '../stores/modules/fruits';
import { useAuthStore } from '../stores/modules/auth';
import Slide from '../components/fruits/Slide.vue';
export default {
    components: { Header, Card, Slide },
    setup() {
        const fruitStore = useFruitStore();
        const useFruits = ref([]);
        const useAuth = useAuthStore();
        onMounted(async () => {
            useAuth.isLoggedIn = false;
            useFruits.value = await fruitStore.getAllFruits();
            localStorage.setItem("isLoggedIn", false);
        });
        return {
            useFruits,
        };
    },
};
</script>
<style>
.scroll-container {
    position: relative;
    max-height: 90vh; /* Hoặc một giá trị cụ thể tùy theo yêu cầu của bạn. */
    overflow-y: auto;  /* Cho phép cuộn dọc nếu nội dung dài hơn chiều cao của container. */
}

/* Đảm bảo các style khác không làm mất khả năng cuộn của container */
</style>
