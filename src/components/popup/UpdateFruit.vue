<template>
    <transition name="fade">
        <form action="" @submit.prevent="onSubmit">
            <div class="absolute bg-black opacity-70 inset-0 z-0 -top-60"></div>
            <div class=" fixed max-w-xl w-full p-3 top-1/4 left-1/3 rounded-xl shadow-lg bg-white ">
                <div>
                    <div class="text-center p-3 flex-auto leading-6">

                        <h2 class="text-2xl font-bold py-4 text-gray-500">Cập nhật trái cây</h2>
                        <div class="grid grid-cols-2 gap-4 text-left mt-3">
                            <div class="">
                                <input type="text" v-model=" formData.name"
                                    v-bind:class="{'border-red-500 placeholder-red-500':errors.name}" @input="validateName"
                                    class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                                    :placeholder="'Tên trái cây:'">
                                <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs ">{{ errors.name}}</div>
                            </div>

                            <div class="">
                                <input type="text" v-model="formData.image"
                                    v-bind:class="{'border-red-500 placeholder-red-500':errors.image}"
                                    @input="validateImage"
                                    class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                                    :placeholder="' Link ảnh'">
                                <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs ">{{ errors.image}}</div>
                            </div>
                            <div class="">
                                <input type="text" v-model="formData.price"
                                    v-bind:class="{'border-red-500 placeholder-red-500':errors.price}"
                                    @input="validatePrice"
                                    class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                                    :placeholder="'Giá bán'">
                                <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs ">{{ errors.price}}</div>
                            </div>
                            <div class="">
                                <input type="text" v-model="formData.exist"
                                    v-bind:class="{'border-red-500 placeholder-red-500':errors.exist}"
                                    @input="validateExist"
                                    class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                                    :placeholder=" 'Số lượng'">
                                <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs ">{{ errors.exist}}</div>
                            </div>

                        </div>
                        <div class="">

                            <textarea v-model="formData.description"
                                v-bind:class="{'border-red-500 placeholder-red-500':errors.description}"
                                @input="validateDescription"
                                class="relative bg-gray-50 ring-0 mt-5 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
                                :placeholder=" ' Mô tả'"></textarea>
                            <div class="text-red-500 absolute -mt-2 pt-3 left-8 text-xs ">{{ errors.description}}</div>

                        </div>
                    </div>

                    <div class="p-3 mt-2 text-center space-x-4 md:block">
                        <button @click="closePopup"
                            class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
                            Đóng
                        </button>
                        <button
                            class="mb-2 md:mb-0 bg-purplehov bg-opacity-80 border border-purplehov px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-opacity-100">
                            Lưu
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </transition>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'UpdateFruit',
    props: ['selectedFruit'],

    data() {
        return {
            formData: {
                name: '',
                exist: '',
                description: '',
                image: '',
                price: '',
            },
            errors: {
                name: '',
                description: '',
                exist: '',
                image: '',
                price: '',
            },
        };
    },
    watch: {
        selectedFruit: {
            handler(newValue) {
                // Cập nhật formData khi selectedFruit thay đổi
                this.formData = {
                    name: newValue ? newValue.name : '',
                    description: newValue ? newValue.description : '',
                    exist: newValue ? newValue.exist : '',
                    image: newValue ? newValue.image : '',
                    price: newValue ? newValue.price : '',
                };
            },
            immediate: true, // Gọi ngay từ đầu nếu có
        },
    },


    methods: {
        onSubmit() {

            if (
                this.errors.name === '' &&
                this.errors.description === '' &&
                this.errors.exist === '' &&
                this.errors.image === '' &&
                this.errors.price === ''

            ) {
                axios.put(`http://127.0.0.1:5000/updateFruit/${this.selectedFruit.ID}`, this.formData)
                    .then(response => {
                        console.log('Data đã được gửi: ', response.data);

                        this.closePopup();
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },

        closePopup() {
            this.$emit('close');
        },

        isValidData() {
            this.validateName();
            this.validateDescription();
            this.validateExist();
            this.validateImage();
            this.validatePrice();

            // Check if there are no errors
            return (
                !this.errors.name &&
                !this.errors.description &&
                !this.errors.exist &&
                !this.errors.image &&
                !this.errors.price
            );
        },

        // ... (other validation functions)

        // Note: You may want to consider using a more generic validation approach.
        // For example, using a library like Vuelidate or the Composition API for validation.

        validateName() {
            if (this.formData.name === '') {
                this.errors.name = 'Vui lòng nhập tên';
            } else {
                this.errors.name = '';
            }
        },

        // ... (other validation functions)
    },
};
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 500ms ease-out;
  }
  </style>
  