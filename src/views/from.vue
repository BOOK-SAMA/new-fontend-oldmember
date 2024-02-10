
<template >
  <section class="vh" style="background-color: #2779e2">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-9">
          <h1 class="text-white mb-4">
            สมัครเข้าร่วมสมาคมศิษย์เก่า มหาลัยศิลปากร
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
                  <input
                    v-model="Password"
                    placeholder="**********"
                    class="form-control form-control-lg"
                  />
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
                    <select v-model="status">
                      <option disabled value="">Please select one</option>
                      <option value="เคยเป็นนักศึกษา">เคยเป็นนักศึกษา</option>
                      <option value="ผู้สำเร็จการศึกษา">
                        ผู้สำเร็จการศึกษา
                      </option>
                      <option value="กำลังศึกษาอยู่">กำลังศึกษาอยู่</option>
                    </select>
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
                    <select class="select" v-model="levelmember">
                      <option disabled value="">Please select one</option>
                      <option
                        value="สมาชิกสามัญ (ผู้จบการศึกษา SCSU
                          ชำระค่าบำรุงสมาคมตลอดชีพ 500 บาท)"
                      >
                        สมาชิกสามัญ (ผู้จบการศึกษา SCSU ชำระค่าบำรุงสมาคมตลอดชีพ 500 บาท)
                      </option>
                      <option
                        value="สมาชิกวิสามัญ (ผู้สนใจทั่วไปชำระค่าบำรุงสมาคมตลอดชีพ
                          500 บาท)"
                      >
                        สมาชิกวิสามัญ (ผู้สนใจทั่วไปชำระค่าบำรุงสมาคมตลอดชีพ 500  บาท)
                      </option>
                      <option
                        value="  ยุวสมาชิก (นักศึกษา SCSU
                          ปัจจุบันไม่ต้องชำระค่าบำรุงสมาคม)"
                      >
                        ยุวสมาชิก (นักศึกษา SCSU ปัจจุบันไม่ต้องชำระค่าบำรุงสมาคม)
                      </option>
                    </select>
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
                      <select class="select" v-model="levelmemberthing">
                        <option disabled value="">Please select one</option>
                        <option value="กระเป๋าผ้าและแมส SCSU">
                          กระเป๋าผ้าและแมส SCSU
                        </option>
                        <option value="เหรียญ อ.ศิลป ทอง">
                          เหรียญ อ.ศิลป ทอง
                        </option>
                        <option value="เหรียญ อ.ศิลป เงิน">
                          เหรียญ อ.ศิลป เงิน
                        </option>
                        <option value="เหรียญ อ.ศิลป ทองแดง">
                          เหรียญ อ.ศิลป ทองแดง
                        </option>
                      </select>
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
                      <select class="select" v-model="statusinfo">
                        <option disabled value="">Please select one</option>
                        <option value="ยืนยัน">ยืนยัน</option>
                      </select>
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
                        <select class="select" v-model="pnstatus">
                          <option disabled value="">Please select one</option>
                          <option value="ยืนยัน">ยืนยัน</option>
                        </select>
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

                  <h6 class="mb-0">
                    ส่งใบสมัคร สอบถามข้อมูลเพิ่มเติมติดต่อ
                    scsualumni@hotmail.com
                  </h6>
                  <div class="px-5 py-4">
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg"
                      @click="submitt"
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
  name: "adminregister",
  setup() {
    const Username = ref("");
    const Password = ref("");
    const THAIname = ref("");
    const ENGname = ref("");
    const nickname = ref("");
    const Date_of_birth = ref("");
    const status = ref("");
    const academicstatus = ref("");
    const academicnumber = ref("");
    const masterdegree = ref("");
    const masterdegreenumber = ref("");
    const doctordegree = ref("");
    const doctordegreenumber = ref("");
    const address = ref("");
    const phonenumber = ref("");
    const idline = ref("");
    const email = ref("");
    const job = ref("");
    const jobposition = ref("");
    const levelmember = ref("");
    const levelmemberthing = ref("");
    const statusinfo = ref("");
    const role = ref("");
    const paystatus = ref("");
    const pnstatus = ref("");
    const router = useRouter();

    const submitt = async () => {
      await axios.post(`${import.meta.env.VITE_API}admincreate`, {
        username: Username.value,
        password: Password.value,

        thainame: THAIname.value,
        engname: ENGname.value,
        nickname: nickname.value,
        dateofbirth: Date_of_birth.value,

        status: status.value,
        academicstatus: academicstatus.value,
        academicnumber: academicnumber.value,
        masterdegree: masterdegree.value,
        masterdegreenumber: masterdegreenumber.value,
        doctordegree: doctordegree.value,
        doctordegreenumber: doctordegreenumber.value,
        address: address.value,
        phonenumber: phonenumber.value,
        idline: idline.value,
        email: email.value,
        job: job.value,
        jobposition: jobposition.value,

        levelmember: levelmember.value,
        levelmemberthing: levelmemberthing.value,
        statusinfo: statusinfo.value,
        pnstatus: pnstatus.value,
        role: role.value,
        paystatus: paystatus.value,
      });
      console.log(submitt);
      // router.push('/admintoo')
    };

    return {
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
    };
  },
};
</script>






































