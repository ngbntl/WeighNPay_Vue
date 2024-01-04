<template>
    <div class="relative">
        <div class="text-end my-5 mx-2">
            <add-bill />
        </div>
        <div class="scroll-container">
            <table-bills :bills="bills" />
        </div>
    </div>
</template>
  
<script setup>
import { computed, onMounted } from 'vue';
import TableBills from '../../../components/table/TableBills.vue';
import { useAdminStore } from '../../../stores/modules/admin';
import AddBill from '../../../components/modal/addBill.vue';

const adminStore = useAdminStore();

onMounted(async () => {
    await adminStore.getAllBills();
});

const bills = computed(() => adminStore.bills);
</script>
  
<style>
  .scroll-container {
    position: relative;
    max-height: 700px;
    overflow-y: auto;
    /* Cho phép cuộn dọc nếu nội dung dài hơn chiều cao của container. */
  }
  </style>
  