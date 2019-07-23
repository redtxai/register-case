import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      meta: { showBackButton: false },
      component: Home
    },
    {
      path: "/register",
      name: "register",
      meta: { showBackButton: false },
      component: () =>
        import(/* webpackChunkName: "register" */ "./views/Register.vue")
    },
    {
      path: "/selfie",
      name: "selfie",
      meta: { showBackButton: true },
      component: () =>
        import(/* webpackChunkName: "selfie" */ "./views/Selfie.vue")
    },
    {
      path: "/reliability",
      name: "reliability",
      meta: { showBackButton: true },
      component: () =>
        import(/* webpackChunkName: "reliability" */ "./views/Reliability.vue")
    },
    {
      path: "/thank-you",
      name: "thank-you",
      meta: { showBackButton: false },
      component: () =>
        import(/* webpackChunkName: "thank-you" */ "./views/ThankYou.vue")
    }
  ]
});
