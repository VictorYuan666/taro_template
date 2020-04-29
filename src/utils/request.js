import Taro from "@tarojs/taro";
import Constants from "@constants";

function request(url, data = {}, method = "GET") {
  return new Promise(function (resolve, reject) {
    Taro.request({
      url: Constants.BASE_URL + url,
      data: data,
      method: method,
      header: {
        "Content-Type": "application/json",
        token: Taro.getStorageSync("token"),
      },
      success: function (res) {
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject(res.errMsg);
        }
      },
      fail: function (err) {
        reject(err);
      },
    });
  });
}

const get = (url, data) => {
  return request(url, data, "GET");
};

const post = (url, data) => {
  return request(url, data, "POST");
};

export { get, post };
