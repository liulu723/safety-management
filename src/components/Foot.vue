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
      :style="{'color':i==index?'rgb(0, 121, 254)':'rgb(126, 140, 141)'}"
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
          name: "首页",
          icon: "iconshouyexuanzhong",
          selectIcon: "iconshouyebeifen",
          link: "/index",
        },
        {
          name: "报警",
          icon: "iconbaojing",
          selectIcon: "iconbj",
          link: "/call",
        },
        {
          name: "检测",
          icon: "iconjiance",
          selectIcon: "iconjiancebaogao",
          link: "/detection",
        },
        {
          name: "我的",
          icon: "iconwode",
          selectIcon: "iconlianhe4",
          link: "/user",
        },
      ],
      index: 0,
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
      let index = ["index","call", "detection",  "user"].indexOf(
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
  position: fixed;
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
    i{
      font-size: 36px;
    }
  }
}
</style>