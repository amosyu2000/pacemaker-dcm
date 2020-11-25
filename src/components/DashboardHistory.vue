<template>
  <AppSection>
    <template v-slot:header>History</template>
    <button 
      @click="()=>{setFocusedBundle($store.state.newBundle)}" 
      :focused="!$store.state.focusedBundle._id"
      class="h-flex c-lighter"
    >
      <span>New</span>
      <span class="ml-auto">+</span>
    </button>
    <button 
      v-for="bundle in bundles" 
      :key="bundle._id"
      @click="()=>{setFocusedBundle(bundle)}"
      :focused="$store.state.focusedBundle._id === bundle._id"
    >
      {{ bundle.name }}
    </button>
  </AppSection>
</template>

<script>
import post from '@/utils/post'
import AppSection from '@/components/AppSection'

export default {
  name: "DashboardHistory",
  components: {
    AppSection,
  },
  computed: {
    // Returns the array of bundles from the store, 
    // reversed so that the newest is at the front
    bundles: function() {
      return this.$store.state.bundles
    },
    bundleCount: function() {
      return this.$store.state.bundles.length
    },
  },
  watch: {
    // Updates the newBundle in the store if the amount of bundles increases
    bundleCount: function() {
      const bundles = this.$store.state.bundles
      const newBundle = this.createNewBundleFrom(bundles[0])
      this.$store.commit('set', {newBundle: newBundle})
      this.$store.commit('set', {focusedBundle: newBundle})
    },
  },
  methods: {
    // Sets the focused bundle to the bundle that is passed in
    setFocusedBundle: function (bundle) {
      this.$store.commit('set', {focusedBundle: bundle})
    },
    // Create a new bundle based off of an existing bundle
    createNewBundleFrom: function (bundle) {
      return Object.assign({}, bundle, {
        _id: undefined,
        created_at: undefined,
      })
    },
  },
  mounted: async function() {
    // If the store is empty, request bundles from the API first
    if (this.bundleCount === 0) {
      const response = await post('bundle/getall', {
        id: this.$store.state.user._id,
      })
      if (response.status !== 200) {
          // TODO: do something if cannot connect to network
          return
      }
      this.$store.commit('set', {bundles: response.data.bundles})
    }
  },
}
</script>

<style lang="sass" scoped>
button
  padding: 0.5rem
  margin: 0 0 0.25rem 0
  text-align: left
  white-space: nowrap
  transition: background 0.1s, color 0.1s
  &:hover
    background: $bg-overlay
    color: $color-lighter

button[focused]
  background: $bg-overlay
  color: $color-lighter
</style>