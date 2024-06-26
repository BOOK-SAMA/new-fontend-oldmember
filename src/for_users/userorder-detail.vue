<template>

<nav class="navbar navbar-expand  fixed-top p-4" style="background-color: #F9CC02;">
        <a class="navbar-brand" href="#"><img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png"
                alt="Admin" class="rounded-circle p-1" width="40" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
               
                <li class="nav-item">
					<a class="nav-link"  :href="`/profile/${this.$route.params.id}`">หน้าโปรไฟล์</a>
				</li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ 'disabled': state }"
                        :href="`/updateuser/${this.$route.params.id}/edit`">แก้ไขข้อมูลส่วนตัว</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="`/orderhistory/${this.$route.params.id}/`">ดูประวัติการสั่งซื้อ</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button class="btn  my-2 my-sm-0" type="submit" @click="handlelogout()">
                    ออกจากระบบ
                </button>
            </form>
        </div>
    </nav>

    <div id="pagecontent" style="margin-top: 150px;">
        <div class="clearcontainer">

            <div id="myaccount" class="floatleft">
                <div class="container">
                    <h1> <p>เลขที่คำสั่งซื้อ : <span class="texthighlight"><td v-text="ordernumber"></td></span></p></h1>
                </div>
                <div class="container">
                <div class="container table-responsive py-5"> 
                <table class="table table-bordered table-hover">
                 <thead class="thead-dark">
                            <tr>
                                
                                <th scope="col ">ชื่อสินค้า</th>
                                <th scope="col">ราคา</th>
                                <th scope="col">จำนวน</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(order, index) in Ordersdetail" :key="index">
                                
                                <td v-text="order.itemname"></td>
                                <td v-text="order.price"></td>
                                <td v-text="order.quantity"></td>
                                
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
 </div>

                <div class="clearcontainer">
                    <div class="myaccounthalfcolumn rightmargin">
                        <div class="container">
                            <p><strong>ข้อมูลการสั่งซื้อ</strong></p><br>
                            <p>เลขที่คำสั่งซื้อ : <span class="texthighlight"><td v-text="ordernumber"></td></span></p>
                            <p>วันที่สั่งซื้อ : <span class="texthighlight"><td v-text="this.dateformat(orderdate)"></td></span></p>
                        </div>
                    </div>
                    <div class="myaccounthalfcolumn">
                        <div class="container">
                            <p align="right"><strong>ราคาทั้งหมด</strong></p><br>
                            <p align="right">ราคาค่าส่ง : 100 บาท</p>
                            <p align="right">ราคารวม : <span>{{ parseInt(totalcost)}}</span></p>
                        </div>
                    </div>
                </div>

                <div class="clearcontainer">
                    <div class="myaccounthalfcolumn rightmargin">
                        <div class="container">
                            <p><strong>ข้อมูลการจัดส่ง</strong></p><br>
                            <p>ชื่อผู้สั่ง: {{username}}</p>
                            <p></p>
                            <p>ที่อยู่การจัดส่ง : {{useraddress}}</p>
                            <p>จังหวัด : {{city}}</p>
                            <p>รหัสไปษณีย์: {{pincode}}</p>
                            <p></p>
                            <p>เบอร์โทรศัพท์: {{userphonenumber}}</p>
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
            id: localStorage.getItem("userid"),
            city:'',
            pincode :'' ,

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
             window.location.href = "https://graduation-silpakorn.azurewebsites.net/";
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
                    this.pincode = this.pincode.concat(order.pincode)
                    this.city = this.city.concat(order.city)
                });

                console.log(this.Orders);
                console.log(this.Ordersdetail);
            } catch (error) {
                alert("ไม่สามารถดูรายละเอียดดคำสั่งซื้อได้")
            }
        },
        dateformat(dates) {
            const date = new Date(dates);
            return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
        }
    }
}
</script>