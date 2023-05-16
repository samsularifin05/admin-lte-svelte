<script>
  import { onDestroy, onMount } from "svelte";
  import { themeStore } from "../../store";
  import { navigate } from "svelte-routing";

  onMount(() => {
    themeStore.update((storeData) => {
      return {
        ...storeData,
        handleSidebar: false,
        handleFooter: false,
        handleHeader: false
      };
    });
  });

  onDestroy(() => {
    themeStore.update((storeData) => {
      return {
        ...storeData,
        handleSidebar: true,
        handleFooter: true,
        handleHeader: true
      };
    });
  });

  const Login = () => {
    navigate("/dashboard");
  };
</script>

<div class="login-box container" style={"margin-top:10%"}>
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <div class="h1">
        <b>ADMIN LTE </b>APP
      </div>
    </div>
    <div class="card-body">
      <form>
        <p class="login-box-msg">Sign in to start your session</p>
        <div class="form-group">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label>Username</label>
          <div class="input-group">
            <input
              class="form-control"
              placeholder="Masukan Username"
              type="text"
            />
          </div>
        </div>
        <div class="form-group">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label>Password</label>
          <div class="input-group">
            <input
              class="form-control"
              placeholder="Masukan Password"
              type="password"
            />
          </div>
        </div>
        <div class="form-group mt-4">
          <div class="input-group">
            <button class="btn btn-primary btn-block" on:click={() => Login()}>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
