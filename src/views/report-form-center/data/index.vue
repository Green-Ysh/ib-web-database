<template>
  <div class="report-data-container">
    <div class="page-header">
      <h2>数据报表</h2>
    </div>
    <div class="content-area">
      <a-card>
        <p>数据报表内容区域</p>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('数据报表页面已加载');
});
</script>

<style lang="scss" scoped>
.report-data-container {
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
