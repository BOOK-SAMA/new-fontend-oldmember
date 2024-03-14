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
                    <a class="nav-link" href="/">หน้าแรก <span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-secondary my-2 my-sm-0" type="submit" @click="handlelogout()">LOGOUT</button>
            </form>
        </div>
    </nav>

    <div id="pagecontent">
        <div class="clearcontainer">
            <div id="myaccount" class="floatleft">
                <div class="container">
                    <h1>View orders</h1>
                </div>
                <div class="container">
                    <table cellspacing="0" cellpadding="0" width="100%">
                        <tbody>
                            <tr>
                                <th align="left">
                                    <p><strong>สินค้า</strong></p>
                                </th>
                                <th>
                                    <p><strong>สถานะ</strong></p>
                                </th>
                                <th>
                                    <p><strong>จำนวน</strong></p>
                                </th>
                                <th align="right">
                                    <p><strong>ราคา</strong></p>
                                </th>
                                <th align="right">
                                    <p><strong>ราคารวม</strong></p>
                                </th>
                            </tr>
                           

                            

                        </tbody>
                    </table>
                </div>

                <div class="clearcontainer">
                    <div class="myaccounthalfcolumn rightmargin">
                        <div class="container">
                            <p><strong>Order details</strong></p><br>
                            <p>Order number : <span class="texthighlight">ีๆรืำืีฟหก</span></p>
                            <p>Order date : <span class="texthighlight">15/ฟหกดฟหกดฟหกด/2023</span></p>
                        </div>
                    </div>
                    <div class="myaccounthalfcolumn">
                        <div class="container">
                            <p align="right"><strong>ราคาทั้งหมด</strong></p><br>
                            <p align="right">ราคาสินค้า : £10.98 บาท</p>
                            <p align="right">ราคาค่าส่ง : 100 บาท</p>
                            <p align="right">ราคารวม : £10.98</p>
                        </div>
                    </div>
                </div>

                <div class="clearcontainer">
                    <div class="myaccounthalfcolumn rightmargin">
                        <div class="container">
                            <p><strong>ที่อยู่ของผู้สั่งช์้อสินค้า</strong></p><br>
                            <p>Sanhanut Sakulma</p><br>
                            <p></p><br>
                            <p>394 Prachathipatai Road Tha Phi Liang Subdistrict</p>
                            <p>378 Prachathipatai Road Tha Phi Liang Subdistrict</p>
                            <p></p>
                            <p>Suphan Buri city</p>
                            <p>Thailand</p>
                            <p>72000</p>
                            <p>Thailand</p><br>
                            <p>0863320696</p><br>
                        </div>
                    </div>
                </div>



            </div>

        </div>
        <div class="clearcontainer"></div>
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
            Ordersdetail: [],
        };
    },
    async mounted() {
        const id = this.$route.params.id;
        const ordernumber = this.$route.params.ordernumber;
        // await this.Getorderdetail(id, ordernumber);

        // http://localhost:5555/Getorderbyid/8/407789695275
    },
    methods: {
        handlelogout() {
            localStorage.removeItem("userid");
            localStorage.removeItem("tokenstring");
            localStorage.removeItem("uuid");
            router.push({ path: "/loginadmin" });
        },
        async Getorderdetail(id, ordernumber) {

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API2}Getorderbyid/${id}/${ordernumber}`,

                    {
                        headers: {
                            // ตัวอย่าง Header (แก้ตามความเหมาะสม)
                            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
                            "Content-Type": "application/json",
                        },
                    }
                );
                this.Orders = response.data.Order;
                this.Ordersdetail = response.data.Order.Orderitem;
            } catch (error) {
                console.log(error);
            }
        },

    }
}
</script>