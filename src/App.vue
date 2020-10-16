<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    key: process.env.VUE_APP_LICENSE_KEY
  })
}
</script>

<style lang="sass">
#app
  height: 100vh
  min-width: 480px
  background: $bg-darker
</style>
