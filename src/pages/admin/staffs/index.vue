<template>
    <table-staff :staff="staff" />
</template>

<script>
import { ref } from 'vue';
import TableStaff from '../../../components/table/TableStaff.vue';
import { useAdminStore } from '../../../stores/modules/admin';
export default {
    components: { TableStaff },
    setup() {
        const staff = ref([]);
        const adminStore = useAdminStore();

        adminStore.getAllStaff().then((staff) => {
            staff.value = staff;


        });
        return {
            staff,
        }



    }

}
</script>

<style>

</style>