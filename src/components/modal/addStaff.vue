<template>
    <div>
        <a-button type="primary" @click="showModal">Thêm mới</a-button>
        <a-modal v-model:open="open" @ok="handleOk">
            <div class="text-center p-3 flex-auto leading-6">
                <h2 class="text-2xl font-bold py-4 text-gray-500">Thêm nhân viên</h2>
                <div class="grid grid-cols-2 gap-4 text-left mt-3">
                    <div>
                        <input type="text" v-model="formData.email"
                            :class="{ 'border-red-500 placeholder-red-500': errors.email }" @input="validateEmail"
                            class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                            placeholder="Email" />
                        <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs">
                            {{ errors.email }}
                        </div>
                    </div>

                    <div>
                        <input type="password" v-model="formData.password"
                            :class="{ 'border-red-500 placeholder-red-500': errors.password }" @input="validatePassword"
                            class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                            placeholder="Mật khẩu" />
                        <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs">
                            {{ errors.password }}
                        </div>
                    </div>

                    <div>
                        <input type="text" v-model="formData.name"
                            :class="{ 'border-red-500 placeholder-red-500': errors.name }" @input="validateName"
                            class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                            placeholder="Họ tên" />
                        <div class="text-red-500 absolute -mt-4 pt-3 left-8 text-xs">
                            {{ errors.name }}
                        </div>
                    </div>

                    <div>
                        <input type="text" v-model="formData.phone"
                            :class="{ 'border-red-500 placeholder-red-500': errors.phone }" @input="validatePhone"
                            class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                            placeholder="Số điện thoại" />
                        <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs">
                            {{ errors.phone }}
                        </div>
                    </div>

                    <div>
                        <input type="text" v-model="formData.address"
                            :class="{ 'border-red-500 placeholder-red-500': errors.address }" @input="validateAddress"
                            class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
                            placeholder="Địa chỉ" />
                        <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs">
                            {{ errors.address }}
                        </div>
                    </div>

                    <div>
                        <select name="role" v-model="formData.role" aria-placeholder="Vai trò"
                            :class="{ 'border-red-500 placeholder-red-500': errors.role }"
                            class="relative mb-2 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500">
                            <option value="1">Admin</option>
                            <option value="0">User</option>
                        </select>
                        <div class="text-red-500 absolute -mt-4 ml-3 pt-3 left-1/2 text-xs">
                            {{ errors.role }}
                        </div>
                    </div>
                </div>
            </div>
        </a-modal>
    </div>
</template>

<script>
import { ref } from "vue";
import { useAdminStore } from "../../stores/modules/admin";

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
        };

        const formData = ref({
            email: "",
            password: "",
            name: "",
            phone: "",
            address: "",
            role: 1,
        });

        const errors = ref({
            email: "",
            password: "",
            name: "",
            phone: "",
            address: "",
            role: null,
        });

        const validateEmail = () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (formData.value.email === "") {
                errors.value.email = "Vui lòng nhập email";
            } else if (!emailRegex.test(formData.value.email)) {
                errors.value.email = "Email không hợp lệ";
            } else {
                errors.value.email = ""; // No error
            }
        };

        const validatePassword = () => {
            errors.value.password =
                formData.value.password === "" ? "Vui lòng nhập mật khẩu" : "";
        };

        const validateName = () => {
            errors.value.name =
                formData.value.name === "" ? "Vui lòng nhập họ tên" : "";
        };

        const validatePhone = () => {
            const phoneRegex = /^(?:[0-9] ?){6,14}[0-9]$/;
            if (formData.value.phone === "") {
                errors.value.phone = "Vui lòng nhập số điện thoại";
            } else if (!phoneRegex.test(formData.value.phone)) {
                errors.value.phone = "Số điện thoại không hợp lệ";
            } else {
                errors.value.phone = "";
            }
        };

        const validateAddress = () => {
            errors.value.address =
                formData.value.address === "" ? "Vui lòng nhập địa chỉ" : "";
        };

        const validateRole = () => {
            errors.value.role =
                formData.value.role === null ? "Vui lòng chọn vai trò" : "";
        };
        const useAdmin = useAdminStore();

        const add = () => {
            formData.value.role = parseInt(formData.value.role, 10);
            useAdmin.addStaff(formData.value);
            resetForm();
        };

        const resetForm = () => {
            formData.value = {
                email: "",
                password: "",
                name: "",
                phone: "",
                address: "",
                role: 1,
            };
            resetErrors();
        };

        const resetErrors = () => {
            errors.value = {
                email: "",
                password: "",
                name: "",
                phone: "",
                address: "",
                role: null,
            };
        };

        return {
            open,
            showModal,
            handleOk,
            formData,
            errors,
            validateEmail,
            validatePassword,
            validateName,
            validatePhone,
            validateAddress,
            validateRole,
            add,
        };
    },
};
</script>
