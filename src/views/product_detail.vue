<template>
    <div class="d-flex justify-content-center" v-if="!load_product">
        <h2>กำลังโหลดข้อมูลสินค้า...</h2>
    </div>
    <div class="row mt-3" v-else>
        <div class="col-sm-3">
            <img :src="product.image" alt="" class="img-fluid">
        </div>
        <div class="col-md-6">
            <h1>{{ product.name }}</h1>
            <p>
                {{ product.producttext }}
            </p>
            <h4>ราคา {{ currencyTHB(product.price) }} บาท</h4>

            <div class="d-flex mt-3">
                <div class="btn-group me-auto">
                    <button class="btn btn-outline-primary" @click="increment_quantity()">เพิ่มสินค้า</button>
                    <button class="btn btn-outline-primary">{{ quantity }}</button>
                    <button class="btn btn-outline-primary" @click="decrement_quantity()"
                        :disabled="quantity == 1">ลบสินค้า</button>
                </div>
                <button class="btn btn-primary"
                    @click="cart_store.add_cart_detail(product.id, product.price, quantity)">เพิ่มสินค้า</button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { useRoute } from 'vue-router'

import axios from 'axios'

//currencyTHB
import { currencyTHB } from '../shared/currency'

//useCartStore
import { useCartStore } from '../store/cart'
const cart_store = useCartStore()

const product = ref({})

const quantity = ref(1)

const increment_quantity = () => {
    quantity.value++
}

const decrement_quantity = () => quantity.value--

const load_product = ref(false)

const route = useRoute()

const product_detail = async () => {
    await axios.get(`${import.meta.env.VITE_API2}getproduct/${route.params.id}`)
        .then(async (response) => {
            product.value = response.data
            console.log(product.value.ID)
            const imageSrc = await downloadImageAndDisplay(product.value.image);
            // เข้าถึงค่า image ของแต่ละสินค้า
            const productImage = imageSrc;
            product.value.image = productImage
            console.log(productImage);
            load_product.value = true
        }).catch((err) => {
            console.log(err)
        })
}

const downloadImageAndDisplay = async (uuid) => {
    try {
        // Fetch the image content from the server
        const response = await axios.get(
            `${import.meta.env.VITE_API2}preview/${uuid}`,
            {
                responseType: 'arraybuffer',
            }
        );
        // Convert the binary data to a data URL
        const imageSrc = `data:${response.headers['content-type']};base64,${btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`;

        // Return the image source
        return imageSrc;
    } catch (error) {
        console.error("Error downloading image:", error);
        // Propagate the error to the calling function
        throw error;
    }
}
onMounted(() => product_detail())


</script>

<style lang="scss" scoped></style>