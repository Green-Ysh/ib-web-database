// avatar.js
import variables from './variables';

const Avatar = {
  // 基础配置
  colorBgContainer: variables.avatarBgColor, // 对应 $avatar-bg-color
  
  // 自定义样式表
  styleSheet: {
    '.ava.ant-avatar-square': {
      borderRadius: '8px',
    },
  },
};

export default Avatar;
