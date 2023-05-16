<script>
  import { themeStore } from "../../store";

  const handleToggleMenuSidebar = () => {
    themeStore.update((storeData) => {
      return {
        ...storeData,
        menuSidebarCollapsed: !storeData.menuSidebarCollapsed
      };
    });
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
      <div class="nav-link dropdown-toggle user-action">
        <img
          src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg"
          class="avatarProfile"
          alt="Avatar"
        />{" "}
        Samsul <b class="caret" />
        <div class="dropdown-menu">
          <button type="button" class="dropdown-item">
            <i class="fa fa-user" /> Profile
          </button>
          <button type="button" class="dropdown-item">
            <i class="nav-icon fas fa-arrow-right-from-bracket" />{" "}
            Logout
          </button>
        </div>
      </div>
    </li>
  </ul>
</nav>
