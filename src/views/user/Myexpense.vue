<template>
  <div class="myexpense">
    <base-search></base-search>
    <div class="scroll-list-wrap">
        <cube-scroll
            ref="scroll">
            <van-tabs  sticky>
                <van-tab v-for="(item,index) in selectList" :key="index" :title="titles[index]">
                    <div class="rightContent">
                        <div class="itemList">{{item.num}}</div>
                        <div class="itemList">当前进度：{{item.process}}</div>
                    </div>
                </van-tab>
            </van-tabs>
            
        </cube-scroll>
      </div>
  </div>
</template>

<script>
import BaseSearch from '@/components/BaseSearch'

export default {
    components:{
        BaseSearch
    },
    data(){
      return{
          approving:false,
          approved:false,
          selectList:[
        {
          num:'KTGD00034',
          process:'*******'
        },
        {
          num:'KTGD00035',
          process:'*******'
        },
        {
          num:'KTGD00036',
          process:'*******'
        },{
          num:'KTGD00037',
          process:'*******'
        },
        {
          num:'KTGD00038',
          process:'*******'
        }
      ],
      titles:['审批中','处理中','已完成','草稿','全部']
      }
    }
}
</script>

<style lang="less" scoped>
  @import "@/static/css/myexpense/myexpense.less";

</style>

