<template>
    <div class="container table-responsive py-5">
        <table class="table table-bordered table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">รหัสคำสั่งซื้อ</th>
                    <th scope="col">ชื่อภาษาไทย</th>
                    <th scope="col">อีเมล</th>
                    <th scope="col">เบอร์โทรศัพท์</th>
                    <th scope="col">จำนวนเงิน</th>
                    <th scope="col">สถานะ</th>
                    <th scope="col">การกระทำ</th>
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
                        <button @click="dodelete(index)" class="btn btn-danger btn-sm">ลบ</button>
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