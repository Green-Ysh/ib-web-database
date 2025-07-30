import dayjs from "dayjs";
require("dayjs/locale/zh-cn");

const dateFormater = {
  formatMonthAndDay(timeStr) {
    const month = dayjs(timeStr).get("month") + 1;
    const day = dayjs(timeStr).get("date");
    return `${month}月${day}日`;
  },
  formatDay(timeStr) {
    const day = dayjs(timeStr).get("date");
    return `${day}日`;
  },
};

export default dateFormater;
