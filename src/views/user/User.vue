<template>
  <BScroller
    :handleToScroll="handleToScroll"
    :handleToTouchEnd="handleToTouchEnd"
    class="main"
  >
    <bs-background></bs-background>
    <div class="user-info">
      <img src="@/public/img/logo.png" alt="" class="user-bg" />
      <div>
        <div class="user-info-top">
          <p>{{ userInfo.name }}</p>
          <span>{{ userInfo.label }}</span>
        </div>
        <div class="user-company-bottom">
          <span>{{ userInfo.company }}</span>
          |
          <span>{{ userInfo.companyName }}</span>
        </div>
      </div>
    </div>
    <ul class="item-list">
      <li
        v-for="(item, index) in itemList"
        :key="index"
        :style="{ 'margin-bottom': item.mb ? item.mb : '1px' }"
      >
        <router-link :to="{ path: item.link }">
          <i :class="['iconfont', item.icon]"></i>
          <p>{{ item.title }}</p>
          <span
            class="info-no"
            :style="{ display: item.infoNo ? 'inline-block' : ' none' }"
            >{{ item.infoNo }}</span
          >
          <i class="cubeic-arrow"></i>
        </router-link>
      </li>
    </ul>
    <cube-button @click="logout" class="logout">退出登录</cube-button>
  </BScroller>
</template>
<script>
import BSBackground from '@/components/BSBackground'
export default {
  name: "User",
  data() {
    return {
      itemList: [
        {
          icon: "iconkehu",
          title: "我的工单",
          infoNo: "",
          link: "mytask",
        },
        {
          icon: "iconlianxiren",
          title: "我的报销",
          infoNo: "",
          link: "",
        },
        {
          icon: "iconricheng",
          title: "工单详情",
          infoNo: "",
          link: "/detailtask",
        },
        {
          icon: "iconiconfontmima",
          title: "工单申报",
          infoNo: "",
          link: "",
        },
        {
          icon: "iconguanyuwomen",
          title: "我的审批",
          infoNo: "",
          mb: "",
          link: "/myapproval",
        },
        {
          icon: "iconjianchajihua",
          title: "统计",
          infoNo: "",
          mb: "12px",
          link: "",
        },
        {
          icon: "iconxiaoxi",
          title: "我的消息",
          infoNo: "3",
          link: "/index",
        }
      ],
      userInfo: {
        name: "王亚峰",
        label: "区域经理",
        company: "深圳分公司",
        companyName: "上海晓新科技有限公司",
      },
    };
  },
  mounted() {
    console.log(this.$store.commit["changeState"]);
  },
  methods: {
    handleToDetail() {
      console.log("handleToDetail");
    },
    handleToScroll(pos) {
      if (pos.y > 30) {
        this.pullDownMsg = "正在更新中...";
      }
    },
    handleToTouchEnd() {},
    logout() {
      this.$createDialog({
        type: "confirm",
        title: "确定退出登录？",
        icon: "cubeic-alert",
        confirmBtn: {
          text: "确定",
          active: true,
          disabled: false,
        },
        cancelBtn: {
          text: "取消",
          active: true,
          disabled: false,
        },
        onConfirm: () => {
          // this.$store
          console.log(this.$store);
          this.$store._mutations["changeLoginState"][0](false);
          this.$router.push("/login");
        },
        onCancel: () => {},
      }).show();
    },
  },
  components:{
    'bs-background':BSBackground
  }
};
</script>
<style scoped lang="less">
@import "@/static/css/user/user.less";
</style>