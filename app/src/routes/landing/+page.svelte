<script lang="ts">
    import { onMount } from 'svelte';
    import TestApi from '../../api/TestApi';
    import Grid from "gridjs-svelte"
  
    let dataSet: any = [];
  
    onMount(async () => {
      TestApi.Get().then((_) => {
        dataSet = _;
      })
    });
  </script>
  
  <div class="h-[100vh] flex flex-col px-10 custom-background">
      <div class="mt-16">
        <Grid data={dataSet} />
      </div>
  </div>
  
  
  