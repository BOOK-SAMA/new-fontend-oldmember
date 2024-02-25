<template>
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
            <ProductList @add-to-cart="addToCart" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import ProductList from "/src/components/product.vue";
import Cart from "/src/components/cart.vue";
import Banner from "/src/components/Banner.vue";
import NavBar from "/src/components/Test.vue";
</script >
  

<script>
export default {
  components: {
    ProductList,
    Cart,
  },
  data() {
    return {
      cart: [],
      isCartVisible: false,
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
  },
};
</script>


<style scoped>
.my-sidebar {
  -ms-flex: 0 0 230px;
  flex: 0 0 230px;
  height: 15cm;
  background-color: dimgray;
}
.my-maincontent {
  height: 20cm;
  width: 30cm;
}
.backg {
  margin: 0;
  padding: 30px;
  background-image: url("http://www.scsualumni.net/images/background/main/crop-1702428316.jpg?1702428316");
  background-size: cover;
  background-attachment: fixed;
}
</style>