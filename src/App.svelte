<script>
  import Footer from "./lib/theme/Footer.svelte";
  import Header from "./lib/theme/Header.svelte";
  import Sidebar from "./lib/theme/sidebar/Sidebar.svelte";
  import Router from "svelte-spa-router";
  import MenuRoutes from "./router/MenuRoutes";
  import {
    useLoadingStore,
    useScreenSizeStore,
    useSidebarStore,
    toggleSidebar
  } from "./store/utils/utils";
  import {
    addWindowClass,
    calculateWindowSize,
    removeWindowClass
  } from "./lib/utils/utils";

  // Definisikan routes
  const routes = MenuRoutes.reduce((acc, route) => {
    acc[route.path] = route.component;
    return acc;
  }, {});

  // Ambil nilai dari store
  let $screenSize, $menuSidebarCollapsed;
  $: $screenSize = useScreenSizeStore;
  $: $menuSidebarCollapsed = useSidebarStore.menuSidebarCollapsed;

  // Fungsi untuk toggle sidebar
  const handleToggleMenuSidebar = () => {
    toggleSidebar();
  };

  // Efek reaktif untuk menyesuaikan class berdasarkan ukuran layar dan status sidebar
  $: {
    removeWindowClass("sidebar-closed");
    removeWindowClass("sidebar-collapse");
    removeWindowClass("sidebar-open");
    removeWindowClass("sidebar-expand-lg");

    const size = calculateWindowSize(window.innerWidth);
    if ($screenSize.screenSize !== size) {
      useScreenSizeStore.setScreenSize(size);
    }

    if ($menuSidebarCollapsed && $screenSize.screenSize === "lg") {
      addWindowClass("sidebar-collapse");
    } else if ($menuSidebarCollapsed && $screenSize.screenSize === "xs") {
      addWindowClass("sidebar-open");
      addWindowClass("sidebar-expand-lg");
    } else if (!$menuSidebarCollapsed && $screenSize.screenSize !== "lg") {
      addWindowClass("sidebar-closed");
      addWindowClass("sidebar-collapse");
    }
  }
</script>

<div class="app-wrapper">
  <Sidebar />
  <main class="app-main">
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
