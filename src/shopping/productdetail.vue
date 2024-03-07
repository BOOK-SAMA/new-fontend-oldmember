<!-- 23.31 -->

<template>
    <button @click="router.push({name:'catalog' })" class="btn btn-secondary">
        back to catalog
    </button>
    <h1>product detail </h1>
    <div class="product">
    <div >
        <div class="product-image">
           <img :src="selectedproduct.image" alt=""> 
        </div>
        <div class="product-details">
            <p>ชื่อสินค้า: {{ selectedproduct.name }}  </p>
            <p>ราคาสินค้า:{{ selectedproduct.price }} </p>
            <p>จำนวนสินค้า:{{  }} </p>
            <button class="btn btn-secondary" @click="addtocart()"> เพิ่มใส่ตะกร้า </button>
        </div>
    </div>
  </div>
  
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "productdetail",
});
</script>


<script setup>
import { computed ,onMounted} from "vue";
import { productsStore } from "/src/store/productnew.js";
import { useRoute, useRouter } from "vue-router";

onMounted(async () => {
  productstore.fetchProductsFromDB();
});

const productstore = productsStore()
const router = useRouter()
const route = useRoute()
const userId = localStorage.getItem("userid");



const selectedproduct = computed(() => {
    console.log(productstore.products)
    const findme = productstore.products.find((item) => {
        console.log(item); 
        console.log(item.ID);// Log the current item being checked
        return item.ID === Number(route.params.id);
    });
    
    console.log(findme)
    return findme;
}

)

const addtocart = () => {
  productstore.addToCart(selectedproduct.value)
  router.push({ name: 'cart' })
}
</script>

<style scoped>
.product {
  display: flex;
  margin-top: 50px;
}

.product-image {
  margin-right: 24px;
}
</style>