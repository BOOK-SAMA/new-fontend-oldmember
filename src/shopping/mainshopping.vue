<template>
    <header>
        <div class="cart-items" @click="router.push({ name: 'cart' })">
            <p>
                สินค้าในตะกร้า: {{ productstore.cart.length }}
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




</script>