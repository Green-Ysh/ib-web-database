<template>
  <div :class="['left-side-box', { 'wide-type': !collapsed, 'narrow-type': collapsed }]">
    <div class="btn-box">
      <div class="btn-circle" @click="toggleCollapsed">
        <Icon v-if="collapsed" class="icon-zhankai" size="32" color="#910E0E" />
        <Icon v-else class="icon-shouqi" size="32" color="#910E0E" />
      </div>
    </div>

    <div class="menu-box">
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="light"
        :inline-collapsed="collapsed"
        :inlineIndent="20"
      >
        <div v-for="o1 in displayedMenuList" :key="o1.key">
          <a-menu-item v-if="!o1.children" :key="o1.key" @click="handleMenuClick(o1)">
            <template #icon>
              <div>
                <Icon :class="[o1.icon, 'left-side-icon']" size="18" />
              </div>
            </template>
            <span>{{ o1.name }}</span>
          </a-menu-item>
          <a-sub-menu v-if="o1.children" :key="o1.key">
            <template #icon>
              <div>
                <Icon :class="[o1.icon, 'left-side-icon']" size="18" />
              </div>
            </template>
            <template #title>{{ o1.name }}</template>
            <a-menu-item v-for="o2 in o1.children" :key="o2.key" @click="handleMenuClick(o2)">
              <span>{{ o2.name }}</span>
            </a-menu-item>
          </a-sub-menu>
        </div>
      </a-menu>
    </div>
    <div v-if="showBottomImg" class="bottom-img">
      <img src="@/assets/images/menu-img.png" alt />
    </div>
  </div>
</template>
<script setup>
import { reactive, toRefs, computed, getCurrentInstance, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import Icon from "@/components/icon/index.vue";
// import { storageFn } from "@/utils";

const router = useRouter();
const route = useRoute();
const { proxy } = getCurrentInstance();

const state = reactive({
  collapsed: false,
  selectedKeys: [""],
  openKeys: [""],
  menuList: [
    {
      name: "大屏设计",
      key: "screen",
      icon: "icon-ECM1",
      path: "/onlineDesign/screen",
    },
    {
      name: "报表设计",
      key: "report",
      icon: "icon-guanlibaogao",
      children: [
        {
          name: "数据报表设计",
          key: "report-1",
          path: "/onlineDesign/data",
        },
        {
          name: "图形报表设计",
          key: "report-2",
          path: "/onlineDesign/chart",
        },
        {
          name: "打印报表设计",
          key: "report-3",
          path: "/onlineDesign/print",
        }
      ]
    },
    {
      name: "仪表盘设计",
      key: "dashboard",
      icon: "icon-ESC",
      path: "/onlineDesign/dashboard",
    },
    {
      name: "门户设计",
      key: "portal",
      icon: "icon-shujukanban",
      path: "/onlineDesign/portal",
    },
    {
      name: "表单设计",
      key: "form",
      icon: "icon-MA",
      path: "/onlineDesign/form",
    }
  ],
});

const showBottomImg = computed(() => {
  return state.menuList.length && !state.collapsed;
});

const displayedMenuList = computed(() => {
  let result = [...state.menuList];
  return result;
});

const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  // storageFn.setLocal("leftSideCollapsed", state.collapsed);
};

const handleMenuClick = (obj) => {
  const { name, path, key } = obj;
  router.push(path);
  state.selectedKeys = [key];
  
  // 如果是子菜单项，设置父菜单为展开状态
  if (key.includes('-')) {
    const parentKey = key.split('-')[0];
    state.openKeys = [parentKey];
  }
  
  proxy.$track("contribute_leftNav_click", {
    navName: name,
  });
};

const { collapsed, selectedKeys, openKeys } = toRefs(state);

// 根据当前路由设置选中的菜单项
const syncMenuWithRoute = () => {
  const currentPath = route.path;
  
  // 遍历菜单列表，查找匹配的路径
  for (const menu of state.menuList) {
    if (menu.path === currentPath) {
      state.selectedKeys = [menu.key];
      return;
    }
    
    if (menu.children) {
      for (const subMenu of menu.children) {
        if (subMenu.path === currentPath) {
          state.selectedKeys = [subMenu.key];
          state.openKeys = [menu.key];
          return;
        }
      }
    }
  }
};

// 监听路由变化
watch(
  () => route.path,
  () => {
    syncMenuWithRoute();
  }
);

// 初始化时同步菜单选中状态
onMounted(() => {
  syncMenuWithRoute();
});
</script>

<style lang="scss" scoped>
.left-side-box {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  transition: all 0.2s;

  &.wide-type {
    width: 240px;

    .menu-box {
      flex: 1;
      padding-right: 10px;
    }

    .left-side-icon {
      margin-top: 3px;
    }

    ::v-deep(.ant-menu:not(.ant-menu-horizontal)) {
      .ant-menu-item-selected {
        color: $primary-color;
        background: $selected-color;
        border-radius: 4px;
      }
    }

    ::v-deep(.ant-menu-item-active) {
      color: $primary-color;
    }
  }

  &.narrow-type {
    width: 60px;

    ::v-deep(.ant-menu.ant-menu-inline-collapsed) {
      width: 60px;
    }

    ::v-deep(.ant-menu-title-content) {
      display: none;
    }

    ::v-deep(.ant-menu-submenu-arrow) {
      display: none;
    }

    ::v-deep(.ant-menu-submenu) {
      display: flex;
      justify-content: center;
    }

    ::v-deep(.ant-menu-submenu-title) {
      padding-right: 16px;
    }

    ::v-deep(.ant-menu-submenu-selected) {
      color: #fff !important;
      background: $primary-color;
      border-radius: 0;

      .ant-menu-submenu-title {
        &:hover {
          color: #fff;
        }
      }
      
      .left-side-icon {
        color: #fff !important;
      }
    }

    ::v-deep(.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected) {
      color: #fff !important;
      background: $primary-color;
      border-radius: 0;
      
      .left-side-icon {
        color: #fff !important;
      }
    }
  }

  .btn-box {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 10px;

    .btn-circle {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
      background: #f4e7e7;
      border-radius: 50%;

      &:hover {
        background: rgb(145 14 14 / 20%);
      }
    }
  }

  .bottom-img {
    padding: 35px 10px 30px;

    & > img {
      display: block;
      width: 220px;
    }
  }
}
</style>
