<template>
  <div>
    <header class="header">
      <p class="flex-1">Welcome, {{ username }}!</p>
      <p class="flex-1">{{ currentTime }}</p>
    </header>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: "Dashboard",
  data: () => ({
    username: Cookies.get('username'),
    id: Cookies.get('_id'),
    currentTime: null,
  }),
  methods: {
    updateTime: function() {
      this.currentTime = this.getTime()
      setTimeout(this.updateTime, 1000);
    },
    getTime: function() {
      return (new Date()).toLocaleTimeString('en-US')
    },
  }
}
</script>

<style lang="sass" scoped>
.header
  background: $bg-darkest
  color: $color-lightest
  display: flex
  padding: 1rem
</style>