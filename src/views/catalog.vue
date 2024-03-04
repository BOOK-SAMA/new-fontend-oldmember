<template>
  <div class="product-list">
    <div class="product" 
    v-for="product in productstore.products" 
    :key="product.ID"
    @click="gotoproductdetail(product.ID)"
    >
      <img :src="product.image" alt="">
      <h2>{{ product.name }}</h2>
      <p> {{ product.producttext }}</p>
      <p> {{ product.price  }} บาท </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CatalogView",
});
</script>

<script setup>
import { onMounted } from "vue";
import { productsStore } from "/src/store/productnew.js";
import { useRouter } from "vue-router" ;  
 

const router = useRouter()
const productstore = productsStore();

const gotoproductdetail = (id) => {
  router.push({name: 'productdetail' , params:{ id } })
}
onMounted(async () => {
  productstore.fetchProductsFromDB();
});
</script>


<style>

</style>