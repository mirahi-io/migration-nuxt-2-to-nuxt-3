<template>
  <div>
    <h1>Products for Category {{ route.params.category_id }}</h1>
    <p>This is a more complex route</p>
    <br>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
const route= useRoute()
</script>
