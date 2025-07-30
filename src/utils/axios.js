import axios from "axios";
import ENV from "@/constants/env";

export const HTTP = axios.create({
  baseURL: ENV.PUBLIC_URL,
  withCredentials: true,
  timeout: 10000,
  headers: {
    post: {
      "Content-Type": "application/json",
    },
  },
});

HTTP.defaults.retry = 2;
HTTP.defaults.retryDelay = 500;

HTTP.interceptors.request.use((config) => {
  if (config.method !== "get") {
    config.headers.csrftoken = "";
  }
  return config;
});

function handleParams(api, rawData, rawMethod) {
  const newUrl = api;
  const method = rawMethod.toUpperCase();
  let data = {};
  if (method === "GET") {
    data = { params: rawData };
  }
  switch (method) {
    case "GET":
      data = { params: rawData };
      break;
    case "POST":
    case "PUT":
    case "PATCH":
      data = { data: rawData };
      break;
    default:
      data = { params: rawData };
      break;
  }

  const startTime = new Date().getTime();

  return Promise.resolve({
    url: newUrl,
    method,
    data,
    startTime,
  });
}

// 返回错误码之后的处理
function responseError(response) {
  const { status, data = {} } = response;
  const curHref = window.encodeURIComponent(window.location.href);
  const toastFn = (errorMsg) => {
    // TODO待用toast提示错误信息
  };
  const actions = new Map([
    [400, toastFn.bind(null, "参数错误")],
    [406, toastFn.bind(null, "请求接口失败")],
    [404, toastFn.bind(null, "不存在该数据")],
    [/499|498|500/, toastFn.bind(null, "Ohoo~ 出了点问题")],
    [
      401,
      () => {
        window.location.replace(`${data}&jumpto=${curHref}`);
      },
    ],
  ]);
  let action = [...actions].filter(([key, val]) => {
    return String(status).match ? String(status).match(key) : status;
  });
  action.forEach(([key, value]) => {
    value();
  });
}

function handleFail(option) {
  const { error, reject } = option;
  const { response } = error;
  if (response) {
    responseError(response);
  }
  reject(error);
}

export default (api, rawData = {}, method = "GET") => {
  return handleParams(api, rawData, method).then((options) => {
    return new Promise((resolve, reject) => {
      HTTP({
        withCredentials: true,
        url: options.url,
        method: options.method,
        headers: {
          timezoneoffset: Math.abs(new Date().getTimezoneOffset() / 60),
          locale: "zh_CN",
          post: {
            "Content-Type": "application/json",
          },
        },
        ...options.data,
      }).then(
        (resp) => {
          resolve(resp.data);
        },
        (error) => {
          handleFail({
            error,
            reject,
            options,
          });
        }
      );
    });
  });
};
