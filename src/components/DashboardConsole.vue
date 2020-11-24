<template>
  <AppSection>
    <template v-slot:header>Console</template>
    <div 
      v-for="(log, index) in $store.state.logs.slice(0,50).reverse()"
      :key="index"
      class="log"
    >
      {{ log.time.toLocaleTimeString('en-US') }}
      <span class="font-bold">[{{ log.origin }}]</span> 
      {{ log.message }}
    </div>
  </AppSection>
</template>

<script>
import AppSection from '@/components/AppSection'

export default {
  name: "DashboardConsole",
  components: {
    AppSection,
  },
}
</script>

<style lang="sass" scoped>
.log
  padding: 0.25rem 0.5rem 0
  white-space: nowrap
</style>