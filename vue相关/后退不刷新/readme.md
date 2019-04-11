(```)
  <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view>
(```)
(```)
  {
    path: "journal",
    name: "门诊日志",
    meta: {
      title: "门诊日志",
      keepAlive: true, // 此组件需要被缓存
    },
    component: () =>
      require.ensure(
        [],
        () => require("@/views/DataStatistics/journal"),
        "DataStatistics"
    )
  }
(```)
(```)
ar isBack = true;
export default {
  beforeRouteEnter(to, from, next) {
    if (from.path == "/DataStatistics/outpatientDetail") {
      isBack = true;
    } else {
      isBack = false;
    }
    next();
  },
  created() {
    this.isFirstEnter = true;
    // 只有第一次进入或者刷新页面后才会执行此钩子函数
    // 使用keep-alive后（2+次）进入不会再执行此钩子函数
    // this.getList();
    // console.log("加载");
  },
  activated() {
    if (!isBack || this.isFirstEnter) {
      this.page.pageindex = 1;
      this.search = "";
      this.order_type = "0";
      this.query(); //初始化搜索条件
    }
    this.isFirstEnter = false;
  },

  data() {
    return {
      isFirstEnter: false, // 是否第一次进入，默认false
    }
  }
}
(```)