<script>
  import MenuRoutes from "../router";
  import { Router, Route } from "svelte-routing";
</script>

<Router>
  <div class="content-wrapper">
    {#each MenuRoutes as item}
      <Route path={item.path} component={item.component} />
    {/each}
  </div>
</Router>
