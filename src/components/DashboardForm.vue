<template>
  <div class="v-flex">
    <header v-if="$store.state.focusedBundleId">
      <span>{{ bundle.name }}</span>
      <span class="ml-auto c-light font-normal">
        {{ (new Date(bundle.created_at)).toLocaleString('en-US') }}
      </span>
    </header>
    <header v-else>
      <span>Set New Parameters</span>
    </header>
    <fieldset 
      v-if="$store.state.focusedBundleId"
      disabled="disabled"
    >
      <InputField
        :value="mode.name"
        title="Therapy Mode"
        class="px-1 pb-3"
      />
      <div class="h-flex flex-wrap">
        <InputField
          v-for="parameter in mode.parameters"
          :key="parameter.id"
          :title="parameter.name"
          :value="bundle[parameter.id]"
          class="parameter px-1"
        />
      </div>
    </fieldset>
  </div>
</template>

<script>
import mode from '@/utils/mode'
import InputField from '@/components/InputField.vue'

export default {
  name: "DashboardForm",
  components: {
    InputField,
  },
  computed: {
    // From the store, returns the bundle that matches the focused bundle's ID
    bundle: function() {
      const bundles = this.$store.state.bundles
      return bundles.find(b => b._id === this.$store.state.focusedBundleId)
    },
    // Returns the mode data for the mode that is currently selected in the form
    mode: function() {
      return mode.get(this.bundle.MODE)
    },
  },
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
.parameter
  flex-basis: 13rem
  flex-grow: 1
</style>