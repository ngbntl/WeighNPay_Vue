<template>
    <div class=" justify-center py-12 sm:px-6 lg:px-8">

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-xxl">
            <div class="bg-white py-8 px-4 sm:rounded-lg sm:px-10  ">
                <form method="POST" action="#" class="grid grid-cols-3">
                    <div class="inline-block ">
                        <label class=" text-sm font-medium text-gray-700" for="name">
                            Họ tên
                        </label>
                        <div class="mt-1">
                            <input
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required="" autocomplete="name" type="text" name="name" id="name">
                        </div>
                    </div>

                    <div class="mt-6">
                        <label class="block text-sm font-medium text-gray-700" for="email">
                            Email
                        </label>
                        <div class="mt-1">
                            <input
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required="" autocomplete="email" type="email" name="email" id="email">
                        </div>
                    </div>

                    <div class="mt-6">
                        <label class="block text-sm font-medium text-gray-700" for="confirm-email">
                            Số điện thoại
                        </label>
                        <div class="mt-1">
                            <input
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required="" autocomplete="phone" type="phone" name="phone" id="phone">
                        </div>
                    </div>


                    <div class="mt-6">
                        <label class="block text-sm font-medium text-gray-700" for="dob">
                            Ngày sinh
                        </label>
                        <div class="mt-1">
                            <input
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required="" type="date" name="birth" id="birth">
                        </div>
                    </div>

                    <div class="flex items-center justify-center mt-6">
                        <span class="mr-3 text-gray-700 font-medium">Giới tính:</span>
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-radio h-5 w-5 text-pink-600" name="gender" value="Male">
                            <span class="ml-2 text-gray-700">Nam</span>
                        </label>
                        <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio h-5 w-5 text-purple-600" name="gender" value="Female">
                            <span class="ml-2 text-gray-700">Nữ</span>
                        </label>
                    </div>


                    <div class="mt-6">
                        <button
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            type="submit">
                            Lưu
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "update",
}
</script>

<style>

</style>