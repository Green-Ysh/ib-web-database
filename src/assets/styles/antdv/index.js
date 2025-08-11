import Button from "./button";
import Menu from "./menu";
import Avatar from "./avatar";
import Card from "./card";
import DatePicker from "./date-picker";
import Form from "./form";
import InputNumber from "./input-number";
import Input from "./input";
import Modal from "./modal";
import Pagination from "./pagination";
import Select from "./select";
import Tab from "./tab";
import Table from "./table";
const theme = {
  token: {
    // 全局主色
    colorPrimary: "#910e0e",
    // 链接色
    colorLink: "#0d4ded",
    // 成功色
    colorSuccess: "#52c41a",
    // 警告色
    colorWarning: "#faad14",
    // 错误色
    colorError: "#f5222d",
    // 主字号
    fontSize: 14,
    // 标题色
    colorTextHeading: "rgba(0, 0, 0, 0.85)",
    // 主文本色
    colorText: "rgba(0, 0, 0, 0.65)",
    // 次文本色
    colorTextSecondary: "rgba(0, 0, 0, 0.45)",
    // 失效色
    colorTextDisabled: "rgba(0, 0, 0, 0.25)",
    // 组件/浮层圆角
    borderRadius: 4,
    // 边框色
    colorBorder: "#d9d9d9",
    // 浮层阴影
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
  components: {
    Button,
    Menu,
    Avatar,
    Card,
    DatePicker,
    Form,
    InputNumber,
    Input,
    Modal,
    Pagination,
    Select,
    Tab,
    Table,
  },
};

export default theme;
