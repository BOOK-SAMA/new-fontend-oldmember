<template>
  <button @click="router.push({ name: 'catalog' })" class="btn btn-secondary">
    back to catalog
  </button>
  <div class="cart-items" @click="router.push({ name: 'catalog' })">
    <p>
      Item in Cart: {{ productstore.cart.length }}
    </p>
  </div>
  <div class="cart-item">
    <div class="cartitem" v-for="item in productstore.cart" :key="item.ID">

      <div class="item-detail">
        <div>
          <div class="product-image">
            <img :src="item.image" alt="">
          </div>
          <div class="product-details">
            <p>ชื่อสินค้า: {{ item.name }} </p>
            <p>ราคาสินค้า:{{ item.price }} </p>
            <button class="btn btn-sm btn-secondary" @click="decrement_quantity(item.ID)">-</button>
            <span class="mx-2">{{ item.quantity }}</span>
            <button class="btn btn-sm btn-secondary" @click="increment_quantity(item.ID)">+</button>
            <button class="btn btn-secondary" @click="removeformcart(item.ID)"></button>
          </div>

        </div>
      </div>

    </div>
    <router-link to="/checkout"> ยืนยัน </router-link>
  </div>
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "cart",
});
//27.43
</script>

<script setup>
import catalog from "/src/shopping/catalog.vue";
import { computed, onMounted } from "vue";
import { productsStore } from "/src/store/productnew.js";
import { useRoute, useRouter } from "vue-router";
const quantity = 0
const productstore = productsStore()
const router = useRouter()
const route = useRoute()
const removeformcart = (id) => {
  productstore.removeFromCart(id)
}
const decrement_quantity = (id) => {
  productstore.decrement_quantity(id)
}
const increment_quantity = (id) => {
  productstore.increment_quantity(id)
}

</script>