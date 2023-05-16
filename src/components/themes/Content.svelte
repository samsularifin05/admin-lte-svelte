<script>
  import MenuRoutes from "../router";
  import { Router, Route } from "svelte-routing";
</script>

<Router>
  {#each MenuRoutes as item}
    <Route path={item.path} component={item.component} />
  {/each}
</Router>
