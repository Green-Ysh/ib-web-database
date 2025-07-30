import { fetchApi } from "@/utils/index";
import { errorCaptured } from "@/utils/commonUtils.js";
import ENV from "@/constants/env";
const BASE_URL = ENV.API_BASE_URL + "sys";

// 登录
export const login = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/login`));
};

// 手机登录
export const phoneLogin = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/phoneLogin`));
};

// 退出登录
export const logout = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/logout`));
};

// 获取用户信息
export const getUserInfo = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/user/getUserInfo`));
};

// 获取系统权限
// 1、查询用户拥有的按钮/表单访问权限
// 2、所有权限
// 3、系统安全模式
export const getPermCode = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/permission/getPermCode`));
};

// 获取图形验证码
export const getInputCode = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/randomImage`));
};

// 获取短信验证码
export const getCaptcha = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/sms`));
};

// 注册
export const register = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/user/register`));
};

// 校验用户
export const checkOnlyUser = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/user/checkOnlyUser`));
};

// SSO登录校验
export const validateCasLogin = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/cas/client/validateLogin`));
};

// 校验手机号
export const phoneVerify = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/user/phoneVerification`));
};

// 修改密码
export const passwordChange = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/user/passwordChange`));
};

// 第三方登录
export const thirdLogin = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/thirdLogin/getLoginUser`));
};

// 第三方短信验证码
export const getThirdCaptcha = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/thirdSms`));
};

// 获取二维码信息
export const getLoginQrcode = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/getLoginQrcode`));
};

// 监控二维码扫描状态
export const getQrcodeToken = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/getQrcodeToken`));
};
