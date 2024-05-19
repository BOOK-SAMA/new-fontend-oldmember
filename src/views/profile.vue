<template>


	<nav class="sidebar">
		<a href="#" class="logo">SUSAA</a>

		<div class="menu-content">
			<ul class="menu-item">
				<div class="menu-title">
					your name menu (เมนูสำหรับผู้ใช้งาน)
				</div>
				<li class="item">
					<a href="#">first link</a>
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

				<li class="item">
					<a href="#">second link</a>
				</li>
				<li class="item">
					<a href="#">second link</a>
				</li>
				<li class="item">
					<a href="#">second link</a>
				</li>
				<li class="item">
					<a href="#">second link</a>
				</li>
				<li class="item">
					<a href="#">second link</a>
				</li>
				<li class="item">
					<a href="#">second link</a>
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
		<div class="profile-card">
			<div class="row">
				<div class="col">
					<div class="profile-header">
						<div class="body-profile-name">
							รูปโปรไฟล์
						</div>
					</div>
					<div class="profile-image">
						<img v-if="previewFile" :src="previewFile" alt="Preview" class="rounded-circle p-1"
							width="200" />

						<!-- Display a default image if previewFile is not available -->
						<p v-else>
							<img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png" alt="Admin"
								class="rounded-circle p-1" width="200" />
						</p>
					</div>
					<div class="header-profile-username">
						<div class="body-profile-username">
							Yuki Hayashi
						</div>
					</div>
					<div class="header-profile-email">
						<div class="body-profile-email">
							yuki@Maxwell.com
						</div>
					</div>
				</div>
			</div>
		</div>
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
	height: 100vh;
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

.profile-card {
	width: 600px;
	/* ตั้งค่าความกว้าง */
	height: 600px;
	/* ตั้งค่าความยาวให้เท่ากับความกว้าง */
	background-color: #e7f2fe;
	/* สีพื้นหลัง */
	border-radius: 10px;
	/* ขอบมน */
	display: flex;
	/* ทำให้สามารถใช้ justify-content และ align-items ได้ */
	/* justify-content: center; */
	/* จัดกึ่งกลางในแนวนอน */
	/* align-items: center; */
	/* จัดกึ่งกลางในแนวตั้ง */
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
	/* เงา */
	margin: 50px;
	/* ระยะห่างจากองค์ประกอบอื่น */
	position: relative;
	/* ตั้งค่าเพื่อใช้งาน position: absolute ภายใน */
}

.profile-header {
	width: 550px;
	/* ตั้งค่าความกว้าง */

	border: 2px solid #F9CC02;
	/* กำหนดเส้นขอบ */
	position: absolute;
	/* กำหนดตำแหน่งเป็น absolute */
	top: 10px;
	/* จัดให้อยู่ที่ด้านบนสุด */
	left: 315px;
	/* จัดให้อยู่ตรงกลางในแนวนอน */
	transform: translateX(-50%);
	/* ปรับตำแหน่งให้อยู่ตรงกลางจริงๆ */
	margin: 0;
	/* ลบ margin ออก */
	/* กำหนด padding */
	background-color: white;
	/* สีพื้นหลังของชื่อโปรไฟล์ */
	border-radius: 5px;
	/* ขอบมนของชื่อโปรไฟล์ */
}

.body-profile-name {
	font-size: 20px;
	text-align: center;
	/* จัดข้อความให้อยู่ตรงกลางในแนวนอน */
	display: flex;
	/* ใช้ Flexbox เพื่อจัดการตำแหน่งภายใน */
	justify-content: left;
	/* จัดกึ่งกลางในแนวนอน */
	align-items: center;
	/* จัดกึ่งกลางในแนวตั้ง หากจำเป็น */
	height: 100%;
	/* กำหนดความสูงให้เต็มพื้นที่ของ parent เพื่อจัดกึ่งกลางในแนวตั้ง */
	margin: 0;
	/* ลบ margin ออกเพื่อป้องกันการเลื่อนของตำแหน่ง */
	padding: 10px;
	/* เพิ่ม padding ตามต้องการ */
}
.profile-image{
	position: absolute;
	margin: 60px;
	left: 250px;
	transform: translateX(-50%);
}

.header-profile-username{
	/* border: 3px solid #73AD21; */
	position: absolute;
	width: 500px;
	bottom: 270px;
	left: 65px;
}
.body-profile-username{
	font-size: 20px;
	text-align: center;
	height: 100%;
	margin: 0;
	padding: 10px;

}
.header-profile-email{
	/* border: 3px solid #73AD21; */
	position: absolute;
	width: 500px;
	bottom: 240px;
	left: 65px;
}
.body-profile-email{
	font-size: 20px;
	text-align: center;
	height: 100%;
	margin: 0;
	padding: 10px;

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