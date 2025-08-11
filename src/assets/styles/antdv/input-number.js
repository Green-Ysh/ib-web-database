// input-number.js
import variables from './variables';

const InputNumber = {
  // 基础配置
  colorBgContainer: variables.inputBgColor, // 对应 $input-bg-color
  colorBorder: 'transparent',
  borderRadius: 4,
  
  // 聚焦状态
  colorPrimary: variables.inputBorderColor, // 对应 $input-border-color
  
  // 错误状态
  colorError: variables.inputErrorColor, // 对应 $input-error-color
  colorErrorBg: variables.inputBgErrorColor, // 对应 $input-bg-error-color
  colorErrorBorder: variables.inputBorderErrorColor, // 对应 $input-border-error-color
  
  // 自定义样式表
  styleSheet: {
    '.ant-input-number': {
      backgroundColor: variables.inputBgColor, // 对应 $input-bg-color
      border: 'none',
      '& > input.ant-input': {
        backgroundColor: variables.inputBgColor, // 对应 $input-bg-color
      },
    },
    '.ant-input-number-focused': {
      boxShadow: `0 0 0 1px ${variables.inputBorderColor}`, // 对应 $input-border-color
    },
    '.ant-form-item-has-error .ant-input-number, .ant-form-item-has-error .ant-picker': {
      backgroundColor: `${variables.inputBgErrorColor} !important`, // 对应 $input-bg-error-color
      borderColor: variables.inputBorderErrorColor, // 对应 $input-border-error-color
    },
    '.ant-form-item-has-error .ant-input-number-focused, .ant-form-item-has-error .ant-picker-focused, .ant-form-item-has-error .ant-input-number:focus, .ant-form-item-has-error .ant-picker:focus': {
      borderColor: variables.inputBorderErrorColor, // 对应 $input-border-error-color
      boxShadow: `0 0 0 1px ${variables.inputErrorColor} !important`, // 对应 $input-error-color
    },
  },
};

export default InputNumber;
