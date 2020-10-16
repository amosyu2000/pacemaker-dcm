<template>
  <div>
    <NavBar/>
    <div class="w-100 text-center my-4 px-2">
      <InputButton value="Delete Account" type="error" @click.native="deleteAccount"/>
      <div v-if="deleteAccountConfirmed" class="c-error mt-2">
        Are you sure? Click the button again to delete your account.
      </div>
    </div>
  </div>
</template>

<script>
import post from '@/utils/post'
import InputButton from '@/components/InputButton.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: "Settings",
  components: {
    InputButton,
    NavBar,
  },
  data: () => ({
    deleteAccountConfirmed: false,
  }),
  methods: {
    deleteAccount: function() {
      if (this.deleteAccountConfirmed) {
        post('user/delete', {
          id: this.$store.state.user._id
        })
        this.$router.push('login')
      }
      else {
        this.deleteAccountConfirmed = true
      }
    },
  },
}
</script>