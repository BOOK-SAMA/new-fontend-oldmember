<template>
  <nav class="navbar bg-body-tertiary  bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#">สินค้าที่ระลึก</a>
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample" @click="toggleCart">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart"
          viewBox="0 0 16 16">
          <path
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
        ตะกร้า
      </button>

      <div class="offcanvas offcanvas-end  " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
        style=" width: 1000px;">

        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">สินค้าที่ระลึก</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
          </button>
        </div>

        <div class="offcanvas-body ">
          <Cart :cart="cart" />
        </div>
      </div>

    </div>

  </nav>

  <div class="backg  " style="margin-top: 0px;">
    <div class="container-fluid ">
      <div class="row mt-4 ">
        <div class="col my-maincontent bg-light ml-2 g-0 ">
          <div class="row ">
            <div v-for="(product, index) in paginatedProducts" :key="product.id" class="col-md-4 mb-3"
              :style="{ 'position': 'relative', 'z-index': '1', 'clear': index % 3 === 0 ? 'both' : 'none' }">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <img :src="product.image" class="img-thumbnail">
                  <h4 class="my-0 fw-normal">{{ product.name }}</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">{{ product.price }}<small
                      class="text-body-secondary fw-light"> บาท </small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                  </ul>
                  <button @click="addToCart(product)">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination justify-content-center">


      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>

      <li class="page-item ml-2 mr-2"><a class="page-link"><span>{{ currentPage }}</span></a></li>

      <button @click="nextPage" :disabled="currentPage * itemsPerPage >= products.length">Next</button>
    </div>
  </div>
</template>



<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      cart: [],
      isCartVisible: false,
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  async mounted() {
    await this.getproduct();
  },
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
      this.cart.push(product);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      const lastPage = Math.ceil(this.products.length / this.itemsPerPage);
      if (this.currentPage < lastPage) {
        this.currentPage++;
      }
    },
    async getproduct() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API2}getallproduct`,
          null,
          {}
        );
        console.log(response.data.product);
        this.products = response.data.product;

        for (let i = 0; i < this.products.length; i++) {
          try {
            const imageSrc = await this.downloadImageAndDisplay(this.products[i].image);
            this.products[i].image = imageSrc;
            console.log(imageSrc);
          } catch (error) {
            console.error("Error downloading image for product:", this.products[i].image, error);
          }
        }
      } catch (error) {
        console.error("Error getting products:", error);
      }
    },
    async downloadImageAndDisplay(uuid) {
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

  },
  computed: {
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.products.slice(start, end);
    },
  },

};
</script>

<script setup>
import Cart from "/src/components/cart.vue";
</script>



<!-- <div class="col my-maincontent bg-light ml-2 g-0">
  <h2>รายการสินค้า</h2>
  <ul class="row">
    <li v-for="product in products" :key="product.id" >
       {{ product.name }} - ${{ product.price }} -->
      <!-- <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="row">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal"> {{ product.name }}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">${{ product.price }}<small
                  class="text-body-secondary fw-light"> บาท </small></h1>
              <ul class="list-unstyled mt-3 mb-4">
              </ul>
              <button @click="addToCart(product)">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>

<div class="col" style=" z-index: 4; ">
                  <a @click="toggleCart" style="cursor: pointer;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart"
                      viewBox="0 0 16 16">
                      <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                  </a>
                  <Cart v-if="isCartVisible" :cart="cart"/>
                </div>



</div> --> 





 <!-- <button @click="addToCart(product)">Add to Cart</button> -->
  <!-- <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal"></h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
          </div>
        </div>
      </div>
    </div> -->