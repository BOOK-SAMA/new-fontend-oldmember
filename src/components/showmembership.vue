<template>
    <div class="container table-responsive py-5">
      <table class="table table-bordered table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">ชื่อภาษาไทย</th>
            <th scope="col">อีเมล</th>
            <th scope="col">เบอร์โทรศัพท์</th>
            <th scope="col">จำนวนเงิน</th>
            <th scope="col">สถานะ</th>
            <th scope="col">การกระทำ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(from, index) in membershipfrom" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ from.thainame }}</td>
            <td>{{ from.email }}</td>
            <td>{{ from.phonenumber }}</td>
            <td>{{ from.pricevalue }}</td>
            <td>{{ from.status }}</td>
            <td class="p-1">
              <router-link :to="{ path: '/editmemberfrom/' + from.ID }" class="btn btn-success btn-sm">ดูรายละเอียด</router-link>
              <div class="b-example-divider p-1"></div>
              <button @click="dodelete(from.ID)" class="btn btn-danger btn-sm">ลบ</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "allmembership",
    data() {
      return {
        membershipfrom: [],
      };
    },
    async mounted() {
      await this.getmembershipfrom();
    },
    methods: {
      async getmembershipfrom() {
        const URL = `${import.meta.env.VITE_API2}viewmembershipfrom`;
        let config = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
            "Content-Type": "application/json",
          },
        };
        try {
          const res = await axios.post(URL, {}, config);
          console.log(res.data);
          this.membershipfrom = res.data.Frommembership;
          console.log(this.membershipfrom);
        } catch (error) {
          alert("Error: " + error.message);
        }
      },
      async dodelete(id) {
        try {
          const URL = `${import.meta.env.VITE_API2}Deletememberfrom/${id}`;
          const response = await axios.post(
            URL,
            {},
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("tokenstring"),
                "Content-Type": "application/json",
              },
            }
          );
          console.log(response.data);
          alert("ลบคำสั่งซื้อสำเร็จแล้ว");
          // Refresh the list after deletion
          this.getmembershipfrom();
        } catch (error) {
          alert("ไม่สามารถลบคำสั่งซื้อได้: " + error.message);
        }
      },
      dateformat(dates) {
        const date = new Date(dates);
        return `${String(date.getDate()).padStart(2, "0")}/${String(
          date.getMonth() + 1
        ).padStart(2, "0")}/${date.getFullYear()}`;
      },
    },
  };
  </script>
  