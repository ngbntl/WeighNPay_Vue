<template>
    <div class="relative text-end m-5">
        <add-staff />
    </div>
    <table-staff :staffs="staffs" />
</template>

<script>
import { ref } from 'vue';
import TableStaff from '../../../components/table/TableStaff.vue';
import { useAdminStore } from '../../../stores/modules/admin';
import AddStaff from '../../../components/modal/addStaff.vue';
export default {
    components: { TableStaff, AddStaff },
    setup() {
        const staffs = ref([]);
        const adminStore = useAdminStore();

        adminStore.getAllStaff().then((staff) => {
            staffs.value = staff;
            console.log(staff);


        });
        return {
            staffs,
        }



    }

}
</script>

<style>

</style>