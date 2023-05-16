<script>
  import { onMount } from "svelte";
  import {
    Header,
    Content,
    Sidebar,
    Footer,
    removeWindowClass,
    calculateWindowSize,
    useWindowSize,
    addWindowClass
  } from "./components";
  import { themeStore } from "./store";
  import { Router } from "svelte-routing";

  const windowSize = useWindowSize();

  let screenSize = calculateWindowSize(window.innerWidth);

  const handleToggleMenuSidebar = () => {
    themeStore.update((storeData) => {
      return {
        ...storeData,
        menuSidebarCollapsed: !storeData.menuSidebarCollapsed
      };
    });
  };

  $: {
    let SizeValue = screenSize;

    removeWindowClass("sidebar-closed");
    removeWindowClass("sidebar-collapse");
    removeWindowClass("sidebar-open");
    const size = calculateWindowSize(windowSize.width);
    if (screenSize !== size) {
      SizeValue = size;
    }

    if ($themeStore.menuSidebarCollapsed && screenSize === "lg") {
      addWindowClass("sidebar-collapse");
    } else if ($themeStore.menuSidebarCollapsed && screenSize === "xs") {
      addWindowClass("sidebar-open");
    } else if (!$themeStore.menuSidebarCollapsed && screenSize !== "lg") {
      addWindowClass("sidebar-closed");
      addWindowClass("sidebar-collapse");
    }
  }
</script>

<Router>
  <div class="wrapper">
    {#if $themeStore.handleHeader}
      <Header />
    {/if}
    {#if $themeStore.handleContent}
      <Content />
    {/if}
    {#if $themeStore.handleSidebar}
      <Sidebar />
    {/if}
    {#if $themeStore.handleFooter}
      <Footer />
    {/if}
  </div>
  <div
    id="sidebar-overlay"
    role="presentation"
    on:click={handleToggleMenuSidebar}
  />
</Router>
