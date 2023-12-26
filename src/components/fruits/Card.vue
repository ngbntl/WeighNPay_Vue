<template>
    <div class="flex p-3 w-68 h-76 m-2  ">
        <div class=" bg-white rounded-lg overflow-hidden shadow-lg">
            <img class="flex w-32 h-32 object-cover" :src="fruitProps.image" :alt="fruitProps.name">
            <div class="px-4 py-2">
                <div class="font-bold text-lg ">{{ fruitProps.name }}</div>
                <p class="text-gray-700 text-sm mb-0">{{fruitProps.description}}</p>
            </div>
            <div class="px-4 pt-2 pb-3">
                <!-- <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">Đã
                    bán:
                    {{fruitProps.sold
                    }}</span> -->
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">Giá:
                    {{fruitProps.price
                    }}</span>
            </div>
        </div>
    </div>
</template>
  
  
  
  
<script>

export default {
    name: 'Card',
    props: {
        fruitProps: {
            type: Object,
            required: true,
        },

    },

};

</script>