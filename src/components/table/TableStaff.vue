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
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                                    Ngày sinh
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                                    Số điện thoại
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                                    Địa chi
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                                    Sửa
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                                    Xóa
                                </th>

                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="(item, index) in tableData" :key="index" class="text-left">
                                <td class="px-3 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {{ staff.id }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ staff.name }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ staff.sex ? "Nam":"Nữ" }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ staff.birth }}
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
                                <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <a class="text-green-500 hover:text-green-700" href="#">
                                        Edit
                                    </a>
                                </td>
                                <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <a class="text-red-500 hover:text-red-700" href="#">
                                        Delete
                                    </a>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "TableStaff",
    props: {
        staff: {
            type: Object,
            required: true,
        }

    }

}

</script>