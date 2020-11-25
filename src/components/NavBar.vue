<template>
  <header class="header">
    <p class="flex-1 font-md font-bold">Welcome, {{ $store.state.user.username }}!</p>
    <p class="flex-1 font-md text-center">{{ currentTime }}</p>
    <div class="flex-1 h-flex align-items-center justify-content-end">
      <AppInputButton value="Log Out" @click="logout"/>
      <AppInputIcon 
        v-if="$route.name==='dashboard'"
        @click="()=>{$router.push('settings').catch(err => {})}"
        icon="cog" 
        title="Settings"
        class="ml-1" 
      />
      <AppInputIcon 
        v-if="$route.name==='settings'"
        @click="()=>{$router.push('dashboard').catch(err => {})}"
        icon="columns" 
        title="Dashboard"
        class="ml-1" 
      />
    </div>
  </header>
</template>

<script>
import AppInputIcon from '@/components/AppInputIcon.vue'
import AppInputButton from '@/components/AppInputButton.vue'

export default {
  name: "NavBar",
  components: {
    AppInputIcon,
    AppInputButton,
  },
  data: () => ({
    currentTime: null,
  }),
  methods: {
    logout: function() {
      this.$router.push('login')
    },
    updateTime: function() {
      this.currentTime = (new Date()).toLocaleTimeString('en-US')
      setTimeout(this.updateTime, 1000)
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