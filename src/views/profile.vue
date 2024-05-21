<template>


	<nav class="sidebar">
		<a href="#" class="logo">SUSAA</a>
		<div class="menu-content">
			<ul class="menu-item">
				<div class="menu-title">
					your name menu (เมนูสำหรับผู้ใช้งาน)
				</div>
				<li class="item">
					<a href="/profile/:id">
						<i class="bi bi-house-fill" style="
						size-adjust: inherit;
						margin-right: 10px;
						"></i>
						หน้าหลัก
					</a>
				</li>

				<!-- <li class="item">
					<a href="/updateuser/:id/edit">
						<i class=" bi bi-person-fill" style="
						size-adjust: inherit;
						margin-right: 10px;
						"></i>
						แก้ไขข้อมูลผู้ใช้
					</a>
				</li> -->

				<li class="item">
					<div class="submenu-item">
						<i class=" bi bi-person-fill" style="
						size-adjust: inherit;
						margin-right: 2px;
						"></i>
						<span>แก้ไขข้อมูลสมาชิก</span>
						<i class="bi bi-arrow-bar-right"></i>
					</div>

					<ul class="menu-item submenu">
						<div class="menu-title">
							<i class="bi bi-arrow-bar-left"></i>
							<i class=" bi bi-person-fill" style="
						size-adjust: inherit;
						margin-right: 2px;
						">
							</i>
							แก้ไขข้อมูลสมาชิก
						</div>
						<li class="item">
							<a href="/updateuser/:id/edit">แก้ไขข้อมูลผู้ใช้</a>
						</li>
						<li class="item">
							<a href="#">แก้ไขข้อมูลการศึกษา</a>
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
		<div class="profile-card">
			<div class="row">
				<div class="col">
					<div class="profile-header">
						<div class="body-profile-name">
							รูปโปรไฟล์
						</div>
					</div>
					<div class="profile-image">
						<img v-if="previewFile" :src="previewFile" alt="Preview" class="p-1"
							width="200" height="200" />
						<!-- Display a default image if previewFile is not available -->
						<p v-else>
							<img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png" alt="Admin"
								class="rounded-circle p-1" width="200" height="200" />
						</p>
					</div>
					<div class="header-profile-username-thai">
						<div class="body-profile-username">
							{{ Thainame }}
						</div>
					</div>
					<div class="header-profile-username-eng">
						<div class="body-profile-username">
							{{ Engname }}
						</div>
					</div>
					<div class="header-profile-email">
						<div class="body-profile-email">
							<ul class="list-group list-group-flush">
								<li
									class="list-group-item no-background d-flex justify-content-between align-items-center flex-wrap">
									<h6 class="mb-0">
										<i class="bi bi-tags-fill feather feather-globe me-2 icon-inline" width="24"
											height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
											stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></i>
										อีเมล
									</h6>
									<span class="text-dark">{{ Email }}</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="header-profile-phonenumber">
						<div class="body-profile-phonenumber">
							<ul class="list-group list-group-flush">
								<li
									class="list-group-item no-background d-flex justify-content-between align-items-center flex-wrap">
									<h6 class="mb-0">
										<i class="bi bi-phone-vibrate feather feather-globe me-2 icon-inline" width="24"
											height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
											stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></i>
										เบอร์โทรศัพท์
									</h6>
									<span class="text-dark">{{ Phonenumber }}</span>
								</li>
							</ul>
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
	border-radius: 10px
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

/* เอาถึงตรงนี้ไป */

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

.profile-image {
	position: absolute;
	margin: 75px;
	left: 250px;
	transform: translateX(-50%);
}

.header-profile-username-thai {
	/* border: 3px solid #73AD21; */
	position: absolute;
	width: 500px;
	bottom: 270px;
	left: 65px;
}

.body-profile-username {
	font-size: 20px;
	text-align: center;
	height: 100%;
	margin: 0;
	padding: 10px;

}


.header-profile-username-eng {
	/* border: 3px solid #73AD21; */
	position: absolute;
	width: 500px;
	bottom: 240px;
	left: 65px;
}

.body-profile-username {
	font-size: 20px;
	text-align: center;
	height: 100%;
	margin: 0;
	padding: 10px;

}


.header-profile-email i {
	font-size: 25px;
	padding: 10px;
}

.header-profile-email {
	/* border: 3px solid #73AD21; */
	position: absolute;
	width: 500px;
	bottom: 100px;
	left: 65px;
}

.body-profile-email {
	font-size: 20px;
	text-align: center;
	height: 100%;
	margin: 0;
	padding: 10px;
}

.header-profile-phonenumber {
	/* border: 3px solid #73AD21; */
	position: absolute;
	width: 500px;
	bottom: 60px;
	left: 65px;
}

.header-profile-phonenumber i {
	font-size: 25px;
	padding: 10px;
}

.body-profile-phonenumber {
	font-size: 20px;
	text-align: center;
	height: 100%;
	margin: 0;
	padding: 10px;

}

.no-background {
	background-color: transparent;
	/* หรือใช้ none */

}
</style>



<script>
import { onMounted, ref } from 'vue';
import router from "@/router";
import axios from 'axios';

export default {
	setup() {
		const previewFile = ref('');
		const Thainame = ref('');
		const Engname = ref('');
		const Phonenumber = ref('');
		const Email = ref('');

		onMounted(async () => {
			const menu = document.querySelector('.menu-content');
			const menuItems = document.querySelectorAll('.submenu-item');
			const sideBar = document.querySelector('.sidebar');
			const sideBarCloseButton = document.querySelector('#sidebar-close');
			const subMenuTitles = document.querySelectorAll('.submenu .menu-title');

			// Add click event listeners to submenu items
			menuItems.forEach((item, index) => {
				item.addEventListener('click', () => {
					menu.classList.add('submenu-active');
					item.classList.add('show-submenu');
					menuItems.forEach((otherItem, otherIndex) => {
						if (index !== otherIndex) {
							otherItem.classList.remove('show-submenu');
						}
					});
				});
			});
			// Add click event listeners to submenu titles
			subMenuTitles.forEach((title) => {
				title.addEventListener('click', () => {
					menu.classList.remove('submenu-active');
				});
			});

			// Add click event listener to the sidebar close button
			sideBarCloseButton.addEventListener('click', () => {
				sideBar.classList.toggle('close');
			});

			// Optional: Log the menu items and submenu titles for debugging
			console.log(menuItems, subMenuTitles);

			const userId = localStorage.getItem('userid');
			try {
				const profileResponse = await axios.post(
					`${import.meta.env.VITE_API2}users/profile/` + userId,
					null,
					{
						headers: {
							Authorization: 'Bearer ' + localStorage.getItem('tokenstring'),
							'Content-Type': 'application/json',
						},
					}
				);
				console.log(profileResponse);
				const uuid = profileResponse.data.thing.Image;
				console.log(uuid);
				const previewResponse = await axios.get(
					`${import.meta.env.VITE_API2}users/preview/${uuid}`,
					{
						headers: {
							Authorization: 'Bearer ' + localStorage.getItem('tokenstring'),
							'Content-Type': 'application/json',
						},
						responseType: 'arraybuffer',
					}
				);

				const base64String = btoa(
					new Uint8Array(previewResponse.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
				);
				console.log(base64String)
				if(base64String === "IiI="){
					previewFile.value = "" ;
				}else{
					const imageSrc = `data:${previewResponse.headers['content-type']};base64,${base64String}`;
					previewFile.value = imageSrc ;
				}
				console.log(previewFile.value)
				Thainame.value = profileResponse.data.thing.Thainame;
				Engname.value = profileResponse.data.thing.Engname;
				Phonenumber.value = profileResponse.data.thing.Phonenumber;
				Email.value = profileResponse.data.thing.Email;

			} catch (error) {
				alert('การเรียกดูข้อมูลบุคคลผิดพลาด กรุณา login อีกครั้ง หรือ ติดต่อเจ้าหน้าที่');
				// router.push({ path: '/login' });
			}
		});
		return {
			previewFile,
			Thainame,
			Engname,
			Phonenumber,
			Email,
		};
	},
	methods: {
		handlelogout() {
			localStorage.removeItem("userid");
			localStorage.removeItem("tokenstring");
			localStorage.removeItem("role");
			router.push({ path: "/login" });
		},
	}
};
</script>