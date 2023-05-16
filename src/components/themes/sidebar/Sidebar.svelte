<script>
  import menu from "./menu";
  import SidebarNavList from "./SidebarNavList.svelte";
</script>

<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <a href="/#" class="brand-link text-center">
    <span class="brand-text font-weight-light text-center">ADMIN</span>
  </a>
  <div class="sidebar">
    <nav class="mt-2">
      <ul
        class="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        data-accordion="false"
      >
        {#each menu as item}
          <SidebarNavList data={item} />
        {/each}
      </ul>
    </nav>
  </div>
</aside>
