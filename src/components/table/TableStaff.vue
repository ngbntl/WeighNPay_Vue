<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="p-1.5 w-full inline-block align-middle">
                <div class="overflow-hidden border rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-3 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    ID
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Họ tên
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Giới tính
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Ngày sinh
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Số điện thoại
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Địa chi
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Thao tác
                                </th>


                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="(staff, index) in staffs" :key="index" class="text-left">
                                <td class="px-3 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {{ staff.ID }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ staff.name }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ staff.sex ? "Nam":"Nữ" }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ formatDate(staff.birth) }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ staff.phone }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ staff.email }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ staff.address }}
                                </td>

                                <td class="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                                    <a class="text-green-500 hover:text-green-700" href="#" v-if="!staff.valid"
                                        @click="activeAcc(staff.ID)">
                                        Mở khóa
                                    </a>
                                    <a class="text-red-500 hover:text-red-700" href="#" v-else>
                                        Khóa
                                    </a>
                                </td>
                                <!-- <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <a class="text-red-500 hover:text-red-700" href="#">
                                        Delete
                                    </a>
                                </td> -->
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useAdminStore } from '../../stores/modules/admin';

export default {
    name: "TableStaff",
    props: {
        staffs: {
            type: Array,
            required: true,
        }
    },

    methods: {
        formatDate(value) {
            try {
                const date = new Date(value.replace('GMT', ''));
                if (isNaN(date)) {
                    return 'Invalid Date';
                }
                const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
                return date.toLocaleDateString('en-US', options);
            } catch (error) {
                console.error('Error formatting date:', error);
                return ' ';
            }
        },
        activeAcc(ID) {
            const useAdmin = useAdminStore.activeAcc(ID);
        }

    },
}
</script>
