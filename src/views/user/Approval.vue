<template>
  <div class="Approval">
    <base-search></base-search>
    <div class="scroll-list-wrap">
      <cube-scroll
        ref="scroll">
        <!-- <div class="tabNav">
          <div class="tabNav-item" @click.once="approving='true'">审批中</div>
          <div class="tabNav-item" @click.once="approved='true'">审批历史</div>
        </div> -->
         <van-tabs>
            <van-tab title="业务系统">
              <base-select></base-select>
            </van-tab>
            <van-tab  title="设备系统">
              
            </van-tab>
          </van-tabs>
        
        <!-- <base-select></base-select> -->
      </cube-scroll>
    </div>
    
  </div>
</template>

<script>
import BaseSearch from '@/components/BaseSearch'
import BaseSelect from '@/components/BaseSelect'
export default {
  name:'Approval',
  data(){
    return{
    }
  },
  components:{
    BaseSearch,
    BaseSelect
  }
}
</script>

<style scoped lang="less">
  @import "@/static/css/user/approval.less";
 
</style>