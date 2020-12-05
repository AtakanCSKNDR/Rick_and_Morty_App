import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Episodes",
    name: "Episodes",
    component: () => import("../views/Episodes.vue"),
    props: true,
  },
  {
    path: "/Characters",
    name: "Characters",
    component: () => import("../views/Characters.vue"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
