import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../views/Login.vue";
import Car from "../views/Car.vue";
import CarDetails from "../views/CarDetails.vue";
import ChangePassword from "../views/ChangePassword.vue";
import Customer from "../views/Customer.vue";
import CustomerDetails from "../views/CustomerDetails.vue";
import Project from "../views/Project.vue";
import ProjectDetails from "../views/ProjectDetails.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/car/details",
    name: "Car Details",
    component: CarDetails,
  },
  {
    path: "/customer/details",
    name: "Customer Details",
    component: CustomerDetails,
  },
  {
    path: "/car",
    name: "Car",
    component: Car,
  },
  {
    path: "/changepassword",
    name: "Change Password",
    component: ChangePassword,
  },
  {
    path: "/customer",
    name: "Customer",
    component: Customer,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/project/details",
    name: "Project Details",
    component: ProjectDetails,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
