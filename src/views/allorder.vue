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
                    <th scope="col">Uniqueorder</th>
                    <th scope="col">Thainame</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phonenumber</th>
                    <th scope="col">Orderdate</th>
                    <th scope="col">State</th>
                    <th scope="col">TotalCartPrice</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(order, index) in orders" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ order.uniqueorder }}</td>
                    <td>{{ order.thainame }}</td>
                    <td>{{ order.address }}</td>
                    <td>{{ order.phonenumber }}</td>
                    <td>{{ order.Orderdate }}</td>
                    <td>{{ order.state }}</td>
                    <td>{{ order.totalCartPrice }}</td>
                    <td class="p-1">
                        <router-link :to="{ path: '/seeoneorder/' + order.uniqueorder + '/' }"
                            class="btn btn-success btn-sm">ดูรายละเอียด</router-link>
                        <div class="b-example-divider p-1"></div>
                        <router-link :to="{ path: '/editorder/' + order.uniqueorder + '/' }"
                            class="btn btn-success btn-sm">แก้ไขสถานะคำสั่งซื้อ</router-link>
                        <div class="b-example-divider p-1"></div>
                        <router-link :to="{ path: '/seeallorder/' }" class="btn btn-danger btn-sm"
                            @click="dodelete(order.uniqueorder)">ลบ
                        </router-link>
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
    name: "allorder",
    data() {
        return {
            orders: [],
        };
    },

    async mounted() {
        // Ensure user is authenticated and authorized

        await this.Getorder();
    },
    methods: {
        async handlelogout() {
            localStorage.removeItem("userid");
            localStorage.removeItem("tokenstring");
            localStorage.removeItem("uuid");
            router.push({ path: "/loginadmin" });
        },
        async Getorder() {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API2}Getallorderadmin`,
                    {
                        headers: {
                            // ตัวอย่าง Header (แก้ตามความเหมาะสม)
                            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
                            "Content-Type": "application/json",
                        },
                    }
                );
                this.orders = response.data;
                console.log(response.data);
            } catch (error) {
                localStorage.removeItem("userid");
                localStorage.removeItem("tokenstring");
                localStorage.removeItem("uuid");
                alert("เกิดข้อผิดพลาดในการดึงข้อมูล")
                router.push({ path: "/loginadmin" });
            }
        },
        async dodelete(uniqueorder) {
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_API2}deleteorder/${uniqueorder}`,
                    {
                        headers: {
                            // ตัวอย่าง Header (แก้ตามความเหมาะสม)
                            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log(response.data);
            } catch (error) {
                alert("ไม่สามารถลบคำสั่งซื้อได้")
            }
        }
    },
};
</script>