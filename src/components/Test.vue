<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-sm bg-warning navbar-dark">
    <img
      src="http://www.scsualumni.net/images/logo/resize-1482551623803.png"
      alt="Logo"
      style="float: left; margin-right: 10px"
      width="60px"
      height="60px"
    />
    <a class="navbar-brand text-dark" >
      <router-link to="/"> หน้าแรก </router-link>
    </a>
    <button
      class="navbar-toggler bg-dark"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    href=""
                  >
                    เกี่ยวกับสามาคม
                  </button>
                  <div class="dropdown-menu dropdown-menu-center bg-warning">
                    <button class="dropdown-item" type="button">
                      สาสน์จากนายกสมาคมฯ
                    </button>
                    <button class="dropdown-item" type="button">
                      ข้อมูลทั่วไป
                    </button>
                    <button class="dropdown-item" type="button">
                      ตราสัญลักษณ์สมาคมฯ
                    </button>
                    <button class="dropdown-item" type="button">
                      <router-link to="/login"> สมัครสมาชิก </router-link>
                    </button>
                    <button class="dropdown-item" type="button">
                      คณะกรรมการสมาคมฯ
                    </button>
                    <button class="dropdown-item" type="button">
                      สมาชิกสมาคมฯ
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <div class="btn-group">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              ข้อมูลศิษย์เก่า
            </button>
            <div class="dropdown-menu dropdown-menu-center bg-warning">
              <button class="dropdown-item" type="button">
                ทำเนียบศิษย์เก่า
              </button>
              <button class="dropdown-item" type="button">
                บัณฑิตคณะวิทยาศาสตร์ มศก.
              </button>
              <button class="dropdown-item" type="button">ศิษเก่าดีเด่น</button>
              <button class="dropdown-item" type="button">อัลบั้ม sc</button>
              <button class="dropdown-item" type="button">
                รายชื่อตัวแทนรุ่น
              </button>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <div class="btn-group">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              กิจกรรม
            </button>
            <div class="dropdown-menu dropdown-menu-center bg-warning">
              <button class="dropdown-item" type="button">
                กิจกรรม ปี 2556
              </button>
              <button class="dropdown-item" type="button">
                กิจกรรม ปี 2561
              </button>
              <button class="dropdown-item" type="button">
                กิจกรรม 2558 - 2560
              </button>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">สินค้าที่ระลึกสมาคม</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">ผู้สนับสนุนเว็บไซต์สมาคมฯ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">WEB BOARD</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">ข่าวสารทั่วไป</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">ติดต่อเรา</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
