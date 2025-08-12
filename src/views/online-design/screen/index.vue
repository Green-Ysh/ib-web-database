<template>
  <LfContent title="">
    <template #content>
      <div class="tabChange">
        <a-tabs :style="{ height: '100%' }" v-model:activeKey="activeKey" size="large" @tabClick="onTabClick">
          <a-tab-pane :style="{ height: '100%' }" :key="SCREEN_TAB_KEY.design" tab="设计">
            <ScreenDesign v-if="activeKey === SCREEN_TAB_KEY.design"></ScreenDesign>
          </a-tab-pane>
          <a-tab-pane :style="{ height: '100%' }" :key="SCREEN_TAB_KEY.config" tab="配置">
            <ScreenConfig v-if="activeKey === SCREEN_TAB_KEY.config"></ScreenConfig>
          </a-tab-pane>
          <a-tab-pane :style="{ height: '100%' }" :key="SCREEN_TAB_KEY.recycle" tab="回收站">
            <ScreenRecycle v-if="activeKey === SCREEN_TAB_KEY.recycle"></ScreenRecycle>
          </a-tab-pane>
        </a-tabs>
      </div>
    </template>
  </LfContent>
</template>

<script setup>
import { reactive, watch, toRefs, computed, getCurrentInstance } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import LfContent from "@/layouts/components/leftside-content.vue";
import { SCREEN_TAB_KEY } from "@/constants/contribute.js";

// 组件需要创建
import ScreenDesign from "./components/screen-design.vue";
import ScreenConfig from "./components/screen-config.vue";
import ScreenRecycle from "./components/screen-recycle.vue";

const router = useRouter();
const route = useRoute();
const { proxy } = getCurrentInstance();

const showKeys = computed(() => {
  return [SCREEN_TAB_KEY.design, SCREEN_TAB_KEY.config, SCREEN_TAB_KEY.recycle];
});

const state = reactive({
  activeKey: showKeys.value[0] || SCREEN_TAB_KEY.design,
});

const onTabClick = (activeKey) => {
  // 可以添加埋点或其他操作
  console.log('切换到标签:', activeKey);
};

watch(
  () => state.activeKey,
  async (newVal) => {
    const query = { ...route.query };
    query.screenTab = newVal;
    await router.replace({ query });
  }
);

watch(
  () => route.query.screenTab,
  (newVal) => {
    if (newVal && showKeys.value.includes(newVal)) state.activeKey = newVal;
  },
  { immediate: true }
);

const { activeKey } = toRefs(state);
</script>

<style lang="scss" scoped>
:deep(.ant-tabs-nav) {
  margin-bottom: 10px;
}
:deep(.ant-tabs-content) {
  height: 100%;
}
.tabChange {
  height: 100%;
}
.left-side-content {
  padding-top: 0 !important;
}
</style>
