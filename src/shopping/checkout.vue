<template>   
    <button class="btn btn-secondary" @click="showrequest()"> ลองยิงapiดู request </button>
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
const showrequest = async () => {
  try {
    // Assuming you have a cart object that represents the items in the cart
    const cart = productstore.cart;

    // Assuming you have an API endpoint for submitting the cart
    const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

    // Log the details of the request before making the API call
    const totalCartPrice = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    console.log("Totalprice:", JSON.stringify(totalCartPrice));
   

    const requestBody = {
      cart: cart.map(item => ({ ID: item.ID, name: item.name, price: item.price, quantity: item.quantity })),
      totalCartPrice
    }
    console.log("Body:", JSON.stringify(requestBody));
    
    // Make the actual API call
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if needed
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      // API call was successful
      console.log("Cart submitted successfully!");
      // You can handle the response data here if needed
    } else {
      // Handle errors
      console.error("Error submitting cart:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

</script>
