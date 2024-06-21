<template>
  <nav class="navbar navbar-expand-lg " style="background-color: #F9CC02; ">
    <a class="navbar-brand" href="#"><img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png"
        alt="Admin" class="rounded-circle p-1" width="40" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" :href="`/admintoo/${this.$route.params.id}`">หน้าหลัก</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/addproduct">เพิ่ม สินค้า</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="state ? '#' : `/seeallproduct/${this.$route.params.id}`">จัดการสินค้า</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="`/seeallorder`">ดูรายการสั่งซื้อต่างๆ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="`/seeallfrom`">ดูรายการแจ้งชำระเงินต่างๆ</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn  my-2 my-sm-0" type="submit" @click="handlelogout()">
          ออกจากระบบ
        </button>
      </form>
    </div>
  </nav>


  <div class="container table-responsive py-5">
    <table class="table table-bordered table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col ">#</th>
          <th scope="col ">ItemID</th>
          <th scope="col ">ItemName</th>
          <th scope="col ">ItemQuantity</th>
          <th scope="col ">ItemPrice</th>
          <th scope="col ">Action</th>
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
            <router-link :to="{ path: '/' + this.$route.params.id + '/updateproduct/' + product.ID + '/edit' }"
              class="btn btn-success btn-sm">แก้ไข</router-link>
            <div class="b-example-divider p-1"></div>

            <div class="btn btn-success btn-sm" @click="dodelete(product.ID)">ลบ
            </div>
            <div class="b-example-divider p-1"></div>



          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>



<script>
import router from "@/router";
import axios from "axios";
export default {
  name: "Updateuser",
  data() {
    return {
      products: [],
      id: localStorage.getItem("userid"),

    };
  },

  async mounted() {
    // Ensure user is authenticated and authorized
    const id = localStorage.getItem("userid");    ;
    await this.Getproduct(id);
  },
  methods: {
    handlelogout() {
      localStorage.removeItem("userid");
      localStorage.removeItem("tokenstring");
      localStorage.removeItem("uuid");
      router.push({ path: "/login" });
    },
    dodelete(id) {
      axios
        .post(`${import.meta.env.VITE_API2}admin/deleteproduct/${id}`, null, {
          headers: {
            // ตัวอย่าง Header (แก้ตามความเหมาะสม)
            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.status == 200) {
            console.log(res);
            alert("ทำการลบสินค้าเรียบร้อยแล้ว");
            window.location.reload(); 
          } else {
            alert("ไม่สามารถทำการลบสินค้าได้");
          }
        })
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