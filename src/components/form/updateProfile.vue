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
                    <input type="text" v-model="formData.name"
                        :class="{ 'border-red-500 placeholder-red-500': errors.name }" @input="validateName"
                        class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-80 p-2.5 checked:bg-emerald-500"
                        :placeholder="formData.name" />
                    <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs">
                        {{ errors.name }}
                    </div>
                </div>

                <div class="">
                    <label class="p-2 mb-2 text-md text-gray-500" for="">Email:</label>

                    <input type="text" v-model="formData.email"
                        :class="{ 'border-red-500 placeholder-red-500': errors.email }" @input="validateEmail"
                        class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-80 p-2.5 checked:bg-emerald-500"
                        :placeholder="formData.email" />
                    <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs">
                        {{ errors.email }}
                    </div>
                </div>
                <div class="">
                    <label class="p-2 mb-2 text-md text-gray-500" for="">Điện thoại:</label>

                    <input type="text" v-model="formData.phone"
                        :class="{ 'border-red-500 placeholder-red-500': errors.phone }" @input="validatePhone"
                        class="relative mb-2 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-80 p-2.5 checked:bg-emerald-500"
                        :placeholder="formData.phone" />
                    <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs">
                        {{ errors.phone }}
                    </div>
                </div>
                <div>
                    <label for="birthdate" class="p-2 mb-2 text-md text-gray-500">
                        Ngày sinh:
                        <input id="birthdate" type="date" v-model="formData.birth"
                            :class="{ 'border-red-500 placeholder-red-500': errors.birth }"
                            class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-80 p-2.5 checked:bg-emerald-500" />
                    </label>
                    <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs">
                        {{ errors.birth }}
                    </div>
                </div>


                <div>
                    <label class="p-2 mb-2 text-md text-gray-500" for="">Giới tính:</label>

                    <select name="role" v-model="formData.sex" aria-placeholder="Vai trò"
                        :class="{ 'border-red-500 placeholder-red-500': errors.sex }"
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
                        :class="{ 'border-red-500 placeholder-red-500': errors.address }" @input="validateAddress"
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
import { ref, onMounted, computed } from "vue";

import { useAdminStore } from "../../stores/modules/admin";

export default {
    setup() {
        const formData = ref({
            name: "",
            address: "",
            birth: "",
            email: "",
            sex: "",
            phone: "",
        });

        const errors = ref({
            name: "",
            address: "",
            birth: "",
            email: "",
            sex: "",
            phone: "",
        });

        const useAdmin = useAdminStore();
        onMounted(async () => {

            const user = await useAdmin.getUser();

            formData.value = { ...user };

            if (formData.value.birth) {

                const birthDate = new Date(formData.value.birth);

                formData.value.birth = birthDate.toISOString().split('T')[0];

            }

        });


        const update = () => {
            useAdmin.update(formData.value);
            console.log("User data updated:", formData.value);
        };

        const formattedBirthDate = computed({

            // Getter tra về ngày theo định dạng hiển thị

            get: () => {

                if (!formData.value.birth) return "";

                const birthDate = new Date(formData.value.birth);

                return birthDate.toLocaleDateString('en-CA', { // Định dạng YYYY-MM-DD

                    year: 'numeric',

                    month: '2-digit',

                    day: '2-digit',

                });

            },

            // Setter cập nhật giá trị vào formData dựa trên input của người dùng

            set: (newValue) => {

                if (newValue) {

                    const [year, month, day] = newValue.split('-').map(Number);

                    const newBirthDate = new Date(Date.UTC(year, month - 1, day));

                    formData.value.birth = newBirthDate.toISOString().split('T')[0];

                    errors.value.birth = ''; // Nếu không có lỗi

                } else {

                    errors.value.birth = 'Invalid date format';

                }

            },

        });

        // Placeholder for your validation functions

        const validateName = () => {
            /* ... */
        };

        const validateEmail = () => {
            /* ... */
        };

        const validatePhone = () => {
            /* ... */
        };

        const validateAddress = () => {
            /* ... */
        };

        return {
            update,

            formData,

            errors,

            formattedBirthDate,

            validateName,

            validateEmail,

            validatePhone,

            validateAddress,
        };
    },
};
</script>
