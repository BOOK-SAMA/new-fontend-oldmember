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
                    <a class="nav-link" href="/admincreate">สร้าง ผู้ใช้</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://graduation-silpakorn.azurewebsites.net/wp-admin/">แก้ไขหน้าเว็บ</a>
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
                    ออกจากระบบ
                </button>
            </form>
        </div>
    </nav>



    <div id="pagecontent" style="margin-top: 150px;">
        <div class="clearcontainer">

            <div id="myaccount" class="floatleft">
                <div class="container">
                    <h1>
                        <p>Order number : <span class="texthighlight">
                                <td v-text="orders.uniqueorder"></td>
                            </span></p>
                    </h1>
                </div>
                <div class="container">
                    <div class="container table-responsive py-5">
                        <table class="table table-bordered table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col ">ชื่อสินค้า</th>
                                    <th scope="col">ราคา</th>
                                    <th scope="col">จำนวน</th>
                                    <th scope="col">ราคารวมแต่ละชิ้น</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(order, index) in orders.Orderitem" :key="index">
                                    <th scope="row">{{ index + 1 }}</th>
                                    <th scope="row">{{ order.itemname }}</th>
                                    <th scope="row">{{ order.price }}</th>
                                    <th scope="row">{{ order.quantity }}</th>
                                    <th scope="row">{{ order.price * order.quantity }}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="clearcontainer">
                    <div class="myaccounthalfcolumn rightmargin">
                        <div class="container">
                            <p><strong>รายละเอียดคำสั่งซื้อ</strong></p><br>
                            <p>หมายเลขคำสั่งซื้อ: <span class="texthighlight">
                                    <td v-text="orders.uniqueorder"></td>
                                </span></p>
                            <p>วันที่ของคำสั่งซื้อ : <span class="texthighlight">
                                    <td v-text="dateformat(orders.Orderdate)"></td>
                                </span></p>
                        </div>
                    </div>
                    <div class="myaccounthalfcolumn">
                        <div class="container">
                            <p align="right"><strong>ราคาทั้งหมด</strong></p><br>
                            <div align="right">ราคาสินค้า : {{ orders.totalCartPrice }} </div>
                            <p align="right">ราคาค่าส่ง : 100 บาท</p>
                            <p align="right">ราคารวม : <span>{{ parseInt(orders.totalCartPrice) + sentcost }}</span></p>
                        </div>
                    </div>
                </div>

                <div class="clearcontainer">
                    <div class="myaccounthalfcolumn rightmargin">
                        <div class="container">



                            <div class="clearcontainer">
                                <div class="myaccounthalfcolumn rightmargin">
                                    <div class="container">
                                        <p><strong>ข้อมูลการจัดส่ง</strong></p><br>
                                        <p>ชื่อผู้สั่ง: {{ orders.thainame }}</p>
                                        <p></p>
                                        <p>ที่อยู่การจัดส่ง : {{ orders.address }}</p>
                                        <p>จังหวัด : {{ orders.city }}</p>
                                        <p>รหัสไปษณีย์: {{ orders.pincode }}</p>
                                        <p></p>
                                        <p>เบอร์โทรศัพท์: {{ orders.phonenumber }}</p>
                                        <p>ประเทศ : ประเทศไทย</p><br>
                                    </div>
                                </div>
                            </div>





                            <div>
                                <div>สถานะของคำสั่งซื้อ {{ this.status }}</div>
                                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"
                                    v-model="status">
                                    <option value="รอชำระเงิน">รอชำระเงิน</option>
                                    <option value="ชำระเงินแล้ว">ชำระเงินแล้ว</option>
                                    <option value="เตรียมจัดส่ง">เตรียมจัดส่ง</option>
                                    <option value="จัดส่งแล้ว">จัดส่งแล้ว</option>
                                </select>
                            </div>

                            <div class="px-5 py-4">
                                <button type="submit" class="btn btn-primary btn-lg text-white" @click="submitorder">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="clearcontainer">
        </div>
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
            sentcost: 100,
            status: "",
        };
    },

    async mounted() {
        // Ensure user is authenticated and authorized
        const uniqueorder = this.$route.params.uniqueorder;

        await this.Getorder(uniqueorder);
    },
    methods: {
        handlelogout() {
			localStorage.removeItem("userid");
			localStorage.removeItem("tokenstring");
			localStorage.removeItem("uuid");
			 window.location.href = "https://graduation-silpakorn.azurewebsites.net/";
		},
        async Getorder(uniqueorder) {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API2}getoneorder/${uniqueorder}`,
                    {
                        headers: {
                            // ตัวอย่าง Header (แก้ตามความเหมาะสม)
                            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
                            "Content-Type": "application/json",
                        },
                    }
                );
                this.orders = response.data;
                this.status = this.orders.state
                console.log(this.status);
            } catch (error) {
                alert(error.response.data.Text)
            }
        },
        async submitorder() {
            try {
                console.log(this.status)
                let data = new FormData();
                data.append("status", this.status);

                const response = await axios.post(
                    `${import.meta.env.VITE_API2}updatestatusorder/${this.$route.params.uniqueorder}`, data);
                console.log(data)


                alert("ทำการเปลี่ยนสถานะคำสั่งซื้อสำเร็จ")
                this.$router.push({ path: "/admintoo/" + localStorage.getItem("userid") });
            } catch (error) {
                alert(error.response.data.Text)
            }
        },
        dateformat(dates) {
            const date = new Date(dates);
            return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
        }
    },
};
</script>