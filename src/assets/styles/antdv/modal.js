// modal.js
const Modal = {
  // 基础配置
  borderRadiusLG: 12, // 对应 modal content 的 border-radius
  
  // 自定义样式表
  styleSheet: {
    '.ant-modal-content': {
      overflow: 'hidden',
      borderRadius: '12px',
    },
    '.ant-modal-header': {
      borderBottom: 'none',
      borderRadius: 'none',
    },
    '.ant-modal-body': {
      padding: '0 24px',
    },
    '.ant-modal-footer': {
      padding: '16px 24px',
      paddingTop: 0,
      borderTop: 'none',
      borderRadius: 'none',
    },
  },
};

export default Modal;
