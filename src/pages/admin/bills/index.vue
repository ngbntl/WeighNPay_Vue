<template>
    <a-popconfirm title="Are you sure to cancel?" @confirm="confirmCancel" @cancel="cancel">
        <a-button type="danger">Cancel</a-button>
    </a-popconfirm>
</template>
<script>
export default {
    methods: {
        confirmCancel() {
            // Hành động để thực hiện sau khi xác nhận
            console.log('Confirmed cancellation');
            // Ví dụ: Hủy bỏ quá trình, xóa mục, v.v.
        },
        cancel() {
            // Hành động để thực hiện khi hủy
            console.log('Cancelled');
        }
    }
}
</script>
  