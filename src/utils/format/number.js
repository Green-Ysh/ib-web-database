import { RoundNum } from "../common-util";

const NumberFormater = {
  toPercent(num = 0, precision = 2) {
    if (num == null || typeof num !== "number") return num;
    return RoundNum(num * 100, precision) + "%";
  },
  numBitFormat(num, bit = 2) {
    return RoundNum(num, bit);
  },
  // 将金额数字格式化为千分位
  formatMoneyNumber(num, precision = 2) {
    if (num == null || typeof num !== "number") return num;
    return num
      .toFixed(precision)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
};

export default NumberFormater;
