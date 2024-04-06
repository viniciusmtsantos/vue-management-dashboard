import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/fail-reports',
      name: 'failReports',
      component: () => import('../views/FailReports.vue')
    },
    {
      path: '/client-advisor',
      name: 'clientAdvisor',
      component: () => import('../views/ClientAdvisor.vue')
    },
    {
      path: '/charge-advisor',
      name: 'chargeAdvisor',
      component: () => import('../views/ChargeAdvisor.vue')
    },
    {
      path: '/stats-advisor',
      name: 'statsAdvisor',
      component: () => import('../views/StatsAdvisor.vue')
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('../views/Messages.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/Help.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {

  if (to.matched.length == 0) {
    next({ name: 'dashboard' })
    return
  }

  next()
  return

})

export default router