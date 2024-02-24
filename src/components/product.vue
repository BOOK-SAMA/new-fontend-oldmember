<template>
  <div>
    <div class="backg mt-0">
      <div class="container-fluid">
        <div class="row mt-2">
          <div class="col my-maincontent bg-light ml-2 g-0">
            <div class="row">
              <h2 class="row">
                รายการสินค้า
                <div class="col" style=" z-index: 2; ">
                  <a @click="toggleCart" style="cursor: pointer;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart"
                      viewBox="0 0 16 16">
                      <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                  </a>
                  <Cart v-if="isCartVisible" :cart="cart"/>
                </div>
              </h2>
              <div v-for="product in products" :key="product.id" class="col-md-4 mb-3"
                style="position: relative; z-index: 1;">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3">
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
    </div>
  </div>
</template>

  
<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "Product 1", price: 20 },
        { id: 2, name: "Product 2", price: 30 },
        { id: 3, name: "Product 3", price: 20 },
        { id: 4, name: "Product 4", price: 20 },
        { id: 5, name: "Product 5", price: 20 },
        { id: 6, name: "Product 6", price: 20 },
        // Add more products as needed
      ],
      cart: [],
      isCartVisible: false,
    };
  },
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
    },
    addToCart(product) {
      this.cart.push(product);
    },
    toggleCart() {
      this.isCartVisible = !this.isCartVisible;
    },
  },
};
</script>



<script setup>
import Banner from "/src/components/Banner.vue";
import NavBar from "/src/components/Test.vue";
import sidebar from "/src/components/sidebar.vue";
import maincontent from "/src/components/maincontent.vue";
import footerkub from "/src/components/footer.vue";
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