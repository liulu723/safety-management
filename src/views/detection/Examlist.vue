<template>
    <div class="examlist">  
      <base-search></base-search>
      <div class="scroll-list-wrap">
        <cube-scroll
          ref="scroll">
             <div v-for="(item,index) in detectionList" :key="index" class="detectDisplay">
                <img class="imgLeft" :src="item.imgurl" alt="">
                <!-- <img class="imgRight" src="~@/public/img/chevron-right.png" alt=""> -->
                <div  class="selectArea"> 
                  <div  class="rightContent">
                    <div class="itemList">{{item.equipment}}</div>
                    <div class="itemList">
                      <span>监控实力：{{item.example}}</span>
                      <span>异常数：{{item.abnormal}}</span>
                    </div>
                  </div>
                </div>
                <img class="imgRight" src="~@/public/img/chevron-right.png" alt="">
            </div>  
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
  @import "@/static/css/examlist/examlist.less";
</style>