<template>
  <div>
    <header class="header">
      <p class="flex-1 font-bold">Welcome, {{ username }}!</p>
      <p class="flex-1 text-center">{{ currentTime }}</p>
      <div class="flex-1 text-right">
        <InputButton value="Sign out" @click.native="logout"/>
      </div>
    </header>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import InputButton from '@/components/InputButton.vue'

export default {
  name: "Dashboard",
  components: {
    InputButton,
  },
  data: () => ({
    username: Cookies.get('username'),
    id: Cookies.get('_id'),
    currentTime: null,
  }),
  methods: {
    logout: function() {
      Cookies.remove('_id')
      this.$router.push('login')
    },
    updateTime: function() {
      this.currentTime = (new Date()).toLocaleTimeString('en-US')
      setTimeout(this.updateTime, 1000);
    },
  },
  mounted: function() {
    this.updateTime()
  }
}
</script>

<style lang="sass" scoped>
.header
  background: $bg-darkest
  color: $color-lightest
  font-size: $font-sm
  display: flex
  align-items: center
  padding: 0.5rem 1rem
</style>