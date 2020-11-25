<template>
  <BackgroundParticles>
    <header class="header">
      <p class="font-xl c-lightest font-bold">Device Controller-Monitor</p>
      <p class="font-md c-lighter">SFWRENG 3K04 Lab 4 Team 2</p>
    </header>
    <div class="h-flex justify-content-center mb-4 position-relative">
      <div class="header-bottom"></div>
      <div class="card">
        <template v-if="showLoginForm">
          <form class="card-child" @submit="checkLoginForm">
            <p class="font-lg font-bold c-lightest mb-2">Login</p>
            <AppInputField 
              title="Username" 
              v-model="username"
            />
            <AppInputField 
              title="Password" 
              v-model="password" 
              type="password"
            />
            <p class="c-red m-1">{{errorMessage}}</p>
            <AppInputButton value="Log In"/>
          </form>
          <form class="card-child" @submit="toggleForms">
            <p class="font-lg font-bold c-lightest mb-2">Register</p>
            <p>Don't have an account?</p>
            <AppInputButton value="Register" class="mt-2"/>
          </form>
        </template>
        <template v-else>
          <form class="card-child" @submit="toggleForms">
            <p class="font-lg font-bold c-lightest mb-2">Login</p>
            <p>Already have an account?</p>
            <AppInputButton value="Log In" class="mt-2"/>
          </form>
          <form class="card-child" @submit="checkRegistrationForm">
            <p class="font-lg font-bold c-lightest mb-2">Register</p>
            <AppInputField 
              title="Username" 
              v-model="username"
            />
            <AppInputField 
              title="Password" 
              v-model="password" 
              type="password"
            />
            <AppInputField 
              title="Retype Password"
              v-model="retypedPassword" 
              type="password"
            />
            <p class="c-red my-1">{{ errorMessage }}</p>
            <AppInputButton value="Register"/>
          </form>
        </template>
      </div>
    </div>
  </BackgroundParticles>
</template>

<script>
import post from '@/utils/post'
import BackgroundParticles from '@/components/BackgroundParticles.vue'
import AppInputField from '@/components/AppInputField.vue'
import AppInputButton from '@/components/AppInputButton.vue'

export default {
  name: "Login",
  components: {
    BackgroundParticles,
    AppInputField,
    AppInputButton,
  },
  data: () => ({
    // Indicates whether to show the 'Login' or 'Register' side of the card
    showLoginForm: true,

    // Data that is bound to inputs via 'v-model'
    errorMessage: null,
    username: null,
    password: null,
    retypedPassword: null,
  }),
  methods: {
    toggleForms: function(e) {
      e.preventDefault()
      this.showLoginForm = !this.showLoginForm
      this.errorMessage = null
    },
    checkLoginForm: function(e) {
      e.preventDefault()
      if (!this.username || !this.password) {
        this.errorMessage = 'Missing fields.'
        return
      }
      this.login()
    },
    checkRegistrationForm: function(e) {
      e.preventDefault()
      if (!this.username || !this.password || !this.retypedPassword) {
        this.errorMessage = 'Missing fields.'
        return
      }
      else if (this.password !== this.retypedPassword) {
        this.errorMessage = 'Passwords do not match.'
        return
      }
      this.login('register')
    },
    login: async function(loginType = 'login') {
      const response = await post(
        `user/${loginType}`,
        {
          username: this.username,
          password: this.password,
        }
      )

      const data = response.data
      if (!data.success) {
        this.errorMessage = data.reason
        return
      }
      this.$store.commit('set', { user: data })
      this.$store.commit('unshift', {
        logs: {
          message: `User ${data.username} logged in`,
          time: new Date()
        }
      })
      this.$router.push('dashboard')
    }
  },
  mounted: function() {
    if (this.$store.state.isConnected) {
      this.$store.state.connectedPort.close()
    }
    this.$store.commit('reset')
  }
}
</script> 

<style lang="sass" scoped>
.header
  background: $bg-overlay
  text-align: center
  padding: 4rem 2rem 2rem

.header-bottom
  background: $bg-overlay
  border-bottom: $border
  position: absolute
  width: 100%
  height: 4rem
  z-index: 0

.card
  background: $bg-dark
  border: $border
  border-radius: 0.25rem
  box-shadow: $shadow
  display: flex
  padding: 2rem 0
  margin: 0 2rem
  max-width: 50rem
  flex: 1
  position: relative
  z-index: 1
  &::after
    content: "OR"
    color: $color-border
    background: $bg-dark
    position: absolute
    padding: 0.25rem
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

.card-child
  flex: 1 0 0px
  min-width: 0px
  padding: 1rem 4rem
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  text-align: center
  &:first-child
    border-right: $border
</style>