import { About, Dashboard } from "../../pages";

const MenuRoutes = [
  {
    path: "/",
    title: "Dashboard",
    component: Dashboard
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
