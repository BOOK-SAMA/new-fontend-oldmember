<!-- 23.31 -->

<template>
    <button @click="router.push({name:'catalog' })" class="btn btn-secondary">
        back to catalog
    </button>
    
    <!-- <div class="product">
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
  </div> -->

  <div class="container my-5">
        <div class="row">
            <div class="col-md-5">
                <div class="main-img">
                    <img class="img-fluid" :src="selectedproduct.image" alt="ProductS">
                   
                </div>
            </div>
            <div class="col-md-7">
                <div class="main-description px-2">
                    <div class="category text-bold">
                        Category: Book
                    </div>
                    <div class="product-title text-bold my-3">
                      {{ selectedproduct.name }}
                    </div>


                    <div class="price-area my-4">
                        <p class="new-price text-bold mb-1">{{ selectedproduct.price }} </p>
              

                    </div>


                    <div class="buttons d-flex my-5">
                        <div class="block">
                            <button class="shadow btn custom-btn"  @click="addtocart()">Add to cart</button>
                        </div>
                    </div>




                </div>

                <div class="product-details my-4">
                    <p class="details-title text-color mb-1">Product Details</p>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi odio recusandae aliquid ad impedit autem commodi earum voluptatem laboriosam? </p>
                </div>
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

.text-bold {
            font-weight: 800;
        }

        text-color {
            color: #0093c4;
        }

        /* Main image - left */
        .main-img img {
            width: 100%;
        }

        /* Preview images */
        .previews img {
            width: 100%;
            height: 140px;
        }

        .main-description .category {
            text-transform: uppercase;
            color: #0093c4;
        }

        .main-description .product-title {
            font-size: 2.5rem;
        }

        .old-price-discount {
            font-weight: 600;
        }

        .new-price {
            font-size: 2rem;
        }

        .details-title {
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.2rem;
            color: #757575;
        }

        .buttons .block {
            margin-right: 5px;
        }

        .quantity input {
            border-radius: 0;
            height: 40px;

        }


        .custom-btn {
            text-transform: capitalize;
            background-color: #0093c4;
            color: white;
            width: 150px;
            height: 40px;
            border-radius: 0;
        }

        .custom-btn:hover {
            background-color: #0093c4 !important;
            font-size: 18px;
            color: white !important;
        }

        .similar-product img {
            height: 400px;
        }

        .similar-product {
            text-align: left;
        }

        .similar-product .title {
            margin: 17px 0px 4px 0px;
        }

        .similar-product .price {
            font-weight: bold;
        }

        .questions .icon i {
            font-size: 2rem;
        }

        .questions-icon {
            font-size: 2rem;
            color: #0093c4;
        }


        /* Small devices (landscape phones, less than 768px) */
        @media (max-width: 767.98px) {

            /* Make preview images responsive  */
            .previews img {
                width: 100%;
                height: auto;
            }

        }
</style>