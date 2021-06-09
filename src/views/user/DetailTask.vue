<template>
  <div class="detailtask">
    <base-search></base-search>
    <div class="taskDisplay">
      <van-row type="flex" class="lineDisplay"> 
          <van-col span="4">单号：</van-col>
          <van-col span="20">KTGD0034</van-col>     
      </van-row > 
      <van-row type="flex" class="lineDisplay">  
          <van-col span="4">进度条：</van-col>
          <van-col span="20">************</van-col>     
      </van-row>
    </div>
    <div style="height: 0.5rem;width: 100%;background-color:#f7f7f7"></div>
    <!--物流跟踪-->
    <div style="padding-bottom: 0.5rem;">
      <div class="bg-white" style="width: 92%; margin-left: 4%;margin: auto;padding-left: 15px;padding-right: 15px;">
        <!-- <div style="font-size: 1.2rem;color: #111111;">物流跟踪物流跟踪</div> -->
        <div>
          <div class="track-rcol">
            <div class="track-list">
              <ul>
                <div v-for="(item,index) in logisticsList" :key="index">
                  <li class="first" v-if="index===0">
                    <!-- <span class="time">{{item.messageDate}}</span> -->
                    
                    <div class="itemContent"> 
                      <i class="node-icon"></i>
                      <span class="txt">{{item.message}}</span>
                      <span class="time">{{item.messageDate}}</span>
                    </div>
                    
                  </li>
                  <li v-if="index > 0 && index !== logisticsList.length-1">
                    <div class="itemContent">
                      <i class="node-icon"></i>
                      <span class="txt">{{item.message}}</span>
                      <span class="time">{{item.messageDate}}</span>
                    </div>
                  </li>
                  <li v-if="index === logisticsList.length-1" class="finall">
                    <div class="itemContent">
                      <i class="div-spilander"></i>
                      <i class="node-icon"></i>
                      <span class="txt">{{item.message}}</span>
                      <span class="time">{{item.messageDate}}ss</span>
                      </div>
                  </li>
                </div>
              </ul>K=
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSearch from '@/components/BaseSearch'

export default {
name:'etailTask',
  data(){
     return{
       logisticsList: [
        {
          message: '1包裹已签收，感谢您使用顺丰快递服务，期待下次继续为您服务！',
          messageDate: '2016-03-10 18:07:15'
        },
        {
          message: '2包裹已签收，感谢您使用顺丰快递服务，期待下次继续为您服务！',
          messageDate: '2016-03-10 18:07:15'
        },
        {
          message: '3包裹已签收，感谢您使用顺丰快递服务，期待下次继续为您服务！',
          messageDate: '2016-03-10 18:07:15'
        },
        {
          message: '4包裹已签收，感谢您使用顺丰快递服务，期待下次继续为您服务！',
          messageDate: '2016-03-10 18:07:15'
        }
      ]
     }
  },  
  components:{
    BaseSearch
  }

}
</script>

<style scoped lang="less"> 
  @import "@/static/css/detailtask/detailtask.less";
</style>