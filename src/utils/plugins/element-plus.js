import { ElButton } from "element-plus";

export default (app) => {
  const components = {
    ElButton,
  };

  Object.keys(components).forEach((key) => {
    app.use(components[key]);
  });
};
