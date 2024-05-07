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
                        </div>
                        <div class="card" style="border-radius: 15px; background-color: rgb(171, 171, 171)">
                            <div class="card-body">
                                <div class="row align-items-center pt-4 pb-3">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">สถานะของแบบฟอร์มแจ้งชำระเงิน</h6>
                                    </div>

                                    <div class="col-md-9 pe-5">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" v-model="status"
                                                id="exampleRadios1" value="ยังไม่ได้ตรวจสอบ" checked>
                                            <label class="form-check-label" for="exampleRadios1">
                                                ยังไม่ได้ตรวจสอบ
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" v-model="status"
                                                id="exampleRadios2" value="ตรวจสอบแล้ว">
                                            <label class="form-check-label" for="exampleRadios2">
                                                ตรวจสอบแล้ว
                                            </label>
                                        </div>

                                        <div id="orderNumberInput"
                                            :style="{ display: type === 'ตรวจสอบแล้ว' ? 'block' : 'none' }">
                                            <label for="orderNumber">ชื่อผู้ตรวจสอบ:</label>
                                            <input type="text" class="form-control form-control-lg" id="orderNumber"
                                                v-model="staffname">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-9 pe-5">
                                    <!-- <button type="submit" class="btn btn-primary btn-lg" @click="submit()">
                                        Submit
                                    </button> -->
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
            const URL = `${import.meta.env.VITE_API2}admin/getonepaymentfrom/${id}`;
            let config = {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("tokenstring"),
                    "Content-Type": "application/json",
                },
            };
            axios.post(URL, config).then((response) => {
                console.log(response.data)
            }).catch(error){
                alert("ไม่สามารถรับข้อมูลแบบฟอร์มของผู้ใช้ได้");
            }
        },
        async getpaymentimage(uuid) {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API2}admin/getpaymentimage/${uuid}`,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
                            "Content-Type": "application/json",
                        },
                        responseType: "arraybuffer",
                    }
                );
                const imageSrc = `data:${response.headers["content-type"]
                    };base64,${btoa(
                        new Uint8Array(response.data).reduce(
                            (data, byte) => data + String.fromCharCode(byte),
                            ""
                        )
                    )}`;
                const imgElement = document.getElementById("your-image-id"); // Replace 'your-image-id' with the actual ID of your image element
                if (imgElement) {
                    imgElement.src = imageSrc;
                }
                this.file = imageSrc;
                console.log("Image downloaded and displayed.");
            } catch (error) {
                alert(error)

            }
        },
        submit() {
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
        await this.getpaymentinfo(this.$route.params.id);
        await this.getpaymentimage(this.uuid);

    }
};

</script>
