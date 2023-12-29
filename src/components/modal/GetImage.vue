<template>
    <div>
        <a type="primary" @click="showModal">Nhận diện</a>
        <a-modal v-model:open="open">
            <div class="text-center p-3 flex-auto leading-6">
                <h2 class="text-2xl font-bold py-4 text-gray-500">Kết quả nhận diện</h2>
                <img :src="image_path" alt="" class="w-full h-full" />
            </div>
            <template #footer>
                <a-button type="primary" @click="handleOk"> Đóng </a-button>
            </template>
        </a-modal>
    </div>
</template>

<script>
export default {
    props: ["image_path"],
    setup(props) {
        const open = ref(false);
        const showModal = () => {
            open.value = true;
        };
        const handleOk = (e) => {
            open.value = false;
        };

        return {
            open,
            showModal,
            handleOk,
        };
    },
};
</script>
