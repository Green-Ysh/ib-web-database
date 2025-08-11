<template>
  <div class="screen-config-container">
    <h3>配置管理</h3>
    <div class="config-content">
      <p>这里是大屏配置的内容区域</p>
      <!-- 配置相关组件和功能将在这里实现 -->
      <a-empty v-if="configList.length === 0" description="暂无配置数据" />
      <a-list v-else :data-source="configList" :bordered="true">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta :title="item.name" :description="item.description">
              <template #avatar>
                <a-avatar :style="{ backgroundColor: '#87d068' }">{{ item.name.charAt(0) }}</a-avatar>
              </template>
            </a-list-item-meta>
            <template #extra>
              <a-button type="link">编辑</a-button>
            </template>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 模拟配置数据
const configList = ref([]);

onMounted(() => {
  console.log('大屏配置组件已加载');
  // 模拟加载配置数据
  setTimeout(() => {
    configList.value = [
      { id: '1', name: '基础配置', description: '大屏基础参数配置' },
      { id: '2', name: '数据字典', description: '大屏数据字典配置' }
    ];
  }, 500);
});
</script>

<style lang="scss" scoped>
.screen-config-container {
  padding: 16px;
  
  .config-content {
    margin-top: 16px;
    min-height: 300px;
    background-color: #f5f5f8;
    border-radius: 4px;
    padding: 20px;
  }
}
</style>
