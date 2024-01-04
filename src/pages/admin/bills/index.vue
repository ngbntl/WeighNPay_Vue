<template>
    <div class="text-end my-5 mx-2">
        <add-bill />
    </div>
    <div>
        <table-bills :bills="bills" />

    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import TableBills from '../../../components/table/TableBills.vue';
import { useAdminStore } from '../../../stores/modules/admin';
import AddBill from '../../../components/modal/addBill.vue';
components: { TableBills, AddBill };
const adminStore = useAdminStore();
onMounted(async () => {
    await adminStore.getAllBills()
})
const bills = computed(() => adminStore.bills)

</script>
  