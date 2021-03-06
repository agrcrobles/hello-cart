import Vue from "vue";
import VueRouter from "vue-router";
import Hello from "../components/HelloWorld.vue";
import App from "../components/App.vue";
import About from "../components/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Hello,
  },
  {
    path: "/cart",
    name: "Shopping Cart",
    component: App,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  // {
  //   path: "/cart",
  //   name: "Cart",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
