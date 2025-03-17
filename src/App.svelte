<script>
  import Footer from "./lib/theme/Footer.svelte";
  import Header from "./lib/theme/Header.svelte";
  import Sidebar from "./lib/theme/sidebar/Sidebar.svelte";
  import Router from "svelte-spa-router";
  import MenuRoutes from "./router/MenuRoutes";
  const routes = MenuRoutes.reduce((acc, route) => {
    acc[route.path] = route.component;
    return acc;
  }, {});
</script>

<div class="app-wrapper">
  <Sidebar />
  <main class="app-main">
    <Header />
    <Router {routes} />
  </main>
  <Footer />
</div>
<div id="sidebar-overlay" class="sidebar-overlay glass-effect"></div>
