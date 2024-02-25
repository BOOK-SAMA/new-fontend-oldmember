<template>
  <div id="app">
    <ProductList @add-to-cart="addToCart" />
    <!-- <Cart :cart="cart" /> -->
  </div>
</template>



<script setup>
import ProductList from "/src/components/product.vue";
import Cart from "/src/components/cart.vue";
</script >
  

<script>
export default {
  components: {
    ProductList,
    Cart,
  },
  data() {
    return {
      cart: [],
      isCartVisible: false,
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
  },
};
</script>