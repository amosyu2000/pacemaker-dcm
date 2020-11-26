<template>
  <div>
    <NavBar/>
    <div class="p-1">
      <AppSection>
        <template v-slot:header>Delete Account</template>
        <form @submit="checkDeleteForm">
          <AppInputField title="Administrator Key" type="password" v-model="adminKey"/>
          <AppInputButton value="Delete Account" type="error" class="mt-2"/>
          <div class="c-red mt-2">
            {{ errorMessage }}
          </div>
        </form>
      </AppSection>
    </div>
  </div>
</template>

<script>
import post from '@/utils/post'
import AppInputButton from '@/components/AppInputButton.vue'
import AppInputField from '@/components/AppInputField.vue'
import AppSection from '@/components/AppSection.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: "Settings",
  components: {
    AppInputButton,
    AppInputField,
    AppSection,
    NavBar,
  },
  data: () => ({
    adminKey: null,
    errorMessage: null,
    deleteAccountConfirmed: false,
  }),
  methods: {
    checkDeleteForm: function(e) {
      e.preventDefault()
      if (!this.adminKey) {
        this.errorMessage = 'Missing fields.'
        return
      }
      this.deleteAccount()
    },
    deleteAccount: async function() {
      if (!this.deleteAccountConfirmed) {
        this.deleteAccountConfirmed = true
        this.errorMessage = 'Are you sure? Click the button again to delete your account.'
        return
      }

      const response = await post('admin/deleteuser', {
        adminKey: this.adminKey,
        id: this.$store.state.user._id
      })
      const data = response.data
      if (!data.success) {
        this.deleteAccountConfirmed = false
        this.errorMessage = data.reason
      }
      else {
        this.$router.push('login')
      }
    },
  },
}
</script>

<style lang="sass" scoped>
form
  display: flex
  flex-direction: column
  align-items: center
  padding: 1rem 0
</style>