<template>
  <div>
    <h1>View User {{ user._id }}</h1>
    <p>{{ user.title }}</p>
    <p>Price: {{ user.price }}</p>
    <br>
    <p>This is a  route</p>
    <p>This also demonstrates retrieving information from the Vuex store</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'user-layout',
  created () {
    this.$store.dispatch('user/load')
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>
