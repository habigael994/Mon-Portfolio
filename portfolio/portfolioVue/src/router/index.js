import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import notFound from '../components/404.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {

      name: 'notFound',
      path: "/:pathMatch(.*)",
      component:notFound

    }


  ]
})

export default router
