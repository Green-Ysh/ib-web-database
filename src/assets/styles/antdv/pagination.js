// pagination.js
import variables from "./variables";

const Pagination = {
  // // 分页项的大小，默认使用 controlHeight
  // paginationItemSize: 32,
  // // 分页组件使用的字体，默认使用系统字体
  // paginationFontFamily: variables.fontFamily,
  // // 分页项的背景色
  // paginationItemBg: "transparent",
  // // 激活项的背景色，使用主题色
  // paginationItemBgActive: variables.primaryColor,

  // // 激活项的字体粗细
  // paginationFontWeightActive: 600,
  // // 小型分页项的大小
  // paginationItemSizeSM: 24,
  // // 输入框的背景色
  // paginationItemInputBg: "#fff",
  // // 迷你模式下尺寸切换器的顶部位置
  // paginationMiniOptionsSizeChangerTop: 0,
  // // 禁用状态下激活项的背景色
  // paginationItemDisabledBgActive: variables.primaryColor,
  // // 禁用状态下激活项的文本颜色
  // paginationItemDisabledColorActive: "#fff",
  // // 链接项的背景色
  // paginationItemLinkBg: "transparent",
  // // 输入框轮廓偏移
  // inputOutlineOffset: "0 0",
  // // 迷你模式下选项的起始外边距
  // paginationMiniOptionsMarginInlineStart: 4,
  // // 迷你模式下快速跳转输入框的宽度
  // paginationMiniQuickJumperInputWidth: 44,
  // // 分页项的内边距
  // paginationItemPaddingInline: 8,
  // // 省略号的字符间距
  // paginationEllipsisLetterSpacing: 2,
  // // 斜杠的起始外边距
  // paginationSlashMarginInlineStart: 4,
  // // 斜杠的结束外边距
  // paginationSlashMarginInlineEnd: 8,
  // // 省略号的文本缩进
  // paginationEllipsisTextIndent: "0.13em",
  // 激活项的背景色，使用主题色
  paginationItemBgActive: variables.primaryColor,
  // 悬停效果相关
  colorBgTextHover: variables.lightPrimaryHoverColor, // 文本背景悬停颜色
  colorPrimaryHover: "#fff", // 主色调悬停颜色
  colorBgTextActive: variables.darkPrimaryColor, // 点击激活状态的背景色
  // 输入框悬停边框颜色
  colorBorderHover: "rgba(196, 199, 205, 0.3)",
};

export default Pagination;
