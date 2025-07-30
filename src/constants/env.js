const ENV = process.env.NODE_ENV || "development";

const API_BASE_URL = {
  development: "http://10.104.129.78:8080/",
  production: "/",
};

const PUBLIC_URL = {
  development: "/",
  production: "/",
};

const SSO_URL = {
  development: "http://10.104.129.78:8080/",
  production: "http://10.104.129.78:8080/",
};

export default {
  API_BASE_URL: API_BASE_URL[ENV],
  PUBLIC_URL: PUBLIC_URL[ENV],
  SSO_URL: SSO_URL[ENV],
};
