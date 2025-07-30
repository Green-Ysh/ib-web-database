const tableFormater = {
  formatEmpty(val) {
    return val || "-";
  },
  formatNoLimitDate(val) {
    if (val === "2999-12-31") {
      return "不限";
    }
    return val;
  },
};

export default tableFormater;
