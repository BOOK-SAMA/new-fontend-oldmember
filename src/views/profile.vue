<template>
	<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
		<a class="navbar-brand" href="#"><img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png"
				alt="Admin" class="rounded-circle p-1" width="40" /></a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
			aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarsExampleDefault">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" :class="{ 'disabled': state }" :href="state ? '#' : `/updateuser/${id}/edit`">แก้ไขข้อมูลส่วนตัว</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown"
						aria-haspopup="true" aria-expanded="false">Dropdown</a>
					<div class="dropdown-menu" aria-labelledby="dropdown01">
						<a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<a class="dropdown-item" href="#">Something else here</a>
					</div>
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
	<div class="container">
		<div class="main-body">
			<div class="row">
				<div class="col-lg-4 mt-5">
					<div class="card">
						<!--แถวรูปกับข้อมูลส่วนตัว  -->
						<div class="card-body">
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
									<h4>ชื่อภาษาไทย</h4>
									<h4>{{ Thainame }}</h4>
									<h6>อาชีพ</h6>
									<p class="text-secondary mb-1">{{ Job }}</p>
									<h6>ตำแหน่งในอาชีพการงาน</h6>
									<p class="text-secondary mb-1">{{ Jobposition }}</p>
									<h6>ที่ตั้งของที่ทำงาน</h6>
									<p class="text-muted font-size-sm">
										{{ Jobaddress }}
									</p>

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
										เลขโทรสาร
										<p class="text-muted font-size-sm">
											{{ Phonemail }}
										</p>
									</h6>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-8 mt-5">
					<!--แถวข้อมูลส่วนตัว เช่นรูป  -->
					<div class="card">
						<div class="card-body">
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">username</h6>
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
									<h6 class="mb-0">ชื่อเดิมก่อนเปลี่ยนชื่อ</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Oldname }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">ชื่อเล่น</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Nickname }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">วัน-เดือน-ปีเกิด</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Dateofbirth }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">
										สถานะการศึกษาที่มหาลัยศิลปากร
									</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Status }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">
										ระดับปริญญาตรี สาขาวิชาเอก
									</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Academicstatus }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">
										รหัสประจำตัวระดับปริญญาตรี
									</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Academicnumber }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">
										ปริญญาโท สาขาวิชาเอก
									</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Masterdegree }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">
										รหัสประจำตัวระดับปริญญาโท
									</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Masterdegreenumber }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">
										ระดับปริญญาเอก สาขาวิชาเอก
									</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Doctoraldegree }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">
										รหัสประจำตัวระดับปริญญาเอก
									</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Doctoraldegreenumber }}</p>
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
									<h6 class="mb-0">เบอร์โทรศัพท์</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Phonenumber }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">เลขโทรสาร</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Phonemail }}</p>
								</div>
							</div>

							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">ID Line หรือช่องทางการติดต่อโซเชียลแอพพลิเคชั่นอื่นๆ</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Idline }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">อีเมล</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Email }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">อาชีพ</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Job }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">ตำแหน่ง</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Jobposition }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">ชื่อและที่อยู่ของสถานที่ทำงาน</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Jobaddress }}</p>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">ลำดับสมาชิกในสมาคม</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<p class="form-control form-control-lg">{{ Levelmember }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
body {
	background: #f7f7ff;
	margin-top: 20px;
}

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
			id:"",
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
		await this.checkuser(id);

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
			if (id != userId) {
				localStorage.removeItem("userid");
				localStorage.removeItem("tokenstring");
				localStorage.removeItem("uuid");
				router.push({ path: "/login" });
			}
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
				localStorage.removeItem("userid");
				localStorage.removeItem("tokenstring");
				localStorage.removeItem("uuid");
				router.push({ path: "/login" });
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
				this.Phonenumber = secondApiResponse.data.thing.Doctoraldegreenumber;
				this.Phonemail = secondApiResponse.data.thing.Phonemail;
				this.Idline = secondApiResponse.data.thing.Idline;
				this.Email = secondApiResponse.data.thing.Email;
				this.Job = secondApiResponse.data.thing.Jobposition;
				this.Jobaddress = secondApiResponse.data.thing.Jobaddress;
				this.Levelmember = secondApiResponse.data.thing.Levelmember;
				this.Levelmemberthing = secondApiResponse.data.thing.Levelmemberthing;
				localStorage.setItem('uuid', secondApiResponse.data.thing.Image)
				this.Text = secondApiResponse.data.thing.Accessstatus;
				if (this.Text == "enable"){

					this.Accessstatus = true ; 
					console.log(this.Accessstatus)
				}
			} catch (error) {
				localStorage.removeItem("userid");
				localStorage.removeItem("tokenstring");
				localStorage.removeItem("uuid");
				router.push({ path: "/login" });
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
				console.error("Error downloading image:", error);
				// localStorage.removeItem("userid");
				// localStorage.removeItem("tokenstring");
				// localStorage.removeItem("uuid");
				// router.push({ path: "/login" });
			}
		},
	
	},
};
</script>












<!-- <script>
import { ref, watchEffect } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
	setup() {
		const router = useRouter();
		const userId = ref(null);

		// ตัวแปร reactive ที่ใช้เก็บข้อมูลผู้ใช้
		const userData = ref({
			Username: "",
			Password: "",
			THAIname: "",
			// ... เพิ่มตัวแปรอื่น ๆ ตามความจำเป็น
		});

		// ใน watchEffect, เรียก getuserdata เมื่อค่าใน localStorage เปลี่ยนแปลง
		watchEffect(async () => {
			const paramsId = router.params.id;

			if (!paramsId || userId.value !== paramsId) {
				localStorage.removeItem("userid");
				localStorage.removeItem("tokenstring");
				router.push({ path: "/login" });
			} else {
				try {
					const response = await axios.get(
						`${import.meta.env.VITE_API2}profile/${paramsId}`,
						{
							// ตัวอย่าง Body (แก้ตามความเหมาะสม)
							dataField1: "value1",
							dataField2: "value2",
						},
						{
							headers: {
								// ตัวอย่าง Header (แก้ตามความเหมาะสม)
								Authorization: "Bearer " + localStorage.getItem("tokenstring"),
								"Content-Type": "application/json",
							},
						}
					);
					if (response.status != 200) {
						localStorage.removeItem("userid");
						localStorage.removeItem("tokenstring");
						router.push({ path: "/login" });
					} else {
						const data = response.data;

						// ตั้งค่าข้อมูลต่าง ๆ จาก data
						Object.keys(userData.value).forEach((key) => {
							if (data.hasOwnProperty(key)) {
								userData.value[key] = data[key];
							}
						});
					}
				} catch (error) {
					router.push({ path: "/:notfound" });
					console.error("Error fetching user data:", error.message);
				}
			}
		});

		// ส่งค่ากลับไปยัง template
		return { userData };
	},
};
</script> -->















<!-- <script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userId = ref(null);

watchEffect(async () => {
	const paramsId = router.params.id;

	if (!paramsId || userId.value !== paramsId) {
		localStorage.removeItem('userid');
		localStorage.removeItem('tokenstring');
		router.push({ path: "/login" });
	} else {
		try {
			// เรียก API ด้วย axios หรือไลบรารี HTTP อื่น ๆ
			const response = await axios.get(
				`https://api.example.com/users/${userId.value}`
			);

			// ตั้งค่าข้อมูลที่ได้จาก API
			userData.value = response.data;
		} catch (error) {
			console.error("Error fetching user data:", error.message);
		}
	}
});
</script> -->