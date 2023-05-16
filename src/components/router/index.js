import { About, Dashboard, Login, PageNotFound } from "../../pages";

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
  },

  {
    path: "*",
    exact: true,
    title: "Halaman Tidak Ditemukan",
    component: PageNotFound
  }
];

export default MenuRoutes;
