import { init } from "@rematch/core";
import immerPlugin from "@rematch/immer";
import updatedPlugin from "@rematch/updated";
import { createLogger } from "redux-logger";
import createLoadingPlugin from "@rematch/loading";
import models from "./models";

const middlewares = [createLogger()];
const store = init({
  models,
  middlewares,
  plugins: [
    immerPlugin(),
    updatedPlugin(), // 在一定的时间段内防止频繁的获取请求
    createLoadingPlugin(),
  ],
});

export default store;
