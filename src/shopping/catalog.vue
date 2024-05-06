<template>
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"><img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png"
        alt="Admin" class="rounded-circle p-1" width="40" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="https://mytestsilpakorn.azurewebsites.net/">หน้าแรก <span
              class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a @click="router.push({ name: 'cart' })" class="nav-link">
            ดูตะกร้า
          </a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit" @click="handlelogout()">
          LOGOUT
        </button>
      </form>
    </div>
  </nav>

  <div class="container">
    <div class="row">
      <div class="card border-0 rounded-0 shadow" style="width: 18rem; margin: 40px;"
        v-for="product in productstore.products" :key="product.ID" @click="gotoproductdetail(product.ID)">
        <img :src="product.image" class="card-img-top rounded-0" alt="...">
        <div class="card-body mt-3 mb-3">
          <div class="row">
            <div class="col">
              <h4 class="card-title">{{ product.name }}</h4>
              <p class="card-text">
                {{ product.producttext }}
              </p>
            </div>
          </div>
        </div>
        <div class="row align-items-center text-center g-0">
          <div class="col-5">
            <h5>{{ product.price }} บาท</h5>
          </div>
          <div class="col-7">
            <a href="#" class="btn btn-dark w-100 p-3 rounded-0 text-warning" @click="gotoproductdetail(product.ID)">ADD
              TO CART</a>
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
  methods: {
    handlelogout() {
      localStorage.removeItem("userid");
      localStorage.removeItem("tokenstring");
      localStorage.removeItem("uuid");
      router.push({ path: "/login" });
    },
  }
});
</script>

<script setup>
import { onMounted } from "vue";
import { productsStore } from "/src/store/productnew.js";
import { useRouter } from "vue-router";


const router = useRouter()
const productstore = productsStore();
const userId = localStorage.getItem("userid");

const gotoproductdetail = (id) => {
  router.push({ name: 'productdetail', params: { id } })
}

onMounted(async () => {
  productstore.fetchProductsFromDB();
});
</script>



<style scoped></style>
