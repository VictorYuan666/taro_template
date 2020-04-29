import Taro from "@tarojs/taro";

// 注意key不要重复
const routerConfig = [
  { key: "Index", url: "pages/index/index" },
  { key: "Login", url: "pages/auth/login/Login" },
  { key: "Home", url: "pages/home/home/Home" },
  { key: "Mine", url: "pages/mine/mine/Mine" },
];

const pages = routerConfig.map((item) => item.url);

function getRouterUrl(page, params) {
  const filterRouter = routerConfig.filter((item) => item.key == page);
  if (filterRouter.length == 0) {
    console.log("没有该路由");
    return;
  }
  let url = "/" + filterRouter[0].url;
  if (typeof params === "object") {
    const paramsStr = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&");
    url = `${url}?${paramsStr}`;
  }
  console.log(url);
  return url;
}
const navigator = {
  push: function (page, params) {
    Taro.navigateTo({
      url: getRouterUrl(page, params),
    });
  },
  // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
  pop: function (delta) {
    if (typeof delta == "number") {
      console.log("delta必须是number");
      return;
    }
    Taro.navigateBack(delta);
  },
  reset: function (page, params) {
    Taro.reLaunch({
      url: getRouterUrl(page, params),
    });
  },
  //关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
  replace: function (page, params) {
    Taro.redirectTo({
      url: getRouterUrl(page, params),
    });
  },
  // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，路径后不能带参数
  switchTab: function (page) {
    Taro.switchTab({
      url: getRouterUrl(page),
    });
  },
  getCurrentPageName: function () {
    const currentPages = Taro.getCurrentPages();
    let currentPage = currentPages[currentPages.length - 1];
    let currentUrl = currentPage.route;
    const pageName = routerConfig.filter((item) => item.url == currentUrl)[0]
      .key;

    return pageName;
  },
};

export { routerConfig, pages, navigator };
