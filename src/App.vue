<template>
  <div id="app">
    <div id="nav">
     `<cube-button @click="showDialog">show dialog</cube-button>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
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
