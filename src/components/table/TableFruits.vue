<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="p-1.5 w-full inline-block align-middle">
                <div class="overflow-hidden border rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-3 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    ID
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Loại quả
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Giá
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                                    Sửa
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                                    Xóa
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="(fruit, index) in fruits" :key="index" class="text-left">
                                <td class="px-3 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {{ fruit.ID }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ fruit.name }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ fruit.price }}
                                </td>
                                <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <EditFruit :fruit="fruit" />
                                </td>
                                <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <button @click="deleteFruit(fruit.ID)"
                                        class="text-red-500 hover:text-red-700">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { useFruitStore } from '../../stores/modules/fruits';
import EditFruit from '../modal/EditFruit.vue';
export default {
    name: 'TableFruits',
    props: {
        fruits: {
            type: Array,
            required: true
        }
    },
    setup() {
        const useFruits = useFruitStore();
        const deleteFruit = (fruitID) => {
            useFruits.deleteFruit(fruitID);
            window.location.reload();
        };
        const openEditModal = (fruit) => {
            console.log(fruit);
            // Open your modal here
        };
        return {
            deleteFruit,
            openEditModal
        };
    },
    components: { EditFruit }
};
</script>
