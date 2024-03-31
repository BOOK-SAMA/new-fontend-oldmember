<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top p-4">
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
					<a class="nav-link"  :href="state ? '#' : `/profile/${this.$route.params.id}`">หน้าโปรไฟล์</a>
				</li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ 'disabled': state }"
                        :href="state ? '#' : `/updateuser/${this.$route.params.id}/edit`">แก้ไขข้อมูลส่วนตัว</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="state ? '#' : `/orderhistory/${this.$route.params.id}/`">ดูประวัติการสั่งซื้อ</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-secondary my-2 my-sm-0" type="submit" @click="handlelogout()">
                    LOGOUT
                </button>
            </form>
        </div>
    </nav>

    <div style="margin-top: 100px;"> <!-- Add this to create space below navbar -->
        <table class="table mt-4">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ordernumber</th>
                    <th scope="col">Orderdate</th>
                    <th scope="col">เลขที่คำสั่งซื้อ</th>
                    <th scope="col">thainame</th>
                    <th scope="col">state</th>
                    <th scope="col">totalCartPrice</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(order, index) in Orders" :key="index">
                    <td v-text="order.ID"></td>
                    <td v-text="order.Ordernumber"></td>
                    <td v-text="order.Orderdate"></td>
                    <td v-text="order.uniqueorder"></td>
                    <td v-text="order.thainame"></td>
                    <td v-text="order.state"></td>
                    <td v-text="order.totalCartPrice"></td>
                    <td class="p-1">
                        <router-link :to="{ path: '/orderdetail/' + this.$route.params.id + '/' + order.uniqueorder }"
                            class="btn btn-success btn-sm">ดูรายละเอียด</router-link>
                        <div class="b-example-divider p-1">
                           


                        </div>
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
    name: "Userorder",
    data() {
        return {
            Orders: [],
        };
    },
    async mounted() {
        const id = this.$route.params.id;
        await this.Getorder(id);
    },
    methods: {
        handlelogout() {
            localStorage.removeItem("userid");
            localStorage.removeItem("tokenstring");
            localStorage.removeItem("uuid");
            router.push({ path: "/login" });
        },
        async Getorder(id) {

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API2}getallorder/${id}`,

                    {
                        headers: {
                            // ตัวอย่าง Header (แก้ตามความเหมาะสม)
                            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
                            "Content-Type": "application/json",
                        },
                    }
                );
                this.Orders = response.data.Order;
                console.log(response.data.Order);
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>