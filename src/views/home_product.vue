<template>
    <div class="d-flex justify-content-center " v-if="!product_store.load_products">
        <h2>กำลังโหลดข้อมูลสินค้า...</h2>
    </div>
    <div class="row mt-2" v-else>
        <div class="col mb-2" v-for="(product, index) in search_products" :key="index">
            <div class="card" style="width: 19rem;">
                <img :src="product.image" class="card-img-top mx-auto" alt="" style="width: 12rem; height: 12rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <p class="card-text">ราคา {{ product.price }} บาท</p>
                    <routerLink :to="`/product_detail/${product.ID} `" class="btn btn-primary mx-2">รายละเอียด</routerLink>
                    <button class="btn btn-success"
                        @click="cart_store.add_cart(product.ID, product.price,product.image)">เพิ่มลงตะกร้า</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

//currencyTHB
import { currencyTHB } from '/src/shared/currency';

//useProductStore
import { useProductStore } from '/src/store/product';
const product_store = useProductStore()

const list = computed(() => product_store.list_products)

const search_products = computed(() => product_store.search_products)

//useCartStore
import { useCartStore } from '/src/store/cart'
const cart_store = useCartStore()



</script>

<style lang="scss" scoped></style>