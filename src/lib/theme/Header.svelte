<script lang="ts">
  import { sidebarState } from "../../store/utils/utils";

  const handleToggleMenuSidebar = () => {
    $sidebarState.toggleSidebar();
  };
</script>

<nav class="app-header navbar navbar-expand bg-body">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <button
          class="nav-link btn btn-link"
          aria-label="Toggle Sidebar"
          on:click={handleToggleMenuSidebar}
        >
          <i class="fas fa-bars"></i>
        </button>
      </li>
    </ul>

    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <button class="nav-link dropdown-toggle user-action btn btn-link">
          <img
            src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg"
            class="avatarProfile"
            alt="Avatar"
          />{" "}
          Sam <b class="caret"></b>
        </button>
        <div class={`dropdown-menu`}>
          <button type="button" class="dropdown-item">
            <i class="fa fa-user"></i> Profile
          </button>
          <button type="button" class="dropdown-item">
            <i class="nav-icon fas fa-arrow-right-from-bracket"></i>{" "}
            Logout
          </button>
        </div>
      </li>
    </ul>
  </div>
</nav>
