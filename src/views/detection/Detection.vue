<template>
    <div class="detection">  
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
          <van-tabs>
            <van-tab title="业务系统">
              <div class="detectDisplay">
                <img class="imgLeft" src="~@/public/img/icon_management.png" alt="">
              <!-- <img class="imgRight" src="~@/public/img/chevron-right.png" alt=""> -->
              <div class="selectArea">
                
                <!-- <img src="" alt=""> -->
                 <!-- <i class="imgLeft">
                    <img src="~@/public/img/icon_management.png" alt="">
                  </i>
                  <i class="imgRight">
                     <img  src="~@/public/img/chevron-right.png" alt="">
                  </i> -->
                <div class="rightContent">
                 
                  <!-- <div class="imgLeft">
                    <img src="~@/public/img/icon_management.png" alt="">
                  </div>
                  <div class="imgRight">
                    <img  src="~@/public/img/chevron-right.png" alt="">
                  </div> -->
                  
                  <div class="itemList">AAA自主服务系统</div>
                  <div class="itemList">
                    <span>监控实力：</span>
                    <span>异常数：</span>
                  </div>
                  <!-- <van-icon name="arrow" /> -->
                </div>
              </div>
              <router-link :to="{path:'/detection/examlist'}">
                <img class="imgRight" src="~@/public/img/chevron-right.png" alt="" >
              </router-link>
              </div>
              
            </van-tab>
            <van-tab  title="设备系统">
              <div v-for="(item,index) in detectionList" :key="index" class="detectDisplay">
               
                  <img class="imgLeft" :src="item.imgurl" alt="">
                
                <!-- <img class="imgRight" src="~@/public/img/chevron-right.png" alt=""> -->
                <div  class="selectArea"> 
                  <div  class="rightContent">
                    <div class="itemList">{{item.equipment}}</div>
                    <div class="itemList">
                      <span>监控实例：{{item.example}}</span>
                      <span>异常数：{{item.abnormal}}</span>
                    </div>
                  </div>
              </div>
              <router-link :to="{path:'/detection/examlist'}">
                  <img class="imgRight" src="~@/public/img/chevron-right.png" alt="" >
              </router-link>
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
          name:'异常实例数',
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
      ],
      detectionList:[
        {
          equipment:'服务器',
          example:'11',
          abnormal:'3',
          imgurl:require('../../public/img/icon_management.png')
        },
        {
          equipment:'数据库',
          example:'12',
          abnormal:'4',
          imgurl:require('../../public/img/data.png')
        },
        {
          equipment:'存储',
          example:'13',
          abnormal:'5',
          imgurl:require('../../public/img/file.png')
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