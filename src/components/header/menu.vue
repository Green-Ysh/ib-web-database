<template>
  <div :class="['menu-box', themeClass]">
    <div v-for="(menuItem, index) in state.menuArray" :key="index" class="menuItem" @click="handleMenuClick(menuItem)">
      <p :class="['text', { actived: activedIndex === menuItem.value }]">
        {{ menuItem.name }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, reactive, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const activedIndex = ref(0);

const state = reactive({
  menuArray: [
    { name: "报表中心", path: "/reportCenter", value: 0 },
    { name: "在线设计", path: "/onlineDesign", value: 1 },
    // { name: "数据管理", path: "/dataManagement", value: 2 },
    // { name: "基础管理", path: "/basisManagement", value: 3 },
  ],
});

const themeClass = computed(() => 'default-theme');


watchEffect(() => {
  let path = route.path;
  for (let menu of state.menuArray) {
    if (path.includes(menu.path)) {
      activedIndex.value = menu.value;
    }
  }
});

const handleMenuClick = (item) => {
  const { value, path } = item;
  activedIndex.value = value;
  router.push({ path });
};
</script>

<style lang="scss" scoped>
.menu-box {
  display: flex;

  .menuItem {
    margin: 0 30px;
    vertical-align: middle;
    cursor: pointer;

    .text {
      position: relative;
      color: #393b41;
      font-weight: 400;
      font-size: 16px;
      font-family: PingFangSC-Regular, "PingFang SC";
      line-height: 22px;

      &.actived {
        color: #910e0e;
        font-weight: 600;

        &::before {
          position: absolute;
          bottom: -8px;
          left: 50%;
          width: 30px;
          height: 4px;
          background: #910e0e;
          border-radius: 3px;
          box-shadow: -2px 0 8px 0 rgb(180 32 32 / 12%);
          transform: translateX(-50%);
          content: "";
        }
      }
    }
  }

  &.purple-theme {
    .menuItem {
      .text {
        color: #fff;

        &.actived {
          &::before {
            background: #fff;
            box-shadow: -2px 0 8px 0 rgb(180 32 32 / 12%);
          }
        }
      }
    }
  }
}
</style>
