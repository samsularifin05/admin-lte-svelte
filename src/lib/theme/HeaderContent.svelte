<script>
  export let title = "";
  export let menu = "";
  export let submenu = "";
</script>

<section class="app-content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h1>{title}</h1>
      </div>

      {#if menu}
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-end">
            <li class="breadcrumb-item">
              <div>{menu}</div>
            </li>
            <li class="breadcrumb-item active">{submenu}</li>
          </ol>
        </div>
      {/if}
    </div>
  </div>
</section>
