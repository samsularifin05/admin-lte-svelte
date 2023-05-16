<script>
  export let title = "";
</script>

<div class="content-wrapper">
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6"><h1>{title}</h1></div>
      </div>
    </div>
  </section>
  <section class="content">
    <div class="container-fluid">
      <slot />
    </div>
  </section>
</div>
