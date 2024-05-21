<template>
  <div class="container-sm mt-5">
    <form>
      <banner />
      <!-- Usernaeminput -->
      <div class="form-outline mb-4 mt-2">
        <input type="email" class="form-control" v-model="username" />
        <label class="form-label" for="form2Example1">Username</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="password" class="form-control" v-model="password" />
        <label class="form-label" for="form2Example2">Password</label>
      </div>

      <!-- 2 column grid layout for inline styling -->
      <div class="row mb-4">
        <div class="col">
          <a class="nav-link" href="https://mytestsilpakorn.azurewebsites.net/">หน้าแรก</a>
          <router-link to="/register" class="nav-link"> สมัครสมาชิก </router-link>
        </div>
        
      </div>
      <!-- Submit button -->
      <button type="button" class="btn btn-primary btn-block mb-4" @click="handleSubmit">
        Login
      </button>
    </form>
  </div>
</template>





<script setup>
import banner from "/src/components/Banner.vue";

import axios from "axios";
import { useRouter } from "vue-router";

let username = "";
let password = "";

const router = useRouter();

const handleSubmit = async () => {
  if (!username.trim() || !password.trim()) {
    alert("กรุณากรอก username และ password");
    return;
  }

  try {
    const response = await axios.post(`${import.meta.env.VITE_API2}login`, {
      username,
      password,
    });
      
      if (response.status != 200) {
          alert(response.data.message);
      } else {
        const responseData = response.data;

        // Save data to localStorage
        localStorage.setItem("userid", responseData.userid);
        localStorage.setItem("tokenstring", responseData.tokenstring);

        // Continue with other actions based on the API response
        console.log("API Response:", response.data);
        alert("เข้าสู่ระบบ เรียบร้อยแล้ว")
        // Redirect to profile page
        if (responseData.role == "user") {
            router.push({ path: "/profile/" + responseData.userid });
        }else{
            router.push({ path: "/admintoo/" + responseData.userid });
        }
      }
  } catch (error) {
    alert(error.response.data.Text)
  }
};
</script>
<style></style>