import Login from "../pages/login/index.svelte";
import Dashboard from "../pages/dashboard/index.svelte";
import About from "../pages/about/index.svelte";

const MenuRoutes = [
  {
    path: "/",
    title: "Login",
    component: Login
  },
  {
    path: "/dashboard",
    title: "dashboard",
    component: Dashboard
  },
  {
    path: "/about",
    exact: true,
    title: "About",
    component: About
  }
];

export default MenuRoutes;
