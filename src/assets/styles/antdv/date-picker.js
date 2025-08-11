// date-picker.js
import variables from './variables';

const DatePicker = {
  // 基础配置
  colorBgContainer: variables.inputBgColor, // 对应 $input-bg-color
  colorBorder: 'transparent',
  borderRadius: 4,
  
  // 聚焦状态
  colorPrimary: variables.inputBorderColor, // 对应 $input-border-color
  
  // 错误状态
  colorError: variables.inputErrorColor, // 对应 $input-error-color
  colorErrorBg: variables.inputBgErrorColor, // 对应 $input-bg-error-color
  
  // 自定义样式表
  styleSheet: {
    '.ant-picker': {
      backgroundColor: variables.inputBgColor, // 对应 $input-bg-color
      border: 'none',
    },
    '.ant-picker-focused': {
      boxShadow: `0 0 0 1px ${variables.inputBorderColor}`, // 对应 $input-border-color
    },
    '.ant-picker-range .ant-picker-active-bar': {
      display: 'none',
    },
    '.ant-picker-today-btn': {
      color: variables.primaryColor, // 对应 $primary-color
      '&:hover': {
        color: variables.darkPrimaryColor, // 对应 $dark-primary-color
      },
    },
    '.ant-form-item-has-error .ant-picker': {
      backgroundColor: variables.inputBgErrorColor, // 对应 $input-bg-error-color
    },
    // 兼容旧版日期选择器
    '.ant-calendar-picker-input.ant-input': {
      backgroundColor: variables.inputBgColor, // 对应 $input-bg-color
      border: 'none',
    },
  },
};

export default DatePicker;
