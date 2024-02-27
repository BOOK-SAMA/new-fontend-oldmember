<template>
    <navbar_product />
    <div class="container">
      <productnan />
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import navbar_product from '/src/components/navbar_prodect.vue';
  import productnan     from '/src/views/home_product.vue';
  // useProductStore
  import { useProductStore } from '/src/store/product'
  const product_store = useProductStore()
  
  //useCartStore
  import { useCartStore } from '/src/store/cart';
  const cart_store = useCartStore()
  
  onMounted(() => product_store.fetch_products())
  onMounted(() => cart_store.loadFromLocalStorage())
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>