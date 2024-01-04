<template>
    <div class="relative text-end m-5">
        <add-staff />
    </div>
    <table-staff :staffs="staffs" />
    <router-view />
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import TableStaff from '../../../components/table/TableStaff.vue';
import { useAdminStore } from '../../../stores/modules/admin';
import AddStaff from '../../../components/modal/addStaff.vue';
components: { TableStaff, AddStaff };

const adminStore = useAdminStore();

onMounted(async () => {
    await adminStore.getAllStaff()
})
const staffs = computed(() => adminStore.staffs)









</script>

<style>

</style>