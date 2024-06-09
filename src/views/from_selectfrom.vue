<template>
    <nav class="navbar navbar-expand  fixed-top " style="background-color: #F9CC02; ">
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
                <div class="dropdown-menu " style=" background-color: #F9CC02;">
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
                <div class="dropdown-menu " style=" background-color: #F9CC02;">
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
                <div class="dropdown-menu " style=" background-color: #F9CC02;">
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

    <section class="vh-200" style="
        background-image: url(https://v3i.rweb-images.com/www.scsualumni.net/images/background/main/crop-1702428316.jpg?1702428316);
        background-repeat: no-repeat;
      ">
        <div id="app" class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xxl">
                    <select v-model="selectedOption" class="form-select form-select-lg mb-3"
                        aria-label=".form-select-lg example">
                        <option disabled value="">เลือกเรื่องที่ต้องการแจ้ง</option>
                        <option value="แจ้งชำระเงินค่าสมาชิก">แจ้งชำระเงินค่าสมาชิก</option>
                        <option value="แจ้งชำระเงินค่าสินค้าที่ระลึก">แจ้งชำระเงินค่าสินค้าที่ระลึก</option>
                        <option value="เรื่องต้องการแก้ไขข้อมูลส่วนตัวด้วยตนเอง">
                            เรื่องต้องการแก้ไขข้อมูลส่วนตัวด้วยตนเอง
                        </option>
                        <option value="เรื่องอื่นๆ">เรื่องอื่นๆ</option>
                    </select>
                </div>
                <div class="col-md-9 pe-5">
                    <button type="button" class="btn btn-primary btn-lg" @click="redirectToPage">
                        ยืนยัน
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {
            selectedOption: '',
        };
    },
    methods: {
        redirectToPage() {
            if (this.selectedOption === 'แจ้งชำระเงินค่าสมาชิก') {
                window.location.href = 'แจ้งชำระเงินค่าสมาชิก.html';
            } else if (this.selectedOption === 'แจ้งชำระเงินค่าสินค้าที่ระลึก') {
                window.location.href = 'แจ้งชำระเงินค่าสินค้าที่ระลึก.html';
            } else if (this.selectedOption === 'เรื่องต้องการแก้ไขข้อมูลส่วนตัวด้วยตนเอง') {
                window.location.href = 'เรื่องต้องการแก้ไขข้อมูลส่วนตัวด้วยตนเอง.html';
            } else if (this.selectedOption === 'เรื่องอื่นๆ') {
                window.location.href = 'เรื่องอื่นๆ.html';
            }
        }
    }
}
</script>