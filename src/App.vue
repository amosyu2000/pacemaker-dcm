<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created: function() {
    // If there is no user logged in, redirect to the login page before mounting
    // Also check if the app is already on the login page to avoid redundancy
    if (this.$store.state.user._id === undefined && this.$route.name !== 'login') {
      this.$router.push('/login')
    }
  },
}
</script>

<style lang="sass">
#app
  height: 100%
  background: $bg-darker
</style>
