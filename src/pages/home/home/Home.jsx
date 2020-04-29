import Taro from "@tarojs/taro";
import { Text, ScrollView } from "@tarojs/components";

import "./home.scss";

function Home() {
  return (
    <ScrollView scrollY className="page">
      <Text>Home</Text>
    </ScrollView>
  );
}

export default Home;
