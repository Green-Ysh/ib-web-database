// select.js
import variables from './variables';

const Select = {
  // 基础配置
  colorBgContainer: variables.inputBgColor, // 对应 $input-bg-color
  colorBorder: 'transparent',
  
  // 聚焦状态
  colorPrimary: variables.inputBorderColor, // 对应 $input-border-color
  
  // 错误状态
  colorError: variables.inputErrorColor, // 对应 $input-error-color
  colorErrorBg: variables.inputBgErrorColor, // 对应 $input-bg-error-color
  
  // 自定义样式表
  styleSheet: {
    '.ant-select:not(.ant-select-customize-input) .ant-select-selector': {
      backgroundColor: variables.inputBgColor, // 对应 $input-bg-color
      border: 'none',
    },
    '.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector': {
      boxShadow: `0 0 0 1px ${variables.inputBorderColor}`, // 对应 $input-border-color
    },
    '.ant-form-item-has-error .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) .ant-select-selector': {
      backgroundColor: variables.inputBgErrorColor, // 对应 $input-bg-error-color
    },
    '.ant-form-item-has-error .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-open .ant-select-selector, .ant-form-item-has-error .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-focused .ant-select-selector': {
      borderColor: variables.inputErrorColor, // 对应 $input-error-color
      boxShadow: `0 0 0 1px ${variables.inputErrorColor}`, // 对应 $input-error-color
    },
  },
};

export default Select;
