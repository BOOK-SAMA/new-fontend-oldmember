<template >
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
      <button
        type="button"
        class="btn btn-primary btn-block mb-4"
        @click="handleSubmit"
      >
        Login 
      </button>
    </form>
  </div>
</template>

<!-- <script >

// import axios from 'axios'
// import { onMounted } from 'vue';
// const test = async () => {
//   await axios.get(`${import.meta.env.VITE_API}`)
//   .then((response) => {
//       console.log(response)
//   }).catch((err)=>{
//     console.log(err)
//   })
// }

// onMounted(() => test)
</script> -->



<script setup>
import banner from "/src/components/Banner.vue";

import axios from "axios";
import { useRouter } from "vue-router";

let username = "";
let password = "";

const router = useRouter();

const handleSubmit = async () => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API2}login`, {
      username,
      password,
    });

    if (response.status !== 200) {
      router.push({ path: "/:notFound" });
      // throw new Error("Failed to authenticate");
    } else {
      const responseData = response.data;

      // Save data to localStorage
      localStorage.setItem("userid", responseData.userid);
      localStorage.setItem("tokenstring", responseData.tokenstring);

      // Continue with other actions based on the API response
      console.log("API Response:", response.data);

      // Redirect to profile page
      router.push({ path: "/profile/" + responseData.userid });
    }
  } catch (error) {
    localStorage.removeItem("userid");
    localStorage.removeItem("tokenstring");
    localStorage.removeItem("uuid");
    router.push({ path: "/:notFound" });
  }
};
</script>
<!-- // ใน component หรือที่คุณทำการ Logout
store.dispatch('logout'); 

// ใน component
const token = store.getters.getToken;
console.log('Token:', token);

// หรือถ้าคุณใช้ Composition API
import { useStore } from 'vuex';
const store = useStore();
const token = store.getters.getToken;
console.log('Token:', token);



-->



<style >
</style>