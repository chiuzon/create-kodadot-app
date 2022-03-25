<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<div>
  <div>
    <a href="/" class="text-blue-500" use:link>Home</a>
  </div>
  <slot />
</div>
