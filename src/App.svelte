<script lang="ts">
  import Router from "svelte-spa-router";
  import Routes from "@/constants/routes";

  import Layout from "@/components/composed/Layout.svelte";
</script>

<Layout>
  <Router routes={Routes} />
</Layout>
