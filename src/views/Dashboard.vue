<template>
  <div class="v-flex h-100">
    <NavBar/>
    <DashboardBar/>
    <div class="flex-1 h-flex overflow-hidden px-1 pb-1">
      <DashboardHistory class="flex-1"/>
      <DashboardForm class="flex-3"/>
      <DashboardRight class="flex-4"/>
    </div>
  </div>
</template>

<script>
import DashboardBar from '@/components/DashboardBar.vue'
import DashboardForm from '@/components/DashboardForm.vue'
import DashboardHistory from '@/components/DashboardHistory.vue'
import DashboardRight from '@/components/DashboardRight.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: "Dashboard",
  components: {
    DashboardBar,
    DashboardForm,
    DashboardHistory,
    DashboardRight,
    NavBar,
  },
}
</script>