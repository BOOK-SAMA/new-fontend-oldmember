
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
              <img v-if="profileimage" :src="profileimage" alt="Preview" class="rounded-circle p-1" width="110" />
              <!-- Display a default image if previewFile is not available -->
              <p v-else>
                <img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png" alt="Admin"
                  class="rounded-circle p-1" width="110" />
              </p>

              <hr class="mx-n3" />

              <img v-if="payimage" :src="payimage" alt="Preview" class="rounded-circle p-1" width="110" />
              <!-- Display a default image if previewFile is not available -->
              <p v-else>
                <img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png" alt="Admin"
                  class="rounded-circle p-1" width="110" />
              </p>



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
      phonenumber: "",
      idline: "",
      email: "",
      job: "",
      jobposition: "",
      levelmember: "",
      levelmemberthing: "",
      statusinfo: "",
      pnstatus: "",
      role: "",
      paystatus: "",
      submitt: "",
      days: Array.from({ length: 31 }, (_, i) => i + 1),
      months: Array.from({ length: 12 }, (_, i) => i + 1),
      years: Array.from(
        { length: 100 },
        (_, i) => new Date().getFullYear() - i
      ),
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
    await this.downloadImageAndDisplay(localStorage.getItem("uuidprofile"))
    await this.downloadpayImageAndDisplay(localStorage.getItem("uuidpayimage"))
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
          localStorage.setItem("uuidprofile", res.data.thing.Image)
          localStorage.setItem("uuidpayimage", res.data.thing.Payimage)
        })
        .catch();
    },
    updateSubmit(id) {
      axios
        .post(`${import.meta.env.VITE_API}update/${id}`, {
          username: this.Username,
          password: this.Password,

          thainame: this.THAIname,
        })
        .then((res) => {
          console.log(res);
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
        this.profileimage = imageSrc;
        console.log('Image downloaded and displayed.');
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
          `${import.meta.env.VITE_API2}admin/preview/${uuid}`,
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
        this.payimage = imageSrc;
        console.log('Image downloaded and displayed.');
      } catch (error) {
        console.error("Error downloading image:", error);
        localStorage.removeItem("userid");
        localStorage.removeItem("tokenstring");
        localStorage.removeItem("uuid");
        router.push({ path: "/login" });
      }
    }
  },
};
</script>