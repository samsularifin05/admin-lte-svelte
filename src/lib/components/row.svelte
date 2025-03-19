<script lang="ts">
  export let className: string = "";
</script>

<div class={"row " + className}>
  <slot></slot>
</div>
