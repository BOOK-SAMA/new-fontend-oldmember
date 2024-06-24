<template>
    <nav class="navbar navbar-expand  fixed-top " style="background-color: #F9CC02; ">
        <ul class="navbar-nav mr-auto p-2" style="position: relative; left: 6cm; align-items: center;">
            <img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png" alt="Admin"
                class="rounded-circle p-1" width="55" />
            <li class="nav-item active">
                <a class="nav-link text-dark" href="https://graduation-silpakorn.azurewebsites.net/" style="font-size: medium;">หน้าแรก</a>
            </li>
            <li class="nav-item dropdown" style="font-size: medium;">
                <a class="nav-link dropdown-toggle text-dark"
                    href="https://graduation-silpakorn.azurewebsites.net/%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%84%E0%B8%A1/"
                    data-toggle="dropdown" aria-haspopup="true">
                    เกี่ยวกับสมาคม
                </a>
            </li>
            <li class="nav-item dropdown" style="font-size: medium;">
                <a class="nav-link dropdown-toggle text-dark"
                    href="https://graduation-silpakorn.azurewebsites.net/%e0%b8%82%e0%b9%89%e0%b8%ad%e0%b8%a1%e0%b8%b9%e0%b8%a5%e0%b8%a8%e0%b8%b4%e0%b8%a9%e0%b8%a2%e0%b9%8c%e0%b9%80%e0%b8%81%e0%b9%88%e0%b8%b2/"
                    data-toggle="dropdown" aria-haspopup="true">
                    ข้อมูลศิษย์เก่า
                </a>
            </li>
            <li class="nav-item dropdown" style="font-size: medium;">
                <a class="nav-link dropdown-toggle text-dark"
                    href="https://graduation-silpakorn.azurewebsites.net/%e0%b8%81%e0%b8%b4%e0%b8%88%e0%b8%81%e0%b8%a3%e0%b8%a3%e0%b8%a1/"
                    data-toggle="dropdown" aria-haspopup="true">
                    กิจกรรม
                </a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="/catalog">สินค้าที่ระลึก</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark"
                    href="https://graduation-silpakorn.azurewebsites.net/%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AA%E0%B8%99%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%99%E0%B8%B8%E0%B8%99/">ผู้สนับสนุนเว็บไซต์สมาคมฯ</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark"
                    href="https://graduation-silpakorn.azurewebsites.net/bbpress-webborad/">เว็บบอร์ด</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark"
                    href="https://graduation-silpakorn.azurewebsites.net/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%9B/">ข่าวสารทั่วไป</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="/from">แจ้งชำระเงิน</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark"
                    href="https://graduation-silpakorn.azurewebsites.net/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%B2/">ติดต่อเรา</a>
            </li>
        </ul>
    </nav>



    <div style="margin-top: 2px;">
        <section class="vh-200">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xxl">
                        <div style="margin-top: 3.5cm; margin-left: 3cm;">
                            <banner />
                            <h3 style="margin-top: 15px; margin-bottom: 15px;">
                                {{ formattedDate }}
                            </h3>
                        </div>
                        <select id="selectMenu" class="form-select" @change="toggleDiv"
                            style="margin-top: 10px; margin-left: 3cm; width: fit-content;">
                            <option selected value="default">เลือก ชนิดแบบฟอร์ม</option>
                            <option value="1">แบบฟอร์มสำหรับแจ้งชำระเงินค่าสินค้าที่ระลึก</option>
                            <option value="2">แบบฟอร์มสำหรับแจ้งชำระเงินค่าสมาชิก</option>
                        </select>
                        <div v-if="showBuyFrom" id="buyFromContainer" class="container"
                            style="width: 30cm; height: fit-content; position: absolute; margin-top: 5px; margin-left: 3cm;">
                            <buyfrom />
                        </div>
                        <div v-if="showmemberfrom" id="buyFromContainer" class="container"
                            style="width: 30cm; height: fit-content; position: absolute; margin-top: 5px; margin-left: 3cm;">
                            <memberfrom />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import buyfrom from "/src/components/from_buything.vue";
import memberfrom from "/src/components/from_membership.vue";
import banner from "/src/components/Banner.vue";
export default {
    components: {
        buyfrom,
        memberfrom,
        banner
    },
    data() {
        return {
            showBuyFrom: false,
            showmemberfrom: false,
            currentDate: new Date()
        };
    },
    computed: {
        formattedDate() {
            return this.formatDateToThai(this.currentDate);
        }
    },
    methods: {
        toggleDiv(event) {
            this.showBuyFrom = event.target.value === '1';
            this.showmemberfrom = event.target.value === '2';
        },
        formatDateToThai(date) {
            const days = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
            const months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

            const day = days[date.getDay()];
            const dateNum = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();

            return `${day}, ${dateNum} ${month} ${year}`;
        }
    },
    mounted() {
        this.currentDate = new Date();
    }
};
</script>

<style>
.hidden {
    display: none;
}
</style>
