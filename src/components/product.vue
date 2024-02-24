<template>
  <div>

    <div class="backg mt-0">
      <div class="container">
        <div class="BannerContainer">
          <div class="p-0">
            <banner />
          </div>
        </div>
        <div class="NavBarContainer mt-2 sticky-top">
          <div class="p-0">
            <NavBar />
          </div>
        </div>
        <div class="container-fluid">
          <div class="row mt-2">
            <div class="col my-maincontent bg-light ml-2 g-0">
              <h2 class="text-center">รายการสินค้า</h2>
              <div class="row">
                <div v-for="product in products" :key="product.id" class="col-md-4 mb-3">
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
        <footer class="col g-0 bg-secondary mt-2">
          <footerkub />
        </footer>
      </div>
    </div>




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
    };
  },
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
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