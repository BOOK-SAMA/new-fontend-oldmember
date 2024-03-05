

<template>
    <div class="cart-items" @click="router.push({ name: 'cart' })">
        <p>
            Item in Cart: {{ productstore.cart.length}}
        </p>
    </div>
    <catalog />
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