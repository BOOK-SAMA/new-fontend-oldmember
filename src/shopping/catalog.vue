<template>
      <!-- <div class="row">
 <div class="product" 
    v-for="product in productstore.products" 
    :key="product.ID"
    @click="gotoproductdetail(product.ID)"
    >
      <img   alt="">
      <h2>{{ product.name }}</h2>
      <p> {{ product.producttext }}</p>
      <p> {{ product.price  }} บาท </p>
      <button class="btn btn-secondary" @click="gotoproductdetail(product.ID)"> เพิ่มใส่ตะกร้า </button>
    </div>

   
  </div>
   -->
   <div class="container">
  <div class="row">
 <div class="card border-0 rounded-0 shadow" style="width: 18rem; margin: 40px;" v-for="product in productstore.products" 
    :key="product.ID" @click="gotoproductdetail(product.ID)">
    <img :src="product.image" class="card-img-top rounded-0" alt="...">
    <div class="card-body mt-3 mb-3">
      <div class="row">
        <div class="col">
          <h4 class="card-title">{{ product.name }}</h4>
          <p class="card-text">
            {{product.producttext}}
          </p>
        </div>
      </div>
    </div>
    <div class="row align-items-center text-center g-0">
      <div class="col-5">
        <h5>{{product.price}} บาท</h5>
      </div>
      <div class="col-7">
        <a href="#" class="btn btn-dark w-100 p-3 rounded-0 text-warning" @click="gotoproductdetail(product.ID)">ADD TO CART</a>
      </div>
    </div>
  </div>
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
const userId = localStorage.getItem("userid");

const gotoproductdetail = (id) => {
  router.push({name: 'productdetail' , params:{ id } })
}

onMounted(async () => {
  productstore.fetchProductsFromDB();
});
</script>



<style scoped>


</style>
