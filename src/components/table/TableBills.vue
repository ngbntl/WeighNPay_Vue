<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="p-1.5 w-full inline-block align-middle">
                <div class="overflow-hidden border rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-3 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    STT
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Ngày tạo
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Thời gian
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
                            <tr v-for="(bill, index) in bills.sort(compareByDate)" :key="index"
                                class="text-left hover:cursor-pointer hover:text-blue-500" @click="showModal(bill.bill_id)">
                                <td class="px-3 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {{index+1}}
                                </td>
                                <td class="px-6 py-4 text-sm  whitespace-nowrap">
                                    {{ formatDate(bill.Date) }}
                                </td>
                                <td class="px-6 py-4 text-sm  whitespace-nowrap">
                                    {{ formatTime(bill.Date) }}
                                </td>
                                <td class="px-6 py-4 text-sm  whitespace-nowrap">
                                    {{ bill.user_id }}
                                </td>
                                <td class="px-6 py-4 text-sm  whitespace-nowrap">
                                    {{ bill.total_cost }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <a-modal v-model:open="open">
                <div class="text-center p-3 flex-auto leading-6">
                    <h2 class="text-2xl font-bold py-4 text-gray-500">Chi tiết đơn hàng</h2>
                    <table class="border border-gray-700 mt-5 w-full">
                        <thead class="border border-gray-700 text-gray-500">
                            <tr>
                                <th scope="col" class="px-4 py-3 ">STT</th>
                                <th scope="col" class="px-4 py-3">Mặt hàng</th>
                                <th scope="col" class="px-4 py-3">Khối lượng</th>
                                <th scope="col" class="px-4 py-3">Đơn giá</th>
                                <th scope="col" class="px-4 py-3">Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody v-if="selectedBill.bill">
                            <tr class="border border-gray-700" v-for="(fruit, index) in selectedBill.bill" :key="index">
                                <td class="px-5 py-3">{{ index + 1 }}</td>
                                <td class="px-5 py-3">{{ fruit.name }}</td>
                                <td class="px-5 py-3">{{ fruit.weight }}</td>
                                <td class="px-5 py-3">{{ fruit.price }}</td>
                                <td class="px-5 py-3">{{ (fruit.price * fruit.weight) }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="text-left mt-2 font-bold text-gray-500">

                        <span v-if="selectedBill.total_price">Tổng giá trị hóa đơn: {{ (selectedBill.total_price).toFixed(2)
                            }}
                            vnd</span>



                    </div>
                </div>
                <template #footer>

                    <a-button type="primary" @click="handleOk">

                        Đóng

                    </a-button>

                </template>
            </a-modal>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import { useAdminStore } from '../../stores/modules/admin';
import { useFruitStore } from '../../stores/modules/fruits';
export default {
    name: 'TableBills',
    props: {
        bills: {
            type: Array,
            required: true,
        },
    },
    setup() {
        const fruitStore = useFruitStore();
        const adminStore = useAdminStore();
        const open = ref(false);
        const selectedBill = ref({

            bill: [],

            total_price: 0

        });

        const showModal = async (billID) => {
            open.value = true;
            const billData = await fruitStore.getBill(billID);

            if (billData && billData.bill && billData.total_price !== undefined) {
                selectedBill.value = {
                    bill: billData.bill,
                    total_price: billData.total_price
                };
            } else {
                console.error('Error: Bill data structure is not as expected', billData);

            }
        }
        const handleOk = () => {
            open.value = false;
        };
        const formatDate = (value) => {
            try {
                console.log(value)
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
        const formatTime = (value) => {
            try {
                const date = new Date(value.replace('GMT', ''));
                if (isNaN(date)) {
                    return 'Invalid Date';
                }

                const options = { hour: 'numeric', minute: 'numeric' };
                return date.toLocaleTimeString('en-US', options);
            } catch (error) {
                console.error('Error formatting time:', error);
                return 'Error';
            }
        };

        const compareByDate = (a, b) => {
            const date1 = a.Date;
            const date2 = b2.Date;

            if (date1 < date2) {
                return -1;
            } else if (date1 > date2) {
                return 1;
            } else {
                return 0;
            }
        }



        return {
            open,
            selectedBill,
            showModal,
            handleOk,
            formatDate,
            formatTime
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
  