<template>
  <AppSection>
    <template v-slot:header>
      <template v-if="$store.state.focusedBundle._id">
        <span>{{ bundle.name }}</span>
        <span class="ml-auto c-light font-normal">
          {{ (new Date(bundle.created_at)).toLocaleString('en-US') }}
        </span>
      </template>
      <template v-else>
        <span>Set New Parameters</span>
      </template>
    </template>
    <fieldset 
      v-if="bundle.MODE"
      :disabled="Boolean($store.state.focusedBundle._id)"
    >
      <AppInputSelect
        :value="bundle.MODE"
        :options="mode.options"
        v-model="bundle.MODE"
        title="Pacing Mode"
        class="px-1 pb-3"
      />
      <div class="h-flex flex-wrap">
        <template 
          v-for="param in mode.get(bundle.MODE).parameters" 
        >
          <AppInputNumber
            :key="param.id"
            :title="param.unit ? `${param.name} (${param.unit})` : param.name"
            v-model="bundle[param.id]"
            :min="param.min"
            :max="param.max"
            :increment="param.increment"
            class="input px-1"
          />
        </template>
      </div>
    </fieldset>
  </AppSection>
</template>

<script>
import mode from '@/utils/mode'
import AppSection from '@/components/AppSection.vue'
import AppInputNumber from '@/components/AppInputNumber.vue'
import AppInputSelect from '@/components/AppInputSelect.vue'

export default {
  name: "DashboardForm",
  components: {
    AppSection,
    AppInputNumber,
    AppInputSelect,
  },
  data: () => ({
    mode: mode,
  }),
  computed: {
    // From the store, returns the focused bundle
    bundle: function() {
      return this.$store.state.focusedBundle
    },
  },
}
</script>

<style lang="sass" scoped>
.input
  flex-basis: 13rem
  flex-grow: 1
</style>