// tab.js
import variables from './variables';

const Tab = {
  // 基础配置
  colorPrimary: variables.primaryColor, // 主色调
  
  // 自定义样式表
  styleSheet: {
    '.ant-tabs-bar': {
      margin: 0,
      borderBottom: 'none',
    },
    // 添加 Ant Design Vue 4 的 tabs 样式
    '.ant-tabs-nav': {
      marginBottom: 0,
    },
    '.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn': {
      color: variables.primaryColor, // 对应主色调
    },
    '.ant-tabs-ink-bar': {
      backgroundColor: variables.primaryColor, // 对应主色调
    },
  },
};

export default Tab;
