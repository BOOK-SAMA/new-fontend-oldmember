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
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ 'disabled': state }"
                        :href="state ? '#' : `/updateuser/${this.$route.params.id}/edit`">แก้ไขข้อมูลส่วนตัว</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="state ? '#' : `/orderhistory/${this.$route.params.id}/`">ดูประวัติการสั่งซื้อ</a>
                </li>
                <li class="nav-item">
					<a class="nav-link"  :href="state ? '#' : `/profile/${this.$route.params.id}`">หน้าโปรไฟล์</a>
				</li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-secondary my-2 my-sm-0" type="submit" @click="handlelogout()">
                    LOGOUT
                </button>
            </form>
        </div>
    </nav>

    <div id="pagecontent" style="margin-top: 150px;">
        <div class="clearcontainer">

            <div id="myaccount" class="floatleft">
                <div class="container">
                    <h1> <p>Order number : <span class="texthighlight"><td v-text="ordernumber"></td></span></p></h1>
                </div>
                <div class="container">
                    <table class="table mt-4 ml-2 mr-2">
                        <thead>
                            <tr>
                                <th scope="col">Ordernumber</th>
                                <th scope="col ">itemID</th>
                                <th scope="col">ราคา</th>
                                <th scope="col">จำนวน</th>
                                <th scope="col">ราคารวมแต่ละชิ้น</th>
                                <th scope="col">สถานะการจัดส่ง</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(order, index) in Ordersdetail" :key="index">
                                <td v-text="order.itemID"></td>
                                <td v-text="order.itemname"></td>
                                <td v-text="order.price"></td>
                                <td v-text="order.quantity"></td>
                                <td v-text="order.price * order.quantity"></td>
                                <td v-text="statue"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div class="clearcontainer">
                    <div class="myaccounthalfcolumn rightmargin">
                        <div class="container">
                            <p><strong>Order details</strong></p><br>
                            <p>Order number : <span class="texthighlight"><td v-text="ordernumber"></td></span></p>
                            <p>Order date : <span class="texthighlight"><td v-text="orderdate"></td></span></p>
                        </div>
                    </div>
                    <div class="myaccounthalfcolumn">
                        <div class="container">
                            <p align="right"><strong>ราคาทั้งหมด</strong></p><br>
                            <div align="right">ราคาสินค้า : {{totalcost}} </div>
                            <p align="right">ราคาค่าส่ง : 100 บาท</p>
                            <p align="right">ราคารวม : <span>{{ parseInt(totalcost) + sentcost }}</span></p>
                        </div>
                    </div>
                </div>

                <div class="clearcontainer">
                    <div class="myaccounthalfcolumn rightmargin">
                        <div class="container">
                            <p><strong>ที่อยู่ของผู้สั่งซื้อสินค้า</strong></p><br>
                            <p>{{username}}</p><br>
                            <p></p><br>
                            <p>{{useraddress}}</p>
                            <p></p>
                            <p>{{userphonenumber}}</p>
                            <p>ประเทศ : ประเทศไทย</p><br>
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
            statue : "",
            ordernumber:"",
            orderdate:"",
            totalcost:"",
            sentcost : 100,
            username : "" ,
            useraddress: "" ,
            userphonenumber: "" ,
        };
    },
    async mounted() {
        const id = this.$route.params.id;
        const ordernumber = this.$route.params.ordernumber;
        await this.Getorderdetail(id, ordernumber);

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
                this.Orders.forEach(order => {
                    this.Ordersdetail = this.Ordersdetail.concat(order.Orderitem);
                    this.statue = this.statue.concat(order.state);
                    this.ordernumber = this.ordernumber.concat(order.uniqueorder);
                    this.orderdate = this.orderdate.concat(order.Orderdate);
                    this.totalcost = this.totalcost.concat(order.totalCartPrice);
                    this.username = this.username.concat(order.thainame)
                    this.useraddress = this.useraddress.concat(order.address)
                    this.userphonenumber = this.userphonenumber.concat(order.phonenumber)
                });

                console.log(this.Orders);
                console.log(this.Ordersdetail);
            } catch (error) {
                console.log(error);
            }
        },

    }
}
</script>