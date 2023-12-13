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
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="(bill, index) in bills" :key="index" class="text-left">
                                <td class="px-3 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {{ bill.bill_id }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ formatDate(bill.Date) }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ bill.user_id }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ bill.total_cost }}
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
import { useAdminStore } from '../../stores/modules/admin';

export default {
    name: 'TableFruits',
    props: {
        bills: {
            type: Array,
            required: true,
        },
    },
    setup() {
        const useAdmin = useAdminStore();

        const openEditModal = (bill) => {
            console.log(bill);
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
            openEditModal,
            formatDate,
        };
    },
};
</script>
  
<style>
  /* Set the maximum height of the table container */
  table {
    width: 50%;
    height: 50%;
    overflow: scroll;
}
  </style>
  