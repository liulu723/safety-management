<template>
  <BScroller class="main">
    <base-search></base-search>
    <div class="nav-bar">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler"
      >
      </cube-tab-bar>
    </div>
    <div class="num-detail">
      <img src="@/public/img/logo.png" alt="" />
      <ul>
        <li v-for="(item, index) in numDetail" :key="index">
          <span>{{ item.title }}:{{ item.num }}</span>
        </li>
      </ul>
    </div>
    <div class="userList">
      <ul class="userlist-lb" :style="{ right: userListLB+'%' }">
        <li v-for="(item, index) in userList" :key="index">
          <p>{{ item.title }}</p>
          <span>{{ item.num }}</span>
        </li>
      </ul>
    </div>
    <div class="warningStatistics">
      <p>报警统计：</p>
      <div>
        <ul>
          <li>当日</li>
          <li>昨日</li>
          <li>7日</li>
        </ul>
        <div></div>
      </div>
    </div>
  </BScroller>
</template>

<script>
import BaseSearch from "@/components/BaseSearch";
import BSBackground from "@/components/BSBackground";
export default {
  name: "index",
  data() {
    return {
      userListLB: 0,
      selectedLabelDefault: "当前报警",
      tabs: [
        {
          label: "当前报警",
          icon: "iconfont iconlabagonggaoxiaoxi",
        },
        {
          label: "当前预警",
          icon: "iconfont iconbaojing",
        },
        {
          label: "网咯中断",
          icon: "iconfont iconshandiandianliang",
        },
        {
          label: "我的流程",
          icon: "iconfont iconliucheng",
        },
      ],
      numDetail: [
        {
          title: "报警",
          num: "4",
        },
        {
          title: "预警",
          num: "2",
        },
        {
          title: "工单",
          num: "2",
        },
        {
          title: "中断",
          num: "2",
        },
      ],
      userList: [
        {
          title: "CPU使用率",
          num: "TOPN1",
        },
        {
          title: "内存使用率",
          num: "TOPN2",
        },
        {
          title: "进网使用率",
          num: "TOPN3",
        },
        {
          title: "CPU使用率",
          num: "TOPN1",
        },
      ],
    };
  },
  mounted(){
    this.show()
  },
  methods: {
    clickHandler(label) {
      console.log(label);
    },
    changeHandler(label) {
      console.log(label);
    },
    show() {
      setInterval(() => {
        this.userListLB = (this.userListLB+1)%34
        if(this.userListLB==0){
          this.userList[0] =this.userList[1]
          let obj = this.userList.shift()
          this.userList.push(obj)
        }
      }, 100);
    },
  },
  components: {
    BaseSearch,
    "bs-background": BSBackground,
  },
};
</script>
<style scoped lang="less">
@import "@/static/css/index/index.less";
.userlist {
  position: relative;
  overflow: hidden;
}
.userlist-lb {
  position: relative;
}
</style>
