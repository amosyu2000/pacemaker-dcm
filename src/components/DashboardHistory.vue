<template>
  <div class="v-flex">
    <header>History</header>
    <button 
      @click="()=>{$store.commit('set', {focusedBundleId: null})}" 
      :focused="!$store.state.focusedBundleId"
      class="h-flex c-lighter"
    >
      <span>New</span>
      <span class="ml-auto">+</span>
    </button>
    <button 
      v-for="bundle in bundles" 
      :key="bundle._id"
      @click="()=>{$store.commit('set', {focusedBundleId: bundle._id})}"
      :focused="bundle._id === $store.state.focusedBundleId"
    >
      {{ bundle.name }}
    </button>
  </div>
</template>

<script>
import post from '@/utils/post'

export default {
  name: "DashboardHistory",
  data: () => ({
    bundles: [],
  }),
  computed: {
    bundleCount: function() {
      return this.$store.state.bundles.length
    }
  },
  watch: {
    // Watches the amount of bundles in the store
    // If the amount of bundles changes, update the local 'bundles' data
    bundleCount: {handler: "setBundles"},
  },
  methods: {
    // Syncs the local 'bundles' data to the 'bundles' in the store
    // If the store is empty, request bundles from the API first
    setBundles: async function() {
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
      this.bundles = this.$store.state.bundles.slice().reverse()
    },
  },
  mounted: function() {
    this.setBundles()
  }
}
</script>

<style lang="sass" scoped>
header
  color: $color-lighter
  font-weight: bold
  display: flex
  align-items: center
  white-space: nowrap
  padding: 0.5rem 0
  margin: 0.5rem
  border-bottom: $border-light

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