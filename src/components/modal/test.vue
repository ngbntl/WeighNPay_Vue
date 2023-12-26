<template>
    <div>
        <a type="primary" @click="showModal"></a>
        <a-modal v-model:open="open">
            <div class="text-center p-3 flex-auto leading-6">

                <h2 class="text-2xl font-bold py-4 text-gray-500">Chi tiết đơn hàng</h2>
                <div class="grid grid-cols-2 gap-4 text-left mt-3">
                    <div class="">
                        <span>Mã đơn hàng: {{ bill.id }} </span>
                    </div>
                    <div class="">
                        <span>Tên khách hàng: {{ bill.clientName }} </span>
                    </div>
                    <div>
                        <span>Thời gian: {{ bill.time }}</span>

                    </div>
                    <div>
                        <span>Số điện thoại: {{ bill.phoneNum }}</span>


                    </div>



                </div>
                <div>
                    <table class="border border-gray-700 mt-5 ">
                        <thead class="border border-gray-700 text-gray-500 ">
                            <tr>
                                <th scope="col" class="px-5 py-3">STT</th>
                                <th scope="col" class="px-5 py-3">Mặt hàng</th>
                                <th scope="col" class="px-5 py-3">Số lượng</th>
                                <th scope="col" class="px-5 py-3">Đơn giá</th>
                                <th scope="col" class="px-5 py-3">Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border border-gray-700 " v-for="(fruit,index) in bill.fruit" :key="index">

                                <td class="px-5 py-3">{{ index + 1 }}</td>

                                <td class="px-5 py-3">{{ fruit.name }}</td>

                                <td class="px-5 py-3">{{ fruit.quantity }}</td>

                                <td class="px-5 py-3">{{ fruit.price }}</td>

                                <td class="px-5 py-3">{{ fruit.quantity * fruit.price }}</td>

                            </tr>
                        </tbody>
                    </table>
                    <div class="text-left mt-2 font-bold text-gray-500">
                        <span>Tổng giá trị hóa đơn: {{ bill.total}} vnd </span>
                    </div>

                </div>
            </div>
        </a-modal>
    </div>
</template>
  
<script>
import { onMounted, ref } from "vue";
import { useFruitStore } from "../../stores/modules/fruits";
export default {
    props: ['image_path'],


    setup(props) {
        // Modal
        const open = ref(false);

        const showModal = () => {
            open.value = true;

        }
            ;

        onMounted(async () => {
            console.log(img)
        })


        const handleOk = (e) => {
            open.value = false;
        };


        return {
            open,
            showModal,
            handleOk,


        };
    },
};
</script>
  