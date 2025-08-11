<template>
  <div class="left-right-box">
    <div class="left">
      <LeftSide />
    </div>

    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>

import LeftSide from "./left-side/index.vue";

</script>

<style lang="scss">
  @import "../../assets/styles/common/left-side";

.left-right-box {
  height: calc(100% - 60px);
}

</style>
