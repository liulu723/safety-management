<template>
    <div class="bg" :style="{'height':height+'rem','position':position,'top':position=='static'?'':'0px'}"></div>
</template>
<script>
export default {
  name:'BSBackground',
  props:{
    height: {
      type:Number,
      default:()=>{
        return 6
      }
    },
    position:{
      type:String,
      default:()=>{
        return 'static'
      }
    }
  }
}
</script>
<style scoped lang="less">
.bg{
  background:url("../public/img/logo_bg.png") no-repeat;
  background-size:100% auto;
  width: 100%;
  z-index: -999
} 
</style>