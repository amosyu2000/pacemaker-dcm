<template>
  <div class="v-flex h-100">
    <NavBar/>
    <div class="flex-1 h-flex overflow-hidden px-1">
      <section class="flex-1">
        <DashboardHistory/>
      </section>
      <section class="flex-3">
        <DashboardForm/>
      </section>
      <section class="flex-4">
        <DashboardRight/>
      </section>
    </div>
  </div>
</template>

<script>
import DashboardForm from '@/components/DashboardForm.vue'
import DashboardHistory from '@/components/DashboardHistory.vue'
import DashboardRight from '@/components/DashboardRight.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: "Dashboard",
  components: {
    DashboardForm,
    DashboardHistory,
    DashboardRight,
    NavBar,
  },
}
</script>

<style lang="sass" scoped>
section
  background: $bg-dark
  padding: 0.25rem
  margin: 1rem 0.5rem
  overflow-x: hidden
  border-radius: 0.25rem

</style>