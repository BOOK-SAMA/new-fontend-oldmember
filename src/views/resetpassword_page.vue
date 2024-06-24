<template>
  <nav class="navbar navbar-expand  fixed-top " style="background-color: #F9CC02; ">
        <ul class="navbar-nav mr-auto p-2" style="position: relative; left: 6cm; align-items: center;">
            <img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png" alt="Admin"
                class="rounded-circle p-1" width="55" />
            <li class="nav-item active">
                <a class="nav-link text-dark" href="https://graduation-silpakorn.azurewebsites.net/" style="font-size: medium;">หน้าแรก</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link text-dark" href="https://graduation-silpakorn.azurewebsites.net/%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%84%E0%B8%A1/" style="font-size: medium;">
                เกี่ยวกับสมาคม
                </a>
            </li>
            <li class="nav-item active">
                <a class="nav-link text-dark" href="https://graduation-silpakorn.azurewebsites.net/%e0%b8%82%e0%b9%89%e0%b8%ad%e0%b8%a1%e0%b8%b9%e0%b8%a5%e0%b8%a8%e0%b8%b4%e0%b8%a9%e0%b8%a2%e0%b9%8c%e0%b9%80%e0%b8%81%e0%b9%88%e0%b8%b2/" style="font-size: medium;">
                ข้อมูลศิษย์เก่า
                </a>
            </li>
             <li class="nav-item active">
                <a class="nav-link text-dark" href="https://graduation-silpakorn.azurewebsites.net/%e0%b8%81%e0%b8%b4%e0%b8%88%e0%b8%81%e0%b8%a3%e0%b8%a3%e0%b8%a1/" style="font-size: medium;">
                กิจกรรม
                </a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="/catalog">สินค้าที่ระลึก</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="https://graduation-silpakorn.azurewebsites.net/%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AA%E0%B8%99%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%99%E0%B8%B8%E0%B8%99/">ผู้สนับสนุนเว็บไซต์สมาคมฯ</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="https://graduation-silpakorn.azurewebsites.net/bbpress-webborad/">เว็บบอร์ด</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="https://graduation-silpakorn.azurewebsites.net/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%9B/">ข่าวสารทั่วไป</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="/from">แจ้งชำระเงิน</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="https://graduation-silpakorn.azurewebsites.net/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%B2/">ติดต่อเรา</a>
            </li>
        </ul>
    </nav>
  
  <div class="container-sm mt-5" >
    <form>
      <banner />
      <div class="form-outline mb-4 mt-2">
        <enteremail v-if="!isEmailSubmitted" @email-submitted="handleEmailSubmitted" />
        <enterotp v-if="isEmailSubmitted && !isOtpVerified" @otp-verified="handleOtpVerified" />
        <resetpassword v-if="isOtpVerified" />
      </div>
    </form>
  </div>
</template>

<script>
import banner from "/src/components/Banner.vue";
import enteremail from "/src/components/enteremail_edit.vue";
import enterotp from "/src/components/enterotp_edit.vue";
import resetpassword from "/src/components/enternewpassword.vue";

export default {
  components: {
    banner,
    enteremail,
    enterotp,
    resetpassword,
  },
  data() {
    return {
      isEmailSubmitted: false,
      isOtpVerified: false,
    };
  },
  methods: {
    handleEmailSubmitted() {
      this.isEmailSubmitted = true;
    },
    handleOtpVerified() {
      this.isOtpVerified = true;
    },
  },
};
</script>
