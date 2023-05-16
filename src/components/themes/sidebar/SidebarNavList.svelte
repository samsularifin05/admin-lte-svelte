<script>
  import { onMount } from "svelte";
  import SidebarNavList from "./SidebarNavList.svelte";
  import { Link } from "svelte-navigator";
  export let data;
  export let submenu = "noaktif";
  let isMenuExtended = false;
  let isExpandable = false;

  const handleMainMenuAction = () => {
    if (isExpandable) {
      toggleMenu();
      return;
    }
  };
  const toggleMenu = () => {
    isMenuExtended = !isMenuExtended;
  };

  onMount(() => {
    isExpandable = data && data.children && data.children.length > 0;
  });
</script>

<li class={`nav-item${isMenuExtended ? " menu-open" : ""}`}>
  <Link
    class="nav-link"
    to={data.path}
    replace={true}
    on:click={handleMainMenuAction}
  >
    {#if data.children}
      {#if data.icon}
        <i class={data.icon} />
      {/if}
      {#if data.title}
        <p>
          {data.title} <i class="right fas fa-angle-left" />
        </p>
      {/if}
    {:else}
      {#if submenu === "active"}
        <i class="far fa-circle nav-icon" />
      {/if}
      <i class={data.icon} />
      <p>
        {data.title}
      </p>
    {/if}
  </Link>

  {#if data.children}
    <ul class="nav nav-treeview">
      {#each data.children as child}
        <SidebarNavList data={child} submenu="active" />
      {/each}
    </ul>
  {/if}
</li>
