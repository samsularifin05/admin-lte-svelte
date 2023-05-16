<script>
  import { themeStore } from "../../store";
  import { navigate } from "svelte-routing";

  const handleToggleMenuSidebar = () => {
    themeStore.update((storeData) => {
      return {
        ...storeData,
        menuSidebarCollapsed: !storeData.menuSidebarCollapsed
      };
    });
  };

  let isHovered = true;

  const toogleShow = () => {
    isHovered = true;
  };
  const toogleClose = () => {
    isHovered = false;
  };

  const logout = () => {
    navigate("/");
  };
</script>

<nav class="main-header navbar navbar-expand navbar-white navbar-light">
  <ul class="navbar-nav">
    <li class="nav-item">
      <!-- svelte-ignore a11y-interactive-supports-focus -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span
        class="nav-link"
        data-widget="pushmenu"
        aria-label="Menu Hide Bar"
        on:click={handleToggleMenuSidebar}
        role="button"
      >
        <i class="fas fa-bars" />
      </span>
    </li>
  </ul>

  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <div
        class="nav-link dropdown-toggle user-action"
        on:mouseenter={() => toogleShow()}
      >
        <img
          src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg"
          class="avatarProfile"
          alt="Avatar"
        />{" "}
        <b class="caret" />
        <div
          class={`dropdown-menu ${isHovered ? "show" : ""}`}
          on:mouseleave={() => toogleClose()}
        >
          <button type="button" class="dropdown-item">
            <i class="fa fa-user" /> Profile
          </button>
          <button type="button" class="dropdown-item" on:click={() => logout()}>
            <i class="nav-icon fas fa-arrow-right-from-bracket" />{" "}
            Logout
          </button>
        </div>
      </div>
    </li>
  </ul>
</nav>
