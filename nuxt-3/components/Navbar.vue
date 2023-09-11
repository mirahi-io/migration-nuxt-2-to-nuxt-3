<template>
  <div class="navbar">
    <span @click="toggleOpen">
      {{ open ? 'Close' : 'View' }} Links
    </span>
    <div class="navbar-drawer" :class="{ isOpen: open }">
      <nuxt-link
          v-for="link of links"
          :key="link.name"
          :to="link.to"
          exact
      >
        {{link.name}}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const open = ref(false);
const links = ref([
  { to: '/', name: 'Home' },
  { to: '/products', name: 'Products' },
  { to: '/about', name: 'About' },
  { to: '/about/ben-jones', name: 'Nested About' },
  { to: '/categories/2/products', name: 'Dynamic Route' },
  { to: '/categories/2/products/3', name: 'Complex Route' },
  { to: '/categories/2/products/someproduct', name: 'Invalid Route Param' },
  { to: '/plugin', name: 'Vue-Notifications Plugin' },
  { to: '/user-store', name: 'User Store' },
  { to: '/products/view', name: 'Products/View' },
]);

const route = useRoute();

watch(() => route.name, () => {
  open.value = false;
});

const toggleOpen = () => {
  open.value = !open.value;
};
</script>

<style scoped>
.navbar {
  position: relative;
  background: #333333;
  color: white;
  padding: 10px;
}
.navbar-drawer {
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  width: 250px;
  top: 100%;
  left: -500px;
  padding: 0 10px 20px;
  background: #333333;
  text-align: center;
  transition: left 0.35s;
}
.isOpen {
  left: 0;
}
span, a {
  padding: 10px;
  color: white;
  cursor: pointer;
  text-decoration: none;
}
span:hover, a:hover {
  background: white;
  color: #333333;
}
a.router-link-active {
  cursor: default;
  background: #41B883;
  color: #333333;
}
</style>
