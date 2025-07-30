<template>
  <div class="header">
    <div class="head-content">
      <div class="logo">
        <h1 class="desc">IB数据中台</h1>
      </div>

      <div class="avatar-box">
        <LoginAvatar />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginAvatar from "../avatar/avatar-login.vue";

let selectedKeys1 = ref(["1"]);
console.log(selectedKeys1.value);
</script>

<style lang="scss" scoped>
.header-box {
  position: relative;
}
.header {
  min-width: 999px;
  min-height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);

  .head-content {
    box-sizing: border-box;
    padding: 10px 24px;
    line-height: 30px;
    position: relative;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .logo {
      height: 100%;
      display: flex;
      align-items: center;

      .desc {
        font-weight: bold;
      }
    }
  }
}
</style>
