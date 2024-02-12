
<template >
  <section class="vh" style="background-color: #2779e2">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-9">
          <h1 class="text-white mb-4">
            แก้ไขข้อมูลสมาชิกสมาคมศิษย์เก่า มหาลัยศิลปากร
          </h1>

          <div class="card" style="border-radius: 15px">
            <div class="card-body">
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">Username หรือ ID</h6>
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
                  <p>{{ Password }}</p>
                </div>
              </div>
              <hr class="mx-n3" />

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
                  <input v-model="ENGname" class="form-control form-control-lg" placeholder="" />
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ชื่อเล่น</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="nickname" class="form-control" rows="3" placeholder=""></textarea>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h5 class="mb-0">วันเดือนปีเกิด</h5>
                </div>
                <div class="col-md-3 pe-2">
                  <h6 class="mb-0">วัน</h6>
                  <select v-model="day" class="form-control">
                    <option v-for="d in days" :key="d">{{ d }}</option>
                  </select>
                </div>
                <div class="col-md-3 pe-2">
                  <h6 class="mb-0">เดือน</h6>
                  <select v-model="month" class="form-control">
                    <option v-for="m in months" :key="m">{{ m }}</option>
                  </select>
                </div>
                <div class="col-md-3 pe-5">
                  <h6 class="mb-0">ปีที่เกิด</h6>
                  <select v-model="year" class="form-control">
                    <option v-for="y in years" :key="y">{{ y }}</option>
                  </select>
                </div>

                <!-- ช่องวันเกิด ใช้ date แทน @-->
                <hr class="mx-n3" />
              </div>
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">สถานะของผู้สมัคร</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <select v-model="status" class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected disabled>
                      เคยเป็นนักศึกษา/เป็นผู้สำเร็จการศึกษา/เป็นนักศึกษา...
                    </option>
                    <option value="เคยเป็นนักศีกษา">เคยเป็นนักศีกษา</option>
                    <option value="เป็นผู้สำเร็จการศึกษา">
                      เป็นผู้สำเร็จการศึกษา
                    </option>
                    <option value="เป็นนักศึกษาปัจจุบัน">
                      เป็นนักศึกษาปัจจุบัน
                    </option>
                  </select>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ระดับปริญญาตรี สาขาวิชาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="academicstatus" class="form-control" rows="1"></textarea>
                </div>
              </div>

              <hr class="mx-n3" />


              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสประจำตัวระดับปริญญาตรี</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="academicnumber" class="form-control" rows="1"></textarea>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ปริญญาโท สาขาวิชาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="masterdegree" class="form-control" rows="1"></textarea>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสประจำตัวระดับปริญญาโท</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="masterdegreenumber" class="form-control" rows="1"></textarea>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสประจำตัวระดับปริญญาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="doctordegree" class="form-control" rows="1"></textarea>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสประจำตัวระดับปริญญาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="doctordegreenumber" class="form-control" rows="1"></textarea>
                </div>
              </div>
              <hr class="mx-n3" />
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ข้อมูลที่อยู่ปัจจุบัน</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg" placeholder=" (เพื่อการจัดส่งของที่ระลึก)"
                    v-model="address" />
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">เบอร์โทรศัพท์</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg" placeholder=" (เพื่อการจัดส่งของที่ระลึก)"
                    v-model="phonenumber" />
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">เบอร์โทรสาร</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg" placeholder=" (เพื่อการจัดส่งของที่ระลึก)"
                    v-model="phonemail" />
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">
                    ID Line หรือ ช่องทางการติดต่อโซเชียลแอพพลิเคชั่นอื่นๆ
                  </h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg" placeholder="" v-model="Idline" />
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">
                    Email
                  </h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg" placeholder="" v-model="Email" />
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">
                    อาชีพ
                  </h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg" placeholder="" v-model="job" />
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">
                    ตำแหน่ง
                  </h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg" placeholder="" v-model="Jobposition" />
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">
                    ชื่อและที่อยู่ของสถานที่ทำงาน
                  </h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg" v-model="Jobaddress" />
                </div>
              </div>
              <hr class="mx-n3" />
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">
                    ระดับสมาชิก
                  </h6>
                </div>
                <div class="col-md-5 pe-5">
                  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" v-model="Levelmember">
                    <option selected disabled>เลือก 1 อย่าง</option>
                    <option value="สมาชิกสามัญ ">
                      สมาชิกสามัญ (ผู้จบการศึกษา SCSU ชำระค่าบำรุงสมาคมตลอดชีพ
                      500 บาท)
                    </option>
                    <option value="สมาชิกวิสามัญ">
                      สมาชิกวิสามัญ (ผู้สนใจทั่วไปชำระค่าบำรุงสมาคมตลอดชีพ 500
                      บาท)
                    </option>
                    <option value="ยุวสมาชิก">
                      ยุวสมาชิก (นักศึกษา SCSU ปัจจุบันไม่ต้องชำระค่าบำรุงสมาคม)
                    </option>
                  </select>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-6 ps-5">
                  <h6 class="mb-0">
                    กรณีสมัครสมาชิกสามัญและ วิสามัญกรุณาเลือกของชำร่วย (1 อย่าง)
                  </h6>
                </div>
                <div class="col-md-5 pe-5">
                  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" v-model="Levelmemberthing">
                    <option selected disabled>เลือก 1 อย่าง</option>
                    <option value="กระเป๋าผ้าและแมส SCSU ">
                      กระเป๋าผ้าและแมส SCSU
                    </option>
                    <option value="เหรียญ อ.ศิลป ทอง">เหรียญ อ.ศิลป ทอง</option>
                    <option value="เหรียญ อ.ศิลป เงิน">
                      เหรียญ อ.ศิลป เงิน
                    </option>
                    <option value="เหรียญ อ.ศิลป ทองแดง">
                      เหรียญ อ.ศิลป ทองแดง
                    </option>
                  </select>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รุปถ่ายของผู้ใช้</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <h6 class="mb-0">รูปที่แสดงอยู่นี้เป็นไฟล์รูปใน database </h6>
                  หากต้องการเปลี่ยนแปลงสามารถ upload ไฟล์ได้ด้านล่าง
                  <img v-if="profileimage" :src="profileimage" alt="Preview" class="rounded-circle p-1" width="200" />
                  <!-- Display a default image if previewFile is not available -->
                  <p v-else>
                    <img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png" alt="Admin"
                      class="rounded-circle p-1" width="200" />
                  </p>
                  <input ref="fileInput" class="form-control form-control-lg" id="formFileLg" type="file"
                    @change="handleprofile" />
                  <div class="small text-muted mt-2">
                    (นามสกุลไฟล์ .jpg ไม่เกิน 10 MB)
                  </div>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ใบเสร็จชำระเงินสมาชิกลำดับต่างๆ</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <img v-if="payimage" :src="payimage" alt="Preview" class="" width="400" />
                  <!-- Display a default image if previewFile is not available -->
                  <p v-else>
                    <img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png" alt="Admin"
                      class="rounded-circle p-1" width="400" />
                  </p>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">
                    สถานะการชำระเงิน
                  </h6>
                </div>
                <div class="col-md-5 pe-5">

                  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" v-model="paystatus">
                    <!-- <option selected disabled>เลือก 1 อย่าง</option> -->
                    <!-- Display Selected Option Text Conditionally -->
                    <option value="already">
                      ตรวจสอบการชำระเงินแล้ว
                    </option>
                    <option value="none">
                      ยังไม่ได้ตรวจสอบการชำระเงิน
                    </option>
                  </select>

                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">
                    สถานะการเข้าถึงของผู้ใช้
                  </h6>
                </div>
                <div class="col-md-5 pe-5">
                  <div>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" v-model="role">
                      <!-- <option selected disabled>เลือก 1 อย่าง</option> -->
                      <!-- Display Selected Option Text Conditionally -->
                      <option value="user">
                        ระดับ user
                      </option>
                      <option value="admin">
                        ระดับ admin
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">
                    ให้ user สามารถแก้ไขข้อมูลของตนเองได้หรือไม่
                  </h6>
                </div>
                <div class="col-md-5 pe-5">
                  <div>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" v-model="Accessstatus">
                      <!-- <option selected disabled>เลือก 1 อย่าง</option> -->
                      <!-- Display Selected Option Text Conditionally -->
                      <option value="enable">
                        อนุญาต
                      </option>
                      <option value="disenable">
                        ไม่อนุญาต
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <hr class="mx-n3" />














              <div class="px-5 py-4">
                <button type="submit" class="btn btn-primary btn-lg" @click="updateSubmit(this.$route.params.id)">
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
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "Updateuser",

  data() {
    return {
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
      submitt: "",
      Accessstatus: "",
      days: Array.from({ length: 31 }, (_, i) => i + 1),
      months: Array.from({ length: 12 }, (_, i) => i + 1),
      years: Array.from(
        { length: 100 },
        (_, i) => new Date().getFullYear() - i
      ),

      file: null,
      profileimage: null,
      payimage: null,
    };
  },
  computed: {
    // ใช้ computed property เพื่อ return ค่าที่ได้จาก formatdate ที่มีการรับ dateofbirth เป็นพารามิเตอร์
  },
  async mounted() {
    console.log(this.$route.params.id);
    await this.getuserdata(this.$route.params.id);
    await this.downloadImageAndDisplay(localStorage.getItem("uuidprofile"));
    await this.downloadpayImageAndDisplay(localStorage.getItem("uuidpayimage"));
  },
  methods: {
    async getuserdata(id) {
      axios
        .get(`${import.meta.env.VITE_API2}admin/showperson/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
            "Content-Type": "application/json",
          },
        })
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
          `${import.meta.env.VITE_API2}admin/preview/${uuid}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("tokenstring"),
              "Content-Type": "application/json",
            },
            responseType: "arraybuffer", // Set the responseType to 'arraybuffer' to handle binary data
          }
        );

        // Convert the binary data to a data URL
        const imageSrc = `data:${response.headers["content-type"]
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
        console.error("Error downloading image:", error);
        localStorage.removeItem("userid");
        localStorage.removeItem("tokenstring");
        localStorage.removeItem("uuid");
        router.push({ path: "/login" });
      }
    },
    async downloadpayImageAndDisplay(uuid) {
      try {
        // Fetch the image content from the server
        const response = await axios.get(
          `${import.meta.env.VITE_API2}admin/previewpayimage/${uuid}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("tokenstring"),
              "Content-Type": "application/json",
            },
            responseType: "arraybuffer", // Set the responseType to 'arraybuffer' to handle binary data
          }
        );

        // Convert the binary data to a data URL
        const imageSrc = `data:${response.headers["content-type"]
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
        this.payimage = imageSrc;
        console.log("Image downloaded and displayed.");
      } catch (error) {
        console.error("Error downloading image:", error);
        localStorage.removeItem("userid");
        localStorage.removeItem("tokenstring");
        localStorage.removeItem("uuid");
        router.push({ path: "/login" });
      }
    },
    updateSubmit(id) {
      const URL = `${import.meta.env.VITE_API2}admin/update/${id}`;
      let data = new FormData();




      data.append("thainame", this.THAIname);
      data.append("engname", this.ENGname);
      data.append("oldname", this.Oldname);
      data.append("nickname", this.nickname);
      data.append("dateofbirth", this.days + "/" + this.months + "/" + this.years);

      data.append("status", this.status);
      data.append("academicstatus", this.academicstatus);
      data.append("academicnumber", this.academicnumber);
      data.append("masterdegree", this.masterdegree);
      data.append("masterdegreenumber", this.masterdegreenumber);
      data.append("doctordegree", this.doctordegree);
      data.append("doctordegreenumber", this.doctordegreenumber);

      data.append("address", this.address);
      data.append("phonenumber", this.phonenumber);
      data.append("phonemail", this.phonemail);
      data.append("idline", this.Idline);
      data.append("email", this.Email);
      data.append("job", this.Job);
      data.append("jobposition", this.Jobposition);
      data.append("jobaddress", this.Jobadress);
      data.append("levelmember", this.Levelmember);
      data.append("levelmemberthing", this.Levelmemberthing);

      data.append("file", this.file);
      data.append("role", this.role);
      data.append("paystatus", this.paystatus);
      data.append("accessstatus", this.Accessstatus);
      
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("tokenstring"),
          "Content-Type": "application/json",
        },
      };

      axios.post(URL, data, config).then((response) => {
        console.log("this is res => ", this.days + "/" + this.months + "/" + this.years);
        console.log("this is res => ", response);
        id = localStorage.getItem("tokenstring")
        router.push({ path: `/admintoo/${id}` });
      });
    },
    handleprofile(event) {
      this.file = event.target.files[0];
    },

  },
};
</script>