<template>
  <div>
    <div class="selectArea" v-for="(item,index) in selectList" :key="index">
      <input type="checkbox" class="inputBtn">
      <div class="rightContent">
        <div class="itemList">{{item.num}}</div>
        <div class="itemList">当前进度：{{item.process}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
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
  }

}
</script>

<style>
  .selectArea{
    display: flex;
    align-items: center;
    border: 1px solid #333;
    margin: 10px;
    padding: 20px;
  }
  .inputBtn{
    flex: 0.2;
  }
  .rightContent{
    flex: 0.8;
    font-size: 30px;
    
  }
  .itemList{
    margin: 20px 0;
  }
</style>