const ENV = process.env.NODE_ENV || "development";

const API_BASE_URL = {
  development: "http://192.168.66.107:8090/",
  production: "/",
};

const PUBLIC_URL = {
  development: "/",
  production: "/",
};

module.exports = {
  API_BASE_URL: API_BASE_URL[ENV],
  PUBLIC_URL: PUBLIC_URL[ENV],
};
