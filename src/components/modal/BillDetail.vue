<template>
    <transition name="">
        <div>
            <div class="absolute bg-black opacity-70 inset-0 z-0 -top-64"></div>

            <div class="absolute fixed max-w-xl w-full p-3 -mt-24 left-1/3 rounded-xl shadow-lg bg-white ">


                <div>

                    <div class="p-3 mt-2 text-center space-x-4 md:block">
                        <button @click="closePopup"
                            class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
                            Đóng
                        </button>
                        <button
                            class="mb-2 md:mb-0 bg-purplehov bg-opacity-80 border border-purplehov px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-opacity-100">
                            In hóa đơn
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
  
<script>
export default {
    name: 'BillDetails',
    props: ['bill', 'isModalVisible'],

    methods: {

        closePopup() {
            this.$emit('close')
        }

    }
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
  