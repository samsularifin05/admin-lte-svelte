<script>
  export let footer = "";
  export let title = "";
</script>

<div class="card">
  <div class="card-header">
    <h3 class="card-title">{title}</h3>
  </div>
  <div class="card-body">
    <slot />
  </div>
  {#if footer}
    <div class="card-footer">{footer}</div>
  {/if}
</div>
