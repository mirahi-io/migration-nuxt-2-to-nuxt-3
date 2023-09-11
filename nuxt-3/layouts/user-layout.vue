<template>
  <div>
    <Navbar />
    <br>
    <h1>User Layout</h1>
    <p>This is a layout which will only show if specified by the page component</p>
    <br>
    <slot />
  </div>
</template>
<style>
@import "~/assets/default.layout.css";
</style>