import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //RUTAS QUE SE UTILIZARAN EN EL SPA
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/services",
    name: "services",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Services.vue")
  },
  {
    path: "/photos/:id",
    name: "photos",
    component: () =>
      import(/* webpackChunkName: "photos" */ "../views/Photos.vue")
  },
  {
    path: "/grid",
    name: "grid",
    component: () => import(/* webpackChunkName: "grid" */ "../views/Grid.vue")
  },
  {
    path: "/cards",
    name: "cards",
    component: () =>
      import(/* webpackChunkName: "cards" */ "../views/Cards.vue")
  },
  {
    path: "/form",
    name: "form",
    component: () => import(/* webpackChunkName: "cards" */ "../views/Form.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
