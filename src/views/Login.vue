<template>
  <div>
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
            <InputField 
              title="Username" 
              v-model="username"
            />
            <InputField 
              title="Password" 
              v-model="password" 
              type="password"
            />
            <p class="c-error">{{errorMessage}}</p>
            <InputButton value="Log In"/>
          </form>
          <div class="card-child">
            <p class="font-lg font-bold c-lightest mb-2">Register</p>
            <p>Don't have an account?</p>
            <InputButton value="Register" @click.native="toggleForms"/>
          </div>
        </template>
        <template v-else>
          <div class="card-child">
            <p class="font-lg font-bold c-lightest mb-2">Login</p>
            <p>Already have an account?</p>
            <InputButton value="Log In" @click.native="toggleForms"/>
          </div>
          <form class="card-child" @submit="checkRegistrationForm">
            <p class="font-lg font-bold c-lightest mb-2">Register</p>
            <InputField 
              title="Username" 
              v-model="username"
            />
            <InputField 
              title="Password" 
              v-model="password" 
              type="password"
            />
            <InputField 
              title="Retype Password"
              v-model="retypedPassword" 
              type="password"
            />
            <p class="c-error">{{ errorMessage }}</p>
            <InputButton value="Register"/>
          </form>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'
import InputField from '@/components/InputField.vue'
import InputButton from '@/components/InputButton.vue'

export default {
  name: "Login",
  components: {
    InputField,
    InputButton,
  },
  data: () => ({
    showLoginForm: true,
    errorMessage: null,
    username: null,
    password: null,
    retypedPassword: null,
  }),
  methods: {
    toggleForms: function() {
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
      const response = await axios.post(
        `${process.env.VUE_APP_API}/user/${loginType}`,
        qs.stringify({
          licenseKey: process.env.VUE_APP_LICENSE_KEY,
          username: this.username,
          password: this.password,
        })
      )
      if (response.status !== 200) {
        this.errorMessage = 'Could not connect to server.'
        return
      }

      const userData = response.data
      if (!userData.success) {
        this.errorMessage = userData.reason
        return
      }
      ['_id', 'username'].map(key => {Cookies.set(key, userData[key])})
      this.$router.push('dashboard')
    }
  },
}
</script> 

<style lang="sass" scoped>

.header
  background: $bg-darkest
  text-align: center
  padding: 4rem 0 2rem 0

.header-bottom
  background: $bg-darkest
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
  padding: 2rem 1rem
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
  max-width: 25rem
  flex: 1
  padding: 1rem
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  &:first-child
    border-right: $border
</style>