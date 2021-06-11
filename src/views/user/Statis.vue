<template>
  <div class="statis">
       <base-search></base-search>
        <div class="scroll-list-wrap">
            <cube-scroll
                ref="scroll">
                <div class="echartsInfo">
                  <task-echart></task-echart>  
                  <event-echart></event-echart>
                  <question-echart></question-echart>
                </div>
            </cube-scroll>
        </div>
  </div>
</template>

<script>
import BaseSearch from '@/components/BaseSearch'
import TaskEchart from '@/components/echarts/taskechart'
import EventEchart from '@/components/echarts/eventechart'
import QuestionEchart from '@/components/echarts/questionechart'
export default {
    components:{
        BaseSearch,
        TaskEchart,
        EventEchart,
        QuestionEchart
    },
    


}
</script>

<style scoped lang="less">
  @import "@/static/css/user/statis.less";
</style>

