import { fetchApi } from "@/utils/index";
import { errorCaptured } from "@/utils/commonUtils.js";
import ENV from "@/constants/env";
const BASE_URL = ENV.API_BASE_URL + "api/auth";

// 注册
export const register = (params) => {
  return errorCaptured(fetchApi(`${BASE_URL}/register`, params, "POST"));
};

// 刷新token
export const refreshToken = (params) => {
  return errorCaptured(fetchApi(`${BASE_URL}/refreshtoken`, params, "POST"));
};

// 退出登录
export const logout = (params) => {
  return errorCaptured(fetchApi(`${BASE_URL}/logout`, params, "POST"));
};

// 登录
export const login = (params) => {
  return errorCaptured(fetchApi(`${BASE_URL}/login`, params, "POST"));
};