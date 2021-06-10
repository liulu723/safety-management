<template>
  <div class="home">
    <cube-input v-model="value" placeholder="快速搜索"></cube-input>
    <div class="box">
      <i class="iconfont iconjianchajihua"></i>
      <span>搜索</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseSearch",
  data() {
    return {
      value: "",
    };
  },
};
</script>
<style lang="less" scoped>
.home {
  display: flex;
  padding: 0.2rem 0.2rem;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}
.box {
  width: 2.2rem;
  color: white;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
  background-color: @mianBlueColor;
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  position: relative;
}
i {
  font-size: 38px;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
}
.cube-input {
  flex-grow: 1;
}
/deep/ .cube-input-field {
  padding-left: 0.2rem;
  height: 1rem;
  line-height: 1rem;
  padding-right: 60px;
  box-sizing: border-box;
}
span {
  font-size: 30px;
  position: relative;
  left: 20px;
}
</style>