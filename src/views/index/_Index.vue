<template>
  <div class="home">
    <bs-background position="fixed"></bs-background>
    <cube-tab-bar v-model="currentLabel" show-slider>
      <cube-tab
        v-for="(item, index) in labels"
        :label="item.label"
        :key="index"
      >
      </cube-tab>
    </cube-tab-bar>
    <cube-tab-panels v-model="currentLabel">
      <cube-tab-panel
        v-for="(item, index) in labels"
        :label="item.label"
        :key="index"
      >
        <keep-alive :max="1">
          <component :is="item.component" :key="index"></component>
          <!-- <Grade v-if="item.component=='Grade'"></Grade>
          <School v-if="item.component=='School'"></School>
          <User v-if="item.component=='User'"></User>
          <UserList v-if="item.component=='UserList'"></UserList> -->
        </keep-alive>
      </cube-tab-panel>
    </cube-tab-panels>
    <!--  -->
  </div>
</template>

<script>
import BSBackground from "@/components/BSBackground";
import School from "./School";
import User from "./User";
import UserList from "./UserList";
import Grade from "./Grade.vue";
export default {
  name: "_index",
  data() {
    return {
      labels: [
        {
          label: "新增",
          component: "UserList",
        },
        {
          label: "用户",
          component: "User",
        },
        {
          label: "班级",
          component: "Grade",
        },
        {
          label: "整校",
          component: "School",
        },
      ],
      currentLabel: "新增",
    };
  },
  created() {},
  methods: {
    changeHandler(e) {
      this.current = e;
    },
  },
  components: {
    "bs-background": BSBackground,
    Grade,
    School,
    User,
    UserList,
  },
};
</script>
<style scoped lang='less'>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>