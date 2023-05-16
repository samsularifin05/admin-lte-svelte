<script>
  import { Link } from "svelte-routing";
  import { Panel } from "../../components";
  export let location = window.location.pathname;
</script>

<Panel>
  <div class="error-page container" style={"margin-top : 15%"}>
    <h2 class="headline text-warning">404</h2>
    <div class="error-content">
      <h3>
        <i class="fas fa-exclamation-triangle text-warning" /> Oops! {location}
        not found.
      </h3>
      <p>
        We could not find the page you were looking for. Meanwhile, you may{" "}
        <Link to="/dashboard">return to dashboard</Link> or try using the search
        form.
      </p>
    </div>
  </div>
</Panel>
