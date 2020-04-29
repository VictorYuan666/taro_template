export default {
  state: {
    amount: "",
    num: 0,
  },
  reducers: {
    add(state) {
      state.num += 1; // 使用了immer可以直接修改对象返回的不可变数据
      return state;
    },
    minus(state) {
      state.num -= 1;
      return state;
    },
  },
  effects: {
    async asyncAdd() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.add();
    },
  },
};
