<template >
  <div class="container-sm mt-5">
    <banner />
    <form>
      <!-- Usernaeminput -->
      <div class="form-outline mb-4 mt-4">
        <input type="email" id="form2Example1" class="form-control" v-model="username" />
        <label class="form-label" for="form2Example1">Username</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="password" id="form2Example2" class="form-control" v-model="password" />
        <label class="form-label" for="form2Example2">Password</label>
      </div>

      <!-- 2 column grid layout for inline styling -->

      <!-- Submit button -->
      <button type="button" class="btn btn-primary btn-block mb-4" @click="handleSubmit">
        Login admin
      </button>
    </form>
  </div>
</template>
  


<!-- <script>
import axios from 'axios'
export default {
    name : 'login' ,
    data() {
        return {
            username : '',
            password : '',
        }
    },
    methods :{
        async handleSubmit(){
            const res = await axios.post(`${import.meta.env.VITE_API}adminlogin` ,{
                username : this.username ,
                password : this.password
            });
            console.log(res)
            localStorage.setItem('token',res.data.Token);
            
        }
    }
}
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
    const response = await axios.post(`${import.meta.env.VITE_API2}loginadmin`, {
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
      router.push({ path: "/admintoo/" + responseData.userid });
    }
  } catch (error) {
    localStorage.removeItem("userid");
    localStorage.removeItem("tokenstring");
    localStorage.removeItem("uuid");
    router.push({ path: "/:notFound" });
  }
};
</script>

