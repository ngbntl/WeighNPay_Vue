<template>
    <div>
        <a-button type="primary" @click="showModal">Thêm mới</a-button>
        <a-modal v-model:open="open" @ok="handleOk">
            <div class="text-center p-3 flex-auto leading-6">
                <h2 class="text-2xl font-bold py-4 text-gray-500">Thêm trái cây</h2>
                <div class="grid grid-cols-2 gap-4 text-left mt-3">
                    <div class="">
                        <input type="text" v-model="formData.name" v-bind:class="{
                'border-red-500 placeholder-red-500': errors.name,
              }" @input="validateName"
                            class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                            placeholder="Loại quả" />
                        <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs">
                            {{ errors.name }}
                        </div>
                    </div>

                    <div class="">
                        <input type="text" v-model="formData.image" v-bind:class="{
                'border-red-500 placeholder-red-500': errors.image,
              }" @input="validateImage"
                            class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                            placeholder="Link ảnh" />
                        <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs">
                            {{ errors.image }}
                        </div>
                    </div>
                    <div class="">
                        <input type="text" v-model="formData.price" v-bind:class="{
                'border-red-500 placeholder-red-500': errors.price,
              }" @input="validatePrice"
                            class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                            placeholder="Giá bán" />
                        <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs">
                            {{ errors.price }}
                        </div>
                    </div>
                    <div class="">
                        <input type="text" v-model="formData.exist" v-bind:class="{
                'border-red-500 placeholder-red-500': errors.exist,
              }" @input="validateExist"
                            class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                            placeholder="Số lượng" />
                        <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs">
                            {{ errors.exist }}
                        </div>
                    </div>
                </div>
                <div class="">
                    <textarea v-model="formData.description" v-bind:class="{
              'border-red-500 placeholder-red-500': errors.description,
            }" @input="validateDescription"
                        class="relative bg-gray-50 ring-0 mt-5 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
                        placeholder="Mô tả"></textarea>
                    <div class="text-red-500 absolute -mt-2 pt-3 left-8 text-xs">
                        {{ errors.description }}
                    </div>
                </div>
            </div>
        </a-modal>
    </div>
</template>
<script>
import { ref } from "vue";
import { useFruitStore } from "../../stores/modules/fruits";

export default {
    setup() {
        // Modal
        const open = ref(false);

        const showModal = () => {
            open.value = true;
        };

        const handleOk = (e) => {
            add();
            console.log(e);
            open.value = false;
            window.location.reload();
        };

        // Validate
        const formData = ref({
            name: "",
            description: "",
            exist: "",
            image: "",
            price: "",
        });

        const errors = ref({
            name: "",
            description: "",
            exist: "",
            image: "",
            price: "",
        });

        const validateName = () => {
            errors.value.name = formData.value.name === "" ? "Vui lòng nhập tên" : "";
        };

        const validateDescription = () => {
            errors.value.description =
                formData.value.description === "" ? "Vui lòng nhập mô tả" : "";
        };

        const validateExist = () => {
            errors.value.exist =
                formData.value.exist === "" ? "Vui lòng nhập số lượng" : "";
        };

        const validateImage = () => {
            errors.value.image =
                formData.value.image === "" ? "Vui lòng nhập link ảnh" : "";
        };

        const validatePrice = () => {
            errors.value.price =
                formData.value.price === "" ? "Vui lòng nhập giá tiền" : "";
        };

        // Add Fruits
        const useFruits = useFruitStore();

        const add = () => {
            useFruits.addFruit(formData.value);
            resetForm();



        };
        const resetForm = () => {
            // Reset form data and errors
            formData.value = {
                name: "",
                description: "",
                exist: "",
                image: "",
                price: "",
            };
            resetErrors();
        };

        const resetErrors = () => {
            // Reset error messages
            errors.value = {
                name: "",
                description: "",
                exist: "",
                image: "",
                price: "",
            };
        };
        return {
            open,
            showModal,
            handleOk,
            formData,
            errors,
            validateName,
            validateDescription,
            validateExist,
            validateImage,
            validatePrice,
            add
        };
    },
};
</script>
