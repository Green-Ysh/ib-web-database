// pagination.js
import variables from './variables';

const Pagination = {
  // 基础配置
  colorPrimary: variables.primaryColor, // 对应 $primary-color
  colorText: '#333',
  colorBgContainer: 'transparent',
  colorBorder: 'transparent',
  borderRadius: 4,
  
  // 自定义样式表
  styleSheet: {
    '.ant-pagination-item-active': {
      color: '#fff',
      background: variables.primaryColor, // 对应 $primary-color
      border: 'none',
      borderRadius: '4px',
      '& > a': {
        color: '#fff !important',
        '&:hover, &:focus': {
          color: '#fff',
        },
      },
    },
    '.ant-pagination-item': {
      color: '#333',
      border: 'none',
    },
    '.ant-pagination-total-text': {
      color: '#333',
    },
    '.ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link': {
      border: 'none',
    },
    '.ant-pagination-options-quick-jumper input:hover': {
      borderColor: 'rgba(196, 199, 205, 0.3)', // rgb(196 199 205 / 30%)
    },
  },
};

export default Pagination;
