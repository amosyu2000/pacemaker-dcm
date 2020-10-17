<template>
  <div class="v-flex h-100">
    <NavBar/>
    <div class="flex-1 h-flex overflow-hidden">
      <div class="flex-1 p-2 pr-1">
        <DashboardLeft/>
      </div>
      <div class="flex-1 p-2 pl-1">
        <DashboardRight/>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardLeft from '@/components/DashboardLeft.vue'
import DashboardRight from '@/components/DashboardRight.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: "Dashboard",
  components: {
    DashboardLeft,
    DashboardRight,
    NavBar,
  },
}
</script>