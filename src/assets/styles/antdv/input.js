// input.js
import variables from './variables';

const Input = {
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
    '.ant-input-affix-wrapper': {
      backgroundColor: variables.inputBgColor, // 对应 $input-bg-color
      border: 'none',
      borderRadius: '4px',
      '& > input.ant-input': {
        backgroundColor: variables.inputBgColor, // 对应 $input-bg-color
      },
    },
    '.ant-input': {
      backgroundColor: variables.inputBgColor, // 对应 $input-bg-color
      border: 'none',
      borderRadius: '4px',
    },
    '.ant-input-affix-wrapper-focused': {
      boxShadow: `0 0 0 1px ${variables.inputBorderColor}`, // 对应 $input-border-color
    },
    '.ant-input:focus, .ant-input-focused': {
      boxShadow: `0 0 0 1px ${variables.inputBorderColor}`, // 对应 $input-border-color
    },
    '.ant-form-item-has-error': {
      '& .ant-input-affix-wrapper': {
        '& > input.ant-input': {
          backgroundColor: `${variables.inputBgErrorColor} !important`, // 对应 $input-bg-error-color
        },
      },
      '.ant-input-affix-wrapper-focused': {
        boxShadow: `0 0 0 1px ${variables.inputErrorColor} !important`, // 对应 $input-error-color
      },
    },
    '.ant-form-item-has-error .ant-input, .ant-form-item-has-error .ant-input-affix-wrapper, .ant-form-item-has-error .ant-input:hover, .ant-form-item-has-error .ant-input-affix-wrapper:hover': {
      background: 'rgba(194, 49, 49, 0.06) !important', // rgb(194 49 49 / 6%)
    },
  },
};

export default Input;
