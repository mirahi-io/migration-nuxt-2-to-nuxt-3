<template>
  <div>
    <h1>Product {{ route.params.product_id }}</h1>
    <p>This is a nested route of the more complex route</p>
    <p>Changing the final param of the route to a non-number will also cause this component to throw a 404 error</p>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return /^\d+$/.test(route.params.id)
  }
})
const route= useRoute()
</script>