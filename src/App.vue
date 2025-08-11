<template>
  <div id="app">
    <a-config-provider :theme="theme">
      <component :is="layout">
        <router-view />
      </component>
    </a-config-provider>
  </div>
</template>
<script setup>
import theme from "@/assets/styles/antdv/index";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const layout = computed(() => {
  return "layout-" + (route.meta.layout || "default").toLowerCase();
});
</script>
<style lang="scss">
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
}

#app {
  height: 100%;
}
</style>
