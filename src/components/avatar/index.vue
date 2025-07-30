<template>
  <a-avatar :src="avatarSrc" alt="头像" :size="size" :class="[$attrs.class]">
    <template #icon>
      <UserOutlined />
    </template>
  </a-avatar>
</template>

<script setup>
import { defineProps } from "@vue/runtime-core";
import { UserOutlined } from "@ant-design/icons-vue";

defineProps({
  avatarSrc: {
    type: String,
    default: "",
  },
  size: {
    type: Number,
    default: 36,
  },
});
</script>
