
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
                  <input
                    v-model="Username"
                    placeholder="Username ที่ใช้สำหรับ login"
                    class="form-control form-control-lg"
                  />
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
                  <input
                    v-model="THAIname"
                    class="form-control form-control-lg"
                    placeholder=""
                  />
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ชื่อภาษาอังกฤษ</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    v-model="ENGname"
                    class="form-control form-control-lg"
                    placeholder=""
                  />
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ชื่อเล่น</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="nickname"
                    class="form-control"
                    rows="3"
                    placeholder=""
                  ></textarea>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">วันเดือนปีเกิด</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="Date_of_birth"
                    class="form-control"
                    rows="3"
                    placeholder="ปี-เดือน-วัน  เช่น 2001-08-30"
                  ></textarea>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">สถานะของผู้สมัคร</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <div class="mb-4 pb-2">
                    <textarea
                      v-model="status"
                      class="form-control"
                      rows="3"
                      placeholder=""
                    ></textarea>
                  </div>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ระดับปริญญาตรี สาขาวิชาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="academicstatus"
                    class="form-control"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสประจำตัวระดับปริญญาตรี</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="academicnumber"
                    class="form-control"
                    rows="3"
                    placeholder=""
                  ></textarea>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ปริญญาโท สาขาวิชาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="masterdegree"
                    class="form-control"
                    rows="3"
                    placeholder=""
                  ></textarea>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสประจำตัวระดับปริญญาโท</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="masterdegreenumber"
                    class="form-control"
                    rows="3"
                    placeholder=""
                  ></textarea>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ระดับปริญญาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="doctordegree"
                    class="form-control"
                    rows="3"
                    placeholder=""
                  ></textarea>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสประจำตัวระดับปริญญาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="doctordegreenumber"
                    class="form-control"
                    rows="3"
                    placeholder=""
                  ></textarea>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ข้อมูลที่อยู่ปัจจุบัน</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="address"
                    class="form-control"
                    rows="3"
                    placeholder="(เพื่อการจัดส่งของที่ระลึก)"
                  ></textarea>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">หมายเลขโทรศัพท์</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="phonenumber"
                    class="form-control"
                    rows="3"
                    placeholder=""
                  ></textarea>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ช่องทางการติดต่อโซเชียลแอพพลิเคชั่นอื่นๆ</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="idline"
                    class="form-control"
                    rows="3"
                    placeholder="เช่น ID_line เป็นต้น"
                  ></textarea>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">อีเมล</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="email"
                    class="form-control"
                    rows="3"
                    placeholder=""
                  ></textarea>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">อาชีพ</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="job"
                    class="form-control"
                    rows="3"
                    placeholder=""
                  ></textarea>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ตำแหน่ง</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="jobposition"
                    class="form-control"
                    rows="3"
                    placeholder=""
                  ></textarea>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">
                    ขอสมัครเป็นสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์
                    มหาวิทยาลัยศิลปากร
                    โดยยินดีปฏิบัติตามระเบียบข้อบังคับของสมาคมฯ ทุกประการ
                  </h6>
                </div>
                <div class="col-md-9 pe-5">
                  <div class="mb-4 pb-2">
                    <textarea
                      v-model="levelmember"
                      class="form-control"
                      rows="3"
                      placeholder=""
                    ></textarea>
                  </div>
                </div>
                <hr class="mx-n3" />

                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">
                      กรณีสมัครสมาชิกสามัญและ วิสามัญกรุณาเลือกของชำร่วย
                    </h6>
                  </div>
                  <div class="col-md-9 pe-5">
                    <div class="mb-4 pb-2">
                      <textarea
                        v-model="levelmemberthing"
                        class="form-control"
                        rows="3"
                        placeholder=""
                      ></textarea>
                    </div>
                  </div>
                </div>
                <hr class="mx-n3" />

                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">
                      การส่งใบสมัครเป็นสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์
                      มหาวิทยาลัยศิลปากร ให้ทำการเลือก "ยืนยัน"
                      ว่าข้อมูลดังกล่าวถูกต้อง/ครบถ้วน
                    </h6>
                  </div>
                  <div class="col-md-9 pe-5">
                    <div class="mb-4 pb-2">
                      <textarea
                        v-model="statusinfo"
                        class="form-control"
                        rows="3"
                        placeholder=""
                      ></textarea>
                    </div>
                  </div>
                </div>
                <hr class="mx-n3" />

                <div class="row align-items-center py-3">
                  <div class="col-md-5 ps-5">
                    <h6 class="mb-0">
                      สมาคมศิษย์เก่า คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร
                      มีนโยบายคุ้มครองข้อมูลส่วนบุคคลของสมาคม
                      ซึ่งมีข้อกำหนดการปฏิบัติ ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
                      ซึ่งมีรายละเอียดในเวปไซด์ของสมาคมตามลิ้งค์ดังนี้
                      <a
                        href="http://www.scsualumni.net/attachments/view/?attach_id=268068"
                      >
                        นโยบายคุ้มครองข้อมูลส่วนบุคคล สำหรับสมาชิกสมาคม
                      </a>
                    </h6>
                  </div>
                  <div class="col-md-9 pe-5">
                    <div class="mb-4 pb-2">
                      <div class="d-flex justify-content-start mb-4 pb-3">
                        <textarea
                          v-model="pnstatus"
                          class="form-control"
                          rows="3"
                          placeholder=""
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <hr class="mx-n3" />

                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Role</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <textarea
                        v-model="role"
                        class="form-control"
                        rows="3"
                        placeholder=""
                      ></textarea>
                    </div>
                  </div>
                  <hr class="mx-n3" />

                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">Paystatus</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <textarea
                        v-model="paystatus"
                        class="form-control"
                        rows="3"
                        placeholder="สถานะการจ่ายเงิน มีแค่ none คือไม่จ่าย กับ already คือ จ่ายแล้ว"
                      ></textarea>
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="px-5 py-4">
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg"
                      @click="updateSubmit(this.$route.params.id)"
                    >
                      Submit
                    </button>
                  </div>
                </div>
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
      Username: "",
      Password: "",
      THAIname: "",
      ENGname: "",
      nickname: "",
      Date_of_birth: "",
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
    };
  },

  mounted() {
    console.log(this.$route.params.id);
    this.getuserdata(this.$route.params.id);
    
  },
  methods: {
    getuserdata(id) {
      axios
        .get(`${import.meta.env.VITE_API}profile/${id}`)
        .then((res) => {
          console.log(res);
          this.Username = res.data.thing.Username;
          this.Password = res.data.thing.Password;
          this.THAIname = res.data.thing.Thainame;
          this.ENGname = res.data.thing.ENGname;
          this.nickname = res.data.thing.Nickname;
          this.Date_of_birth = res.data.thing.DateOfBirth;
          this.status = res.data.thing.Status;
          this.academicstatus = res.data.thing.AcademicStatus;
          this.academicnumber = res.data.thing.AcademicNumber;
          this.masterdegree = res.data.thing.MasterDegree;
          this.masterdegreenumber = res.data.thing.MasterDegreeNumber;
          this.doctordegree = res.data.thing.DoctoralDegree;
          this.doctordegreenumber = res.data.thing.DoctoralDegreeNumber;
          this.address = res.data.thing.Address;
          this.phonenumber = res.data.thing.PhoneNumber;
          this.idline = res.data.thing.IDLine;
          this.email = res.data.thing.Email;
          this.job = res.data.thing.Job;
          this.jobposition = res.data.thing.Jobposition;
          this.levelmember = res.data.thing.Levelmember;
          this.levelmemberthing = res.data.thing.Levelmemberthing;
          this.statusinfo = res.data.thing.Statusinfo;
          this.pnstatus = res.data.thing.PNstatus;
          this.role = res.data.thing.Role;
          this.paystatus = res.data.thing.Paystatus;
        })
        .catch();
    },
    updateSubmit(id) {
      axios
        .post(`${import.meta.env.VITE_API}update/${id}`, {
          username:  this.Username ,
          password:  this.Password ,

          thainame: this.THAIname,
          engname: this.ENGname,
          nickname:  this.nickname,
          dateofbirth:  this.Date_of_birth,

          status: this.status,
          academicstatus:  this.academicstatus,
          academicnumber:  this.academicnumber,
          masterdegree: this.masterdegree,
          masterdegreenumber: this.masterdegreenumber,
          doctordegree: this.doctordegree,
          doctordegreenumber:  this.doctordegreenumber,
          address: this.address ,
          phonenumber:  this.phonenumber,
          idline:  this.idline ,
          email:  this.email,
          job:  this.job ,
          jobposition:  this.jobposition ,

          levelmember:  this.levelmember,
          levelmemberthing: this.levelmemberthing,
          statusinfo:this.statusinfo,
          pnstatus: this.pnstatus,
          role:  this.role ,
          paystatus: this.paystatus,
        })
        .then(res => {
          console.log(res)
        })
        .catch();
    },
  },
};
</script>








Username,
      Password,
      THAIname,
      ENGname,
      nickname,
      Date_of_birth,
      status,
      academicstatus,
      academicnumber,
      masterdegree,
      masterdegreenumber,
      doctordegree,
      doctordegreenumber,
      address,
      phonenumber,
      idline,
      email,
      job,
      jobposition,
      levelmember,
      levelmemberthing,
      statusinfo,
      pnstatus,
      role,
      paystatus,
      submitt,






































 