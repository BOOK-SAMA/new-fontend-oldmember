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
    <!-- 
        บนสุด วันที่ 
        เลือกชนิดคำขอแจ้งชำระเงิน 
        

    
    -->
    <div class="contrainer" style="width: max-content; height: max-content; position: absolute; margin-top: 6cm; margin-left: 6cm;">
        <buyfrom />
    </div>

</template>

<script>

import buyfrom from "/src/components/from_buything.vue"
export default {
    components: {
        buyfrom
    }
}
</script>