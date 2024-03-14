<template>
  <button @click="router.push({ name: 'catalog' })" class="btn btn-secondary">
    back to catalog
  </button>
  <div class="row align-items-center pt-4 pb-3">
    <div class="col-md ps-5">
      <h6 class="mb-0">คำนำหน้าชื่อ - ชื่อ - นามสกุล</h6>
    </div>
    <div class="col-md-9 pe-5">
      <input type="text" class="form-control form-control-lg" placeholder="(เว้นวรรคระหว่างชื่อนามกับนามสกุล) ภาษาไทย"
        v-model="thainame" />
    </div>
  </div>
  <div class="row align-items-center pt-4 pb-3">
    <div class="col-md-3 ps-5">
      <h6 class="mb-0">ข้อมูลที่อยู่ปัจจุบัน</h6>
    </div>
    <div class="col-md-9 pe-5">
      <input type="text" class="form-control form-control-lg" placeholder=" (อย่าลืมใส่ที่อยู่นะครับ)"
        v-model="address" />
    </div>
  </div>
  <!-- ช่องที่อยู่ @-->
  
  <div class="row align-items-center pt-4 pb-3">
    <div class="col-md-3 ps-5">
      <h6 class="mb-0">เบอร์โทรศัพท์</h6>
    </div>
    <div class="col-md-9 pe-5">
      <input type="text" class="form-control form-control-lg" placeholder=" (อย่าลืมใส่เบอร์โทรศัพท์)"
        v-model="phonenumber" />
    </div>
  </div>
  <!-- ช่องเบอร์โทรศัพท์ @-->
  <hr class="mx-n3" />
  
  <button class="btn btn-secondary" @click="showrequest()"> ลองยิงapiดู request </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "cart",


}
);
//27.43
</script>

<script setup>
import catalog from "/src/shopping/catalog.vue";
import { computed, onMounted, ref } from "vue";
import { productsStore } from "/src/store/productnew.js";
import { useRoute, useRouter } from "vue-router";
const thainame = ref(""); // You can provide an initial value if needed
const address = ref("");
const phonenumber = ref("");
const productstore = productsStore()
const router = useRouter()
const route = useRoute()
const userId = localStorage.getItem("userid");

const showrequest = async () => {
  try {
    
    // Assuming you have a cart object that represents the items in the cart
    const cart = productstore.cart;

    // Assuming you have an API endpoint for submitting the cart
    // http://localhost:4444/echo
    const apiEndpoint = "http://localhost:5555/Createdata";

    // Log the details of the request before making the API call
    const totalCartPrice = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    console.log("Totalprice:", JSON.stringify(totalCartPrice));


    const requestBody = {
      userId: String(userId),
      thainame,
      address,
      phonenumber,
      
      cart: cart.map(item => ({     itemID: item.ID, itemname: item.name, price: item.price, quantity: item.quantity })),
      totalCartPrice: String(totalCartPrice) 
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
      console.error("Error submitting cart:", response);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

</script>
