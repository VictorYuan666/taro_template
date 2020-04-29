import Taro from "@tarojs/taro";
// import { useSelector, useDispatch } from '@tarojs/redux';
import { View, Image, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { navigator } from "@navigation";
import { Img } from "@assets";

import "./login.scss";

function Login() {
  function commit() {
    Taro.setStorageSync("token", "xxx");
    navigator.switchTab("Home", { a: 1 });
  }

  return (
    <View className="container">
      <Image src={Img.wechat} className="logo" />
      <Text className="title">欢迎使用Taro</Text>

      <AtButton className="loginBtn" type="primary" onClick={commit}>
        登录
      </AtButton>
    </View>
  );
}

Login.config = {
  navigationBarTitleText: "登录",
};

export default Login;
