<template>
  <div class="tabs-view-box">
    <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.reportName" :closable="pane.closable">
        <IbIframe
          :id="pane.key"
          v-show="pane.reportUrl"
          :frameSrc="pane.reportUrl"
          :frameInfo="pane.reportInfo"
          class="report-area"
        />
        <a-empty v-if="!pane.reportUrl" class="empty-area" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup>
import { ref, watchEffect, watch, nextTick } from "vue";
import IbIframe from "../../components/iframe/index";

const props = defineProps({
  tabsArr: {
    type: Array,
    default: () => [],
  },
  activeKey: {
    type: [String, Number],
    default: () => "",
  },
});

const emits = defineEmits(["update:tabsArr", "tabClick"]);

const panes = ref([]);
const activeKey = ref(props.activeKey || panes.value[0]?.key);

const remove = (targetKey) => {
  let lastIndex = 0;
  let targetItem;
  panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1;
      targetItem = pane;
      emits(
        "update:tabsArr",
        props.tabsArr.filter((tab) => tab.reportUrl !== targetItem.reportUrl),
      );
      nextTick(() => {
        activeKey.value = lastIndex >= 0 ? panes.value[lastIndex].key : panes.value[0].key;
      });
    }
  });
  panes.value = panes.value.filter((pane) => pane.key !== targetKey);
};

const onEdit = (targetKey) => {
  remove(targetKey);
};

const updateActiveTab = (key) => {
  activeKey.value = key;
};

watch(
  () => props.activeKey,
  (newVal) => {
    if (newVal) {
      activeKey.value = newVal;
    }
  },
);

watch(
  () => activeKey.value,
  (newVal) => {
    const target = props.tabsArr.find((o) => o.reportInfo.id === newVal);
    emits("tabClick", target);
  },
);

watchEffect(() => {
  panes.value = props.tabsArr.map((obj, index) => {
    return {
      closable: index === 0 && props.tabsArr.length === 1 ? false : true,
      reportName: obj.reportName,
      reportUrl: obj.reportUrl,
      reportInfo: obj.reportInfo,
      key: obj.reportInfo.id,
    };
  });
  activeKey.value = panes.value[panes.value.length - 1]?.key;
});

defineExpose({ updateActiveTab });
</script>

<style scoped lang="scss">
.tabs-view-box {
  height: 100%;

  .report-area {
    margin: 0 20px;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 4px 30px 0 rgb(217 225 232 / 59%);
  }

  ::v-deep(.ant-tabs) {
    height: 100%;
  }

  ::v-deep(.ant-tabs-content) {
    height: 100%;
  }

  ::v-deep(.ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab) {
    margin-left: 0 !important;
  }

  ::v-deep(.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab) {
    border-left: none;
  }

  ::v-deep(.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active, .ant-tabs-card
      > div
      > .ant-tabs-nav
      .ant-tabs-tab-active) {
    background: #f4f4f9;
    border-bottom: 1px solid transparent;
  }

  ::v-deep(.ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap, .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-wrap) {
    background-color: #fff;
    box-shadow: 0 2px 10px 0 rgb(220 220 220 / 50%);
  }
}
</style>
