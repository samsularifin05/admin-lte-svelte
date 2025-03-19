<script lang="ts">
  export let className: string = "";
  export let size: string = "4";
</script>

<div class={"col-" + size + " " + className}>
  <slot></slot>
</div>
