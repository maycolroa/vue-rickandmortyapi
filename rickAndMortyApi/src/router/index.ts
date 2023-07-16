import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../shared/pages/HomePage.vue';
import AboutPage from '../shared/pages/AboutPage.vue';
import { characterRoute } from "../characters/router";

const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    // publick

  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },

    //default

    { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home'}) },
  ]
});

router.addRoute( characterRoute )

export default router;
