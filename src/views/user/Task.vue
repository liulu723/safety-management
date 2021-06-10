<template>
    <div class="mytask">  
      <base-search></base-search>
      <div class="scroll-list-wrap">
        <cube-scroll
          ref="scroll">
          <bs-background></bs-background>

          <ul class="taskList">
            <li v-for="(item,index) in taskNum" :key="index">
              <span>{{item.name}}</span>
              :
              <span>{{item.count}}</span>
            </li> 
          </ul>
          <div class="notification">
            <img src="~@/public/img/notification.png" alt="">
            <span>消息通知</span>
          </div>
          <div class="eventBtn">
            <van-button class="btnItem" type="info">事件</van-button>
            <van-button class="btnItem" type="info">问题</van-button>
            <van-button class="btnItem" type="info">变更</van-button>
            <van-button class="btnItem" type="info">发布</van-button>
            <van-button class="btnItem" type="info">我的审批</van-button>
            <van-button class="btnItem" type="info">我的报单</van-button>
            <van-button class="btnItem" type="info">统计</van-button>

          </div>
         
        </cube-scroll>
      </div>
      
    </div>
  
</template>

<script>
import BaseSearch from '@/components/BaseSearch'
import BsBackground from '@/components/BSBackground'

export default {
  name:'Task',
  data(){
    return{
      taskNum:[
        {
          name:'本年累计工单数',
          count:1428
        },
        {
          name:'本月累计工单数',
          count:1428
        },
        {
          name:'本周累计工单数',
          count:1428
        },
        {
          name:'本日累计工单数',
          count:1428
        }
      ]
    }
  },
  components:{
  BaseSearch,
  BsBackground

  }

}
</script>

<style scoped lang="less">
  @import "@/static/css/mytask/mytask.less";
</style>