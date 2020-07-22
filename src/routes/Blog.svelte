<script>
  import { onMount } from "svelte";

  const apiUrl = "https://jsonplaceholder.typicode.com/posts/";
  let data = [];

  onMount(async () => {
    const response = await fetch(apiUrl);
    data = await response.json();
  });
</script>

<h1>Blog</h1>

{#each data as item}
  <div>
    <h5>
      <a href="/blog/{item.id}">{item.title}</a>
    </h5>
  </div>
{/each}
