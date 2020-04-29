import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { navigator } from "@navigation";

function Mine() {
  return (
    <View>
      <AtButton type="primary" onClick={() => navigator.reset("Login")}>
        退出登录
      </AtButton>
    </View>
  );
}

Mine.config = {
  navigationBarTitleText: "我的",
};

export default Mine;
