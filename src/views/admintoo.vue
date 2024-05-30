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
          <a class="nav-link" href="/admincreate">สร้างผู้ใช้</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"
            href="https://mytestsilpakorn.azurewebsites.net/wp-admin/">แก้ไขหน้าเว็บ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="state ? '#' : `/seeallproduct/${this.$route.params.id}`">จัดการสินค้า</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="state ? '#' : `/seeallorder`">ดูรายการสั่งซื้อต่างๆ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="state ? '#' : `/seeallfrom`">ดูรายการแจ้งชำระเงินต่างๆ</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit" @click="handlelogout()">
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
        <th scope="col">Username</th>
        <th scope="col">Thainame</th>
        <th scope="col">ENGname</th>
        <th scope="col">PhoneNumber</th>
        <th scope="col">Role</th>
        <th scope="col">Paystatus</th>
        <th scope="col">Accressstatus</th>
    <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(users, index) in users" :key="index">
        <td v-text="users.ID"></td>
        <td v-text="users.Username"></td>
        <td v-text="users.Thainame"></td>
        <td v-text="users.Engname"></td>
        <td v-text="users.Phonenumber"></td>
        <td v-text="users.Role"></td>
        <td v-text="users.Paystatus"></td>
        <td v-text="users.Accessstatus"></td>
        <td class="p-1">
          <router-link :to="{ path: '/update/' + users.ID + '/edit' }"
            class="btn btn-success btn-sm">แก้ไข</router-link>
          <div class="b-example-divider p-1"></div>

          <router-link :to="{ path: '/admintoo/' + this.$route.params.id }" class="btn btn-success btn-sm"
            @click="dodelete(users.ID)">ลบ
          </router-link>
          <div class="b-example-divider p-1"></div>

          <a class="btn btn-success btn-sm" :href="state ? '#' : `/orderhistory/${users.ID}`">ดูประวัติการสั่งซื้อ</a>

        </td>
      </tr>
    </tbody>
  </table>
  </div>
  <!-- Modal -->
  <!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">แก้ไขรหัสผ่าน</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <label for="newpassword" class="mr-2">New Password:</label>
          <input type="password" v-model="newpassword" @input="comparePasswords">
          <hr class="mx-n3" />
          <label for="comfirepassword" class="mr-2">Confirm Password:</label>
          <input type="password" v-model="comfirepassword" @input="comparePasswords">
          <hr class="mx-n3" />
          <p v-if="passwordsMatch">Passwords match!</p>
          <p v-else>Passwords do not match!</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary text-white" :disabled="!passwordsMatch">บันทึกรหัสผ่าน</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            ปิด
          </button>
        </div>
      </div>
    </div>
  </div> -->
</template>




<script>
import router from "@/router";
import axios from "axios";
export default {
  name: "Updateuser",
  data() {
    return {
      users: [],
      newpassword: '',
      comfirepassword: '',
      passwordsMatch: false
    };
  },

  async mounted() {
    // Ensure user is authenticated and authorized
    const id = this.$route.params.id;
    await this.Getuser(id);
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
        .post(`${import.meta.env.VITE_API2}admin/delete/${id}`, null, {
          headers: {
            // ตัวอย่าง Header (แก้ตามความเหมาะสม)
            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.status == 200) {
            console.log(res);
            alert("ทำการลบ ผู้ใช้งาน เรียบร้อยแล้ว")
            router.push({ path: "/admintoo/" + responseData.userid });
          }
        })
        .catch();
    },
    async Getuser(id) {
      const userId = localStorage.getItem("userid");
      if (id != userId) {
        localStorage.removeItem("userid");
        localStorage.removeItem("tokenstring");
        localStorage.removeItem("uuid");
        router.push({ path: "/loginadmin" });
      }
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API2}admin/readall`,

          {
            headers: {
              // ตัวอย่าง Header (แก้ตามความเหมาะสม)
              Authorization: "Bearer " + localStorage.getItem("tokenstring"),
              "Content-Type": "application/json",
            },
          }
        );
        this.users = response.data.user;
        console.log(response.data.user);
      } catch (error) {
        localStorage.removeItem("userid");
        localStorage.removeItem("tokenstring");
        localStorage.removeItem("uuid");
        router.push({ path: "/loginadmin" });
      }
    },
    comparePasswords() {
      this.passwordsMatch = this.newpassword === this.comfirepassword;
    },
    Changepassword() {
      // Assuming you want to use $route.params.id
      const id = this.$route.params.id;

      let data = new FormData();
      data.append("password", this.newpassword);
      data.append("confirmpassword", this.comfirepassword);
      axios
        .post(`${import.meta.env.VITE_API2}admin/resetpassword/${id}`, data, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          const idnew = localStorage.getItem("userid");
          router.push({ path: `admintoo/${idnew}` });
        })
        .catch((error) => {
          console.error("Error updating:", error);
        });
    },
  },
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