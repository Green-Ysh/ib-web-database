<template>
  <div class="report-dataset-container">
    <div class="page-header">
      <h2>共享数据集</h2>
    </div>
    <div class="content-area">
      <a-card>
        <p>共享数据集内容区域</p>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('共享数据集页面已加载');
});
</script>

<style lang="scss" scoped>
.report-dataset-container {
  padding: 20px;
  
  .page-header {
    margin-bottom: 20px;
    
    h2 {
      font-size: 20px;
      font-weight: 500;
      color: #333;
    }
  }
  
  .content-area {
    background: #fff;
    min-height: 500px;
  }
}
</style>
