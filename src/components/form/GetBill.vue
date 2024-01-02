<template>
    <div class="text-center p-3 flex-auto leading-6">
        <h2 class="text-2xl font-bold py-4 text-gray-500">Tạo hóa đơn</h2>

        <div class="gap-4 text-left mt-3">
            <div class="text-center">
                <div class="relative left-5 -ml-40 mb-2">
                    <span class="mb-2 mr-4 text-md font-bold uppercase text-gray-500 text-left">STT</span>
                    <span class="pl-7 pr-16 mb-2 mr-4 ml-text-md font-bold uppercase text-gray-500 text-left">Loại
                        quả</span>
                    <span class="pr-2 mb-2 mr-12 ml-text-md font-bold uppercase text-gray-500 text-left">Giá</span>
                    <span class="px-4 mb-2 text-md font-bold uppercase text-gray-500 text-left">Khối lượng</span>
                    <span class="px-6 mb-2 text-md font-bold uppercase text-gray-500 text-left">Chọn cân</span>

                </div>
                <div v-for="(sight, index) in dynamicValidateForm.fruits" :key="index" class="relative text-center -ml-20">
                    <div class="flex text-center ml-60 mb-4 items-baseline">
                        <div class="mr-4">
                            <input type="text" :value=" (index + 1)"
                                class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-12 p-2.5 checked:bg-emerald-500"
                                disabled />
                        </div>
                        <div class="mr-4">
                            <input type="text" :value="sight.name || sight.placeholderName"
                                class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-32 p-2.5 checked:bg-emerald-500"
                                disabled />
                        </div>
                        <div class="mr-4">
                            <input type="text" :value="sight.price || sight.placeholderPrice"
                                class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-32 p-2.5 checked:bg-emerald-500"
                                disabled />
                        </div>
                        <div class="mr-4">
                            <input type="text" :value="sight.weight "
                                class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-32 p-2.5 checked:bg-emerald-500"
                                @input="updateWeight(index, $event.target.value)" />
                        </div>
                        <div class="mr-4">
                            <select name="role" v-model="sight.scale_id"
                                class=" mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-20 p-2.5 checked:bg-emerald-500">
                                <option value="0">Cân 1</option>
                                <option value="1">Cân 2</option>
                            </select>

                        </div>
                        <button @click="getWeight(index)"
                            class="mr-2 cursor-pointer transition-all bg-green-500 text-white px-6 py-2 rounded-lg border-green-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                            Cân
                        </button>
                        <button @click="getId(index)"
                            class="mr-2 cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                            <GetImage :image_path="image" />
                        </button>
                        <button @click="removeSight(index)" class="inline">
                            <MinusCircleOutlined />
                        </button>

                    </div>
                </div>
                <div class="mb-4 text-center ">
                    <button @click="addSight" class="p-2 bg-gray-600 text-white rounded-md mx-4 hover:bg-gray-400">
                        Thêm mới
                    </button>
                    <button @click="handleOk" class="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-300    ">
                        Tính tiền
                    </button>
                    <div id="total-price" class="inline mx-5 font-bold text-lg">
                        <span>Thành tiền: {{ cost }} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { MinusCircleOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { useFruitStore } from "../../stores/modules/fruits";
import { useAdminStore } from "../../stores/modules/admin";
import GetImage from '../modal/GetImage.vue';
import { baseURL } from "../../apis";
export default {
    components: { MinusCircleOutlined, GetImage },
    setup() {
        const useFruit = useFruitStore();
        const dynamicValidateForm = ref({
            fruits: [],
            area: undefined,
        });

        const addSight = () => {
            const selectedOption = dynamicValidateForm.value.fruits.length + 1;

            if (selectedOption) {
                const newFruit = {
                    ID: '',
                    name: '',
                    weight: '',
                    scale_id: "0",
                    placeholderName: '',
                    placeholderPrice: '',
                    placeholderWeight: '',
                };

                dynamicValidateForm.value.fruits.push(newFruit);
            } else {
                console.warn("Please select a fruit before adding.");
            }
        };

        const getWeight = (index) => {
            const scale_id = dynamicValidateForm.value.fruits[index].scale_id

            useFruit.getWeight({ scale_id }).then(weight => {
                dynamicValidateForm.value.fruits[index].weight = weight;
                console.log(weight);
            });
        };
        const image = ref("");
        const getId = (index) => {
            const scale_id = dynamicValidateForm.value.fruits[index].scale_id

            useFruit.getIdFruit({ scale_id })
                .then(fruit => {

                    if (fruit?.result && typeof index !== 'undefined' && dynamicValidateForm?.value?.fruits?.[index]) {

                        dynamicValidateForm.value.fruits[index].ID = fruit.result.ID;
                        dynamicValidateForm.value.fruits[index].name = fruit.result.name;
                        dynamicValidateForm.value.fruits[index].price = fruit.result.price;
                        // Update image path
                        image.value = `${baseURL}/image/${fruit.image_path}`;
                    } else {
                        image.value = `${baseURL}/image/${fruit}`;

                    }
                })
                ;



        };

        const removeSight = (index) => {
            dynamicValidateForm.value.fruits.splice(index, 1);
        };
        const useAdmin = useAdminStore();
        const cost = useAdmin.cost;
        const updateWeight = (index, value) => {
            dynamicValidateForm.value.fruits[index].weight = value;
        };

        const handleOk = async () => {
            const setBill = dynamicValidateForm.value.fruits.map(({ ID, weight }) => ({ ID, weight }));

            try {
                const totalPrice = await useAdmin.addBill(setBill);
                console.log("Total Price:", totalPrice);
                displayTotalPrice(totalPrice);
            } catch (error) {
                console.error("Error Adding Bill", error);
            }
        };

        const displayTotalPrice = (totalPrice) => {
            const totalPriceElement = document.getElementById("total-price");
            if (totalPriceElement) {
                totalPriceElement.innerText = `Thành tiền: ${totalPrice}`;
            }
        };


        return {
            dynamicValidateForm,
            cost,
            image,

            addSight,
            getWeight,
            getId,
            removeSight,
            handleOk,
            updateWeight,
        };
    },
};
</script>
  