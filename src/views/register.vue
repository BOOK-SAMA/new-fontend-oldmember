<template >
  <section class="vh-200" style="
      background-image: url(https://v3i.rweb-images.com/www.scsualumni.net/images/background/main/crop-1702428316.jpg?1702428316);
      background-repeat: no-repeat;
    ">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xxl">
          <banner />
          <h1 class="text-white mb-4 mt-2" style="background-color: rgb(171, 171, 171)">
            สมัครสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร (ศวศ.)
          </h1>

          <div class="card" style="border-radius: 15px; background-color: rgb(171, 171, 171)">
            <div class="card-body">
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">Username</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg" v-model="username" />
                </div>
              </div>

              <hr class="mx-n3" />
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสผ่าน</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input :type="inputType" id="myInput" v-model="password" class="form-control form-control-lg" />
                  <button @click="togglePassword" class="mt-2">
                    Toggle Password
                  </button>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ยืนยันรหัสผ่าน</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input :type="inputType" id="myInput" v-model="confirmpassword" class="form-control form-control-lg" />
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md ps-5">
                  <h6 class="mb-0">คำนำหน้าชื่อ - ชื่อ - นามสกุล</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg"
                    placeholder="(เว้นวรรคระหว่างชื่อนามกับนามสกุล) ภาษาไทย" v-model="thainame" />
                </div>
              </div>
              <!-- คำนำหน้าชื่อ - ชื่อ - นามสกุล ไทย @-->
              <hr class="mx-n3" />
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md ps-5">
                  <h6 class="mb-0">คำนำหน้าชื่อ - ชื่อ - นามสกุล</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg"
                    placeholder="(เว้นวรรคระหว่างชื่อนามกับนามสกุล) ภาษาอังกฤษ" v-model="engname" />
                </div>
              </div>
              <!-- คำนำหน้าชื่อ - ชื่อ - นามสกุล อังกฤษ  @-->
              <hr class="mx-n3" />

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md ps-5">
                  <h6 class="mb-0">ชื่อ - นามสกุลเดิม (ถ้ามี)</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg" placeholder="(เว้นวรรคระหว่างชื่อนามกับนามสกุล)"
                    v-model="oldname" />
                </div>
              </div>
              <!-- ช่องชื่อนามสกุลเดิม @-->
              <hr class="mx-n3" />
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md ps-5">
                  <h6 class="mb-0">ชื่อเล่น</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg" placeholder="" v-model="nickname" />
                </div>
              </div>
              <!-- ช่องชื่อเล่น @-->
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">วันเกิด</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <VueDatePicker v-model="dateofbirth" :enable-time-picker="false" :format="formatdate(dateofbirth)" >
                  </VueDatePicker>
                </div>
              </div>
              <!-- ช่องวันเกิด ใช้ date แทน @-->
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
              <!-- ช่องสถานะของผู้สมัคร เช่น จบยังไม่จบ @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ระดับปริญญาตรี สาขาวิชาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="academicstatus" class="form-control" rows="1"></textarea>
                </div>
              </div>
              <!-- ช่องสาขาปีตรี @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสประจำตัวระดับปริญญาตรี</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="academicnumber" class="form-control" rows="1" placeholder=""></textarea>
                </div>
              </div>
              <!-- ช่องสาขาปีตรี รหัส @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ปริญญาโท สาขาวิชาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="masterdegree" class="form-control" rows="1" placeholder=""></textarea>
                </div>
              </div>
              <!-- ช่องสาขาปีโท @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสประจำตัวระดับปริญญาโท</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="masterdegreenumber" class="form-control" rows="1" placeholder=""></textarea>
                </div>
              </div>
              <!-- ช่องสาขาปีโท รหัส @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ระดับปริญญาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="doctordegree" class="form-control" rows="ๅ" placeholder=""></textarea>
                </div>
              </div>
              <!-- ช่องสาขาปีเอก @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสประจำตัวระดับปริญญาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="doctordegreenumber" class="form-control" rows="1" placeholder=""></textarea>
                </div>
              </div>
              <!-- ช่องสาขาปีเอก รหัส @-->
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
              <!-- ช่องที่อยู่ @-->
              <hr class="mx-n3" />
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">หมายเลขโทรศัพท์</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg" placeholder="" v-model="phonenumber" />
                </div>
              </div>
              <!-- ช่องหมายเลขโทรศัพท์ @-->
              <hr class="mx-n3" />
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">โทรสาร</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="text" class="form-control form-control-lg" placeholder="" v-model="phonemail" />
                </div>
              </div>
              <!-- ช่องโทรสาร @-->
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
              <!-- ช่องIDline @ -->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">Email address</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="email" class="form-control form-control-lg" placeholder="example@example.com"
                    v-model="email" />
                </div>
              </div>
              <!-- ช่องEmail @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">อาชีพ</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input type="email" class="form-control form-control-lg" placeholder="" v-model="job" />
                </div>
              </div>
              <!-- ช่องอาชีพ @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ตำแหน่ง</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="jobposition" class="form-control" rows="1" placeholder=""></textarea>
                </div>
              </div>
              <!-- ช่องตำแหน่ง @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ชื่อและที่อยู่ของสถานที่ทำงาน</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea v-model="jobadress" class="form-control" rows="2" placeholder=""></textarea>
                </div>

                <!-- ช่องชื่อและที่อยู่ของสถานที่ทำงาน-->
                <hr class="mx-n3" />
              </div>
              <!-- ช่องที่อยู่สถานที่ทำงาน @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-6 ps-5">
                  <h6 class="mb-0">
                    ขอสมัครเป็นสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์
                    มหาวิทยาลัยศิลปากร
                    โดยยินดีปฏิบัติตามระเบียบข้อบังคับของสมาคมฯ ทุกประการ
                  </h6>
                </div>
                <div class="col-md-5 pe-5">
                  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" v-model="levelmember">
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
              <!-- ช่องที่ระดับสมาชิก @-->
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-6 ps-5">
                  <h6 class="mb-0">
                    กรณีสมัครสมาชิกสามัญและ วิสามัญกรุณาเลือกของชำร่วย (1 อย่าง)
                  </h6>
                </div>
                <div class="col-md-5 pe-5">
                  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" v-model="levelmemberthing">
                    <option selected disabled>เลือก 1 อย่าง</option>
                    <option value="ไม่รับของชำร่วย">
                      ไม่รับของชำร่วย(เป็นยุวสมาชิก)
                    </option>
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
              <!-- ช่องเลือกของ @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-5 ps-5">
                  <h6 class="mb-0">
                    การส่งใบสมัครเป็นสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์
                    มหาวิทยาลัยศิลปากร ให้ทำการเลือก "ยืนยัน"
                    ว่าข้อมูลดังกล่าวถูกต้อง/ครบถ้วน
                    และพิมพ์ใบสมัครเพื่อส่งมาทาง scsualumni@hotmail.com
                  </h6>
                </div>
                <div class="col-md-5 pe-5">
                  <div class="form-check form-check-inline">
                    <input v-model="statusinfo" class="form-check-input" type="checkbox" id="inlineCheckbox1"
                      value="ยืนยัน" />
                    <label class="form-check-label" for="inlineCheckbox1">ยืนยัน</label>
                  </div>
                </div>

                <hr class="mx-n3" />
              </div>
              <!-- ช่องยืนยัน ๑-->
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รูปถ่าย</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input ref="fileInput" class="form-control form-control-lg" id="formFileLg" type="file"
                    @change="handleprofile" />
                  <div class="small text-muted mt-2">
                    (นามสกุลไฟล์ .jpg ไม่เกิน 10 MB)
                  </div>
                </div>
              </div>
              <!-- ช่องรูปถ่าย-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-5 ps-5">
                  <h6 class="mb-0">
                    สมาคมศิษย์เก่า คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร
                    มีนโยบายคุ้มครองข้อมูลส่วนบุคคลของสมาคม
                    ซึ่งมีข้อกำหนดการปฏิบัติ ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
                    ซึ่งมีรายละเอียดในเวปไซด์ของสมาคมตามลิ้งค์ดังนี้
                    <a href="http://www.scsualumni.net/attachments/view/?attach_id=268068"
                      class="badge badge-primary">นโยบายคุ้มครองข้อมูลส่วนบุคคล สำหรับสมาชิกสมาคม</a>
                  </h6>
                </div>
                <div class="col-md-5 pe-5">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="ยืนยัน"
                      v-model="pnstatus" />
                    <label class="form-check-label" for="inlineCheckbox1">ยืนยัน</label>
                  </div>
                </div>
              </div>
              <!-- ช่องยืนยันกดหมาย-->
              <hr class="mx-n3" />
            </div>
            <div class="px-5 py-4">
              <h6 class="mb-0">
                ส่งใบสมัคร สอบถามข้อมูลเพิ่มเติมติดต่อ scsualumni@hotmail.com
              </h6>
              <hr class="mx-n2" />
             <div class="col-md-9 pe-5">
                <button type="submit" class="btn btn-primary btn-lg" @click="submit()" 
                :disabled=" !this.username || !this.password
                  || !this.confirmpassword || !this.thainame || !this.engname
                  || !this.email || !this.phonenumber || !this.address
                  || !this.statusinfo || !this.pnstatus 
                  || !this.file       
                  || !this.levelmember || !this.levelmemberthing
                  ">
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

<!-- <script setup>


// In case of a range picker, you'll receive [Date, Date]
</script> -->

<script>
import router from "@/router";
import { ref } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      confirmpassword: "",
      responseStatus: null,
      thainame: "",
      engname: "",
      oldname: "",
      nickname: "",
      dateofbirth: ref(new Date()),

      status: "",
      academicstatus: "",
      academicnumber: "",
      masterdegree: "",
      masterdegreenumber: "",
      doctordegree: "",
      doctordegreenumber: "",

      address: "",
      phonenumber: "",
      phonemail: "",
      idline: "",
      email: "",
      job: "",
      jobposition: "",
      jobaddress: "",
      levelmember: "",
      levelmemberthing: "",

      statusinfo: false,
      pnstatus: false,
      file: null,
      inputType: "password",
      date: "",
    };
  },
  onMounted() {

  },
  methods: {
    handleprofile(event) {
      this.file = event.target.files[0];
    },
    handlepaycheck(event) {
      this.payimage = event.target.files[0];
    },
    togglePassword() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
    formatdate(dateofbirth) {
      const day = dateofbirth.getDate();
      const month = dateofbirth.getMonth() + 1;
      const year = dateofbirth.getFullYear();
      this.date = `${day}/${month}/${year}`;
      return `คุณเกิดวันที่ ${day}/${month}/${year}`;
    },
    submit() {
      const URL = `${import.meta.env.VITE_API2}register2`;
      let data = new FormData();


      data.append("username", this.username);
      data.append("password", this.password);
      data.append("confirmpassword", this.confirmpassword);

      data.append("thainame", this.thainame);
      data.append("engname", this.engname);
      data.append("oldname", this.oldname);
      data.append("nickname", this.nickname);
      data.append("dateofbirth", this.date);

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
      data.append("email", this.email);
      data.append("job", this.job);
      data.append("jobposition", this.jobposition);
      data.append("jobaddress", this.jobadress);
      data.append("levelmember", this.levelmember);
      data.append("levelmemberthing", this.levelmemberthing);
      data.append("statusinfo", this.statusinfo);
      data.append("file", this.file);
      data.append("PNstatus", this.pnstatus);
      let config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      axios.post(URL, data, config).then((response) => {
        // console.log("this is res => ", this.date);
        this.responseStatus = response.status
        console.log("this is res => ", response);
        window.location.href = "https://mytestsilpakorn.azurewebsites.net/";
      }).catch((error) => {
        console.log("this is error => ", error);
        router.push({ path: "/:notfound" });
      });
    },
  },
};
</script>







