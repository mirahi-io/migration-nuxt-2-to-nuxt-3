<template>
  <div>
    <navbar />
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
export default {
  components: { Navbar }
}
</script>


<style>
@import "~/assets/default.layout.css";
</style>
