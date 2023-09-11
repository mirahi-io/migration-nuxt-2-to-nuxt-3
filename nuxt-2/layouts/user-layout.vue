<template>
  <div>
    <navbar />
    <br>
    <h1>User Layout</h1>
    <p>This is a layout which will only show if specified by the page component</p>
    <br>
    <nuxt />
  </div>
</template>
<script setup>
import Navbar from "~/components/Navbar.vue";
</script>
