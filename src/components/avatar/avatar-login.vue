<template>
  <div class="ib-avatar">
    <a-dropdown>
      <span class="ant-dropdown-link">
        <Avatar :avatarSrc="avatar" />
        {{ username }}
        <DownOutlined />
      </span>
      <template v-slot:overlay>
        <a-menu>
          <a-menu-item @click="buy">测试</a-menu-item>
          <a-menu-item @click="logout">退出登录</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup>
import { DownOutlined } from "@ant-design/icons-vue";
import Avatar from "./index.vue";

import { useUserStore } from "@/stores/user";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const logout = async () => {
  await userStore.logout();
  const fullPath = route.fullPath;
  router.push(`/login?redirect=${fullPath}`);
};

const buy = () => {
  window.open("http://www.baidu.com");
};

const username = computed(() => userStore.username);
const avatar = computed(() => userStore.avatar);
</script>
<style lang="scss">
.ib-avatar {
  .ant-dropdown-link {
    display: block;
    cursor: pointer;
  }
}
</style>
