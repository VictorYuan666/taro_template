import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
// import { pages } from './navigation';
import "taro-ui/dist/style/index.scss";
import Index from "./pages/index";
import store from "./store";
// import './styles/custom-theme.scss';

import "./app.less";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: [
      "pages/index/index",
      "pages/auth/login/Login",
      "pages/home/home/Home",
      "pages/mine/mine/Mine",
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "taro小程序",
      navigationBarTextStyle: "black",
    },
    tabBar: {
      selectedColor: "#2987FF", //颜色
      list: [
        {
          pagePath: "pages/home/home/Home",
          text: "首页",
          // iconPath: './assets/images/home_inactive_icon.png',
          // selectedIconPath: './assets/images/home_active_icon.png',
        },
        {
          pagePath: "pages/mine/mine/Mine",
          text: "我的",
          // iconPath: './assets/images/mine_inactive_icon.png',
          // selectedIconPath: './assets/images/mine_active_icon.png',
        },
      ],
    },
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

// eslint-disable-next-line react/no-deprecated
Taro.render(<App />, document.getElementById("app"));
