<template>
  <nav class="sidebar">
    <a href="#" class="logo">SUSAA</a>
    <div class="menu-content">
      <ul class="menu-item">
        <div class="menu-title">
          your name menu (เมนูสำหรับผู้ใช้งาน)
        </div>
        <li class="item">
          <a href="/profile/:id">หน้าหลัก</a>
        </li>
        <li class="item">
          <a href="/updateuser/:id/edit">แก้ไขข้อมูลผู้ใช้</a>
        </li>

        <li class="item">
          <div class="submenu-item">
            <span>Your Submenu name </span>
            <i class="bi bi-arrow-bar-right"></i>
          </div>

          <ul class="menu-item submenu">

            <div class="menu-title">
              <i class="bi bi-arrow-bar-left"></i>
              your name menu
            </div>
            <li class="item">
              <a href="#">first sublink</a>
            </li>
            <li class="item">
              <a href="#">first sublink</a>
            </li>
            <li class="item">
              <a href="#">first sublink</a>
            </li>
          </ul>
        </li>
        <li class="item">
          <div class="submenu-item">
            <span> second Your Submenu name </span>
            <i class="bi bi-arrow-bar-right"></i>
          </div>

          <ul class="menu-item submenu">

            <div class="menu-title">
              <i class="bi bi-arrow-bar-left"></i>
              second your name submenu
            </div>
            <li class="item">
              <a href="#">second sublink</a>
            </li>
            <li class="item">
              <a href="#">second sublink</a>
            </li>
            <li class="item">
              <a href="#">second sublink</a>
            </li>
            <li class="item">
              <a href="#">second sublink</a>
            </li>
            <li class="item">
              <a href="#">second sublink</a>
            </li>
            <li class="item">
              <a href="#">second sublink</a>
            </li>
            <li class="item">
              <a href="#">second sublink</a>
            </li>
            <li class="item">
              <a href="#">second sublink</a>
            </li>

          </ul>
        </li>
      </ul>
    </div>
  </nav>
  <nav class="navbar navbar-expand  fixed-top">
    <i class="bi bi-toggles" id="sidebar-close"></i>
    <ul class="navbar-nav mr-auto p-2">
      <li class="nav-item active">
        <a class="nav-link text-dark" href="https://mytestsilpakorn.azurewebsites.net/"
          style="font-size: medium;">หน้าแรก</a>
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
        <a class="nav-link text-dark" href="#">ผู้สนับสนุนเวบไซต์สมาคมฯ</a>
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
    <div class="form-inline my-2 my-lg-0">
      <button class="btn my-2 my-sm-0" type="submit" @click="handlelogout()" style="font-size: medium;">
        ออกจากระบบ
      </button>
    </div>
  </nav>

  <main class="main">

    <section class="vh">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-9" style="width: 1000px;">
            <div class="card" style="border-radius: 15px">
              <div class="card-body">
                <div class="row align-items-center pt-4 pb-3">
                  <div class="col-md-4 ps-5">
                    <h6 class="mb-0">ชื่อผู้ใช้งานในระบบ</h6>
                  </div>
                  <div class="col-md-9 pe-5">
                    <p>{{ Username }}</p>
                  </div>
                </div>
                <hr class="mx-n3" />

                <div class="row align-items-center pt-4 pb-3">
                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">รหัสผ่าน</h6>
                  </div>
                  <div class="col-md-9 pe-5">
                    <button type="button" class="btn btn-success btn-sm  text-white" data-toggle="modal"
                      data-target="#exampleModal">
                      แก้ไขรหัสผ่าน
                    </button>
                  </div>
                </div>
                <div class="row align-items-center pt-4 pb-3">
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            แก้ไขรหัสผ่าน
                          </h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p v-if="passwordsMatch" class="text-success fw-bold">Passwords match!</p>
                          <p v-else class="text-danger fw-bold">Passwords do not match!</p>
                          <label for="newpassword" class="mr-2">New Password:</label>
                          <input type="password" v-model="newpassword" class="form-control" @input="comparePasswords" />
                          <hr class="mx-n3" />
                          <label for="comfirepassword" class="mr-2">Confirm Password:</label>
                          <input type="password" v-model="comfirepassword" class="form-control"
                            @input="comparePasswords" />

                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-primary text-white" :disabled="!passwordsMatch"
                            @click="Changepassword">
                            บันทึกรหัสผ่าน
                          </button>
                          <button type="button" class="btn btn-secondary text-white" data-dismiss="modal">
                            ปิด
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">ชื่อภาษาไทย</h6>
                  </div>
                  <div class="col-md-9 pe-5">
                    <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
                  </div>
                </div>
                <hr class="mx-n3" />

                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">ชื่อภาษาอังกฤษ</h6>
                  </div>
                  <div class="col-md-9 pe-5">
                    <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
                  </div>
                </div>
                <hr class="mx-n3" />
                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">อีเมล</h6>
                  </div>
                  <div class="col-md-9 pe-5">
                    <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
                  </div>
                </div>
                <hr class="mx-n3" />
                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">ที่อยู่</h6>
                  </div>
                  <div class="col-md-9 pe-5">
                    <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
                  </div>
                </div>
                <hr class="mx-n3" />
                <div class="col-md-9 pe-5">
                  <button type="submit" class="btn btn-primary btn-lg text-white" @click="submit()">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.sidebar {
  position: fixed;
  height: 100%;
  width: 260px;
  background: #373A3C;
}

.logo {
  font-size: 25px;
  padding: 0 15px;
}

.sidebar a {
  color: #9BA0B3;
  text-decoration: none;
}

.menu-content {
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: 40px;
  overflow-y: scroll;
}

.menu-item {
  height: 100%;
  width: 100%;
  list-style: none;
  transition: all 0.2s ease;
}

.menu-title {
  color: #9BA0B3;
  font-size: 14px;
  padding: 15px 20px;
}

.item a,
.submenu-item {
  padding: 16px;
  display: inline-block;
  width: 100%;
  border-radius: 12px
}

.item i {
  font-size: 25px;
}

.item a:hover,
.submenu-item:hover,
.submenu .menu-title:hover {
  background: rgb(255, 255, 255, 0.1);
}


.submenu-item {
  display: flex;
  color: #9BA0B3;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.submenu {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: calc(-100% - 26px);
  height: calc(100% + 100vh);
  background: #373A3C;
  display: none;
}

.submenu .menu-title {
  border-radius: 12px;
  cursor: pointer;
}

.submenu .menu-title i {
  margin-left: 10px;
}

.show-submenu~.submenu {
  display: block;
}

.submenu-active .menu-item {
  transform: translateX(-56%);
}

.menu-content::-webkit-scrollbar {
  display: none;

}

.navbar,
.main {
  left: 260px;
  width: calc(100% - 260px);
  transition: all 0.4s ease;
  z-index: auto;
}

.navbar {
  position: fixed;
  color: black;
  background: #F9CC02;
  padding: 15px 20px;
  font-size: 25px;
  padding: 20px;
  cursor: pointer;
  z-index: 100;
}

.main {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150vh;
  background: #e7f2fe;
  z-index: auto;
}

.main h1 {
  color: black;
  font-size: 40px;
  text-align: center;
}

.navbar #sidebar-close {
  cursor: pointer;
}

.sidebar.close~.main,
.sidebar.close~.navbar {
  left: 0;
  width: 100%;
}
</style>

<script>
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      const menu = document.querySelector(".menu-content");
      const menuItems = document.querySelectorAll(".submenu-item");
      const sideBar = document.querySelector(".sidebar");
      const sideBarClose = document.querySelector("#sidebar-close");
      const subMenuTitles = document.querySelectorAll(".submenu .menu-title");
      menuItems.forEach((items, index) => {
        items.addEventListener("click", () => {
          menu.classList.add("submenu-active");
          items.classList.add("show-submenu");
          menuItems.forEach((item2, index2) => {
            if (index !== index2) {
              item2.classList.remove("show-submenu")
            }
          })
        })
      })
      subMenuTitles.forEach((title) => {
        title.addEventListener("click", () => {
          menu.classList.remove("submenu-active");
        })
      })
      sideBarClose.addEventListener("click", () => sideBar.classList.toggle("close"))

      console.log(menuItems, subMenuTitles);
    });
  }

}
</script>