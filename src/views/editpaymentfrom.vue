<template>
    <div>
        <img :src="file" alt="Payment Image" class="payment-image" width="200" />
        <div class="row align-items-center pt-4 pb-3">
            <div class="col-md-3 ps-5">
                <h6 class="mb-0">หมวดหมู่แจ้งชำระเงิน</h6>
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

                <div id="orderNumberInput" :style="{ display: status === 'ตรวจสอบแล้ว' ? 'block' : 'none' }">
                    <label for="orderNumber">ชื่อผู้ตรวจสอบ:</label>
                    <input type="text" class="form-control form-control-lg" id="orderNumber" v-model="staffname">
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-9 pe-5">
        <button type="submit" class="btn btn-primary btn-lg" @click="submit()">
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
        };
    },
    methods: {
        async getpaymentinfo(id) {
            const URL = `${import.meta.env.VITE_API2}getonepaymentfrom/${id}`;
            let config = {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("tokenstring"),
                    "Content-Type": "application/json",
                },
            };
            axios.post(URL, config).then((response) => {
                this.uuid = response.data.file
                this.getpaymentimage(response.data.file)
                console.log(response.data);
            })
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
            const URL = `${import.meta.env.VITE_API2}admin/`;
            let data = new FormData();
            data.append("status", this.status);
            data.append("staffname", this.staffname);
            let config = {
                header: {
                    "Content-Type": "multipart/form-data",
                },
            };
            axios.post(URL, data, config).then(() => {
                alert("ปรับแบบฟอร์มสำเร็จแล้ว")
            }).catch((error) => {
                alert("this is error => ", error);
            });
        },
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
        this.getpaymentinfo(this.$route.params.id);
    }
};
</script>
v