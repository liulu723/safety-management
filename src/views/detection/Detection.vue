<template>
    <div class="mytask">  
      <base-search></base-search>
      <div class="scroll-list-wrap">
        <cube-scroll
          ref="scroll">
          

          <ul class="taskList">
            <li v-for="(item,index) in taskNum" :key="index">
              <span>{{item.name}}</span>
              :
              <span>{{item.count}}</span>
            </li> 
          </ul>
          <van-tabs >
            <van-tab title="业务系统">
              <div class="selectArea">
                <img src="" alt="">
                <div class="rightContent">
                  <div class="imgLeft">
                    <img src="~@/public/img/icon_management.png" alt="">
                  </div>
                  <div class="imgRight">
                    <img  src="~@/public/img/chevron-right.png" alt="">
                  </div>
                  
                  <div class="itemList">AAA自主服务系统</div>
                  <div class="itemList">
                    <span>监控实力：</span>
                    <span>异常数：</span>
                  </div>
              </div>
              </div>
            </van-tab>
            <van-tab title="设备系统">
              <div class="selectArea" v-for="(item,index) in selectList" :key="index">
                <input type="checkbox" class="inputBtn">
                <div class="rightContent">
                  <div class="itemList">{{item.num}}</div>
                  <div class="itemList">当前进度：{{item.process}}</div>
                </div>
            </div>
            </van-tab>
          </van-tabs>
        </cube-scroll>
      </div>
      
    </div>
  
</template>

<script>
import BaseSearch from '@/components/BaseSearch'
import BsBackground from '@/components/BSBackground'

export default {
  name:'Detection',
  data(){
    return{
      taskNum:[
        {
          name:'检测实例',
          count:109
        },
        {
          name:'监控项',
          count:300
        },
        {
          name:'异常实力数',
          count:5
        },
        {
          name:'异常项目数',
          count:20
        }
      ],
       selectList:[
        {
          num:'KTGD00034',
          process:'*******'
        },
        {
          num:'KTGD00034',
          process:'*******'
        },
        {
          num:'KTGD00034',
          process:'*******'
        },{
          num:'KTGD00034',
          process:'*******'
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
  @import "@/static/css/detection/detection.less";
</style>