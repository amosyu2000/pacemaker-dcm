<template>
  <AppSection>
    <template v-slot:header>Console</template>
    <div 
      v-for="(log, index) in $store.state.logs.slice(0,50)"
      :key="index"
      class="log"
    >
      {{ `${log.time.toLocaleTimeString('en-US')} \u2003 ${log.message}` }}
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