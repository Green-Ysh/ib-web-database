<template>
  <div class="dashboard-design-container">
    <h1>仪表盘设计</h1>
    <div class="content-area">
      <p>仪表盘设计功能区域</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
  console.log('仪表盘设计页面已加载');
});
</script>

<style lang="scss" scoped>
.dashboard-design-container {
  padding: 20px;
  
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
  }
  
  .content-area {
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 20px;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p {
      font-size: 16px;
      color: #666;
    }
  }
}
</style>
