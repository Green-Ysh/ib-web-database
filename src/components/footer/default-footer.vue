<template>
  <footer class="footer-box">
    <span class="company"> IB-中台业务系统©2022-{{ year }} </span>
    <span class="version">前端版本:{{ version }}</span>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import config from "../../../package.json";

const year = computed(() => {
  return new Date().getFullYear();
});
const version = config.version;
</script>

<style lang="scss" scoped>
.footer-box {
  position: relative;
  display: flex;
  justify-content: center;
  height: 30px;
  line-height: 30px;
  background: #fff;
  box-shadow: 0 0 2px 0 hsl(0deg 0% 47% / 20%);

  .version {
    position: absolute;
    top: 0;
    right: 10px;
  }
}
</style>
