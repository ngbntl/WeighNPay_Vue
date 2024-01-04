<template>
    <div class="relative text-end mb-5">
        <add-fruit />
    </div>

    <table-fruits :fruits="fruits" />
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useFruitStore } from '../../../stores/modules/fruits';
import TableFruits from '../../../components/table/TableFruits.vue';
import AddFruit from '../../../components/modal/addFruit.vue';
import { useModal } from '../../../stores/modules/modal';
import { storeToRefs } from 'pinia';
components: { TableFruits, AddFruit };

const fruitStore = useFruitStore();

onMounted(async () => {
    await fruitStore.getAllFruits();

})
const fruits = computed(() => fruitStore.fruits);
console.log(fruits)

</script>
  