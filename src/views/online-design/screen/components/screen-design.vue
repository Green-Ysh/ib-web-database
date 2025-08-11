<template>
  <div class="screen-design-container">
    <div class="screen-header">
      <div class="header-left">
        <a-input-search
          v-model:value="searchValue"
          placeholder="请输入关键词搜索"
          style="width: 250px"
          @search="onSearch"
        />
      </div>
      <div class="header-right">
        <a-button type="primary" @click="handleSort">
          <template #icon><SortAscendingOutlined /></template>
          排序
        </a-button>
        <a-button @click="handleRefresh">
          <template #icon><ReloadOutlined /></template>
          刷新
        </a-button>
      </div>
    </div>

    <div class="screen-content">
      <div class="screen-cards">
        <!-- 新建卡片 -->
        <div class="screen-card create-card" @click="handleCreate">
          <div class="create-content">
            <PlusOutlined />
            <div class="create-text">新建</div>
          </div>
        </div>

        <!-- 大屏卡片列表 -->
        <div 
          v-for="item in screenList" 
          :key="item.id" 
          class="screen-card"
          :class="{'locked': item.locked}"
        >
          <div class="card-preview">
            <img :src="item.thumbnail" :alt="item.name" />
            <div class="card-actions">
              <EyeOutlined @click.stop="handlePreview(item)" />
              <EditOutlined @click.stop="handleEdit(item)" v-if="!item.locked" />
              <DeleteOutlined @click.stop="handleDelete(item)" v-if="!item.locked" />
              <LockOutlined v-if="item.locked" @click.stop="handleToggleLock(item)" />
              <UnlockOutlined v-else @click.stop="handleToggleLock(item)" />
              <EllipsisOutlined @click.stop="handleMore(item)" />
            </div>
          </div>
          <div class="card-info">
            <div class="card-name">{{ item.name }}</div>
            <div class="card-id">{{ item.id }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="screen-footer">
      <a-pagination
        v-model:current="pagination.current"
        :total="pagination.total"
        :pageSize="pagination.pageSize"
        show-size-changer
        :pageSizeOptions="['10', '20', '30', '40']"
        @change="handlePageChange"
        @showSizeChange="handleSizeChange"
      />
    </div>

    <!-- 预览大屏对话框 -->
    <a-modal
      v-model:visible="previewVisible"
      title="大屏预览"
      width="80%"
      :footer="null"
    >
      <div class="preview-container">
        <img :src="currentScreen.thumbnail" :alt="currentScreen.name" style="width: 100%" />
      </div>
    </a-modal>

    <!-- 删除确认对话框 -->
    <a-modal
      v-model:visible="deleteVisible"
      title="确认删除"
      @ok="confirmDelete"
      okText="删除"
      cancelText="取消"
    >
      <p>确定要删除大屏 "{{ currentScreen.name }}" 吗？删除后可从回收站恢复。</p>
    </a-modal>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { message } from 'ant-design-vue';
import { 
  PlusOutlined, 
  EyeOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  LockOutlined,
  UnlockOutlined,
  EllipsisOutlined,
  ReloadOutlined,
  SortAscendingOutlined
} from '@ant-design/icons-vue';

// 搜索相关
 const searchValue = ref('');

// 分页相关
const pagination = reactive({
  current: 1,
  pageSize: 10,
  total: 60
});

// 当前选中的大屏
const currentScreen = ref({});

// 对话框显示状态
const previewVisible = ref(false);
const deleteVisible = ref(false);

// 大屏列表数据
const screenList = ref([
  {
    id: '1',
    name: '1',
    thumbnail: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
    locked: false
  },
  {
    id: '林北',
    name: '林北',
    thumbnail: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
    locked: false
  },
  {
    id: 'mm',
    name: 'mm',
    thumbnail: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
    locked: true
  },
  {
    id: 'dd',
    name: 'dd',
    thumbnail: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
    locked: false
  },
  {
    id: '测试',
    name: '测试',
    thumbnail: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
    locked: false
  },
  {
    id: '智慧社区网格化管理大屏',
    name: '智慧社区网格化管理大屏',
    thumbnail: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*2VvTSZmI4PEAAAAAAAAAAAAADmJ7AQ/original',
    locked: false
  }
]);

// 搜索功能
const onSearch = (value) => {
  console.log('搜索:', value);
  message.info(`搜索关键词: ${value}`);
  // 实际应用中需要调用API进行搜索
};

// 新建大屏
const handleCreate = () => {
  message.success('正在创建新大屏...');
  // 跳转到创建页面或打开创建对话框
};

// 预览大屏
const handlePreview = (item) => {
  currentScreen.value = item;
  previewVisible.value = true;
};

// 编辑大屏
const handleEdit = (item) => {
  message.info(`编辑大屏: ${item.name}`);
  // 跳转到编辑页面
};

// 删除大屏
const handleDelete = (item) => {
  currentScreen.value = item;
  deleteVisible.value = true;
};

// 确认删除
const confirmDelete = () => {
  message.success(`已删除大屏: ${currentScreen.value.name}`);
  screenList.value = screenList.value.filter(item => item.id !== currentScreen.value.id);
  deleteVisible.value = false;
};

// 切换锁定状态
const handleToggleLock = (item) => {
  item.locked = !item.locked;
  message.success(`${item.locked ? '锁定' : '解锁'}大屏: ${item.name}`);
};

// 更多操作
const handleMore = (item) => {
  message.info(`更多操作: ${item.name}`);
  // 显示更多操作菜单
};

// 分页变化
const handlePageChange = (page, pageSize) => {
  pagination.current = page;
  pagination.pageSize = pageSize;
  // 加载对应页的数据
  console.log(`切换到第 ${page} 页，每页 ${pageSize} 条`);
};

// 每页条数变化
const handleSizeChange = (current, size) => {
  pagination.current = current;
  pagination.pageSize = size;
  // 重新加载数据
  console.log(`每页显示 ${size} 条`);
};

// 排序
const handleSort = () => {
  message.info('排序功能');
  // 实现排序逻辑
};

// 刷新
const handleRefresh = () => {
  message.success('刷新数据');
  // 重新加载数据
};

onMounted(() => {
  console.log('大屏设计组件已加载');
  // 加载数据
});
</script>

<style lang="scss" scoped>
.screen-design-container {
  background-color: #fff !important;
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .screen-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    
    .header-right {
      display: flex;
      gap: 8px;
    }
  }
  
  .screen-content {
    flex: 1;
    background-color: #f5f5f8;
    border-radius: 4px;
    padding: 20px;
    overflow-y: auto;
    
    .screen-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
      
      .screen-card {
        height: 160px;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
        overflow: hidden;
        transition: all 0.3s;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        
        &:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          
          .card-actions {
            opacity: 1;
          }
        }
        
        &.locked {
          position: relative;
          
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.04);
            pointer-events: none;
          }
        }
        
        .card-preview {
          flex: 1;
          position: relative;
          background-color: #001529;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .card-actions {
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            padding: 8px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 0 0 0 4px;
            opacity: 0;
            transition: opacity 0.3s;
            
            :deep(svg) {
              font-size: 16px;
              color: #fff;
              margin-left: 8px;
              cursor: pointer;
              
              &:hover {
                color: #1890ff;
              }
            }
          }
        }
        
        .card-info {
          padding: 8px;
          border-top: 1px solid #f0f0f0;
          
          .card-name {
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .card-id {
            font-size: 12px;
            color: #999;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      
      .create-card {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fafafa;
        border: 1px dashed #d9d9d9;
        
        &:hover {
          border-color: #1890ff;
          color: #1890ff;
        }
        
        .create-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #999;
          
          :deep(svg) {
            font-size: 24px;
            margin-bottom: 8px;
          }
          
          .create-text {
            font-size: 14px;
          }
        }
      }
    }
  }
  
  .screen-footer {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
