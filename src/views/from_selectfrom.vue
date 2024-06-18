<template>
    <nav class="navbar navbar-expand fixed-top" style="background-color: #F9CC02;">
        <ul class="navbar-nav mr-auto p-2" style="position: relative; left: 6cm; align-items: center;">
            <img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png" alt="Admin"
                class="rounded-circle p-1" width="55" />
            <li class="nav-item active">
                <a class="nav-link text-dark" href="#" style="font-size: medium;">หน้าแรก</a>
            </li>
            <li class="nav-item dropdown" style="font-size: medium;">
                <a class="nav-link dropdown-toggle text-dark" href="#" data-toggle="dropdown" aria-haspopup="true">
                    เกี่ยวกับสมาคม
                </a>
                <div class="dropdown-menu" style="background-color: #F9CC02;">
                    <a class="dropdown-item text-dark" href="#">สาส์นจากนายกสมาคมฯ</a>
                    <a class="dropdown-item text-dark" href="#">ข้อมูลทั่วไป</a>
                    <a class="dropdown-item text-dark" href="#">ตราสัญลักษณ์สมาคม</a>
                    <a class="dropdown-item text-dark" href="#">การสมัครสมาชิก</a>
                    <a class="dropdown-item text-dark" href="#">การสมัครสมาชิก</a>
                    <a class="dropdown-item text-dark" href="#">คณะกรรมการสมาคมฯ</a>
                    <a class="dropdown-item text-dark" href="#">สมาชิกสมาคมฯ</a>
                </div>
            </li>
            <li class="nav-item dropdown" style="font-size: medium;">
                <a class="nav-link dropdown-toggle text-dark" href="#" data-toggle="dropdown" aria-haspopup="true">
                    ข้อมูลศิษย์เก่า
                </a>
                <div class="dropdown-menu" style="background-color: #F9CC02;">
                    <a class="dropdown-item text-dark" href="#">ทำเนียบศิษย์เก่า</a>
                    <a class="dropdown-item text-dark" href="#">บัณฑิตคณะวิทยาศาสตร์ มศก.</a>
                    <a class="dropdown-item text-dark" href="#">ศิษย์เก่าดีเด่น</a>
                    <a class="dropdown-item text-dark" href="#">เกี่ยวกับอัลบั้ม</a>
                    <a class="dropdown-item text-dark" href="#">เกี่ยวกับรายชื่อตัวแทนรุ่น</a>
                </div>
            </li>
            <li class="nav-item dropdown" style="font-size: medium;">
                <a class="nav-link dropdown-toggle text-dark" href="#" data-toggle="dropdown" aria-haspopup="true">
                    กิจกรรม
                </a>
                <div class="dropdown-menu" style="background-color: #F9CC02;">
                    <a class="dropdown-item text-dark" href="#">กิจกรรม 2566</a>
                    <a class="dropdown-item text-dark" href="#">กิจกรรม 2561</a>
                    <a class="dropdown-item text-dark" href="#">กิจกรรม ปี 2558 - 2560</a>
                </div>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="#">สินค้าที่ระลึก</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="#">ผู้สนับสนุนเว็บไซต์สมาคมฯ</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="#">เว็บบอร์ด</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="#">ข่าวสารทั่วไป</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="#">แจ้งชำระเงิน</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="#">ติดต่อเรา</a>
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
