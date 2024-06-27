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
                    <a class="nav-link" :href="`/profile/${this.$route.params.id}`">หน้าโปรไฟล์</a>
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

    <div class="card" style="border-radius: 15px; margin-top: 2cm;">
        <div class="card-body " style="margin-left: 5cm;">
            <div class="row align-items-center pt-4 pb-3">
                <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
                        <h6 class="mb-0">วันที่</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                        {{ dateformat(this.warnings.Date) }}
                    </div>
                </div>
                <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
                        <h6 class="mb-0">เรื่องการแจ้งเตือน</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                        {{ this.warnings.Header }}
                    </div>
                </div>
                <div class="col align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
                        <h6 class="mb-0">เนื้อหาการแจ้งเตือน</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                        {{ this.warnings.Body }}
                    </div>
                </div>
                <div>
                    <div class="col-md-3 ps-5">
                        <h6 class="mb-0">รูปที่แนบมา</h6>
                    </div>
                    <img :src="file" alt="Payment Image" class="payment-image" width="500" />
                </div>
            </div>
        </div>
    </div>
</template>




<script>
import router from "@/router";
import axios from "axios";
export default {
    name: "Userorder",
    data() {
        return {
            warning:  [],
            warnings: [],
            file:null
        };
    },
    async mounted() {
        await this.getwarning(this.$route.params.warnid);
    },
    methods: {
        handlelogout() {
            localStorage.removeItem("userid");
            localStorage.removeItem("tokenstring");
            localStorage.removeItem("uuid");
            window.location.href = "https://graduation-silpakorn.azurewebsites.net/";
        },
        async getwarning(index) {
			const userId = localStorage.getItem("userid");
			try {
				const response = await axios.post(
					`${import.meta.env.VITE_API2}getwarning/` + userId,
					null,
					{
						headers: {
							Authorization: "Bearer " + localStorage.getItem("tokenstring"),
							"Content-Type": "application/json",
						},
					}
				);
				this.warnings = response.data.warning[index]
                await this.getpaymentimage(this.warnings.File)
                console.log(this.warnings)
			} catch (error) {
                alert("ไม่สามารถเอาข้อมูลมาแสดงได้")
			}
		},
        dateformat(dates) {
            const date = new Date(dates);
            return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
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
    }
}
</script>