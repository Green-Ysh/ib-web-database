<template>
  <div>
    <a-layout id="layout-default" :class="['layout-default', layoutClass]">
      <DefaultHeader></DefaultHeader>

      <a-layout-content class="layout-content">
        <router-view />
      </a-layout-content>

      <DefaultFooter></DefaultFooter>
    </a-layout>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import DefaultHeader from "../components/header/default-header.vue";
import DefaultFooter from "../components/footer/default-footer.vue";

const route = useRoute();
const layoutClass = computed(() => {
  return route.meta.layoutClass;
});
</script>

<style scoped lang="scss">
.layout-default {
  .layout-content {
    // 此高度为header高度
    padding-top: 56px;
    min-height: calc(100vh - 70px); // 此高度为footer高度
  }
}
</style>
