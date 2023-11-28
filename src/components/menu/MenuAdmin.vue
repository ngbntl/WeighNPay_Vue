<template>
    <div class="menu">
        <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline">
            <a-menu-item key="admin-staffs">
                <router-link :to="{name: 'admin-staffs'}">
                    <span>Nhân viên</span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="admin-bills">
                <router-link :to="{name: 'admin-bills'}">
                    <span>Hóa đơn</span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="admin-fruits">
                <router-link :to="{name: 'admin-fruits'}">
                    <span>Hàng hóa</span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="">
                <router-link :to="{name: ''}">
                    <span>Hàng hóa</span>
                </router-link>

            </a-menu-item>
            <a-menu-item key="">
                <router-link :to="{name: ''}">
                    <span>Hàng hóa</span>
                </router-link>
            </a-menu-item>

        </a-menu>
    </div>
</template>
<script>
import { storeToRefs } from "pinia";
import { useMenu } from "../../stores/use-menu.js";
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {

        const store = useMenu();

        return {
            ...storeToRefs(store)
        };

    },
});


</script>