// button.js
import variables from './variables';

const Button = {
  // === 基础样式配置 (对应 .ant-btn) ===
  // 高度: height: 36px
  controlHeight: 36,
  controlHeightLG: 36,
  controlHeightSM: 36,
  
  // 行高: line-height: 20px
  lineHeight: 20/14, // 转换为相对值，基于 14px 字体
  lineHeightLG: 20/16,
  lineHeightSM: 20/14,
  
  // 内边距: padding: 5px 10px
  paddingBlock: 5,        // 垂直内边距
  paddingInline: 10,      // 水平内边距
  paddingBlockLG: 5,
  paddingInlineLG: 10,
  paddingBlockSM: 5,
  paddingInlineSM: 10,
  
  // 圆角: border-radius: 4px
  borderRadius: 4,
  borderRadiusLG: 4,
  borderRadiusSM: 4,
  
  // 边框: border: none
  borderWidth: 0,
  
  // === 默认按钮颜色 (对应 .ant-btn) ===
  // color: $primary-color (使用全局 colorPrimary)  // 全局配置
  colorPrimary: variables.primaryColor, // 对应 $primary-colorPrimary 保持一致
  // background: $light-primary-color  
  colorBgContainer: variables.lightPrimaryColor,
  // border: none
  colorBorder: 'transparent',
  
  // === 默认按钮悬停状态 (.ant-btn:hover, :active, :focus) ===
  // color: $primary-color (保持不变)
  colorTextHover: variables.primaryColor,
  colorTextActive: variables.primaryColor,
  // background: $light-primary-hover-color
  colorBgContainerHover: variables.lightPrimaryHoverColor,
  colorBgContainerActive: variables.lightPrimaryHoverColor,
  // border: none (保持透明)
  colorBorderHover: 'transparent',
  colorBorderActive: 'transparent',
  
  // === Primary 按钮样式 (对应 .ant-btn-primary) ===
  // color: #fff
  primaryColor: '#ffffff',
  // background: $primary-color (会自动使用全局 colorPrimary)
  
  // === Primary 按钮悬停状态 (.ant-btn-primary:hover, :active, :focus) ===
  // color: #fff (保持不变)
  // background: $dark-primary-color
  colorPrimaryHover: variables.darkPrimaryColor,
  colorPrimaryActive: variables.darkPrimaryColor,
  
  // === Dashed 按钮样式 (对应 .ant-btn-dashed) ===
  // color: #393b41
  colorTextDashed: '#393b41',
  // background: #f5f5f8
  colorBgDashed: '#f5f5f8',
  
  // === Dashed 按钮悬停状态 (.ant-btn-dashed:hover, :active, :focus) ===
  // color: #393b41 (保持不变)
  colorTextDashedHover: '#393b41',
  colorTextDashedActive: '#393b41',
  // background: #d5d5de
  colorBgDashedHover: '#d5d5de',
  colorBgDashedActive: '#d5d5de',
  
  // === Link 按钮样式 (对应 .ant-btn-link) ===
  // background: none
  colorBgTextHover: 'transparent',    // Link 按钮悬停背景
  colorBgTextActive: 'transparent',   // Link 按钮激活背景
  colorBgText: 'transparent',         // Link 按钮默认背景
  
  // === Link 按钮悬停状态 (.ant-btn-link:hover, :active, :focus) ===
  // color: $primary-color (使用全局 colorPrimary)
  colorLink: '#910e0e',
  colorLinkHover: '#910e0e',
  colorLinkActive: '#910e0e',
  
  // === 其他常用配置 ===
  // 字体大小
  fontSize: 14,
  fontSizeLG: 16,
  fontSizeSM: 14,
  
  // 字体粗细
  fontWeight: 400,
  
  // 禁用状态
  colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
  colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
  borderColorDisabled: '#d9d9d9',
  
  // 阴影（如果需要的话）
  defaultShadow: 'none',
  primaryShadow: 'none',
  dangerShadow: 'none',
  
  // 动画效果
  motionDurationMid: '0.2s',
  motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
};

export default Button;