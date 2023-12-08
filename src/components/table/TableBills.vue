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
                                    Ngày tạo
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Người tạo
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Thành tiền
                                </th>
                                <!-- <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Xóa
                                </th> -->
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="(bill, index) in bills" :key="index" class="text-left">
                                <td class="px-3 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {{ bill.bill_id}}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{formatDate(bill.Date)}}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ bill.user_id }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ bill.total_cost }}
                                </td>

                                <!-- <td class="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                    <button @click="deleteFruit(bill.ID)"
                                        class="text-red-500 hover:text-red-700">Xóa</button>
                                </td> -->
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
import { useAdminStore } from '../../stores/modules/admin';
import EditFruit from '../modal/EditFruit.vue';
export default {
    name: 'TableFruits',
    props: {
        bills: {
            type: Array,
            required: true
        }
    },
    setup() {
        const useAdmin = useAdminStore();
        // const deleteFruit = (fruitID) => {
        //     useFruits.deleteFruit(fruitID);
        //     window.location.reload();
        // };
        const openEditModal = (fruit) => {
            console.log(fruit);
            // Open your modal here

        };
        const formatDate = (value) => {
            try {
                const date = new Date(value.replace('GMT', ''));
                if (isNaN(date)) {
                    return 'Invalid Date';
                }
                const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
                return date.toLocaleDateString('en-US', options);
            } catch (error) {
                console.error('Error formatting date:', error);
                return 'Error';
            }
        };
        return {
            // deleteFruit,
            openEditModal,
            formatDate
        }

    },

}

</script>
