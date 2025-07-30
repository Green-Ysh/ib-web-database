const unitFormater = {
  moneyFormater(moneyNum = 0) {
    switch (true) {
      case 0 <= moneyNum && moneyNum < 10000:
        return "元";
      case 10000 <= moneyNum && moneyNum < 1000000:
        return "万元";
      case 1000000 <= moneyNum && moneyNum < 100000000:
        return "百万元";
      case 100000000 <= moneyNum:
        return "亿元";
      default:
        return "元";
    }
  },
  sumFormater(sumNum = 0) {
    switch (true) {
      case 0 <= sumNum && sumNum < 10000:
        return "个";
      case 10000 <= sumNum && sumNum < 1000000:
        return "万个";
      case 1000000 <= sumNum && sumNum < 100000000:
        return "百万个";
      case 100000000 <= sumNum:
        return "亿个";
      default:
        return "个";
    }
  },
};

export default unitFormater;
