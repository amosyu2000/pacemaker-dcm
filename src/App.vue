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
  background-color: $bg-dark
  min-height: 100vh
</style>
