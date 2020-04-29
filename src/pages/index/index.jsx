import Taro, { useEffect } from "@tarojs/taro";
import { useSelector, useDispatch } from "@tarojs/redux";
import { View, Text, Button } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { navigator } from "@navigation";

import "./index.scss";

function Index() {
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    init();
  }, []);

  async function init() {
    const token = Taro.getStorageSync("token");
    console.log(token);
    // if (!token) {
    navigator.reset("Login");
    // } else {
    //   navigator.switchTab('Home');
    // }
  }

  return (
    <View className="index">
      <Text>Hello world!{app.num}</Text>
      <Button onClick={dispatch.app.add}>+</Button>
      <Button onClick={dispatch.app.minus}>-</Button>
      <AtButton onClick={() => navigator.switchTab("Home", { a: "2" })}>
        首页
      </AtButton>
    </View>
  );
}

// @connect(
//   ({ app }) => ({
//     app,
//   }),
//   (dispatch) => {
//     return {
//       add: dispatch.app.add,
//       minus: dispatch.app.minus,
//     };
//   }
// )
// class Index extends Component {
//   // config = {
//   //   navigationBarTitleText: '首页',
//   // };

//   componentWillMount() {}

//   componentDidMount() {}

//   componentWillUnmount() {}

//   componentDidShow() {}

//   componentDidHide() {}

//   render() {
//     return (
//       <View className="index">
//         <Text>Hello world!{this.props.app.num}</Text>
//         <Button onClick={this.props.add}>+</Button>
//         <Button onClick={this.props.minus}>-</Button>
//         <AtButton onClick={() => navigator.switchTab('Home', { a: '2' })}>首页</AtButton>
//       </View>
//     );
//   }
// }

export default Index;
