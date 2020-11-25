<template>
  <div class="v-flex h-100">
    <NavBar/>
    <DashboardBar/>
    <div class="flex-1 h-flex px-1 pb-1">
      <div class="flex-1 v-flex">
        <div class="flex-3 h-flex overflow-hidden">
          <DashboardHistory class="flex-1"/>
          <DashboardForm class="flex-3"/>
        </div>
        <DashboardConsole class="flex-1"/>
      </div>
      <div class="flex-1 v-flex overflow-hidden">
        <DashboardPacemaker class="flex-2"/>
        <DashboardElectrogram class="flex-2"/>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import DashboardBar from '@/components/DashboardBar.vue'
import DashboardConsole from '@/components/DashboardConsole.vue'
import DashboardElectrogram from '@/components/DashboardElectrogram.vue'
import DashboardForm from '@/components/DashboardForm.vue'
import DashboardHistory from '@/components/DashboardHistory.vue'
import DashboardPacemaker from '@/components/DashboardPacemaker.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: "Dashboard",
  components: {
    DashboardBar,
    DashboardConsole,
    DashboardElectrogram,
    DashboardForm,
    DashboardHistory,
    DashboardPacemaker,
    NavBar,
  },
}
</script>