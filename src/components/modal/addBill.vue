<template>
    <div>
        <a-button type="primary" @click="showModal">Thêm mới</a-button>
        <a-modal v-model:open="open" @ok="handleOk">
            <div class="text-center p-3 flex-auto leading-6">
                <h2 class="text-2xl font-bold py-4 text-gray-500">Tạo hóa đơn</h2>
                <div class="gap-4 text-left mt-3">
                    <div class="text-center">
                        <div class="relative left-5 -ml-28 mb-2">
                            <span class="mb-2 mr-4 text-md font-bold uppercase text-gray-500 text-left">STT</span>
                            <span class="pl-7 pr-16 mb-2 mr-4 ml-text-md font-bold uppercase text-gray-500 text-left">Loại
                                quả</span>
                            <span class=" pr-2 mb-2 mr-16 ml-text-md font-bold uppercase text-gray-500 text-left">Giá</span>
                            <span class="px-10 mb-2 text-md font-bold uppercase text-gray-500 text-left">Khối lượng</span>
                        </div>
                        <div v-for="(sight, index) in dynamicValidateForm.fruits" :key="index">
                            <div class="flex mb-4 items-baseline">
                                <div class="mr-4">
                                    <input type="text" v-model="sight.ID"
                                        class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-12 p-2.5 checked:bg-emerald-500"
                                        :placeholder="index +1" disabled />
                                </div>
                                <div class="mr-4">
                                    <select v-model="sight.selectedOption"
                                        class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-32 p-2.5 checked:bg-emerald-500">
                                        <option v-for="(option, index) in fruitsOption" :key="index" :value="option">
                                            {{ option.name }}
                                        </option>
                                    </select>
                                </div>

                                <div class="mr-4">
                                    <input type="text" v-model="sight.price"
                                        class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-32 p-2.5 checked:bg-emerald-500"
                                        :placeholder="sight.selectedOption ? sight.selectedOption.price : 'Vui lòng chọn'"
                                        disabled />
                                    <input type="text" v-model="sight.ID"
                                        class="relative  mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-32 p-2.5 checked:bg-emerald-500"
                                        :placeholder="sight.selectedOption ? sight.selectedOption.ID : 'Vui lòng chọn'"
                                        hidden />
                                </div>
                                <div class="mr-4">
                                    <input type="text" v-model="sight.weight"
                                        class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-32 p-2.5 checked:bg-emerald-500"
                                        placeholder="Khối lượng" />

                                </div>


                                <button @click="removeSight(sight)" class="inline">
                                    <MinusCircleOutlined />
                                </button>
                            </div>
                        </div>
                        <div class="mb-4">
                            <button @click="addSight" class="p-2 bg-blue-500 text-white rounded-md">
                                Thêm quả mới
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </a-modal>
    </div>
</template>

<script>
import { MinusCircleOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { useFruitStore } from "../../stores/modules/fruits";
import { useAdminStore } from "../../stores/modules/admin";
export default {
    components: { MinusCircleOutlined },
    setup() {
        const open = ref(false);
        const useFruit = useFruitStore();
        const fruitsOption = ref([]);
        const dynamicValidateForm = ref({
            fruits: [],
            area: undefined,
        });

        const showModal = () => {
            open.value = true;
        };

        const handleOk = () => {
            open.value = false;
            saveValues();
        };

        const removeSight = (item) => {
            const index = dynamicValidateForm.value.fruits.indexOf(item);
            if (index !== -1) {
                dynamicValidateForm.value.fruits.splice(index, 1);
            }
        };

        const addSight = () => {
            const selectedOption = dynamicValidateForm.value.fruits.length + 1;

            if (selectedOption) {
                const newFruit = {
                    id: undefined,
                    weight: undefined,
                    selectedOption: selectedOption,
                };

                dynamicValidateForm.value.fruits.push(newFruit);
            } else {
                console.warn("Please select a fruit before adding.");
            }
        };
        const useAdmin = useAdminStore();
        const saveValues = () => {
            const resultArray = dynamicValidateForm.value.fruits.map((fruit) => ({
                id: fruit.selectedOption.ID,
                weight: parseFloat(fruit.weight),
            }));
            useAdmin.addBill(resultArray);



        };

        const resetForm = () => {
            dynamicValidateForm.value = {
                fruits: [],
                area: undefined,
            };
        };

        useFruit.getAllFruits().then((fruit) => {
            fruitsOption.value = fruit;
        });

        return {
            open,
            showModal,
            handleOk,
            useFruit,
            fruitsOption,
            dynamicValidateForm,
            fruits: useFruit.getAllFruits(),
            resetForm,
            removeSight,
            addSight,
            saveValues,
        };
    },
};
</script>