import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Settings from '@/views/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
	{
		path: "/login",
		name: "login",
		component: Login,
	},
  {
    path: "/settings",
    name: "settings",
    component: Settings,
  },
	{
		path: "/",
		redirect: "/login",
	}
]

const router = new VueRouter({
	mode: "history",
	routes,
})

export default router