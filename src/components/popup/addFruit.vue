<template>
    <div class="text-center p-3 flex-auto leading-6">
        <h2 class="text-2xl font-bold py-4 text-gray-500">Cập nhật trái cây</h2>
        <div class="grid grid-cols-2 gap-4 text-left mt-3">
            <div class="">
                <input type="text" v-model="formData.name" v-bind:class="{
            'border-red-500 placeholder-red-500': errors.name,
          }" @input="validateName"
                    class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 checked:bg-emerald-500"
                    :placeholder="'Tên trái cây:'" />
                <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs">
                    {{ errors.name }}
                </div>
            </div>

            <div class="">
                <input type="text" v-model="formData.image" v-bind:class="{
            'border-red-500 placeholder-red-500': errors.image,
          }" @input="validateImage"
                    class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 checked:bg-emerald-500"
                    :placeholder="' Link ảnh'" />
                <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs">
                    {{ errors.image }}
                </div>
            </div>
            <div class="">
                <input type="text" v-model="formData.price" v-bind:class="{
            'border-red-500 placeholder-red-500': errors.price,
          }" @input="validatePrice"
                    class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 checked:bg-emerald-500"
                    :placeholder="'Giá bán'" />
                <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs">
                    {{ errors.price }}
                </div>
            </div>
            <div class="">
                <input type="text" v-model="formData.exist" v-bind:class="{
            'border-red-500 placeholder-red-500': errors.exist,
          }" @input="validateExist"
                    class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 checked:bg-emerald-500"
                    :placeholder="'Số lượng'" />
                <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs">
                    {{ errors.exist }}
                </div>
            </div>
        </div>
        <div class="">
            <textarea v-model="formData.description" v-bind:class="{
          'border-red-500 placeholder-red-500': errors.description,
        }" @input="validateDescription"
                class="relative bg-gray-50 ring-0 mt-5 outline-none border border-neutral-500 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 checked:bg-emerald-500"
                :placeholder="' Mô tả'"></textarea>
            <div class="text-red-500 absolute -mt-2 pt-3 left-8 text-xs">
                {{ errors.description }}
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";


name: "addFruit";
export default {
    props: {
        formData: Object,
    },

    setup(props) {
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
            if (formData.value.name === "") {
                errors.value.name = "Vui lòng nhập tên";
            } else {
                errors.value.name = "";
            }
        };
        const validateDescription = () => {
            if (formData.value.description === "") {
                errors.value.description = "Vui lòng nhập mô tả";
            } else {
                errors.value.description = "";
            }
        };
        const validateImage = () => {
            if (formData.value.image === "") {
                errors.value.image = 'Vui lòng nhập link ảnh';
            } else {
                errors.value.image = '';
            }
        }
        const validatePrice = () => {
            if (formData.value.price === "") {
                errors.value.price = "Vui lòng nhập giá sản phẩm";
            }
            else {
                errors.value.price = '';
            }
        }
        const validateExist = () => {
            if (formData.value.exist === "") {
                errors.value.exist = 'Vui lòng nhập số lượng';
            } else {
                errors.value.exist = '';
            }

        }

        // Các hàm validate khác

        return {
            formData,

            errors,

            validateName,
            validateDescription,
            validateExist,
            validateImage,
            validatePrice,


            // Các hàm validate khác
        };
    },
};
</script>

<style></style>
