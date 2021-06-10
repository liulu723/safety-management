<template>
  <div class="Approval">
    <base-search></base-search>
    <div class="scroll-list-wrap">
      <cube-scroll
        ref="scroll">
        <div class="tabNav">
          <div class="tabNav-item" @click.once="approving='true'">审批中</div>
          <div class="tabNav-item" @click.once="approved='true'">审批历史</div>
        </div>
        <base-select v-if="approving"></base-select>
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
      approving:false,
      approved:false,
      // result: ['a', 'b'],
      checkList: [],
      options: [
        {
          label: '1',
          value: '1',
          // disabled: true
        },
        {
          label: '2',
          value: '2',
          // disabled: true
        },
        {
          label: '3',
          value: '3',
          // disabled: true
        },
        {
          label: '4',
          value: '4',
          // disabled: true
        }
      ],
      selectColor:'red'
    }
  },
  components:{
    BaseSearch,
    BaseSelect
  }
}
</script>

<style scoped lang="less">
  @import "@/static/css/approval/approval.less";
</style>