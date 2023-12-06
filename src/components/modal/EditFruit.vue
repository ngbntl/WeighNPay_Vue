<template>
    <div>
        <span class="text-blue-500 hover:text-blue-700 hover:cursor-pointer" @click="showModal">Sửa</span>

        <a-modal v-model:open="isModalVisible" @ok="handleOk">
            <div class="text-center p-3 flex-auto leading-6">
                <h2 class="text-2xl font-bold py-4 text-gray-500">Chỉnh sửa</h2>
                <div class="grid grid-cols-2 gap-4 text-left mt-3">
                    <div class="">
                        <input type="text" v-model="formData.name" v-bind:class="{
                'border-red-500 placeholder-red-500': errors.name,
              }" @input="validateName"
                            class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                            :placeholder="formData.name" />
                        <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs">
                            {{ errors.name }}
                        </div>
                    </div>

                    <div class="">
                        <input type="text" v-model="formData.image" v-bind:class="{
                ' border-red-500 placeholder-red-500': errors.image, }" @input="validateImage"
                            class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                            :placeholder="formData.image" />
                        <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs">
                            {{ errors.image }}
                        </div>
                    </div>
                    <div class="">
                        <input type="text" v-model="formData.price" v-bind:class="{
                'border-red-500 placeholder-red-500': errors.price,
              }" @input="validatePrice"
                            class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                            :placeholder="formData.price" />
                        <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs">
                            {{ errors.price }}
                        </div>
                    </div>
                    <div class="">
                        <input type="text" v-model="formData.exist" v-bind:class="{
                'border-red-500 placeholder-red-500': errors.exist,
              }" @input="validateExist"
                            class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                            :placeholder="formData.exist" />
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
                        :placeholder="formData.description"></textarea>
                    <div class="text-red-500 absolute -mt-2 pt-3 left-8 text-xs">
                        {{ errors.description }}
                    </div>
                </div>
            </div>
        </a-modal>
    </div>
</template>
<script>
import { ref } from 'vue';
import { useFruitStore } from '../../stores/modules/fruits';

export default {
    props: {
        fruit: {
            type: Object,
            required: true,
        },
        open,

    },
    setup(props) {
        const isModalVisible = ref(false);
        const formData = ref({
            name: '',
            description: '',
            exist: '',
            image: '',
            price: '',
        });
        const errors = ref({
            name: '',
            description: '',
            exist: '',
            image: '',
            price: '',
        });
        const useFruits = useFruitStore();

        const showModal = () => {
            console.log('Modal is being shown!');
            if (props.fruit) {
                isModalVisible.value = true;
                formData.value = { ...props.fruit };
            } else {
                console.error('No selected fruit to edit.');
            }
        };

        const handleOk = () => {
            if (props.fruit) {
                useFruits.updateFruit(formData.value);
                console.log(formData.value);
            }
            resetForm();
            isModalVisible.value = false; // Close the modal
        };

        const resetForm = () => {
            formData.value = {
                name: '',
                description: '',
                exist: '',
                image: '',
                price: '',
            };
            resetErrors();
        };

        const resetErrors = () => {
            errors.value = {
                name: '',
                description: '',
                exist: '',
                image: '',
                price: '',
            };
        };

        return {
            isModalVisible,
            showModal,
            handleOk,
            formData,
            errors,
        };
    },
};
</script>