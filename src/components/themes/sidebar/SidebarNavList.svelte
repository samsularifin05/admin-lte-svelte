<script>
  import { onMount } from "svelte";
  import SidebarNavList from "./SidebarNavList.svelte";
  import { Link } from "svelte-routing";
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
  {#if data.children}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      class="nav-link"
      on:click={handleMainMenuAction}
      style="cursor: pointer;"
    >
      {#if data.icon}
        <i class={data.icon} />
      {/if}
      {#if data.title}
        <p>
          {data.title} <i class="right fas fa-angle-left" />
        </p>
      {/if}
    </a>
  {:else if data.path === "#"}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      class="nav-link"
      on:click={handleMainMenuAction}
      style="cursor: pointer;"
    >
      {#if submenu === "active"}
        <i class="far fa-circle nav-icon" />
      {/if}
      <i class={data.icon} />
      <p>
        {data.title}
      </p>
    </a>
  {:else}
    <Link class="nav-link" to={data.path} on:click={handleMainMenuAction}>
      {#if submenu === "active"}
        <i class="far fa-circle nav-icon" />
      {/if}
      <i class={data.icon} />
      <p>
        {data.title}
      </p>
    </Link>
  {/if}

  {#if data.children}
    <ul class="nav nav-treeview">
      {#each data.children as child}
        <SidebarNavList data={child} submenu="active" />
      {/each}
    </ul>
  {/if}
</li>
