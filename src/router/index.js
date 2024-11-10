import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/material",
      name: "material",
      component: () => import("../views/MaterialView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/lab",
      name: "lab",
      component: () => import("../views/LabView.vue"),
    },
    {
      path: "/:locale(eng|zh_TW|zh_CN)?/service",
      name: "service",
      component: () => import("../views/ServiceView.vue"),
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const locale = to.params.locale || localStorage.getItem('locale');
  if (!locale) {
    const defaultLocale = 'zh_TW'; // 或者您想要的默認語言
    return next(`/${defaultLocale}${to.path}`);
  }
  next();
});

export default router;
