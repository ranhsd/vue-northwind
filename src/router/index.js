import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import CustomerOrders from "../pages/CustomerOrders";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [],
  },
  {
    path: "/tabs",
    name: "tabs",
    component: () => import("../pages/Tabs.vue")   
  },
  {
    path: "/customer-orders/:id",
    name: "customer-orders",
    component: CustomerOrders,
    props: true,
    children: [
      {
        path: "selected-order/:orderId",
        name: "selected-order",
        props: true,
        component: () => import("../pages/SelectedOrder.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
