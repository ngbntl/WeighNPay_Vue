<template>
    <div>
        <a type="primary" @click="showModal">Nhận diện</a>
        <a-modal v-model:open="open">
            <div class="text-center p-3 flex-auto leading-6">
                <h2 class="text-2xl font-bold py-4 text-gray-500">Kết quả nhận diện</h2>
                <img :src="image_path" alt="">
            </div>
        </a-modal>
    </div>
</template>
  
<script>
import { onMounted, ref } from "vue";
import { useFruitStore } from "../../stores/modules/fruits";
export default {
    props: ['image_path'],


    setup(props) {
        // Modal
        const open = ref(false);

        const showModal = () => {
            open.value = true;

        }
            ;

        onMounted(async () => {
            console.log(img)
        })


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
  