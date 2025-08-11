<template>
  <div class="header">
    <div class="head-content">
      <div class="logo">
        <icon class="icon-logo" size="28" />
        <h1 class="desc">IB中台业务系统</h1>
      </div>
      <MenuBox />
      <div class="avatar-box">
        <LoginAvatar />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginAvatar from "../avatar/avatar-login.vue";
import MenuBox from "./menu.vue";
import icon from "../icon/index.vue";
let selectedKeys1 = ref(["1"]);
console.log(selectedKeys1.value);
</script>

<style lang="scss" scoped>

.header-box {
  position: relative;
}
.header {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  min-width: 999px;
  min-height: 60px;
  background: #fff;
  box-shadow: 0 4px 30px 0 rgb(217 225 232 / 59%);

  .head-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    height: 60px;
    margin: 0 auto;
    padding: 0 20px;
    line-height: 30px;

    .logo {
      display: flex;
      align-items: center;
      justify-self: flex-start;
      height: 100%;
      .icon-logo {
        margin-right: 10px;
        color: $primary-color;
      }
      .desc {
        color: #393b41;
        font-weight: 600;
        font-size: 20px;
        font-family: PingFangSC-Semibold, "PingFang SC";
        line-height: 28px;
        vertical-align: middle;
      }
    }

    .menu-box {
      flex: 1;
      margin-left: 56px;
    }

    .avatar-box {
      display: flex;
      align-items: center;
      justify-self: flex-end;
    }
  }
}
</style>
