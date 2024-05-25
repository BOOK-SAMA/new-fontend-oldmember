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
                        <h6 class="mb-0">รูปที่แสดงอยู่นี้เป็นไฟล์รูปใน database</h6>
                        <h6 class="mb-0">
                          หากต้องการเปลี่ยนแปลงสามารถ upload ไฟล์ได้ด้านล่าง
                        </h6>
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
                      <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ชื่อภาษาอังกฤษ</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input v-model="Engname" class="form-control form-control-lg" placeholder="" />
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
                <div class="tab-pane fade" id="userinfo-more" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ชื่อเดิมก่อนเปลี่ยนชื่อ</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input v-model="Oldname" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ชื่อเล่น</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input v-model="nickname" class="form-control form-control-lg" placeholder="" />
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
                    <hr class="mx-n3" />
                    <div class="row align-items-center py-3">
                      <div class="col-md-3 ps-5">
                        <h6 class="mb-0">โทรสาร</h6>
                      </div>
                      <div class="col-md-9 pe-5">
                        <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
                      </div>
                    </div>
                    <hr class="mx-n3" />
                    <div class="row align-items-center py-3">
                      <div class="col-md-3 ps-5">
                        <h6 class="mb-0">ไอดีไลน์</h6>
                      </div>
                      <div class="col-md-9 pe-5">
                        <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
                      </div>
                    </div>
                    <hr class="mx-n3" />
                  </div>
                </div>
                <div class="tab-pane fade" id="userinfo-study" role="tabpanel" aria-labelledby="nav-contact-tab">
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ระดับปริญญาตรี สาขาวิชาเอก</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">รหัสประจำตัวระดับปริญญาตรี</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ระดับปริญญาโท สาขาวิชาเอก</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">รหัสระดับปริญญาโท</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ระดับปริญญาเอก สาขาวิชาเอก</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">รหัสระดับปริญญาเอก</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
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
                      <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ตำแหน่งอาชีพที่ทำปัจจุบัน</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
                    </div>
                  </div>
                  <hr class="mx-n3" />
                  <div class="row align-items-center py-3">
                    <div class="col-md-3 ps-5">
                      <h6 class="mb-0">ที่อยู่ที่ทำงาน</h6>
                    </div>
                    <div class="col-md-9 pe-5">
                      <input v-model="THAIname" class="form-control form-control-lg" placeholder="" />
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



export default {

  setup() {


    const date = ref(new Date());

    const formattedTitle = (date) => {
      const yearBuddhist = date.getFullYear() + 543;
      return format(date, 'MMM', { locale: th }) + ' ' + yearBuddhist;
    };
    const formattedDate = computed(() => {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return date.value ? date.value.toLocaleDateString('th-TH', options) : '';
    });

    const setDateFromFormattedDate = () => {
      const dateString = '20/01/2000';
      // Regex สำหรับตรวจสอบรูปแบบ dd/mm/yyyy
      const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

      if (!regex.test(dateString)) {
        const dateString = '20/01/2000';
      }
      // สมมุติว่าคุณมีค่าของ formattedDate เป็น '20/01/2000
      const [day, month, year] = dateString.split('/').map(Number);
      date.value = new Date(year, month - 1, day);
    };


    const isEnglishOrThai = (value) => {
      // Regular expression to match Thai characters
      const thaiRegex = new RegExp(/[\u0E00-\u0E7F]/);

      // Check if the value contains any Thai characters
      if (thaiRegex.test(value)) {
        return false; // Return false if Thai characters are found
      }

      return true; // Return true if the value is in English
    };

    const isThai = (value) => {
      // Regular expression to match Thai characters
      const thaiRegex = new RegExp(/[\u0E00-\u0E7F]/);

      // Check if the value contains any Thai characters
      if (thaiRegex.test(value)) {
        return true; // Return false if Thai characters are found
      }

      return false; // Return true if the value is in English
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

    })
    const rules = computed(() => {

      const statusinfoRequired = helpers.withMessage('กรุณาใส่ข้อมูลในช่องนี้ด้วยนะครับ', (value) => {
        return state.statusinfo || !!value;
      });
      const pnstatusRequired = helpers.withMessage('กรุณาใส่ข้อมูลในช่องนี้ด้วยนะครับ', (value) => {
        return state.pnstatus || !!value;
      });
      return {
        username: {
          required: helpers.withMessage('กรุณาใส่ข้อมูล ชื่อผุ้ใช้งานในระบบ', required),
          minLength: helpers.withMessage(' กรุณาใส่ข้อมูลอย่างน้อย  4 ตัวด้วยครับ', minLength(4))
        },
        password: {
          required: helpers.withMessage('กรุณาใส่ข้อมูล รหัสผ่าน', required),
          minLength: helpers.withMessage(' กรุณาใส่ข้อมูลอย่างน้อย  4 ตัวด้วยครับ', minLength(4))
        },
        confirmpassword: {
          required: helpers.withMessage('กรุณาใส่ข้อมูล confirmpassword', required),
          sameAs: helpers.withMessage('กรุณาใส่ข้อมูล confirmpassword ให้ตรงกับ password ด้วยนะครับ', sameAs(state.password)),
          minLength: helpers.withMessage(' กรุณาใส่ข้อมูลอย่างน้อย  4 ตัวด้วยครับ', minLength(4))
        },

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

        levelmember: { required: helpers.withMessage('กรุณาเลือกข้อมูลในช่องนี้ด้วยนะครับ', required) },
        levelmemberthing: { required: helpers.withMessage('กรุณาเลือกข้อมูลในช่องนี้ด้วยนะครับ', required) },

        conditionalField1: { required: statusinfoRequired },
        conditionalField2: { required: pnstatusRequired },
      }
    })

    const v$ = useValidate(rules, state)
    return {
      rules,
      state,
      v$,

      date,
      formattedDate,
      setDateFromFormattedDate,
      formattedTitle
    }
  },

  data() {
    return {
      selectedDate: this.$moment().format("YYYY/MM/DD"),
      // selectedDate: null,
      buddhistYear: true,
      inputType: "password",
      file: null,
      district: [],
      canton: [],
      // city: [],
    };
  },
  components: { DatePicker },
  mounted() {
    this.fetchDistrict();
    this.fetchCanton();
    this.setDateFromFormattedDate();
    // this.fetchCity();
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
    submit() {


      // this.v$.$validate() // checks all inputs
      // if (this.v$.$error) {
      //     console.log(this.v$)
      //     alert('แบบฟอร์มไม่ถูกต้อง กรุณาตรวจสอบข้อมูลอีกครั้ง')
      // } else {
      //     const URL = `${import.meta.env.VITE_API}register2`;
      //     let data = new FormData();
      //     data.append("username", this.state.username);
      //     data.append("password", this.state.password);
      //     data.append("confirmpassword", this.state.confirmpassword);
      //     data.append("thainame", this.state.thainame);
      //     data.append("engname", this.state.engname);
      //     data.append("address", this.state.address);
      //     data.append("city", this.state.cityvalue);
      //     data.append("pincode", this.state.pincode);
      //     data.append("phonenumber", this.state.phonenumber);
      //     data.append("email", this.state.email);
      //     data.append("levelmember", this.state.levelmember);
      //     data.append("levelmemberthing", this.state.levelmemberthing);
      //     data.append("statusinfo", this.state.statusinfo);
      //     data.append("file", this.file);
      //     data.append("PNstatus", this.state.pnstatus);
      //     let config = {
      //         header: {
      //             "Content-Type": "multipart/form-data",
      //         },
      //     };

      //     axios.post(URL, data, config).then((response) => {
      //         // console.log("this is res => ", this.date);
      //         this.responseStatus = response.status
      //         console.log("this is res => ", response);
      //         alert("การสมัครสมาชิกสำเร็จแล้ว")
      //         window.location.href = "https://mytestsilpakorn.azurewebsites.net/";

      //     }).catch((error) => {
      //         alert(error.response.data.Text);
      //     });
      // }
    },
    async fetchDistrict() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_tambon.json');
        const data = await response.json();
        // Assuming the API response is an array of objects with `value` and `text` properties
        this.district = data;
        console.log(this.district)
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    },
    async fetchCanton() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_amphure.json');
        const data = await response.json();
        // Assuming the API response is an array of objects with `value` and `text` properties
        this.canton = data;
        console.log(this.district)
      } catch (error) {
        console.error('Error fetching options:', error);
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
    }
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