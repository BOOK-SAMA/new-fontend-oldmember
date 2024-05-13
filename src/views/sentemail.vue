<template>
    <section class="vh-200" style="
        background-image: url(https://v3i.rweb-images.com/www.scsualumni.net/images/background/main/crop-1702428316.jpg?1702428316);
        background-repeat: no-repeat;
      ">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xxl">
                    <banner />
                    <h1 class="text-white mb-4 mt-2" style="background-color: rgb(171, 171, 171)">
                        แบบฟอร์มแจ้งชำระเงิน
                    </h1>
                    <form class="was-validated">
                        <div class="card" style="border-radius: 15px; background-color: rgb(171, 171, 171)">
                            <div class="card-body">
                                <div class="row align-items-center pt-4 pb-3">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">หมวดหมู่แจ้งชำระเงิน</h6>
                                    </div>

                                    <div class="col-md-9 pe-5">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" v-model="type"
                                                id="exampleRadios1" value="ชำระเงินค่าสมัครสมาชิก" checked>
                                            <label class="form-check-label" for="exampleRadios1">
                                                ชำระเงินค่าสมัครสมาชิก
                                            </label>
                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" v-model="type"
                                                id="exampleRadios2" value="ชำระเงินค่าสินค้าที่ระลึก">
                                            <label class="form-check-label" for="exampleRadios2">
                                                ชำระเงินค่าสินค้าที่ระลึก
                                            </label>
                                        </div>

                                        <div id="orderNumberInput"
                                            :style="{ display: type === 'ชำระเงินค่าสินค้าที่ระลึก' ? 'block' : 'none' }">
                                            <label for="orderNumber">เลขที่คำสั่งซื้อ:</label>
                                            <input v-if="type === 'ชำระเงินค่าสินค้าที่ระลึก'" type="text"
                                                class="form-control form-control-lg is-invalid" id="orderNumber"
                                                v-model="uniqueorder" required>
                                            <div v-if="type === 'ชำระเงินค่าสินค้าที่ระลึก'" class="invalid-feedback">
                                                กรุณาใส่เลขที่คำสั่งซื้อ ด้วย
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="row align-items-center pt-4 pb-3 ">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">ชื่อ</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input type="text" class="form-control form-control-lg is-invalid"
                                            v-model="thainame" required />
                                        <!-- <div class="invalid-feedback">ใส่ชื่อที่ได้ทำการลงทะเบียนไว้กับเราด้วยนะครับ
                                        </div> -->
                                    </div>

                                </div>

                                <div class="row align-items-center pt-4 pb-3">
                                    <div class="col-md ps-5">
                                        <h6 class="mb-0">Email ของผู้แจ้งชำระเงิน </h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input type="text" class="form-control form-control-lg is-invalid"
                                            v-model="email" required />
                                        <!-- <div class="invalid-feedback">กรุณา Email ด้วยนะครับ</div> -->
                                    </div>
                                </div>

                                <div class="row align-items-center pt-4 pb-3">
                                    <div class="col-md ps-5">
                                        <h6 class="mb-0">เบอร์โทรศัพท์</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input type="text" class="form-control form-control-lg is-invalid"
                                            v-model="phonenumber" required />
                                        <!-- <div class="invalid-feedback">กรุณา เบอร์โทรศัพท์ ด้วยนะครับ</div> -->
                                    </div>
                                </div>


                                <!-- <hr class="mx-n3" /> -->

                                <div class="row align-items-center py-3">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">Qr code สำหรับการจ่ายเงิน</h6>
                                        <h6 class="mb-0">ช่องทางการชำระเงิน ธนาคารกรุงไทย สาขาสำนักนานาเหนือ เลขที่
                                            000-0-35556-9</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <img src="https://lh4.googleusercontent.com/RMQziLQRistxbkv9ZX30hyx1zWSyZ9RgZPISwbahv0IqBa9JJ9T_f6AFLXuj7cM_m8uARSm5GPfGCkZy-EqTlXjXccfTjl60r4mD5h5X1OdYf5bwxO7Jbf-wb3sOaHmO3g=w584"
                                            class="HxhGpf" style="width: 584px; " title="" alt="">
                                    </div>
                                </div>

                                <div class="row align-items-center pt-4 pb-3 was-validated">
                                    <div class="col-md ps-5">
                                        <h6 class="mb-0">ยอดเงินที่โอน</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input type="text" class="form-control form-control-lg" v-model="pricevalue"
                                            required />
                                        <!-- <div class="invalid-feedback">กรุณาใส่จำนวนเงินด้วยนะครับ</div> -->
                                    </div>
                                </div>



                                <div class="row align-items-center py-3 was-validated">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">สำเนาใบโอนเงิน</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input type="file" @change="handleprofile" required>

                                        <div class="small text-muted mt-2">
                                            (นามสกุลไฟล์ .jpg ไม่เกิน 10 MB)
                                        </div>
                                        <div class="invalid-feedback">รบกวนใส่รูปสลิปด้วยนะครับ</div>
                                    </div>
                                </div>

                                <div class="row align-items-center pt-4 pb-3">
                                    <div class="col-md ps-5">
                                        <h6 class="mb-0">ข้อมูลเพิ่มเติม</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input type="text" class="form-control form-control-lg" v-model="text" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9 pe-5">
                                <button type="submit" class="btn btn-primary btn-lg" @click="submit()">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import router from "@/router";
import { ref } from "vue";
import axios from "axios";

export default {

    data() {
        return {
            type: "ชำระเงินค่าสมัครสมาชิก",
            uniqueorder: "",
            thainame: "",
            email: "",
            phonenumber: "",
            pricevalue: "",
            file: null,
            text: "",
        };
    },
    methods: {
        handleprofile(event) {
            this.file = event.target.files[0];
            console.log(this.file)
        },
        submit() {
            if (this.type === 'ชำระเงินค่าสินค้าที่ระลึก' && !this.uniqueorder) {
                alert("กรุณาใส่เลขที่คำสั่งซื้อ ด้วย");
                return;
            }
            if (this.thainame === '') {
                alert("กรุณาใส่ชื่อด้วยนะครับ");
                return;
            }
            if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(this.email) || this.email == '') {
                alert("กรุณากรอกอีเมลให้ถูกต้อง");
                return;
            }
            if (!/^\d+$/.test(this.phonenumber) || this.phonenumber == '' ) {
                alert("กรุณากรอกเบอร์โทรศัพท์เป็นตัวเลขเท่านั้น");
                return;
            }
            if (!/^\d+$/.test(this.pricevalue) || this.pricevalue == '' ) {
                alert("กรุณากรอกจำนวนเงินเป็นตัวเลขเท่านั้น");
                return;
            }
            if(this.file == null){
                alert("กรุณาใส่รูปสลิปโอนเงินด้วยนะครับ");
                return;
            }

            console.log(this.type)
            const URL = `${import.meta.env.VITE_API2}createpaymentfrom`;
            let data = new FormData();
            data.append("type", this.type);
            data.append("uniqueorder", this.uniqueorder);
            data.append("thainame", this.thainame);
            data.append("email", this.email);
            data.append("text", this.text);
            data.append("phonenumber", this.phonenumber);
            data.append("pricevalue", this.pricevalue);
            data.append("file", this.file);

            let config = {
                header: {
                    "Content-Type": "multipart/form-data",
                },
            };
            axios.post(URL, data, config).then((response) => {
                this.responseStatus = response.status
                console.log("this is res => ", response);
                console.log("this is data => ", data);
                alert("กรอกแบบฟอร์มสำเร็จแล้ว")
            }).catch((error) => {
                alert("ไม่สามารถบันทึก แบบฟอร์มแจ้งชำระเงิน ได้");
            });
        },
    },
    mounted() {

        document.querySelectorAll('input[name="exampleRadios"]').forEach((elem) => {

            elem.addEventListener('change', () => {

                if (elem.value === 'option1') {
                    document.getElementById('orderNumberInput').style.display = 'none'; // ซ่อน input เลขที่คำสั่งซื้อ
                } else {
                    document.getElementById('orderNumberInput').style.display = 'block'; // แสดง input เลขที่คำสั่งซื้อ
                }
            });
        });
    }
};

</script>
