<template>
  <nav class="navbar navbar-expand fixed-top" style="background-color: #F9CC02;">
    <a class="navbar-brand" href="#"><img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png"
        alt="Admin" class="rounded-circle p-1" width="80" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
       
        <li class="nav-item">
          <a class="nav-link" :href="`/profile/${id}`">หน้าโปรไฟล์</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ 'disabled': state }"
            :href="state ? '#' : `/updateuser/${id}/edit`">แก้ไขข้อมูลส่วนตัว</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="`/orderhistory/${id}`">ดูประวัติการสั่งซื้อ</a>
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
                  <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#userinfo-more"
                    type="button" role="tab" aria-controls="nav-profile"
                    aria-selected="false">รายละเอียดของผู้ใช้เพิ่มเติม</button>
                  <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#userinfo-study"
                    type="button" role="tab" aria-controls="nav-contact"
                    aria-selected="false">รายละเอียดของผู้ใช้เกี่ยวกับการศึกษา</button>
                  <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#userinfo-job"
                    type="button" role="tab" aria-controls="nav-contact"
                    aria-selected="false">รายละเอียดของผู้ใช้เกี่ยวกับอาชีพ</button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="userinfo" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div class="row align-items-center pt-4 pb-3">
                    <hr class="mx-n3" />
                    <div class="row align-items-center py-3">
                      <div class="col-md-3 ps-5">
                        <h6 class="mb-0">รุปถ่ายของผู้ใช้</h6>
                      </div>
                      <div class="col-md-9 pe-5">
                        <img v-if="profileimage" :src="profileimage" alt="Preview" class="p-1" width="200" />
                        <!-- Display a default image if previewFile is not available -->
                        <p v-else>
                          <img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png" alt="Admin"
                            class="p-1" width="200" />
                        </p>
                        <input ref="fileInput" class="form-control form-control-lg" id="formFileLg" type="file"
                          @change="handleprofile" />
                        <div class="small text-muted mt-2">
                          (นามสกุลไฟล์ .jpg ไม่เกิน 10 MB)
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="mx-n3" />

                  <div class="row align-items-center pt-4 pb-3">
                    <hr class="mx-n3" />
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ชื่อผู้ใช้งานในระบบ</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input v-model="state.username" class="form-control form-control-lg" placeholder="" disabled />
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
                      <span v-if="v$.thainame.$error" class="text-danger fw-bold">
                        {{ v$.thainame.$errors[0].$message }}
                      </span>
                      <input v-model="state.thainame" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />

                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ชื่อภาษาอังกฤษ</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <span v-if="v$.engname.$error" class="text-danger fw-bold">
                        {{ v$.engname.$errors[0].$message }}
                      </span>
                      <input v-model="state.engname" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">ที่อยู่</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <span v-if="v$.address.$error" class="text-danger fw-bold">
                        {{ v$.address.$errors[0].$message }}
                      </span>
                      <textarea v-model="state.address" class="form-control form-control-lg" placeholder=""></textarea>
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">จังหวัด</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <span v-if="v$.cityvalue.$error" class="fw-bold text-danger">
                        {{ v$.cityvalue.$errors[0].$message }}
                      </span>
                      <select class="form-control form-control-lg" id="inlineFormCustomSelectPref"
                        v-model="state.cityvalue">
                        <option v-for="item in city" :key="item.name_th" :value="item.name_th"
                          placeholder="เลือก 1 อย่าง">
                          {{ item.name_th }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">รหัสไปษณีย์</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <span v-if="v$.pincode.$error" class="text-danger fw-bold">
                        {{ v$.pincode.$errors[0].$message }}
                      </span>
                      <input v-model="state.pincode" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">อีเมล</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <span v-if="v$.email.$error" class="text-danger fw-bold">
                        {{ v$.email.$errors[0].$message }}
                      </span>
                      <input v-model="state.email" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">เบอร์โทรศัพท์</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <span v-if="v$.phonenumber.$error" class="text-danger fw-bold">
                        {{ v$.phonenumber.$errors[0].$message }}
                      </span>
                      <input v-model="state.phonenumber" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                </div>
                <div class="tab-pane fade" id="userinfo-more" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ชื่อเดิมก่อนเปลี่ยนชื่อ</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <span v-if="v$.Oldname.$error" class="text-danger fw-bold">
                        {{ v$.Oldname.$errors[0].$message }}
                      </span>
                      <input v-model="state.Oldname" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ชื่อเล่น</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <span v-if="v$.nickname.$error" class="text-danger fw-bold">
                        {{ v$.nickname.$errors[0].$message }}
                      </span>
                      <input v-model="state.nickname" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">วันเกิด</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <VDatePicker locale="th-TH" v-model="date" mode="date" :title="formattedTitle" mark />
                      <p>วันเกิดของผู้ใช้ : {{ formattedDate }}</p>
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">โทรสาร</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <span v-if="v$.Phonemail.$error" class="text-danger fw-bold">
                        {{ v$.Phonemail.$errors[0].$message }}
                      </span>
                      <input v-model="state.Phonemail" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ไอดีไลน์</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <span v-if="v$.Idline.$error" class="text-danger fw-bold">
                        {{ v$.Idline.$errors[0].$message }}
                      </span>
                      <input v-model="state.Idline" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                </div>
                <div class="tab-pane fade" id="userinfo-study" role="tabpanel" aria-labelledby="nav-contact-tab">
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ระดับปริญญาตรี สาขาวิชาเอก</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <span v-if="v$.academicstatus.$error" class="text-danger fw-bold">
                        {{ v$.academicstatus.$errors[0].$message }}
                      </span>
                      <input v-model="state.academicstatus" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">รหัสประจำตัวระดับปริญญาตรี</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <span v-if="v$.academicnumber.$error" class="text-danger fw-bold">
                        {{ v$.academicnumber.$errors[0].$message }}
                      </span>
                      <input v-model="state.academicnumber" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ระดับปริญญาโท สาขาวิชาเอก</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <span v-if="v$.masterdegree.$error" class="text-danger fw-bold">
                        {{ v$.masterdegree.$errors[0].$message }}
                      </span>
                      <input v-model="state.masterdegree" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">รหัสระดับปริญญาโท</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <span v-if="v$.masterdegreenumber.$error" class="text-danger fw-bold">
                        {{ v$.masterdegreenumber.$errors[0].$message }}
                      </span>
                      <input v-model="state.masterdegreenumber" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ระดับปริญญาเอก สาขาวิชาเอก</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <span v-if="v$.doctordegree.$error" class="text-danger fw-bold">
                        {{ v$.doctordegree.$errors[0].$message }}
                      </span>
                      <input v-model="state.doctordegree" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">รหัสระดับปริญญาเอก</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <span v-if="v$.doctordegreenumber.$error" class="text-danger fw-bold">
                        {{ v$.doctordegreenumber.$errors[0].$message }}
                      </span>
                      <input v-model="state.doctordegreenumber" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                </div>
                <div class="tab-pane fade" id="userinfo-job" role="tabpanel" aria-labelledby="nav-contact-tab">
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">อาชีพที่ทำปัจจุบัน</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <span v-if="v$.job.$error" class="text-danger fw-bold">
                        {{ v$.job.$errors[0].$message }}
                      </span>
                      <input v-model="state.job" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ตำแหน่งอาชีพที่ทำปัจจุบัน</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <span v-if="v$.jobposition.$error" class="text-danger fw-bold">
                        {{ v$.Jobposition.$errors[0].$message }}
                      </span>
                      <input v-model="state.jobposition" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ที่อยู่ที่ทำงาน</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <span v-if="v$.jobaddress.$error" class="text-danger fw-bold">
                        {{ v$.Jobaddress.$errors[0].$message }}
                      </span>
                      <input v-model="state.jobaddress" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ระดับสมาชิก</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <p class="form-control form-control-lg" style="height: max-content;">
                        {{ state.Levelmember }}</p>
                    </div>
                  </div>
                  <hr class="mx-n3" />
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
    </div>
  </section>
</template>



<script>
import router from "@/router";
import { ref, reactive, computed } from "vue";
import axios from "axios";
import useValidate from '@vuelidate/core'
import { required, email, maxLength, helpers, sameAs, numeric, minLength } from '@vuelidate/validators'
import { id } from "date-fns/locale";



export default {

  setup() {


    const date = ref(new Date());


    const formattedDate = computed(() => {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return date.value ? date.value.toLocaleDateString('th-TH', options) : '';
    });

    const setDateFromFormattedDate = (dateString) => {
      // Regex สำหรับตรวจสอบรูปแบบ dd/mm/yyyy
      const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
      if (!regex.test(dateString)) {
        dateString = '';
      } else {
        const [day, month, year] = dateString.split('/').map(Number);
        date.value = new Date(year, month - 1, day);
      }
    };


    const isEnglishOrThai = (value) => {
      // Regular expression to match English alphabetic characters, digits, and spaces
      const regex = /^[A-Za-z0-9\s/.]+$/;

      // Check if the value consists entirely of English alphabetic characters, digits, and spaces
      return regex.test(value);
    };

    const isThai = (value) => {
      // Regular expression to match Thai characters, digits, and spaces
      const thaiRegex = /^[\u0E00-\u0E7F0-9\s/.]+$/;

      // Check if the value consists entirely of Thai characters, digits, and spaces
      return thaiRegex.test(value);
    };

    const state = reactive({
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
      thainame: '',
      engname: '',
      address: '',
      phonenumber: '',
      levelmember: '',
      levelmemberthing: '',
      statusinfo: false,
      pnstatus: false,
      cityvalue: '',
      pincode: '',

      Oldname: '',
      nickname: '',
      Phonemail: '',
      Idline: '',


      academicstatus: '',
      academicnumber: '',
      masterdegree: '',
      masterdegreenumber: '',
      doctordegree: '',
      doctordegreenumber: '',

      job: '',
      jobposition: '',
      jobaddress: '',
      Levelmember: '',
      Levelmemberthing: '',


    })
    const rules = computed(() => {



      return {



        thainame: {
          required: helpers.withMessage('กรุณาใส่ข้อมูล ชื่อภาษาไทย ด้วยนะครับ', required),
          isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai)
        },
        engname: {
          required: helpers.withMessage('กรุณาใส่ข้อมูล ชื่อภาษาอังกฤษ ด้วยนะครับ', required),
          isEnglishOrThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาอังกฤษเท่านั้น', isEnglishOrThai)
        },

        address: {
          required: helpers.withMessage('กรุณาใส่ข้อมูล ที่อยู่ ด้วยนะครับ', required),
          isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai)
        },
        cityvalue: {
          required: helpers.withMessage('กรุณาใส่ข้อมูล จังหวัด ด้วยนะครับ', required)
        },


        pincode: {
          required: helpers.withMessage('กรุณาใส่ข้อมูล รหัสไปษณีย์ ด้วยนะครับ', required),
          numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ ', numeric),
          maxLength: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขจำนวน 5 ตัวเท่านั่นนะครับ ', maxLength(5)),
          minLength: helpers.withMessage(' กรุณาใส่ตัวเลขให้ครบ 5 ตัวด้วยครับ', minLength(5))
        },

        phonenumber: {
          required: helpers.withMessage('กรุณาใส่ข้อมูล เบอร์โทรศัพท์ ด้วยนะครับ', required),
          numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ ', numeric),
          maxLength: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขจำนวน 10 ตัวเท่านั่นนะครับ ', maxLength(10)),
          minLength: helpers.withMessage(' กรุณาใส่ตัวเลขให้ครบ 10 ตัวด้วยครับ', minLength(10))
        },

        email: { required: helpers.withMessage('กรุณาใส่ข้อมูล อีเมล ด้วยนะครับ', required), email: helpers.withMessage('กรุณาใส่ข้อมูล อีเมล ให้ตรงแบบฟอร์มด้วยนะครับ ', email) },

        Idline: {
          minLength: helpers.withMessage(' กรุณาใส่ตัวอักษรให้มากกว่า 1 ตัวด้วยครับ', minLength(1))
        },


        Oldname: {
          isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai),
          minLength: helpers.withMessage(' กรุณาใส่ตัวอักษรให้มากกว่า 1 ตัวด้วยครับ', minLength(1))
        },
        nickname: {
          isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai),
          minLength: helpers.withMessage(' กรุณาใส่ตัวอักษรให้มากกว่า 1 ตัวด้วยครับ', minLength(1))
        },
        Phonemail: {
          numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ ', numeric),
          maxLength: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขจำนวน 9 ตัวเท่านั่นนะครับ ', maxLength(9)),
          minLength: helpers.withMessage(' กรุณาใส่ตัวเลขให้ครบ 9 ตัวด้วยครับ', minLength(9))
        },

        academicstatus: {
          isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai),
          minLength: helpers.withMessage(' กรุณาใส่ตัวอักษรให้มากกว่า 1 ตัวด้วยครับ', minLength(1))
        },
        academicnumber: {
          numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ ', numeric),
          minLength: helpers.withMessage(' กรุณาใส่ตัวเลขให้มากกว่า 1 ตัวด้วยครับ', minLength(1))
        },
        masterdegree: {
          isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai),
          minLength: helpers.withMessage(' กรุณาใส่ตัวอักษรให้มากกว่า 1 ตัวด้วยครับ', minLength(1))
        },
        masterdegreenumber: {
          numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ ', numeric),
          minLength: helpers.withMessage(' กรุณาใส่ตัวเลขให้มากกว่า 1 ตัวด้วยครับ', minLength(1))
        },
        doctordegree: {
          isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai),
          minLength: helpers.withMessage(' กรุณาใส่ตัวอักษรให้มากกว่า 1 ตัวด้วยครับ', minLength(1))
        },
        doctordegreenumber: {
          numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ ', numeric),
          minLength: helpers.withMessage(' กรุณาใส่ตัวเลขให้มากกว่า 1 ตัวด้วยครับ', minLength(1)),
        },

        job: {
          isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai),
          minLength: helpers.withMessage(' กรุณาใส่ตัวอักษรให้มากกว่า 1 ตัวด้วยครับ', minLength(1))
        },
        jobposition: {
          isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai),
          minLength: helpers.withMessage(' กรุณาใส่ตัวอักษรให้มากกว่า 1 ตัวด้วยครับ', minLength(1))
        },
        jobaddress: {
          isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai),
          minLength: helpers.withMessage(' กรุณาใส่ตัวอักษรให้มากกว่า 1 ตัวด้วยครับ', minLength(1))
        },
      }
    });

    const v$ = useValidate(rules, state)
    return {
      rules,
      state,
      v$,
      date,
      formattedDate,
      setDateFromFormattedDate,
    }
  },

  data() {
    return {
      profileimage: null,
      inputType: "password",
      file: null,
      district: [],
      canton: [],
      city: [],
      newpassword: "",
      comfirepassword: "",
      passwordsMatch: null,
      id: localStorage.getItem("userid"),
    };
  },

  mounted() {
    this.fetchCity();
    this.getuserdata(this.$route.params.id);
  },
  methods: {
    togglePassword() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
    handleprofile(event) {
      this.file = event.target.files[0];
    },
    formatdate(dateofbirth) {
      const day = dateofbirth.getDate();
      const month = dateofbirth.getMonth() + 1;
      const year = dateofbirth.getFullYear();
      this.date = `${day}/${month}/${year}`;
      return `คุณเกิดวันที่ ${day}/${month}/${year}`;
    },
    submitUpdate() {
      const id = this.$route.params.id;
      this.v$.$validate();
      if (this.v$.phonenumber.$error ||
        this.v$.thainame.$error ||
        this.v$.engname.$error ||
        this.v$.address.$error ||
        this.v$.cityvalue.$error ||
        this.v$.pincode.$error ||
        this.v$.email.$error
      ) {
        alert("การปรับข้อมูลผู้ใช้ไม่สำเร็จแล้ว");
        return;
      } else {
        const URL = `${import.meta.env.VITE_API}users/update/` + id;
        let data = new FormData();
        data.append("thainame", this.state.thainame);
        data.append("engname", this.state.engname);
        data.append("address", this.state.address);
        data.append("city", this.state.cityvalue);
        data.append("pincode", this.state.pincode);
        data.append("phonenumber", this.state.phonenumber);
        data.append("email", this.state.email);
        data.append("file", this.file);
        data.append("oldname", this.state.Oldname);
        data.append("nickname", this.state.nickname);
        data.append("dateofbirth", this.formattedDate);
        data.append("academicstatus", this.state.academicstatus);
        data.append("academicnumber", this.state.academicnumber);
        data.append("masterdegree", this.state.masterdegree);
        data.append("masterdegreenumber", this.state.masterdegreenumber);
        data.append("doctordegree", this.state.doctordegree);
        data.append("doctoraldegreenumber", this.state.doctordegreenumber);
        data.append("phonemail", this.state.Phonemail);
        data.append("idline", this.state.Idline);
        data.append("job", this.state.job);
        data.append("jobposition", this.state.jobposition);
        data.append("jobaddress", this.state.jobaddress);

        let config = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("tokenstring"),
            "Content-Type": "multipart/form-data",
          },
        };

        axios.post(URL, data, config)
          .then((response) => {
            this.responseStatus = response.status;
            console.log("this is res => ", response);
            alert("การปรับข้อมูลผู้ใช้สำเร็จแล้ว");
            this.$router.push({ path: "/profile/" + id });
          })
      }
    },
    async fetchCity() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json');
        const data = await response.json();
        // Assuming the API response is an array of objects with `value` and `text` properties
        this.city = data;
        console.log(this.district)
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    },
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
      ).then((res) => {
        console.log(res);

        this.state.username = res.data.thing.Username;
        this.state.thainame = res.data.thing.Thainame;
        this.state.engname = res.data.thing.Engname;
        this.state.email = res.data.thing.Email;
        this.state.address = res.data.thing.Address;
        this.state.cityvalue = res.data.thing.City;
        this.state.pincode = res.data.thing.Pincode;
        this.state.phonenumber = res.data.thing.Phonenumber;

        this.state.Oldname = res.data.thing.Oldname;
        this.state.nickname = res.data.thing.Nickname;
        this.state.Phonemail = res.data.thing.Phonemail;
        this.state.Idline = res.data.thing.Idline;
        const dateString = res.data.thing.Dateofbirth;
        this.setDateFromFormattedDate(dateString);


        this.state.academicstatus = res.data.thing.Academicstatus;
        this.state.academicnumber = res.data.thing.Academicnumber;
        this.state.masterdegree = res.data.thing.Masterdegree;
        this.state.masterdegreenumber = res.data.thing.Masterdegreenumber;
        this.state.doctordegree = res.data.thing.Doctoraldegree;
        this.state.doctordegreenumber = res.data.thing.Doctoraldegreenumber;


        this.state.job = res.data.thing.Job;
        this.state.jobposition = res.data.thing.Jobposition;
        this.state.jobaddress = res.data.thing.Jobaddress;
        this.state.Levelmember = res.data.thing.Levelmember;
        this.state.Levelmemberthing = res.data.thing.Levelmemberthing;
        this.downloadImageAndDisplay(res.data.thing.Image)
      })
        .catch();
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
          alert("เปลี่ยนรหัสเรียบร้อยแล้ว กรุณาเข้าสู่ระบบใหม่ด้วย");
          this.handlelogout();
        })
        .catch((error) => {
          alert("ไม่สามารถเปลี่ยนรหัสผ่านได้");
        });
    },
    comparePasswords() {
      if (this.newpassword == "" && this.comfirepassword == "") {
        this.passwordsMatch = false;
      }
      this.passwordsMatch = this.newpassword === this.comfirepassword;
    },
    async downloadImageAndDisplay(uuid) {
      try {
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
        const base64String = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        )

        console.log(base64String);
        if (base64String === "IiI=") {
          this.profileimage = null;
        } else {
          const imageSrc = `data:${response.headers['content-type']};base64,${base64String}`;
          this.profileimage = imageSrc;
        }

      } catch (error) {

      }
    },
    handlelogout() {
      localStorage.removeItem("userid");
      localStorage.removeItem("tokenstring");
      localStorage.removeItem("uuid");
       window.location.href = "https://graduation-silpakorn.azurewebsites.net/";
    },
  },
};
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
     

      address: "",
      Phonenumber: "",
      
     
      Email: "",
     
     

      paystatus: "",
      paystatustext: "",
      role: "",
      paystatus: "",
      day: "",
      month: "",
      year: "",
      dateString: "",

      Accessstatus: "",
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
    
   
    handleprofile(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    submitUpdate() {
      // Assuming you want to use $route.params.id
      const id = this.$route.params.id;

      

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