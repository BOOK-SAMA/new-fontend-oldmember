<template>
  <section
    class="vh-200"
    style="
      background-image: url(https://v3i.rweb-images.com/www.scsualumni.net/images/background/main/crop-1702428316.jpg?1702428316);
      background-repeat: no-repeat;
    "
  >
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xxl">
          <banner />
          <h1
            class="text-white mb-4 mt-2"
            style="background-color: rgb(171, 171, 171)"
          >
            แก้ไขข้อมูลสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร
            (ศวศ.)
          </h1>

          <div
            class="card"
            style="border-radius: 15px; background-color: rgb(171, 171, 171)"
          >
            <div class="card-body">
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">Username</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="username"
                  />
                </div>
              </div>

              <hr class="mx-n3" />
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสผ่าน</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <div class="col-md-9 pe-5">
                    <p>{{ Password }}</p>
                  </div>
                </div>
              </div>

              <hr class="mx-n3" />

              <hr class="mx-n3" />

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md ps-5">
                  <h6 class="mb-0">คำนำหน้าชื่อ - ชื่อ - นามสกุล</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="(เว้นวรรคระหว่างชื่อนามกับนามสกุล) ภาษาไทย"
                    v-model="thainame"
                  />
                </div>
              </div>
              <!-- คำนำหน้าชื่อ - ชื่อ - นามสกุล ไทย @-->
              <hr class="mx-n3" />
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md ps-5">
                  <h6 class="mb-0">คำนำหน้าชื่อ - ชื่อ - นามสกุล</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="(เว้นวรรคระหว่างชื่อนามกับนามสกุล) ภาษาอังกฤษ"
                    v-model="engname"
                  />
                </div>
              </div>
              <!-- คำนำหน้าชื่อ - ชื่อ - นามสกุล อังกฤษ  @-->
              <hr class="mx-n3" />

              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md ps-5">
                  <h6 class="mb-0">ชื่อ - นามสกุลเดิม (ถ้ามี)</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="(เว้นวรรคระหว่างชื่อนามกับนามสกุล)"
                    v-model="oldname"
                  />
                </div>
              </div>
              <!-- ช่องชื่อนามสกุลเดิม @-->
              <hr class="mx-n3" />
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md ps-5">
                  <h6 class="mb-0">ชื่อเล่น</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="nickname"
                  />
                </div>
              </div>
              <!-- ช่องชื่อเล่น @-->
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">วันเกิด</h6>
                </div>
                <!-- <div class="col-md-9 pe-5">
                                    <VueDatePicker v-model="dateofbirth" :enable-time-picker="false"
                                        :format="formatdate(dateofbirth)"></VueDatePicker>
                                </div> -->
              </div>
              <!-- ช่องวันเกิด ใช้ date แทน @-->
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">สถานะของผู้สมัคร</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <select
                    v-model="status"
                    class="custom-select my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                  >
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
                  <textarea
                    v-model="academicstatus"
                    class="form-control"
                    rows="1"
                  ></textarea>
                </div>
              </div>
              <!-- ช่องสาขาปีตรี @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสประจำตัวระดับปริญญาตรี</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="academicnumber"
                    class="form-control"
                    rows="1"
                    placeholder=""
                  ></textarea>
                </div>
              </div>
              <!-- ช่องสาขาปีตรี รหัส @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ปริญญาโท สาขาวิชาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="masterdegree"
                    class="form-control"
                    rows="1"
                    placeholder=""
                  ></textarea>
                </div>
              </div>
              <!-- ช่องสาขาปีโท @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสประจำตัวระดับปริญญาโท</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="masterdegreenumber"
                    class="form-control"
                    rows="1"
                    placeholder=""
                  ></textarea>
                </div>
              </div>
              <!-- ช่องสาขาปีโท รหัส @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ระดับปริญญาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="doctordegree"
                    class="form-control"
                    rows="ๅ"
                    placeholder=""
                  ></textarea>
                </div>
              </div>
              <!-- ช่องสาขาปีเอก @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสประจำตัวระดับปริญญาเอก</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="doctordegreenumber"
                    class="form-control"
                    rows="1"
                    placeholder=""
                  ></textarea>
                </div>
              </div>
              <!-- ช่องสาขาปีเอก รหัส @-->
              <hr class="mx-n3" />
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ข้อมูลที่อยู่ปัจจุบัน</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=" (เพื่อการจัดส่งของที่ระลึก)"
                    v-model="address"
                  />
                </div>
              </div>
              <!-- ช่องที่อยู่ @-->
              <hr class="mx-n3" />
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">หมายเลขโทรศัพท์</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="phonenumber"
                  />
                </div>
              </div>
              <!-- ช่องหมายเลขโทรศัพท์ @-->
              <hr class="mx-n3" />
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">โทรสาร</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="phonemail"
                  />
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
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="Idline"
                  />
                </div>
              </div>
              <!-- ช่องIDline @ -->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">Email address</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="example@example.com"
                    v-model="email"
                  />
                </div>
              </div>
              <!-- ช่องEmail @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">อาชีพ</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder=""
                    v-model="job"
                  />
                </div>
              </div>
              <!-- ช่องอาชีพ @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ตำแหน่ง</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="jobposition"
                    class="form-control"
                    rows="1"
                    placeholder=""
                  ></textarea>
                </div>
              </div>
              <!-- ช่องตำแหน่ง @-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">ชื่อและที่อยู่ของสถานที่ทำงาน</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    v-model="jobadress"
                    class="form-control"
                    rows="2"
                    placeholder=""
                  ></textarea>
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
                  <select
                    class="custom-select my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    v-model="levelmember"
                  >
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
                  <select
                    class="custom-select my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    v-model="levelmemberthing"
                  >
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
                    <input
                      v-model="statusinfo"
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="ยืนยัน"
                    />
                    <label class="form-check-label" for="inlineCheckbox1"
                      >ยืนยัน</label
                    >
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
                  <input
                    ref="fileInput"
                    class="form-control form-control-lg"
                    id="formFileLg"
                    type="file"
                    @change="handleprofile"
                  />
                  <div class="small text-muted mt-2">
                    (นามสกุลไฟล์ .jpg ไม่เกิน 10 MB)
                  </div>
                </div>
              </div>
              <!-- ช่องรูปถ่าย-->
              <hr class="mx-n3" />
              <div class="col align-items-center py-3">
                <div class="col-md-5 ps-5">
                  <h6 class="mb-0">
                    ช่องทางการชำระเงิน ธนาคารกรุงไทย สาขาสำนักนานาเหนือ เลขที่
                    000-0-35556-9
                  </h6>
                </div>
                <div class="col-md-5 pe-5">
                  <div class="form-check form-check-inline">
                    <img
                      src="https://lh4.googleusercontent.com/RMQziLQRistxbkv9ZX30hyx1zWSyZ9RgZPISwbahv0IqBa9JJ9T_f6AFLXuj7cM_m8uARSm5GPfGCkZy-EqTlXjXccfTjl60r4mD5h5X1OdYf5bwxO7Jbf-wb3sOaHmO3g=w584"
                      alt="image"
                      class="img-thumbnail"
                    />
                  </div>
                </div>
              </div>
              <!-- รูปจ่ายเงิน-->
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
                      class="badge badge-primary"
                      >นโยบายคุ้มครองข้อมูลส่วนบุคคล สำหรับสมาชิกสมาคม</a
                    >
                  </h6>
                </div>
                <div class="col-md-5 pe-5">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="ยืนยัน"
                      v-model="pnstatus"
                    />
                    <label class="form-check-label" for="inlineCheckbox1"
                      >ยืนยัน</label
                    >
                  </div>
                </div>
              </div>
              <!-- ช่องยืนยันกดหมาย-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">สลิปการโอนเงิน</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    class="form-control form-control-lg"
                    id="formFileLg"
                    type="file"
                    @change="handlepaycheck"
                  />
                  <div class="small text-muted mt-2">
                    (นามสกุลไฟล์ .jpg ไม่เกิน 10 MB)
                  </div>
                </div>
              </div>
              <!-- ช่องสลิปจ่ายเงิน-->
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-6 ps-5">
                  <h6 class="mb-0">ระดับของ User หรือ Role</h6>
                </div>
                <div class="col-md-5 pe-5">
                  <select
                    class="custom-select my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    v-model="role"
                  >
                    <option selected disabled>เลือก 1 อย่าง</option>
                    <option value="user ">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-6 ps-5">
                  <h6 class="mb-0">ให้ user แก้ไขข้อมูลได้หรือไม่</h6>
                </div>
                <div class="col-md-5 pe-5">
                  <select
                    class="custom-select my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    v-model="accessstatus"
                  >
                    <option selected disabled>เลือก 1 อย่าง</option>
                    <option value="enable ">ได้</option>
                    <option value="disenable">ไม่ได้</option>
                  </select>
                </div>
              </div>
              <hr class="mx-n3" />
            </div>
            <div class="px-5 py-4">
              <h6 class="mb-0">
                ส่งใบสมัคร สอบถามข้อมูลเพิ่มเติมติดต่อ scsualumni@hotmail.com
              </h6>
              <hr class="mx-n2" />
              <button
                type="submit"
                class="btn btn-primary btn-lg"
                @click="submit()"
                :disabled="
                  !username ||
                  !password ||
                  !email ||
                  !confirmpassword ||
                  !thainame ||
                  !status ||
                  !academicstatus ||
                  !academicnumber ||
                  !address ||
                  !phonenumber ||
                  !idline ||
                  !levelmember ||
                  !statusinfo ||
                  !pnstatus ||
                  !file ||
                  !payimage ||
                  !role ||
                  !accessstatus
                "
              >
                Submit
              </button>
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
      oldname: "",
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
      phonemail: "",
      jobadress: "",
    };
  },

  mounted() {
    console.log(this.$route.params.id);
    this.getuserdata(this.$route.params.id);
  },
  methods: {
    getuserdata(id) {
      axios
        .get(`${import.meta.env.VITE_API}profile/${id}`, {
          headers: {
            // ตัวอย่าง Header (แก้ตามความเหมาะสม)
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
          this.oldname = res.data.thing.Oldname;
          this.nickname = res.data.thing.Nickname;
          this.Date_of_birth = res.data.thing.DateOfBirth;

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
          this.idline = res.data.thing.Idline;
          this.email = res.data.thing.Email;
          this.job = res.data.thing.Job;
          this.jobposition = res.data.thing.Jobposition;
          this.jobadress = res.data.thing.jobadress;
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
          username: this.Username,
          password: this.Password,

          thainame: this.THAIname,
          engname: this.ENGname,
          nickname: this.nickname,
          dateofbirth: this.Date_of_birth,

          status: this.status,
          academicstatus: this.academicstatus,
          academicnumber: this.academicnumber,
          masterdegree: this.masterdegree,
          masterdegreenumber: this.masterdegreenumber,
          doctordegree: this.doctordegree,
          doctordegreenumber: this.doctordegreenumber,
          address: this.address,
          phonenumber: this.phonenumber,
          idline: this.idline,
          email: this.email,
          job: this.job,
          jobposition: this.jobposition,

          levelmember: this.levelmember,
          levelmemberthing: this.levelmemberthing,
          statusinfo: this.statusinfo,
          pnstatus: this.pnstatus,
          role: this.role,
          paystatus: this.paystatus,
        })
        .then((res) => {
          console.log(res);
        })
        .catch();
    },
  },
};
</script>
  
  
  
  
  
  
  
  
  <!--
     axios({
  //         method: "post",
  //         url: "http://localhost:4444/register",
  //         data: {
  //           username: this.Username,
  //           password: this.Password,
  //           confirmpassword: this.CPassword,
  //           file: this.$refs.fileInput.files[0]
  //           // thainame: this.THAIname,
  //           // engname: this.ENGname,
  //           // oldname: this.oldname,
  //           // nickname: this.nickname,
  //           // dateofbirth: this.date,
  
  //           // status: this.status,
  //           // academicstatus: this.academicstatus,
  //           // academicnumber: this.academicnumber,
  //           // masterdegree: this.masterdegree,
  //           // masterdegreenumber: this.masterdegreenumber,
  //           // doctordegree: this.doctordegree,
  //           // doctordegreenumber: this.doctordegreenumber,
  
  //           // address: this.address,
  //           // phonenumber: this.phonenumber,
  //           // phonemail: this.phonemail,
  //           // idline: this.idline,
  //           // email: this.email,
  //           // job: this.job,
  //           // jobposition: this.jobposition,
  //           // jobaddress: this.jobadress,
  
  //           // levelmember: this.levelmember,
  //           // levelmemberthing: this.levelmemberthing,
  //           // statusinfo: this.statusinfo,
  
  //           // pnstatus: this.pnstatus,
  //         },
  //       })
  //         .then((res) => {
  //           console.log(this.submit);
  //           console.log(res);
  //         })
  //         .catch();
  //     },
  //  <div class="row align-items-center py-3">
  //                 <div class="col-md-3 ps-5">
  //                   <h6 class="mb-0">สลิปการโอนเงิน</h6>
  //                 </div>
  //                 <div class="col-md-9 pe-5">
  //                   <input
  //                     class="form-control form-control-lg"
  //                     id="formFileLg"
  //                     type="file"
  //                   />
  //                   <div class="small text-muted mt-2">
  //                     (นามสกุลไฟล์ .jpg ไม่เกิน 10 MB)
  //                   </div>
  //                 </div>
  //               </div>
  
  
  
  // <div class="row align-items-center py-3">
  //                 <div class="col-md-3 ps-5">
  //                   <h6 class="mb-0">รูปถ่าย</h6>
  //                 </div>
  //                 <div class="col-md-9 pe-5">
  //                   <input
  //                     @change="handleFileChange"
  //                     class="form-control form-control-lg"
  //                     id="formFileLg"
  //                     type="file"
  //                   />
  //                   <div class="small text-muted mt-2">
  //                     (นามสกุลไฟล์ .jpg ไม่เกิน 10 MB)
  //                   </div>
  //                   <p>
  //                     ไฟล์ที่เลือก:
  //                     {{
  //                       selectedFile ? selectedFile.name : "ยังไม่ได้เลือกไฟล์"
  //                     }}
  //                   </p>
  //                 </div>
  //               </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  // <script>
  // export default {
  //   data() {
  //     return {
  //       selectedFile: null,
  //     };
  //   },
  //   methods: {
  //     handleFileChange(event) {
  //       this.selectedFile = event.target.files[0];
  //     },
  //   },
  // };
  //
  </script>
  
  // ในตัวอย่างนี้:
  
  // เพิ่ม @change event handler ใน input element โดยให้มีการเรียกฟังก์ชัน handleFileChange เมื่อมีการเปลี่ยนแปลง (ไฟล์ถูกเลือก).
  
  // สร้างตัวแปร selectedFile ใน data ของ Vue instance เพื่อเก็บข้อมูลไฟล์ที่ถูกเลือก.
  
  // สร้าง method ที่ชื่อ handleFileChange ซึ่งจะถูกเรียกเมื่อไฟล์ถูกเลือก และจะเก็บข้อมูลไฟล์ที่ถูกเลือกในตัวแปร selectedFile.
  
  // แสดงผลข้อมูลไฟล์ที่ถูกเลือกด้วย {{ selectedFile ? selectedFile.name : 'ยังไม่ได้เลือกไฟล์' }}.
  
  // คำทำนาย: หากโค้ดด้านบนยังไม่ทำงานได้หรือมีปัญหาเฉพาะกับเว็บบราวเซอร์บางประการ, คุณอาจต้องปรับปรุงโค้ดบางส่วนเพื่อให้ทำงานได้ถูกต้อง.
  -->
  