<template>
    <div id="pagecontent" style="margin-top: 150px;">
        <div class="clearcontainer">

            <div id="myaccount" class="floatleft">
                <div class="container">
                    <h1>
                        <p>เลขที่คำสั่งซื้อ : <span class="texthighlight">
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
                            <p><strong>Order details</strong></p><br>
                            <p>Order number : <span class="texthighlight">
                                    <td v-text="orders.uniqueorder"></td>
                                </span></p>
                            <p>Order date : <span class="texthighlight">
                                    <td v-text="orders.Orderdate"></td>
                                </span></p>
                        </div>
                    </div>
                    <div class="myaccounthalfcolumn">
                        <div class="container">
                            <p align="right"><strong>ราคาทั้งหมด</strong></p><br>
                            <p align="right">ราคาค่าส่ง : 100 บาท</p>
                            <p align="right">ราคารวม : <span>{{ parseInt(orders.totalCartPrice)  }}</span></p>
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
                                        <p>ชื่อผู้สั่ง: {{ orders.thainame  }}</p>
                                        <p></p>
                                        <p>ที่อยู่การจัดส่ง : {{  orders.address }}</p>
                                        <p>จังหวัด : {{ orders.city }}</p>
                                        <p>รหัสไปษณีย์: {{ orders.pincode }}</p>
                                        <p></p>
                                        <p>เบอร์โทรศัพท์: {{ orders.phonenumber }}</p>
                                        <p>ประเทศ : ประเทศไทย</p><br>
                                    </div>
                                </div>
                            </div>
                          
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">สถานะคำสั่งซื้อ</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <p>{{ orders.state }}</p>
                                </div>
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
                    `${import.meta.env.VITE_API2}admin/getoneorder/${uniqueorder}`,
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
                alert(error.response.data.Text)
            }
        },
    },
};
</script>