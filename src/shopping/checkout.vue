<template>
  <button @click="router.push({ name: 'catalog' })" class="btn btn-secondary">
    back to catalog
  </button>
  <div class="col-sm-12 col-md-12">
  <h1>กรุณากรอกข้อมูลต่อไปนี้</h1>
</div>
<div class="col-sm-12 col-md-4"></div>
<div class="col-sm-12 col-md-4 col-md-offset-0">
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">คำนำหน้าชื่อ - ชื่อ - นามสกุล</label>
    <input type="text" class="form-control" id="name"  placeholder="(เว้นวรรคระหว่างชื่อนามกับนามสกุล) ภาษาไทย"  v-model="thainame">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">ข้อมูลที่อยู่ปัจจุบัน</label>
    <textarea type="text" class="form-control" id="address" v-model="address">
      </textarea>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">เบอร์โทรศัพท์</label>
    <input type="tel" id="phone" name="phone"  class="form-control" placeholder="กรอกเบอร์โทรศัพท์" v-model="phonenumber">
  </div>
  <button type="submit" class="btn btn-success"  @click="showrequest()">Submit</button>
</form>
</div>
<div class="col-sm-12 col-md-4"></div>
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
const thainame = ref(""); 
const address = ref("");
const phonenumber = ref("");
const productstore = productsStore()
const router = useRouter()
const route = useRoute()
const userId = localStorage.getItem("userid");

const showrequest = async () => {
  try {
    
    
    const cart = productstore.cart;

    const apiEndpoint = `${import.meta.env.VITE_API2}Createdata` ;

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
      alert("ทำการสั่งซื้อสินค้าเรียบร้อยแล้ว อย่าลืมเค้าไปตรวจสอบในประวัติการสั่งซื้อนะครับ");
      // You can handle the response data here if needed
      router.push({ path: "https://mytestsilpakorn.azurewebsites.net/" });
    } else {
      // Handle errors
      console.error("Error submitting cart:", response);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

</script>
