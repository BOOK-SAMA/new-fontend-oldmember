<template>
    <div class="root vh-200">
        <h1 class="text-white mb-4 mt-2" style="background-color: rgb(171, 171, 171)">
            แบบฟอร์มการแจ้งชำระเงินสำหรับซื้อสินค้าที่ระลึก
        </h1>
        <div class="card" style="border-radius: 15px; background-color: rgb(171, 171, 171)">
            <div class="card-body">
                <div class="row align-items-center pt-4 pb-3">
                    <div class="row align-items-center pt-4 pb-3">
                        <div class="col-md-3 ps-5">
                            <h6 class="mb-0">วันที่</h6>
                        </div>
                        <div class="col-md-9 pe-5">
                            {{ dateformat(this.fromdate) }}
                        </div>
                    </div>
                    <div class="row align-items-center pt-4 pb-3">
                        <div class="col-md-3 ps-5">
                            <h6 class="mb-0">รหัสคำสั่งซื้อ</h6>
                        </div>
                        <div class="col-md-9 pe-5">
                            {{ uniqueorder }}
                        </div>
                    </div>
                    <div class="row align-items-center pt-4 pb-3">
                        <div class="col-md-3 ps-5">
                            <h6 class="mb-0">เบอร์โทรศัพท์</h6>
                        </div>
                        <div class="col-md-9 pe-5">
                            {{ phonenumber }}
                        </div>
                    </div>


                    <div class="row align-items-center pt-4 pb-3">
                        <div class="col-md-3 ps-5">
                            <h6 class="mb-0">ชื่อ</h6>
                        </div>
                        <div class="col-md-9 pe-5">
                            {{ thainame }}
                        </div>
                    </div>
                    <div class="row align-items-center pt-4 pb-3">
                        <div class="col-md-3 ps-5">
                            <h6 class="mb-0">อีเมล</h6>
                        </div>
                        <div class="col-md-9 pe-5">
                            {{ email }}
                        </div>
                    </div>

                    <div class="row align-items-center pt-4 pb-3">
                        <div class="col-md-3 ps-5">
                            <h6 class="mb-0">สถานะการตรวจสอบ</h6>
                        </div>

                        <div class="col-md-9 pe-5">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="status" id="exampleRadios1"
                                    value="ยังไม่ได้ตรวจสอบ" checked>
                                <label class="form-check-label" for="exampleRadios1">
                                    ยังไม่ได้ตรวจสอบ
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="status" id="exampleRadios2"
                                    value="ตรวจสอบแล้ว">
                                <label class="form-check-label" for="exampleRadios2">
                                    ตรวจสอบแล้ว
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="col-md-3 ps-5">
                            <h6 class="mb-0">รูปสลิปเงิน</h6>
                        </div>
                        <img :src="file" alt="Payment Image" class="payment-image" width="500" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-9 pe-5">
        <button type="submit" class="btn btn-primary btn-lg" @click="submit">
            Submit
        </button>
    </div>
</template>




<script>
import axios from "axios";
export default {
    data() {
        return {
            type: "",
            uniqueorder: "",
            thainame: "",
            email: "",
            phonenumber: "",
            pricevalue: "",
            file: null,
            uuid: "",
            text: "",
            staffname: "",
            status: "",
            fromdate:"",
        };
    },
    methods: {
        async getPaymentInfo(id) {
            try {
                const response = await axios.post(`${import.meta.env.VITE_API2}getonepaymentfrom/${id}`, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("tokenstring"),
                        "Content-Type": "application/json",
                    },
                });
                this.fromdate = response.data.Fromdate ; 
                this.uuid = response.data.file;
                this.getpaymentimage(response.data.file);
                this.thainame = response.data.thainame;
                this.type = response.data.type;
                this.email = response.data.email;
                this.phonenumber = response.data.phonenumber;
                this.uniqueorder = response.data.uniqueorder;
                this.status = response.data.status;
                this.staffname = response.data.staffname;
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching payment information:", error);
            }
        },
        async getpaymentimage(uuid) {
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_API2}getpaymentimage/${uuid}`,
                    null,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
                            "Content-Type": "application/json",
                        },
                        responseType: "arraybuffer",
                    }
                );
                const imageSrc = `data:${response.headers["content-type"]};base64,${btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ""
                    )
                )}`;
                this.file = imageSrc;
                console.log("Image downloaded and displayed.");
            } catch (error) {
                console.error("Error fetching payment image:", error);
            }
        },
        submit() {
            console.log(this.status)
            console.log(this.staffname)
            if (this.status == "ยังไม่ได้ตรวจสอบ") {
                alert("กรุณาตรวจสอบแบบฟอร์มด้วยครับ")
            } else {
                const userid = localStorage.getItem("userid")
                const URL = `${import.meta.env.VITE_API2}updatestatuspaymentfrom/${this.$route.params.id}`;
                let data = new FormData();
                data.append("status", this.status);
                data.append("staffname",userid );
                let config = {
                    header: {
                        "Content-Type": "multipart/form-data",
                    },
                };
                axios.post(URL, data, config).then((res) => {
                    console.log(res)
                    alert("ปรับแบบฟอร์มสำเร็จแล้ว")
                    window.location.reload(); 
                    this.$router.push({ path: "/admintoo/" + id });
                }).catch((error) => {
                    alert("this is error => ", error);
                });
            }
        },
        dateformat(dates) {
            const date = new Date(dates);
            return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
        }
    },
    mounted() {
        // Add event listener for radio button change
        document.querySelectorAll('input[name="exampleRadios"]').forEach((elem) => {

            elem.addEventListener('change', () => {
                // ถ้าเลือกชำระเงินค่าสมัครสมาชิก
                if (elem.value === 'option1') {
                    document.getElementById('orderNumberInput').style.display = 'none'; // ซ่อน input เลขที่คำสั่งซื้อ
                } else {
                    document.getElementById('orderNumberInput').style.display = 'block'; // แสดง input เลขที่คำสั่งซื้อ
                }
            });
        });
        this.getPaymentInfo(this.$route.params.id);
    }
};
</script>
