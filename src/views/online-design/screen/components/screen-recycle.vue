<template>
  <div class="screen-recycle-container">
    <h3>回收站</h3>
    <div class="recycle-content">
      <div class="operation-bar">
        <a-button type="primary" :disabled="selectedRowKeys.length === 0" @click="handleRestore">
          <template #icon><ReloadOutlined /></template>
          恢复
        </a-button>
        <a-button key="back" :disabled="selectedRowKeys.length === 0" @click="handleDelete">
          <template #icon><DeleteOutlined /></template>
          彻底删除
        </a-button>
      </div>
      
      <a-table
        :columns="columns"
        :data-source="recycleData"
        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        :pagination="{ pageSize: 10 }"
        :loading="loading"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <a-space>
              <a @click="handleItemRestore(record)">恢复</a>
              <a-divider type="vertical" />
              <a-popconfirm
                title="确定要彻底删除此项吗？"
                ok-text="确定"
                cancel-text="取消"
                @confirm="handleItemDelete(record)"
              >
                <a class="text-danger">删除</a>
              </a-popconfirm>
            </a-space>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { message } from 'ant-design-vue';
import { DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';

const loading = ref(false);
const selectedRowKeys = ref([]);
const recycleData = ref([]);

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '删除时间',
    dataIndex: 'deleteTime',
    key: 'deleteTime',
  },
  {
    title: '操作人',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: '操作',
    key: 'action',
    width: 150,
  },
];

const onSelectChange = (keys) => {
  selectedRowKeys.value = keys;
};

const handleRestore = () => {
  message.success(`已恢复 ${selectedRowKeys.value.length} 项`);
  recycleData.value = recycleData.value.filter(item => !selectedRowKeys.value.includes(item.key));
  selectedRowKeys.value = [];
};

const handleDelete = () => {
  message.success(`已彻底删除 ${selectedRowKeys.value.length} 项`);
  recycleData.value = recycleData.value.filter(item => !selectedRowKeys.value.includes(item.key));
  selectedRowKeys.value = [];
};

const handleItemRestore = (record) => {
  message.success(`已恢复: ${record.name}`);
  recycleData.value = recycleData.value.filter(item => item.key !== record.key);
};

const handleItemDelete = (record) => {
  message.success(`已彻底删除: ${record.name}`);
  recycleData.value = recycleData.value.filter(item => item.key !== record.key);
};

onMounted(() => {
  console.log('回收站组件已加载');
  // 模拟加载数据
  loading.value = true;
  setTimeout(() => {
    recycleData.value = [
      {
        key: '1',
        name: '销售大屏',
        type: '大屏设计',
        deleteTime: '2025-08-10 15:30:45',
        operator: '张三',
      },
      {
        key: '2',
        name: '运营数据大屏',
        type: '大屏设计',
        deleteTime: '2025-08-09 10:15:22',
        operator: '李四',
      },
    ];
    loading.value = false;
  }, 800);
});
</script>

<style lang="scss" scoped>
.screen-recycle-container {
  padding: 16px;
  
  .recycle-content {
    margin-top: 16px;
    background-color: #f5f5f8;
    border-radius: 4px;
    padding: 20px;
    
    .operation-bar {
      margin-bottom: 16px;
      display: flex;
      gap: 8px;
    }
  }
  
  .text-danger {
    color: #ff4d4f;
  }
}
</style>
