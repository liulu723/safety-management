<template>
  <div id="app">
    <!-- <div id="nav">
     <cube-button @click="showDialog">show dialog</cube-button>
    </div> -->
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from './components/Foot.vue'
export default {
  components: { Foot },
  Comment:{
    Foot
  },
   methods: {
      showDialog() {
        this.$createDialog({
          type: 'alert',
          title: 'Alert',
          content: 'dialog content'
        }).show()
      } 
    }
} 
</script>
<style>
@import './assets/reset.css';
</style>
