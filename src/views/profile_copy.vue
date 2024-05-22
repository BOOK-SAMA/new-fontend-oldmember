<template>

	<nav class="navbar navbar-expand fixed-top" style="background-color: #F9CC02;">
		<a class="navbar-brand" href="#"><img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png"
				alt="Admin" class="rounded-circle p-1" width="40" /></a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
			aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarsExampleDefault">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="https://mytestsilpakorn.azurewebsites.net/">หน้าแรก </a>
				</li>
				<li class="nav-item">
					<a class="nav-link" :href="state ? '#' : `/profile/${id}`">หน้าโปรไฟล์</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" :class="{ 'disabled': state }"
						:href="state ? '#' : `/updateuser/${id}/edit`">แก้ไขข้อมูลส่วนตัว</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" :href="state ? '#' : `/orderhistory/${id}`">ดูประวัติการสั่งซื้อ</a>
				</li>
			</ul>
			<form class="form-inline my-2 my-lg-0">
				<button class="btn btn-secondary my-2 my-sm-0" type="submit" @click="handlelogout()">
					LOGOUT
				</button>
			</form>
		</div>
	</nav>
	<!-- แถว link 	-->
	<div class="container " style="margin-top: 100px;">
		<div class="main-body mt-6">
			<div class="row">
				<div class="col-lg-4 mt-6">
					<div class="card mt-6 ">
						<!--แถวรูปกับข้อมูลส่วนตัว  -->
						<div class="card-body mt-6">
							<div class="d-flex flex-column align-items-center text-center">
								<!-- Display the file content as an image if available -->
								<img v-if="previewFile" :src="previewFile" alt="Preview" class="rounded-circle p-1"
									width="110" />

								<!-- Display a default image if previewFile is not available -->
								<p v-else>
									<img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png"
										alt="Admin" class="rounded-circle p-1" width="110" />
								</p>

								<div class="mt-3">
									<h4>{{ Thainame }}</h4>
								</div>
							</div>
							<hr class="my-4" />
							<ul class="list-group list-group-flush">
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 class="mb-0">
										เบอร์โทรศัพท์
										<p class="text-muted font-size-sm">
											{{ Phonenumber }}
										</p>
									</h6>
									<h6 class="mb-0">
										อีเมล
										<p class="text-muted font-size-sm">
											{{ Email }}
										</p>
									</h6>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-8 " style="margin-top: 1.3cm;">
					<!--แถวข้อมูลส่วนตัว เช่นรูป  -->
					<div class="card">
						<ul class="nav nav-tabs" id="myTab" role="tablist">
							<li class="nav-item" role="presentation">
								<button class="nav-link active" id="home-tab" data-bs-toggle="tab"
									data-bs-target="#userinfo" type="button" role="tab" aria-controls="home"
									aria-selected="true">รายละเอียดของผู้ใช้</button>
							</li>
							<li class="nav-item" role="presentation">
								<button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#userinfo-more"
									type="button" role="tab" aria-controls="profile"
									aria-selected="false">รายละเอียดของผู้ใช้เพิ่มเติม</button>
							</li>
							<li class="nav-item" role="presentation">
								<button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
									type="button" role="tab" aria-controls="contact"
									aria-selected="false">รายละเอียดของผู้ใช้เกี่ยวกับการศึกษา</button>
							</li>
						</ul>
						<div class="tab-content" id="myTabContent">
							<div class="tab-pane fade show active" id="userinfo" role="tabpanel"
								aria-labelledby="home-tab">
								<div class="card-body mt-6">
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">ชื่อผู้ใช้งานในระบบ</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<p class="form-control form-control-lg">{{ Username }}</p>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">ชื่อภาษาไทย</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<p class="form-control form-control-lg">{{ Thainame }}</p>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">ชื่อภาษาอังกฤษ</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<p class="form-control form-control-lg">{{ Engname }}</p>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">ที่อยู่</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<p class="form-control form-control-lg">{{ Address }}</p>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">จังหวัด</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<p class="form-control form-control-lg">{{ Address }}</p>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">รหัสไปษณีย์</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<p class="form-control form-control-lg">{{ Address }}</p>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">อีเมล</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<p class="form-control form-control-lg">{{ Address }}</p>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">เบอร์โทรศัพท์</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<p class="form-control form-control-lg">{{ Address }}</p>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane fade" id="userinfo-more" role="tabpanel" aria-labelledby="profile-tab">...
							</div>
							<div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>








</template>

<style>
.card {
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	border: 0 solid transparent;
	border-radius: 0.25rem;
	margin-bottom: 1.5rem;
	box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%),
		0 2px 6px 0 rgb(206 206 238 / 54%);
}

.me-2 {
	margin-right: 0.5rem !important;
}
</style>




<script>
import router from "@/router";
import axios from "axios";
export default {
	name: "Updateuser",
	data() {
		return {
			id: "",
			Text: "",
			Accessstatus: false,
			Username: "",

			Thainame: "",
			Engname: "",
			Oldname: "",
			Nickname: "",
			Dateofbirth: "",

			Academicstatus: "",
			Academicnumber: "",
			Masterdegree: "",
			Masterdegreenumber: "",
			Doctoraldegree: "",
			Doctoraldegreenumber: "",

			Address: "",
			Phonenumber: "",
			Phonemail: "",
			Idline: "",
			Email: "",
			Job: "",
			Jobposition: "",
			Jobaddress: "",
			Levelmember: "",
			Levelmemberthing: "",

			previewFile: null,
		};
	},

	async mounted() {
		this.id = this.$route.params.id;

		// Ensure user is authenticated and authorized
		await this.checkuser(this.id);

		const uuid = localStorage.getItem("uuid");
		await this.downloadImageAndDisplay(uuid)

	},
	methods: {
		handlelogout() {
			localStorage.removeItem("userid");
			localStorage.removeItem("tokenstring");
			localStorage.removeItem("uuid");
			router.push({ path: "/login" });
		},
		async checkuser(id) {
			const userId = localStorage.getItem("userid");
			try {
				const response = await axios.post(
					`${import.meta.env.VITE_API2}users/correctparam/` + userId,
					null,
					{
						headers: {
							// ตัวอย่าง Header (แก้ตามความเหมาะสม)
							Authorization: "Bearer " + localStorage.getItem("tokenstring"),
							"Content-Type": "application/json",
						},
					}
				);
				await this.profile(userId);
			} catch (error) {

			}
		},
		async profile(id) {
			try {
				// Make a second API call or perform additional actions here
				// Example:
				const secondApiResponse = await axios.post(
					`${import.meta.env.VITE_API2}users/profile/` + id,
					null,
					{
						headers: {
							Authorization: "Bearer " + localStorage.getItem("tokenstring"),
							"Content-Type": "application/json",
						},
					}
				);

				console.log(secondApiResponse);
				// Process the response from the second API as needed
				this.Username = secondApiResponse.data.thing.Username;

				this.Thainame = secondApiResponse.data.thing.Thainame;
				this.Engname = secondApiResponse.data.thing.Engname;
				this.Oldname = secondApiResponse.data.thing.Oldname;
				this.Nickname = secondApiResponse.data.thing.Nickname;
				this.Dateofbirth = secondApiResponse.data.thing.Dateofbirth;

				this.Status = secondApiResponse.data.thing.Status;
				this.Academicstatus = secondApiResponse.data.thing.Academicstatus;
				this.Academicnumber = secondApiResponse.data.thing.Academicnumber;
				this.Masterdegree = secondApiResponse.data.thing.Masterdegree;
				this.Masterdegreenumber =
					secondApiResponse.data.thing.Masterdegreenumber;
				this.Doctoraldegree = secondApiResponse.data.thing.Doctoraldegree;
				this.Doctoraldegreenumber =
					secondApiResponse.data.thing.Doctoraldegreenumber;
				this.Jobposition = secondApiResponse.data.thing.Jobposition;
				this.Address = secondApiResponse.data.thing.Address;
				this.Phonenumber = secondApiResponse.data.thing.Phonenumber;
				this.Phonemail = secondApiResponse.data.thing.Phonemail;
				this.Idline = secondApiResponse.data.thing.Idline;
				this.Email = secondApiResponse.data.thing.Email;
				this.Job = secondApiResponse.data.thing.Jobposition;
				this.Jobaddress = secondApiResponse.data.thing.Jobaddress;
				this.Levelmember = secondApiResponse.data.thing.Levelmember;
				this.Levelmemberthing = secondApiResponse.data.thing.Levelmemberthing;
				localStorage.setItem('uuid', secondApiResponse.data.thing.Image)
				this.Text = secondApiResponse.data.thing.Accessstatus;
				if (this.Text == "enable") {

					this.Accessstatus = true;
					console.log(this.Accessstatus)
				}
			} catch (error) {

			}
		},
		async downloadImageAndDisplay(uuid) {
			try {
				// Fetch the image content from the server
				const response = await axios.get(
					`${import.meta.env.VITE_API2}users/preview/${uuid}`,
					{
						headers: {
							Authorization: "Bearer " + localStorage.getItem("tokenstring"),
							"Content-Type": "application/json",
						},
						responseType: 'arraybuffer', // Set the responseType to 'arraybuffer' to handle binary data
					}
				);

				// Convert the binary data to a data URL
				const imageSrc = `data:${response.headers['content-type']};base64,${btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`;

				// Display the image using the data URL
				const imgElement = document.getElementById('your-image-id'); // Replace 'your-image-id' with the actual ID of your image element
				if (imgElement) {
					imgElement.src = imageSrc;
				}
				this.previewFile = imageSrc;
				console.log('Image downloaded and displayed.');
			} catch (error) {

			}
		},

	},
};
</script>
