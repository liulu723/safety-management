<template>
  <div class="wrapper" ref="wrapper">
    <!-- solt 插槽实现内容分发 -->
    <div class="top" :style="{ display: topShow ? 'block' : 'none' }"></div>
    <slot></slot>
    <div class="bottom" :style="{ display: bottomShow ? 'block' : 'none' }"></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "BScroller",
  props: {
    handleToScroll: {
      type: Function,
      default: function () {},
    },
    handleToTouchEnd: {
      type: Function,
      default: function () {},
    },
    topShow: {
      type: Boolean,
      default:()=>{
        return false
      },
    },
    bottomShow: {
      type: Boolean,
      default:()=>{
        return true
      } ,
    },
  },
  data() {
    return {
    };
  },
  mounted() {
    var scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      probeType: 1,
      click: true
    });
    this.scroll = scroll;
    scroll.on("scroll", (pos) => {
      this.handleToScroll(pos);
    });

    scroll.on("touchEnd", (pos) => {
      console.log("touchEnd");
      this.handleToTouchEnd(pos);
    });
  },
  methods: {
    toScrollTop(y) {
      this.scroll.scrollTo(0, y);
    },
  },
};
</script>
<style scoped>
.wrapper {
  height: 100%;
}
.top {
  width: 100%;
  height: 1.7rem;
}
.bottom {
  width: 100%;
  height: 1.7rem;
}
</style>