<template>
    <div class="relative text-end mb-5">
        <add-fruit />
    </div>

    <table-fruits :fruits="fruits" />
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { useFruitStore } from '../../../stores/modules/fruits';
import TableFruits from '../../../components/table/TableFruits.vue';
import AddFruit from '../../../components/modal/addFruit.vue';
import { useModal } from '../../../stores/modules/modal';

export default {
    components: { TableFruits, AddFruit },
    setup() {
        const fruits = ref([]);
        const fruitStore = useFruitStore();
        const modalStore = useModal();

        const openFruitModal = () => {
            modalStore.openModal();
        };

        const fetchFruits = async () => {
            try {
                const fetchedFruits = await fruitStore.getAllFruits();
                fruits.value = fetchedFruits;
                console.log(fruits.value);
            } catch (error) {
                console.error('Error fetching fruits:', error);
            }
        };

        onMounted(() => {
            fetchFruits();
        });

        return {
            fruits,
            openFruitModal,
            modalStore,
        };
    },
};
</script>
  
<style>
    /* Add your styles here if needed */
  </style>
  