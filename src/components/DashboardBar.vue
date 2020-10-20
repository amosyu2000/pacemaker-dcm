<template>
<div class="h-flex justify-content-center align-items-center mt-1 mx-1">
  <AppInputIcon 
    @click.native="uploadParameters"
    icon="upload" 
    title="Upload Parameters"
  />
  <span class="mr-1"/>
  <AppInputIcon 
    icon="sync-alt" 
    title="Refresh Ports"
  />
</div>
</template>

<script>
import post from '@/utils/post'
import AppInputIcon from '@/components/AppInputIcon'

export default {
  name: "DashboardBar",
  components: {
    AppInputIcon,
  },
  methods: {
    uploadParameters: async function() {
      // Upload the new bundle to the database
      const response = await post('bundle/addnew', {
        id: this.$store.state.user._id,
        ...this.$store.state.newBundle
      })
      // A successful API call returns the new bundle that was created
      if (response.data.success) {
        const bundles = this.$store.state.bundles
        bundles.push(response.data.bundle)
        this.$store.commit('set', { bundles })
      }
    }
  }
}
</script>