<script>
  import HeaderContent from "./HeaderContent.svelte";

  export let headerContent = false;
  export let title = "";
  export let menu = "";
  export let submenu = "";
</script>

<div class="app-content">
  {#if headerContent}
    <HeaderContent {title} {menu} {submenu} />
  {/if}
  <div class="container-fluid">
    <slot></slot>
  </div>
</div>
