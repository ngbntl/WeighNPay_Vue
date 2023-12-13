<template>
    <div>

        <Header />
        <div class="grid grid-cols-6 mt-16">
            <card v-for="useFruit in useFruits" :key="useFruit.name" :fruitProps="useFruit" />
        </div>

    </div>
    <router-view />
</template>

<script>
import { ref } from 'vue';
import Card from '../components/fruits/Card.vue';
import Header from '../components/header/Header.vue';
import { useFruitStore } from '../stores/modules/fruits';
import { useAuthStore } from '../stores/modules/auth';
export default {
    components: { Header, Card },
    setup() {
        const fruitStore = useFruitStore();
        const useFruits = ref([]);
        const useAuth = useAuthStore();
        fruitStore.getAllFruits().then((fruits) => {
            useAuth.isLoggedIn = false
            useFruits.value = fruits;
            localStorage.setItem("isLoggedIn", false);
            console.log(fruits);
        });
        return {
            useFruits,


        };

    }
}
</script>

