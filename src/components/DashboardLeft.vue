<template>
  <div class="h-100 w-100 h-flex">
    <div class="body flex-1 mr-1">
      <div class="v-flex">
        <header>History</header>
        <button 
          @click="()=>{setFocusedBundle({})}" 
          :focused="!focusedBundle.created_at"
          class="h-flex c-lighter"
        >
          <span>New</span>
          <span class="ml-auto">+</span>
        </button>
        <button 
          v-for="bundle in bundles.slice().reverse()" 
          :key="bundle._id"
          @click="()=>{setFocusedBundle(bundle)}"
          :focused="bundle._id === focusedBundle._id"
        >
          {{ bundle.name }}
        </button>
      </div>
    </div>
    <div class="body flex-3 ml-1">
      <header>
        <span>{{ focusedBundle.name || "Set New Parameters"}}</span>
        <span v-if="focusedBundle.created_at" class="ml-auto c-light font-normal">
          {{ (new Date(focusedBundle.created_at)).toLocaleString() }}
        </span>
      </header>
      <template v-if="focusedBundle.created_at">
        <fieldset disabled="disabled" class="m-1">
          <InputField
            v-for="parameter in focusedBundleMode.parameters"
            :key="parameter.id"
            :value="focusedBundle[parameter.id]"
            class="input"
          >
            <span class="pr-2">{{ parameter.name }}</span><br/>
            <i class="font-xs">{{ parameter.id }}</i>
          </InputField>
        </fieldset>
      </template>
    </div>
  </div>
</template>

<script>
import mode from '@/utils/mode'
import post from '@/utils/post'
import InputField from '@/components/InputField.vue'

export default {
  name: "DashboardLeft",
  components: {
    InputField,
  },
  data: () => ({
    errorMessage: null,
    bundles: [],
    focusedBundle: {},
    focusedBundleMode: {},
  }),
  methods: {
    setFocusedBundle: function(bundle) {
      this.focusedBundle = bundle
    },
  },
  watch: {
    focusedBundle: function(val) {
      this.focusedBundleMode = mode.get(val.MODE)
    },
  },
  mounted: async function() {
    if (this.$store.state.bundles.length > 0) {
      this.bundles = this.$store.state.bundles
    }
    else {
      const response = await post('bundle/getall', {
        id: this.$store.state.user._id,
      })
      if (response.status !== 200) {
          this.errorMessage = 'Could not connect to server.'
          return
      }
      this.bundles = response.data.bundles
      this.$store.commit('setBundles', this.bundles)
    }
  },
}
</script>

<style lang="sass" scoped>
.body
  background: $bg-dark
  height: 100%
  width: 100%
  padding: 0.25rem
  overflow-x: hidden
  border-radius: 0.25rem

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