<template>
  <nav class="navbar navbar-expand fixed-top" style="background-color: #F9CC02;">
    <a class="navbar-brand" href="#"><img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png"
        alt="Admin" class="rounded-circle p-1" width="80" /></a>
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
        <button class="btn  my-2 my-sm-0" type="submit" @click="handlelogout()" style="background-color: #F9CC02;">
          ออกจากระบบ
        </button>
      </form>
    </div>
  </nav>

  <section class="vh" style="margin-top: 2.5cm;">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-11">
          <h1 class="text-dark mb-4" style="width: max-content; position: relative; margin-top: 2cm;">
            แก้ไขข้อมูลสมาชิกสมาคมศิษย์เก่า มหาลัยศิลปากร
          </h1>
          <div class="card" style="border-radius: 15px">
            <div class="card-body" style="width: fit-content;">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#userinfo"
                    type="button" role="tab" aria-controls="nav-home" aria-selected="true">รายละเอียดของผู้ใช้</button>
                  <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                    type="button" role="tab" aria-controls="nav-profile"
                    aria-selected="false">รายละเอียดของผู้ใช้เพิ่มเติม</button>
                  <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                    type="button" role="tab" aria-controls="nav-contact"
                    aria-selected="false">รายละเอียดของผู้ใช้เกี่ยวกับการศึกษา</button>
                  <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                    type="button" role="tab" aria-controls="nav-contact"
                    aria-selected="false">รายละเอียดของผู้ใช้เกี่ยวกับอาชีพ</button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="userinfo" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div class="row align-items-center pt-4 pb-3">
                    <hr class="mx-n3" />
                    <div class="col-md-3 ps-5">
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
                            <p v-if="passwordsMatch" class="text-success fw-bold">รหัสผ่านเหมือนกัน</p>
                            <p v-else class="text-danger fw-bold">รหัสผ่านไม่เหมือนกัน</p>
                            <label for="newpassword" class="mr-2">รหัสผ่านใหม่:</label>
                            <input type="password" v-model="newpassword" class="form-control"
                              @input="comparePasswords" />
                            <hr class="mx-n3" />
                            <label for="comfirepassword" class="mr-2">ยืนยัน รหัสผ่านใหม่:</label>
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
                  <hr class="mx-n3" />

                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ชื่อภาษาไทย</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input v-model="THAIname" class="form-control form-control-lg" placeholder=""/>
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ชื่อภาษาอังกฤษ</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input v-model="Engname" class="form-control form-control-lg" placeholder=""/>
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">ที่อยู่</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<p class="form-control form-control-lg" style="height: max-content;">{{ Address }}</p>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">จังหวัด</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<p class="form-control form-control-lg" style="height: max-content;">{{ city }}</p>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">รหัสไปษณีย์</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<p class="form-control form-control-lg" style="height: max-content;">{{ pincode }}</p>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">อีเมล</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<p class="form-control form-control-lg" style="height: max-content;">{{ Email }}</p>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">เบอร์โทรศัพท์</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<p class="form-control form-control-lg" style="height: max-content;">{{ Phonenumber }}</p>
										</div>
									</div>









                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
              </div>


              <div class="px-5 py-4">
                <button type="submit" class="btn btn-primary btn-lg text-white" @click="submitUpdate">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>









<!-- <script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "Updateuser",
  data() {
    return {
      iduser: "",
      newpassword: "",
      comfirepassword: "",
      passwordsMatch: false,
      data: ref(new FormData()),
      dateText: "",
      Username: "",
      Password: "",

      THAIname: "",
      ENGname: "",
      Oldname: "",
      nickname: "",

      status: "",
      academicstatus: "",
      academicnumber: "",
      masterdegree: "",
      masterdegreenumber: "",
      doctordegree: "",
      doctordegreenumber: "",

      address: "",
      Phonenumber: "",
      Phonemail: "",
      Idline: "",
      Email: "",
      job: "",
      Jobposition: "",
      Jobaddress: "",
      Levelmember: "",
      Levelmemberthing: "",

      paystatus: "",
      paystatustext: "",
      role: "",
      paystatus: "",
      day: "",
      month: "",
      year: "",
      dateString: "",

      Accessstatus: "",
      days: Array.from({ length: 31 }, (_, i) => i + 1),
      months: Array.from({ length: 12 }, (_, i) => i + 1),
      years: Array.from(
        { length: 100 },
        (_, i) => new Date().getFullYear() - i
      ),
      router: useRouter(),
      file: null,
      profileimage: null,
      payimage: null,
    };
  },
  async mounted() {
    console.log(this.$route.params.id);
    this.iduser = this.$route.params.id;
     console.log(this.iduser);
    await this.getuserdata(this.$route.params.id);
    await this.downloadImageAndDisplay(localStorage.getItem("uuidprofile"));
    await this.downloadpayImageAndDisplay(localStorage.getItem("uuidpayimage"));
  },
  methods: {
    async getuserdata(id) {
        await axios.post(
					`${import.meta.env.VITE_API2}users/profile/` + id,
					null,
					{
						headers: {
							Authorization: "Bearer " + localStorage.getItem("tokenstring"),
							"Content-Type": "application/json",
						},
					}
				)
        .then((res) => {
          console.log(res);
          this.Username = res.data.thing.Username;
          this.Password = res.data.thing.Enpassword;

          this.THAIname = res.data.thing.Thainame;
          this.ENGname = res.data.thing.Engname;
          this.Oldname = res.data.thing.Oldname;
          this.nickname = res.data.thing.Nickname;
          const dateString = res.data.thing.Dateofbirth;
          [this.day, this.month, this.year] = dateString.split("/");

          this.status = res.data.thing.Status;
          this.academicstatus = res.data.thing.Academicstatus;
          this.academicnumber = res.data.thing.Academicnumber;
          this.masterdegree = res.data.thing.Masterdegree;
          this.masterdegreenumber = res.data.thing.Masterdegreenumber;
          this.doctordegree = res.data.thing.Doctoraldegree;
          this.doctordegreenumber = res.data.thing.Doctoraldegreenumber;

          this.address = res.data.thing.Address;
          this.phonenumber = res.data.thing.Phonenumber;
          this.phonemail = res.data.thing.Phonemail;
          this.Idline = res.data.thing.Idline;
          this.Email = res.data.thing.Email;
          this.job = res.data.thing.Job;
          this.Jobposition = res.data.thing.Jobposition;
          this.Jobaddress = res.data.thing.Jobaddress;
          this.Levelmember = res.data.thing.Levelmember;
          this.Levelmemberthing = res.data.thing.Levelmemberthing;

          this.paystatus = res.data.thing.Paystatus;
          this.role = res.data.thing.Role;
          this.Accessstatus = res.data.thing.Accessstatus;
          localStorage.setItem("uuidprofile", res.data.thing.Image);
          localStorage.setItem("uuidpayimage", res.data.thing.Payimage);
        })
        .catch();
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
            responseType: "arraybuffer", // Set the responseType to 'arraybuffer' to handle binary data
          }
        );

        // Convert the binary data to a data URL
        const imageSrc = `data:${
          response.headers["content-type"]
        };base64,${btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        )}`;

        // Display the image using the data URL
        const imgElement = document.getElementById("your-image-id"); // Replace 'your-image-id' with the actual ID of your image element
        if (imgElement) {
          imgElement.src = imageSrc;
        }
        this.profileimage = imageSrc;
        console.log("Image downloaded and displayed.");
      } catch (error) {
        
      }
    },
   
    handleprofile(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    submitUpdate() {
      // Assuming you want to use $route.params.id
      const id = this.$route.params.id;

      let data = new FormData();
      data.append("thainame", this.THAIname);
      data.append("engname", this.ENGname);
      data.append("oldname", this.Oldname);
      data.append("nickname", this.nickname);
      data.append("dateofbirth", `${this.day}/${this.month}/${this.year}`);

      data.append("status", this.status);
      data.append("academicstatus", this.academicstatus);
      data.append("academicnumber", this.academicnumber);
      data.append("masterdegree", this.masterdegree);
      data.append("masterdegreenumber", this.masterdegreenumber);
      data.append("doctordegree", this.doctordegree);
      data.append("Doctoraldegreenumber", this.doctordegreenumber);

      data.append("address", this.address);
      data.append("phonenumber", this.Phonenumber);
      data.append("phonemail", this.Phonemail);
      data.append("idline", this.Idline);
      data.append("email", this.Email);
      data.append("job", this.job);
      data.append("jobposition", this.Jobposition);
      data.append("jobaddress", this.Jobaddress);
      data.append("levelmember", this.Levelmember);
      data.append("levelmemberthing", this.Levelmemberthing);

      data.append("role", this.role);
      data.append("paystatus", this.paystatus);
      data.append("accessstatus", this.Accessstatus);

      data.append("file", this.file);

      axios
        .post(`${import.meta.env.VITE_API2}users/update/${id}`, data, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          const idnew = localStorage.getItem("userid");
          this.router.push({ path: '/profile/' + idnew });
        })
        .catch((error) => {
          console.error("Error updating:", error);
        });
    },
    Changepassword() {
      // Assuming you want to use $route.params.id
      const id = this.$route.params.id;

      let data = new FormData();
      data.append("password", this.newpassword);
      data.append("confirmpassword", this.comfirepassword);
      axios
        .post(`${import.meta.env.VITE_API2}users/resetpassword/${id}`, data, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          const idnew = localStorage.getItem("userid");
          this.router.push({ path: '/profile/' + idnew });
        })
        .catch((error) => {
          console.error("Error updating:", error);
        });
    },
    comparePasswords() {
       if(this.newpassword == "" && this.comfirepassword == ""){
        this.passwordsMatch = false;
       }
      this.passwordsMatch = this.newpassword === this.comfirepassword;
    },
  },
};
</script> -->