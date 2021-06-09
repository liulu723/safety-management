<template>
  <div>
    <base-search></base-search>
    <base-select></base-select>
  </div>
</template>

<script>
import BaseSearch from '@/components/BaseSearch'
import BaseSelect from '@/components/BaseSelect'
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
    BaseSearch,
    BaseSelect
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