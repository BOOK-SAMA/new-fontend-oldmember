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

                    <div class="card" style="border-radius: 15px; background-color: rgb(171, 171, 171)">
                        <div class="card-body">
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">เลขที่คำสั่งซื้อ </h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input type="text" class="form-control form-control-lg" v-model="ordernumber" />
                                </div>
                            </div>

                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ชื่อ</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input type="text" class="form-control form-control-lg" v-model="thainame" />
                                </div>
                            </div>

                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">Email ของผู้แจ้งชำระเงิน </h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input type="text" class="form-control form-control-lg" v-model="email" />
                                </div>
                            </div>

                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">เบอร์โทรศัพท์</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input type="text" class="form-control form-control-lg" v-model="phonenumber" />
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

                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">ยอดเงินที่โอน</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input type="text" class="form-control form-control-lg" v-model="pricevalue" />
                                </div>
                            </div>



                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">สำเนาใบโอนเงิน</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input ref="fileInput" class="form-control form-control-lg" id="formFileLg"
                                        type="file" @change="handleprofile" />
                                    <div class="small text-muted mt-2">
                                        (นามสกุลไฟล์ .jpg ไม่เกิน 10 MB)
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="col-md-9 pe-5">
                            <button type="submit" class="btn btn-primary btn-lg" @click="submit()" :disabled="!this.username || !this.password
                                        || !this.thainame
                                        || !this.email || !this.phonenumber
                                        || !this.ordernumber || !this.pricevalue
                                        || !this.file

                                        ">
                                Submit
                            </button>
                        </div>
                    </div>
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
            thainame: "",
            email: "",
            phonenumber: "",
            pricevalue: "",
            file: null,
        };
    },
    methods: {
        submit() {
            const URL = `${import.meta.env.VITE_API2}sentemail`;
            let data = new FormData();
            data.append("thainame", this.thainame);
            data.append("email", this.email);
            data.append("phonenumber", this.phonenumber);
            data.append("pricevalue", this.thainame);
            data.append("file", this.file);
            let config = {
                header: {
                    "Content-Type": "multipart/form-data",
                },
            };
            axios.post(URL, data, config).then((response) => {
                // console.log("this is res => ", this.date);
                this.responseStatus = response.status
                console.log("this is res => ", response);
                router.push({ path: "/" });

            }).catch((error) => {
                console.log("this is error => ", error);
                router.push({ path: "/:notfound" });
            });
        },
    },
};
</script>