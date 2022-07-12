import zqwInput from "./zqwInput/zqwInput.vue";

const coms = [zqwInput];

// 批量组件注册
const install = function (Vue) {
  coms.forEach((com) => {
    Vue.component(com.name, com);
  });
};

export default install; // 这个方法以后再使用的时候可以被use调用