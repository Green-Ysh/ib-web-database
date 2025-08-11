// table.js
import variables from './variables';

const Table = {
  // 基础配置
  colorBgContainer: variables.tableBackgroundColor,
  colorTextHeading: variables.tableHeaderTextColor,
  
  // 自定义样式表
  styleSheet: {
    '.ant-table-thead > tr > th': {
      color: variables.tableHeaderTextColor,
      fontWeight: 'bold',
      lineHeight: '20px',
      background: variables.tableBackgroundColor,
    },
    '.ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td, .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td, .ant-table-thead > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td, .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td': {
      background: variables.tableHoverColor,
    },
    '.ant-table-tbody > tr > td.ant-table-column-sort': {
      background: variables.tableBackgroundColor,
    },
    '.ant-table-fixed-header .ant-table-scroll .ant-table-header': {
      overflow: 'hidden !important',
    },
    '.ant-table-row-selected > td': {
      background: `${variables.tableHoverColor} !important`,
    },
    '.ant-table-thead > tr > th.ant-table-column-sort': {
      background: 'none',
    },
    '.ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before': {
      display: 'none',
    },
  },
};

export default Table;
