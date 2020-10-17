<template>
  <header class="header">
    <p class="flex-1 font-md font-bold">Welcome, {{ $store.state.user.username }}!</p>
    <p class="flex-1 font-md text-center">{{ currentTime }}</p>
    <div class="flex-1 h-flex align-items-center justify-content-end">
      <InputButton value="Log Out" @click.native="logout"/>
      <IconButton 
        v-if="$route.name==='dashboard'"
        @click.native="()=>{$router.push('settings').catch(err => {})}"
        icon="cog" 
        class="ml-1" 
      />
      <IconButton 
        v-if="$route.name==='settings'"
        @click.native="()=>{$router.push('dashboard').catch(err => {})}"
        icon="columns" 
        class="ml-1" 
      />
    </div>
  </header>
</template>

<script>
import IconButton from '@/components/IconButton.vue'
import InputButton from '@/components/InputButton.vue'

export default {
  name: "NavBar",
  components: {
    IconButton,
    InputButton,
  },
  data: () => ({
    currentTime: null,
  }),
  methods: {
    logout: function() {
      this.$store.commit('reset')
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