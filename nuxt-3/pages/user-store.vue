<template>
  <div>
    <h1>View User {{ user._id }}</h1>
    <h2>{{ user.name }}</h2>
    <br>
    <p>This is a  route</p>
    <p>This also demonstrates retrieving information from the Vuex store</p>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "~/stores/user";

definePageMeta({
  layout:'user-layout'
})

const user=useUserStore()

onMounted(async ()=>{
  await user.load()
})

</script>
