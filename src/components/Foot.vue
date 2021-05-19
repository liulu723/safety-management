<template>
  <div
    class="footer border-top-1px"
    :style="{ display: isLogin ? 'flex' : 'none' }"
  >
    <router-link
      v-for="(item, i) in footerClass"
      :key="i"
      :to="item.link"
      @click.native="select()"
    >
      <i :class="item.class"></i>
      <span>{{ item.name }}</span>
    </router-link>
  </div>
</template> 
<script>
export default {
  name: "Foot",
  data() {
    return {
      footList: [
        {
          name: "数据统计",
          icon: "iconshouyexuanzhong",
          selectIcon: "iconshouyebeifen",
          link: "/statistics",
        },
        {
          name: "客户公司",
          icon: "iconbaojing",
          selectIcon: "iconbj",
          link: "/company",
        },
        {
          name: "",
          icon: "icondingwei1",
          selectIcon: "icondingwei",
          link: "/index",
        },
        {
          name: "用户申请",
          icon: "icondaiban",
          selectIcon: "icondaiban1",
          link: "/apply",
        },
        {
          name: "个人中心",
          icon: "iconwode",
          selectIcon: "iconlianhe4",
          link: "/user",
        },
      ],
      index: 1,
    };
  },
  created() {},

  mounted() {
    this.select();
  },
  computed: {
    footerClass() {
      let arr = this.footList.map((item, index) => {
        item.class =
          "iconfont " + (index === this.index ? item.selectIcon : item.icon);
        return item;
      });
      return arr;
    },
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  watch: {
    $route() {
      this.select();
    },
  },
  methods: {
    select() {
      let routeSplit = this.$route.fullPath.split("/");
      let index = ["statistics", "company", "index", "apply", "user"].indexOf(
        routeSplit[1]
      );
      this.index = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  height: 1.5rem;
  font-size: 18px;
  background-color: #fff;
  z-index: 100;
  a {
    width: 100%;
    display: block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    span {
      margin-top: 5px;
    }
  }
}
</style>