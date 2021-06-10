<<<<<<< HEAD
<template>
  <BScroller class="main">
    <base-search></base-search>
    <div class="netDetail">
      <p>{{ netAddress }}</p>
      <ul>
        <li v-for="(item, index) in netDetail" :key="index">
          <div class="title">{{ item.title }}</div>
          <img :src="item.imgSrc" alt="" />
        </li>
      </ul>
    </div>
  </BScroller>
</template>
<script>
import BaseSearch from "@/components/BaseSearch";
import BSBackground from "@/components/BSBackground";
export default {
  name: "Call",
  data() {
    return {
      netAddress: "192.168.23.22",
      netDetail: [
        {
          title: "CUP",
          imgSrc: "",
        },
        {
          title: "内存",
          imgSrc: "",
        },
        {
          title: "网络(进)",
          imgSrc: "",
        },
        {
          title: "网络(出)",
          imgSrc: "",
        },
        {
          title: "JVM-新生代",
          imgSrc: "",
        },
        {
          title: "JVM-老年代",
          imgSrc: "",
        },
      ],
    };
  },
  components: {
    BaseSearch,
    "bs-background": BSBackground,
  },
};
</script>
<style scoped lang="less">
@import "@/static/css/call/call.less";
</style>
=======
<template>
  <div>
    报警
  </div>
</template>
<script>
export default {
  name:'Call'
}
</script>
>>>>>>> a12425c58f240d1771b08f3a97b5d99a6a2c454e
