<script lang="ts">
  export let title: string;
  export let footer: string = "";
</script>

<div class="card mb-4">
  <div class="card-header">
    <h3 class="card-title">{title}</h3>
  </div>
  <div class="card-body">
    <slot></slot>
  </div>
  {#if footer}
    <div class="card-footer">{footer}</div>
  {/if}
</div>
