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
                <li class="nav-item active">
                    <a class="nav-link" href="https://mytestsilpakorn.azurewebsites.net/">หน้าแรก <span
                            class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admincreate">สร้าง User</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://mytestsilpakorn.azurewebsites.net/wp-admin/">แก้ไขหน้าเว็บ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="`/seeallproduct/${this.$route.params.id}`">จัดการสินค้า</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="`/seeallorder`">ดูรายการสั่งซื้อต่างๆ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="`/seeallfrom`">ดูรายการแจ้งชำระเงินต่างๆ</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-secondary my-2 my-sm-0" type="submit" @click="handlelogout()">
                    LOGOUT
                </button>
            </form>
        </div>
    </nav>
    <div class="container table-responsive py-5">
        <table class="table table-bordered table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">รูปแบบฟอร์ม</th>
                    <th scope="col">รหัสคำสั่งซื้อ</th>
                    <th scope="col">ชื่อภาษาไทย</th>
                    <th scope="col">อีเมล</th>
                    <th scope="col">เบอร์โทรศัพท์</th>
                    <th scope="col">จำนวนเงิน</th>
                    <th scope="col">สถานะ</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(from, index) in paymentfroms" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ from.type }}</td>
                    <td>{{ from.uniqueorder }}</td>
                    <td>{{ from.thainame }}</td>
                    <td>{{ from.email }}</td>
                    <td>{{ from.phonenumber }}</td>
                    <td>{{ from.pricevalue }}</td>
                    <td>{{ from.status }}</td>
                    <td class="p-1">
                        <router-link :to="{ path: '/editpaymentfrom/' + from.ID }"
                            class="btn btn-success btn-sm">ดูรายละเอียด</router-link>
                        <div class="b-example-divider p-1"></div>
                        <router-link :to="{ path: '/admintoo/' + this.$route.params.id }" class="btn btn-success btn-sm"
                            @click="dodelete(index)">ลบ
                        </router-link>
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
    name: "allpaymentfrom",
    data() {
        return {
            paymentfroms: [],
        };
    },
    async mounted() {
        await this.Getpaymentfrom();
    },
    methods: {
        async handlelogout() {
            localStorage.removeItem("userid");
            localStorage.removeItem("tokenstring");
            localStorage.removeItem("uuid");
            router.push({ path: "/loginadmin" });
        },
        async Getpaymentfrom() {
            const URL = `${import.meta.env.VITE_API2}viewpaymentfrom`;
            let config = {
                header: {
                    Authorization: "Bearer " + localStorage.getItem("tokenstring"),
                    "Content-Type": "application/json",
                },
            };
            axios.post(URL, config).then((res) => {
                console.log(res.data)
                this.paymentfroms = res.data.Frompayment
                console.log(this.paymentfroms)

            }).catch((error) => {
                alert("this is error => ", error);
            });
        },
        async dodelete(index) {
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_API2}deletepaymentfrom/${index}`,
                    {
                        headers: {
                            // ตัวอย่าง Header (แก้ตามความเหมาะสม)
                            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log(response.data);
                alert("ลบคำสั่งซื้อสำเร็จแล้ว")
            } catch (error) {
                alert("ไม่สามารถลบคำสั่งซื้อได้")
            }
        },
        dateformat(dates) {
            const date = new Date(dates);
            return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
        }
    },
};
</script>