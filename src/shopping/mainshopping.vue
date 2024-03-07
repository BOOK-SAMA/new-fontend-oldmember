<template>
    <header>
        <div class="cart-items" @click="router.push({ name: 'cart' })">
            <p>
                Item in Cart: {{ productstore.cart.length }}
            </p>
        </div>
    </header>
    <main>
        <catalog />
    </main>
    
</template>




<script setup>
import catalog from "/src/shopping/catalog.vue";
import { computed, onMounted } from "vue";
import { productsStore } from "/src/store/productnew.js";
import { useRoute, useRouter } from "vue-router";

const productstore = productsStore()
const router = useRouter()
const route = useRoute()
const userId = localStorage.getItem("userid");
if(userId == ""){
      localStorage.removeItem("userid");
      localStorage.removeItem("tokenstring");
      localStorage.removeItem("uuid");
      router.push({ path: "/login" });
}

</script>