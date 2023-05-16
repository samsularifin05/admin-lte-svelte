<script>
  import { Header, Content, Sidebar, Footer } from "./components";
  import { themeStore } from "./store";
  import { Router } from "svelte-navigator";
</script>

<Router>
  <div class="wrapper">
    {#if $themeStore.handleHeader}
      <Header />
    {/if}
    {#if $themeStore.handleContent}
      <Content />
    {/if}
    {#if $themeStore.handleSidebar}
      <Sidebar />
    {/if}
    {#if $themeStore.handleFooter}
      <Footer />
    {/if}
  </div>
</Router>
