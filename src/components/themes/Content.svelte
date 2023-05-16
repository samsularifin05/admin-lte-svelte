<script>
  import MenuRoutes from "../router";
  import { Router, Route } from "svelte-navigator";

  const currentPath = window.location.pathname;
</script>

<Router>
  <div class="content-wrapper">
    {#each MenuRoutes as item}
      <Route path={item.path} component={item.component} />
    {/each}
  </div>
</Router>
