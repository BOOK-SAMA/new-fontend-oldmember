<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"><img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png"
        alt="Admin" class="rounded-circle p-1" width="40" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="https://mytestsilpakorn.azurewebsites.net/">หน้าแรก <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admincreate">สร้าง User</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"
            href="https://mytestsilpakorn.azurewebsites.net/wp-login.php?redirect_to=https%3A%2F%2Fmytestsilpakorn.azurewebsites.net%2Fwp-admin%2F&reauth=1">แก้ไขหน้าเว็บ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="state ? '#' : `/seeallproduct/${this.$route.params.id}`">จัดการสินค้า</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit" @click="handlelogout()">
          LOGOUT
        </button>
      </form>
    </div>
  </nav>

  <table class="table mt-4">
    <thead>
      <tr>
        <th scope="col ">#</th>
        <th scope="col ">ItemID</th>
        <th scope="col ">ItemName</th>
        <th scope="col ">ItemQuantity</th>
        <th scope="col ">ItemPrice</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in products" :key="index">
        <td v-text="index"></td>
        <td v-text="product.ID"></td>
        <td v-text="product.name"></td>
        <td v-text="product.quantity"></td>
        <td v-text="product.price"></td>

        <td class="p-1">
          <router-link :to="{ path: '/' + this.$route.params.id +'/updateproduct/' + product.ID + '/edit' }"
            class="btn btn-success btn-sm">แก้ไข</router-link>
          <div class="b-example-divider p-1"></div>

          <div class="btn btn-success btn-sm"
            @click="dodelete(product.ID)">ลบ
          </div>
          <div class="b-example-divider p-1"></div>



        </td>
      </tr>
    </tbody>
  </table>

</template>



<script>
import router from "@/router";
import axios from "axios";
export default {
  name: "Updateuser",
  data() {
    return {
      products: [],

    };
  },

  async mounted() {
    // Ensure user is authenticated and authorized
    const id = this.$route.params.id;
    await this.Getproduct(id);
  },
  methods: {
    handlelogout() {
      localStorage.removeItem("userid");
      localStorage.removeItem("tokenstring");
      localStorage.removeItem("uuid");
      router.push({ path: "/loginadmin" });
    },
    dodelete(id) {
      axios
        .post(`${import.meta.env.VITE_API2}deleteproduct/${id}`, null, {
          headers: {
            // ตัวอย่าง Header (แก้ตามความเหมาะสม)
            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.status == 200) {
            console.log(res);
            // router.push({ path: "/admintoo/" + this.$route.params.id });
          }
        })
        .catch();
    },
    async Getproduct(id) {
      const userId = localStorage.getItem("userid");
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API2}getallproduct`,

          {
            headers: {
              // ตัวอย่าง Header (แก้ตามความเหมาะสม)
              Authorization: "Bearer " + localStorage.getItem("tokenstring"),
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data.product);
        this.products = response.data.product;
      } catch (error) {
        localStorage.removeItem("userid");
        localStorage.removeItem("tokenstring");
        localStorage.removeItem("uuid");
        router.push({ path: "/loginadmin" });
      }
    },

  }
};
</script>










<!-- <div class="">
      <tr v-for="(users, index) in users" :key="index">
        <td v-text="users.ID"></td>
        <td v-text="users.Username"></td>
        <td v-text="users.Thainame"></td>
        <td v-text="users.ENGname"></td>
        <td v-text="users.PhoneNumber"></td>
        <td v-text="users.Role"></td>
        <td v-text="users.Paystatus"></td>
        <td>
          <button class="btn btn-success btn-sm">แก้ไข</button>
          <button class="btn btn-success btn-sm">ลบ</button>
        </td>
      </tr>
    </div> -->