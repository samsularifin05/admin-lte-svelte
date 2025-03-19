<script lang="ts">
  import "overlayscrollbars/overlayscrollbars.css";
  import { OverlayScrollbars } from "overlayscrollbars";
  import { onMount } from "svelte";
  import AppMenu from "../../../router/menu";
  import SidebarNavList from "./MenuNavList.svelte";

  let sidebarWrapper: HTMLDivElement | null = null;
  let osInstance: any = null;

  onMount(() => {
    if (sidebarWrapper) {
      osInstance = OverlayScrollbars(sidebarWrapper, {
        scrollbars: {
          autoHide: "leave"
        }
      });
    }

    return () => {
      if (osInstance) {
        osInstance.destroy();
      }
    };
  });
</script>

<aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
  <div class="sidebar-brand text-center py-3">
    <span class="brand-text font-weight-light">ADMIN</span>
  </div>

  <div
    class="sidebar-wrapper"
    bind:this={sidebarWrapper}
    style="height: 100vh; overflow: hidden;"
  >
    <nav class="mt-2">
      <ul class="nav sidebar-menu flex-column">
        {#each AppMenu as data}
          <SidebarNavList {data} />
        {/each}
      </ul>
    </nav>
  </div>
</aside>
