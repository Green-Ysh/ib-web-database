// form.js
const Form = {
  // 基础配置
  marginLG: 15, // 表单项底部间距
  
  // 自定义样式表
  styleSheet: {
    '.ant-form-item-explain-success': {
      display: 'none',
    },
    '.ant-form-item-with-help .ant-form-item-explain': {
      minHeight: 0,
    },
    '.ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before': {
      marginRight: '1px',
    },
  },
};

export default Form;
