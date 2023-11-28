<template>
    <div class="menu">
        <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline"
            class="relative h-screen pt-10 -mt-4 ">
            <a-menu-item key="admin-staffs">
                <router-link :to="{name: 'admin-staffs'}">
                    <span>
                        <UserOutlined class="relative -top-1 mr-2" /> Nhân viên
                    </span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="admin-bills">
                <router-link :to="{name: 'admin-bills'}">
                    <span>
                        <ProfileOutlined class="relative -top-1 mr-2" /> Hóa đơn
                    </span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="admin-fruits">
                <router-link :to="{name: 'admin-fruits'}">
                    <span>
                        <InboxOutlined class="relative -top-1 mr-2" /> Hàng hóa
                    </span>
                </router-link>
            </a-menu-item>
            <div class="lg:hidden mt-10">
                <a-menu>
                    <a-menu-item key="admin-fruits">
                        <router-link :to="{name: 'admin-fruits'}">
                            <span>Hàng hóa</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="admin-fruits">
                        <router-link :to="{name: 'admin-fruits'}">
                            <span>Hàng hóa</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="admin-fruits">
                        <router-link :to="{name: 'admin-fruits'}">
                            <span>Hàng hóa</span>
                        </router-link>
                    </a-menu-item>
                </a-menu>
            </div>
        </a-menu>
    </div>
</template>
<script>
import { UserOutlined, ProfileOutlined, InboxOutlined } from '@ant-design/icons-vue';
import { storeToRefs } from "pinia";
import { useMenu } from "../../stores/modules/use-menu.js";
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        UserOutlined,
        ProfileOutlined,
        InboxOutlined
    },
    setup() {
        const store = useMenu();
        return {
            ...storeToRefs(store)
        };
    },
});
</script>
