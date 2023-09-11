<template>
  <div>
    <h1>View Product {{ product?._id }}</h1>
    <p>{{ product?.title }}</p>
    <p>Price: {{ product?.price }}</p>
    <br>
    <p>This is an example of using <code>useAsyncData</code> to make sure the store is updated before showing the
      component</p>
  </div>
</template>

<script setup lang="ts">

const loadProduct = async () => {
 return new Promise(resolve => {
    setTimeout(() => {
      resolve({_id: 1, title: 'Product', price: 99.99});
    }, 1000);
  });
};
const {data: product, pending, error, refresh} = await useAsyncData(
    'product',
    () => loadProduct()
)
</script>
