<template>
    <div class="text-end my-5 mx-2">
        <add-bill />
    </div>
    <div>
        <table-bills :bills="bills" />

    </div>
</template>
<script>
import { ref } from 'vue';
import TableBills from '../../../components/table/TableBills.vue';
import { useAdminStore } from '../../../stores/modules/admin';
import AddBill from '../../../components/modal/addBill.vue';

export default {
    components: { TableBills, AddBill },
    setup() {
        const bills = ref([]);
        const useAdmin = useAdminStore();

        useAdmin.getAllBills().then((bill) => {
            bills.value = bill
            // console.log(bill);
        });

        return {
            bills,
            useAdmin

        }
    }
}
</script>
  