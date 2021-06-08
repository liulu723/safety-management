<template>
  <div>
    <base-search></base-search>
    <div class="approvalList">
       <!-- <van-row type="flex" class="lineDisplay"> 
          <van-col span="4">单号：</van-col>
          <van-col span="20">KTGD0034</van-col>     
      </van-row >  -->
       <!-- <van-checkbox-group v-model="result">
          <van-checkbox name="a">复选框 a</van-checkbox>
          <van-checkbox name="b">复选框 b</van-checkbox>
       </van-checkbox-group> -->
       <cube-checkbox-group v-model="checkList" :options="options" shape="square" checked-color="selectColor"/>
    </div>
  </div>
</template>

<script>
import BaseSearch from '@/components/BaseSearch'

export default {
  data(){
    return{
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
    BaseSearch
  }
}
</script>

<style scoped lang="less">
  .approvalList{
    padding: 20px;
  }
  .cube-checkbox-group{
    padding: 30px;
  }
   /deep/ .cube-checkbox-label{
     padding-left: 50px;
    }
</style>