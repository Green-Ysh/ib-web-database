// menu.js
import variables from './variables';

const Menu = {
  // 基础配置
  colorBgContainer: variables.tableBackgroundColor,
  colorItemBg: variables.tableBackgroundColor,
  colorItemText: 'rgba(0, 0, 0, 0.65)',
  colorItemTextHover: variables.primaryColor,
  colorItemTextSelected: variables.primaryColor,
  colorItemBgSelected: variables.lightPrimaryColor,
  colorItemBgHover: 'transparent',
  colorActiveBarWidth: 4,
  colorActiveBarHeight: '100%',
  colorActiveBarBorderSize: 0,
  
  // 内联菜单配置
  menuInlineRightBorderWidth: 0,
  menuItemMarginInline: 0,
  menuItemBorderRadius: 4,
  
  // 子菜单配置
  menuSubMenuBg: variables.tableBackgroundColor,
  menuSubMenuSelectedColor: variables.primaryColor,
  
  // 弹出菜单配置
  menuPopupBg: variables.tableBackgroundColor,
  
  // 自定义样式表
  styleSheet: {
    // 内联菜单样式
    '.ant-menu-inline': {
      '.ant-menu-item': {
        marginTop: 0,
      },
      '.ant-menu-item-selected': {
        '&::before': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '4px',
          height: '100%',
          background: variables.primaryColor,
          borderRadius: '4px 0 0 4px',
          boxShadow: `2px 0 4px 0 ${variables.lightPrimaryColor}`,
          content: '""',
        },
        '&::after': {
          display: 'none',
        },
      },
    },
    
    // 菜单项样式
    '.ant-menu-item': {
      '.ant-menu-title-content': {
        fontWeight: 400,
      },
    },
    
    // 子菜单样式
    '.ant-menu-submenu': {
      '.ant-menu-submenu-title': {
        '.ant-menu-submenu-arrow': {
          color: '#cfcfd1',
        },
      },
    },
    
    // 激活状态子菜单
    '.ant-menu-submenu-active': {
      '.ant-menu-inline': {
        '.ant-menu-item-active': {
          color: variables.primaryColor,
        },
      },
      '.ant-menu-submenu-title': {
        '.ant-menu-title-content': {
          color: variables.primaryColor,
        },
        '.ant-menu-submenu-arrow': {
          color: variables.primaryColor,
        },
      },
    },
    
    // 选中状态子菜单
    '.ant-menu-submenu-selected': {
      color: variables.primaryColor,
    },
    
    // 子菜单标题
    '.ant-menu-submenu-title': {
      '.ant-menu-title-content': {
        fontWeight: 400,
      },
    },
    
    // 展开且选中的子菜单
    '.ant-menu-submenu-selected.ant-menu-submenu-open': {
      '.ant-menu-inline': {
        '.ant-menu-item-selected': {
          '.ant-menu-title-content': {
            color: variables.primaryColor,
          },
        },
      },
    },
    
    // 非水平菜单的选中项
    '.ant-menu:not(.ant-menu-horizontal)': {
      '.ant-menu-item-selected': {
        background: variables.lightPrimaryColor,
        borderRadius: '4px',
      },
    },
    
    // 激活状态菜单项
    '.ant-menu-item-active': {
      color: `${variables.primaryColor} !important`,
    },
    
    // 选中且唯一的菜单项
    '.ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child': {
      color: variables.primaryColor,
      background: variables.lightPrimaryColor,
    },
    
    // 弹出菜单样式 - 关键修复
    '.ant-menu-submenu-popup': {
      '.ant-menu-item-selected': {
        color: `${variables.primaryColor} !important`,
        background: `${variables.lightPrimaryColor} !important`,
        borderRadius: '4px',
      },
    },
    
    // 折叠状态下的菜单项
    '.ant-menu-inline-collapsed': {
      '.ant-menu-item-selected, .ant-menu-submenu-selected': {
        '.left-side-icon': {
          color: '#fff !important',
        },
      },
    },
  },
};

export default Menu;