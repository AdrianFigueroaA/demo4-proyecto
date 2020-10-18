import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirection: "/login",
  },
  {
    path: "/",
    redirection: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "LineUp" */ "../components/Login.vue"),
  },
  {
    path: "/inicio",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/lineup",
    name: "LineUp",
    component: () =>
      import(/* webpackChunkName: "LineUp" */ "../views/Lineup.vue"),
    meta: {
      autentificado: true,
    },
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: () =>
      import(/* webpackChunkName: "tickets" */ "../views/Tickets.vue"),
  },
  {
    path: "/travel",
    name: "Travel",
    component: () =>
      import(/* webpackChunkName: "travel" */ "../views/Travel.vue"),
  },
  {
    path: "/beneficios",
    name: "Beneficios",
    component: () =>
      import(/* webpackChunkName: "beneficios" */ "../views/Beneficios.vue"),
  },
  {
    path: "/auf2019",
    name: "Auf2019",
    component: () =>
      import(/* webpackChunkName: "auf 2019" */ "../views/Auf2019.vue"),
  },
  {
    path: "/contactus",
    name: "Contact Us",
    component: () =>
      import(/* webpackChunkName: "contact us" */ "../views/Contactus.vue"),
  },
  {
    path: "/faqs",
    name: "Faqs",
    component: () => import(/* webpackChunkName: "faqs" */ "../views/Faqs.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  console.log(usuario);
  let autorizacion = to.matched.some((record) => record.meta.autentificado);

  if (autorizacion && !usuario) {
    next("login");
  } else if (!autorizacion && usuario) {
    next("inicio");
  } else {
    next();
  }
});

export default router;
