<template>
    <div>
        <div class="text-center p-3 flex-auto leading-6 pb-20">
            <h2 class="text-2xl font-bold text-left p-2 mx-8 mb-8 text-gray-500">
                Thông tin tài khoản
            </h2>
            <div class="relative text-end mx-10">
                <a-button type="primary" @click="update">Lưu</a-button>
            </div>
            <div class="grid grid-cols-2 gap-4 text-left mt-3 ml-32">
                <div class="">
                    <label class="p-2 mb-2 text-md text-gray-500" for="">Họ và tên:</label>
                    <input type="text" v-model="formData.name" :class="{'border-red-500 placeholder-red-500': errors.name}"
                        @input="validateName"
                        class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-80 p-2.5 checked:bg-emerald-500"
                        :placeholder="formData.name" />
                    <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs">
                        {{ errors.name }}
                    </div>
                </div>

                <div class="">
                    <label class="p-2 mb-2 text-md text-gray-500" for="">Email:</label>

                    <input type="text" v-model="formData.email"
                        :class="{'border-red-500 placeholder-red-500': errors.email}" @input="validateEmail"
                        class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-80 p-2.5 checked:bg-emerald-500"
                        :placeholder="formData.email" />
                    <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs">
                        {{ errors.email }}
                    </div>
                </div>
                <div class="">
                    <label class="p-2 mb-2 text-md text-gray-500" for="">Điện thoại:</label>

                    <input type="text" v-model="formData.phone"
                        :class="{'border-red-500 placeholder-red-500': errors.phone}" @input="validatePhone"
                        class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-80 p-2.5 checked:bg-emerald-500"
                        :placeholder="formData.phone" />
                    <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs">
                        {{ errors.phone }}
                    </div>
                </div>
                <div class="">
                    <label for="birthdate" class="p-2 mb-2 text-md text-gray-500">
                        Ngày sinh:
                        <input id="birthdate" type="date" v-model="formData.birth"
                            :class="{'border-red-500 placeholder-red-500': errors.birth}" @input="validateBirth"
                            class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-80 p-2.5 checked:bg-emerald-500" />
                    </label>
                    <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs">
                        {{ errors.birth }}
                    </div>
                </div>
                <div>
                    <label class="p-2 mb-2 text-md text-gray-500" for="">Giới tính:</label>

                    <select name="role" v-model="formData.sex" aria-placeholder="Vai trò"
                        :class="{'border-red-500 placeholder-red-500': errors.sex}"
                        class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-80 p-2.5 checked:bg-emerald-500">
                        <option value="1">Nam</option>
                        <option value="0">Nữ</option>
                    </select>
                    <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs">
                        {{ errors.sex }}
                    </div>
                </div>
                <div class="">
                    <label class="p-2 mb-2 text-md text-gray-500" for="">Địa chỉ:</label>
                    <input type="text" v-model="formData.address"
                        :class="{'border-red-500 placeholder-red-500': errors.address}" @input="validateAddress"
                        class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-80 p-2.5 checked:bg-emerald-500"
                        :placeholder="formData.address" />
                    <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs">
                        {{ errors.address }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref, onMounted, computed } from 'vue';
import { useAdminStore } from '../../stores/modules/admin';

export default {
    props: {
        fruit: {
            type: Object,
            required: true,
        },
        open: Boolean,
    },
    setup() {
        const isModalVisible = ref(false);
        const formData = ref({
            name: '',
            address: '',
            birth: '',
            email: '',
            sex: '',
            phone: '',
        });
        const errors = ref({
            name: '',
            address: '',
            birth: '',
            email: '',
            sex: '',
            phone: '',
        });

        const useAdmin = useAdminStore();

        onMounted(async () => {
            const user = await useAdmin.getUser();
            // Set formData and use user data as placeholders
            formData.value = {
                name: user.name || '',
                address: user.address || '',
                birth: user.birth || '',
                email: user.email || '',
                sex: user.sex,
                phone: user.phone || '',
            };
        });

        const update = () => {
            // Assuming useAdmin has a method named 'updateUser'
            useAdmin.update(formData.value);
            console.log('User data updated:', formData.value);

            resetForm();
            isModalVisible.value = false; // Close the modal
        };

        const formattedBirthDate = computed(() => {
            if (formData.value.birth) {
                const birthDate = new Date(formData.value.birth);
                return birthDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                });
            }
            return '';
        });

        const resetForm = () => {
            formData.value = {
                name: '',
                address: '',
                birth: '',
                email: '',
                sex: '',
                phone: '',
            };
            resetErrors();
        };

        const resetErrors = () => {
            errors.value = {
                name: '',
                address: '',
                birth: '',
                email: '',
                sex: '',
                phone: '',
            };
        };

        const validateName = () => {
            // Add your validation logic for the name field
            // Update errors.name if validation fails
        };

        // Repeat similar validation functions for other fields

        return {
            isModalVisible,
            update,
            formData,
            errors,
            formattedBirthDate,
            validateName,
            // Add other validation functions to return
        };
    },
};
</script>
  