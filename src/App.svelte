<script>
  import Footer from "./lib/theme/Footer.svelte";
  import Header from "./lib/theme/Header.svelte";
  import Sidebar from "./lib/theme/sidebar/Sidebar.svelte";
  import Router from "svelte-spa-router";
  import MenuRoutes from "./router/MenuRoutes";
  import { sidebarState, screenSizeState } from "./store/utils/utils";
  import {
    addWindowClass,
    calculateWindowSize,
    removeWindowClass,
    useWindowSize
  } from "./lib/utils/utils";

  const routes = MenuRoutes.reduce((acc, route) => {
    acc[route.path] = route.component;
    return acc;
  }, {});

  const windowSize = useWindowSize();

  $: {
    removeWindowClass("sidebar-closed");
    removeWindowClass("sidebar-collapse");
    removeWindowClass("sidebar-open");
    removeWindowClass("sidebar-expand-lg");

    const size = calculateWindowSize($windowSize.width);
    if ($screenSizeState.screenSize !== size) {
      $screenSizeState.setScreenSize(size);
    }

    if (
      $sidebarState.menuSidebarCollapsed &&
      $screenSizeState.screenSize === "lg"
    ) {
      addWindowClass("sidebar-collapse");
    } else if (
      $sidebarState.menuSidebarCollapsed &&
      $screenSizeState.screenSize === "xs"
    ) {
      addWindowClass("sidebar-open");
      addWindowClass("sidebar-expand-lg");
    } else if (
      !$sidebarState.menuSidebarCollapsed &&
      $screenSizeState.screenSize !== "lg"
    ) {
      addWindowClass("sidebar-closed");
      addWindowClass("sidebar-collapse");
    }
  }

  const handleToggleMenuSidebar = () => {
    $sidebarState.toggleSidebar();
  };
</script>

<div class="app-wrapper">
  <Sidebar />
  <main class="app-main" style="height: 100vh; overflow: auto;">
    <Header />
    <Router {routes} />
  </main>
  <Footer />
</div>
<div
  role="button"
  tabindex="0"
  id="sidebar-overlay"
  on:click={handleToggleMenuSidebar}
  on:keydown={(e) => e.key === "Enter" || e.key === " "}
  class="sidebar-overlay glass-effect"
></div>
