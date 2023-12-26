<template>
    <div class="menu">
        <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline"
            class="relative h-screen pt-10 -mt-4 ">

            <a-menu-item key="staff-bills">
                <router-link :to="{name: 'staff-bills'}">
                    <span>
                        <ProfileOutlined class="relative -top-1 mr-2" /> Hóa đơn
                    </span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="staff-fruits">
                <router-link :to="{name: 'staff-fruits'}">
                    <span>
                        <InboxOutlined class="relative -top-1 mr-2" /> Hàng hóa
                    </span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="staff-createBills">
                <router-link :to="{name: 'staff-createBills'}">
                    <span>
                        <ProfileOutlined class="relative -top-1 mr-2" /> Tạo đơn
                    </span>
                </router-link>

            </a-menu-item>
            <div class="lg:hidden mt-10">
                <a-menu>
                    <a-menu-item key="staff-fruits">
                        <router-link :to="{name: 'staff-fruits'}">
                            <span>Hàng hóa</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="staff-fruits">
                        <router-link :to="{name: 'staff-fruits'}">
                            <span>Hàng hóa</span>
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="staff-fruits">
                        <router-link :to="{name: 'staff-fruits'}">
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
import { useStaffMenu } from "../../stores/modules/staff-menu.js";
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        UserOutlined,
        ProfileOutlined,
        InboxOutlined
    },
    setup() {
        const store = useStaffMenu();
        return {
            ...storeToRefs(store)
        };
    },
});
</script>
