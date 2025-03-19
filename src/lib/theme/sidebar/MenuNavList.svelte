<script lang="ts">
  import type { Menu } from "../../../router/menu";
  import SidebarNavList from "./MenuNavList.svelte";

  import { link } from "svelte-spa-router";
  export let data: Menu;
  export let actiVeMenu: string = "";

  let isMenuExtended = false;
  let mainMenuRef: HTMLElement | null = null;
  let submenuRef: HTMLElement | null = null;
  let currentMenuRef: HTMLElement | null = null; // Variabel untuk binding

  $: currentMenuRef = actiVeMenu === "active" ? submenuRef : mainMenuRef;

  const handleMainMenuAction = (
    event: MouseEvent | KeyboardEvent | HTMLAnchorElement
  ) => {
    if (event instanceof MouseEvent || event instanceof KeyboardEvent) {
      event.preventDefault(); // Aman karena hanya MouseEvent & KeyboardEvent yang memiliki metode ini
    }
    isMenuExtended = !isMenuExtended;
  };

  let prevIsMenuExtended = isMenuExtended; // Menyimpan status sebelumnya

  $: {
    if (isMenuExtended !== prevIsMenuExtended && currentMenuRef) {
      prevIsMenuExtended = isMenuExtended; // Update status sebelumnya

      if (isMenuExtended) {
        currentMenuRef.classList.add("show");
        currentMenuRef.style.display = "block";
        currentMenuRef.style.maxHeight = currentMenuRef.scrollHeight + "px";
        currentMenuRef.style.opacity = "1";
        currentMenuRef.style.overflow = "auto";
        setTimeout(() => {
          if (currentMenuRef) currentMenuRef.style.maxHeight = "none";
        }, 300);
      } else {
        currentMenuRef.style.maxHeight = currentMenuRef.scrollHeight + "px";
        currentMenuRef.style.overflow = "hidden";
        requestAnimationFrame(() => {
          if (currentMenuRef) {
            currentMenuRef.style.maxHeight = "0px";
            currentMenuRef.style.opacity = "0";
          }
        });
        setTimeout(() => {
          if (currentMenuRef) {
            currentMenuRef.classList.remove("show");
            currentMenuRef.style.display = "none";
          }
        }, 300);
      }
    }
  }

  // console.log(data?.children);
</script>

{#if data?.navheader}
  <li class="nav-header">{data.title}</li>
{/if}

<li class="nav-item {isMenuExtended ? 'menu-open' : ''}">
  {#if data?.children}
    <a
      class="nav-link"
      role="button"
      tabindex="0"
      href="/"
      on:click={handleMainMenuAction}
      on:keypress={(e) => e.key === "Enter" && handleMainMenuAction(e)}
      style="cursor: pointer"
    >
      {#if data?.icon}<i class={data.icon}></i>{/if}
      <p>
        {data.title} <i class="nav-arrow fas fa-angle-right"></i>
      </p>
    </a>
  {:else if data?.navheader !== true}
    {#if data?.path}
      <a href={data.path} use:link class="nav-link">
        {#if actiVeMenu === "active"}
          <i class="far fa-circle nav-icon"></i>
        {/if}
        {#if data?.icon}<i class={data.icon}></i>{/if}
        <p>{data.title}</p>
      </a>
    {:else}
      <button class="nav-link" style="cursor: pointer;">
        {#if actiVeMenu === "active"}
          <i class="far fa-circle nav-icon"></i>
        {/if}
        {#if data?.icon}<i class={data.icon}></i>{/if}
        <p>{data.title}</p>
      </button>
    {/if}
  {/if}

  {#if data?.children}
    <ul bind:this={currentMenuRef} class="nav nav-treeview">
      {#each data.children as submenu, i}
        <SidebarNavList data={submenu} actiVeMenu="active" />
      {/each}
    </ul>
  {/if}
</li>
