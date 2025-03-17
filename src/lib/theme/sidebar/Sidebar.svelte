<script lang="ts">
  import "overlayscrollbars/overlayscrollbars.css";
  import AppMenu from "../../../router/menu";
  import SidebarNavList from "./MenuNavList.svelte";
</script>

<aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
  <div class="sidebar-brand text-center py-3">
    <span class="brand-text font-weight-light">ADMIN</span>
  </div>

  <div class="sidebar-wrapper" style="height: 100vh; overflow: hidden">
    <nav class="mt-2">
      <ul class="nav sidebar-menu flex-column">
        {#each AppMenu as data, index}
          <SidebarNavList {data} />
        {/each}
      </ul>
    </nav>
  </div>
</aside>
