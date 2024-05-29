<template>
    <nav class="navbar navbar-expand  fixed-top " style="background-color: #F9CC02; ">
        <ul class="navbar-nav mr-auto p-2" style="position: relative; left: 6cm; align-items: center;">
            <img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png" alt="Admin"
                class="rounded-circle p-1" width="55"/>
            <li class="nav-item active">
                <a class="nav-link text-dark" href="https://mytestsilpakorn.azurewebsites.net/"
                    style="font-size: medium;">หน้าแรก</a>
            </li>
            <li class="nav-item dropdown" style="font-size: medium;">
                <a class="nav-link dropdown-toggle text-dark" href="#" data-toggle="dropdown" aria-haspopup="true">
                    เกี่ยวกับสมาคม
                </a>
                <div class="dropdown-menu " style=" background-color: #F9CC02;">
                    <a class="dropdown-item text-dark" href="#">สาส์นจากนายกสมาคมฯ</a>
                    <a class="dropdown-item text-dark" href="#">ข้อมูลทั่วไป</a>
                    <a class="dropdown-item text-dark" href="#">ตราสัญลักษณ์สมาคม</a>
                    <a class="dropdown-item text-dark" href="#">การสมัครสมาชิก</a>
                    <a class="dropdown-item text-dark" href="#">การสมัครสมาชิก</a>
                    <a class="dropdown-item text-dark" href="#">คณะกรรมการสมาคมฯ</a>
                    <a class="dropdown-item text-dark" href="#">สมาชิกสมาคมฯ</a>
                </div>
            </li>
            <li class="nav-item dropdown" style="font-size: medium;">
                <a class="nav-link dropdown-toggle text-dark" href="#" data-toggle="dropdown" aria-haspopup="true">
                    ข้อมูลศิษย์เก่า
                </a>
                <div class="dropdown-menu " style=" background-color: #F9CC02;">
                    <a class="dropdown-item text-dark" href="#">ทำเนียบศิษย์เก่า</a>
                    <a class="dropdown-item text-dark" href="#">บัณฑิตคณะวิทยาศาสตร์ มศก.</a>
                    <a class="dropdown-item text-dark" href="#">ศิษย์เก่าดีเด่น</a>
                    <a class="dropdown-item text-dark" href="#">เกี่ยวกับอัลบั้ม</a>
                    <a class="dropdown-item text-dark" href="#">เกี่ยวกับรายชื่อตัวแทนรุ่น</a>
                </div>
            </li>
            <li class="nav-item dropdown" style="font-size: medium;">
                <a class="nav-link dropdown-toggle text-dark" href="#" data-toggle="dropdown" aria-haspopup="true">
                    กิจกรรม
                </a>
                <div class="dropdown-menu " style=" background-color: #F9CC02;">
                    <a class="dropdown-item text-dark" href="#">กิจกรรม 2566</a>
                    <a class="dropdown-item text-dark" href="#">กิจกรรม 2561</a>
                    <a class="dropdown-item text-dark" href="#">กิจกรรม ปี 2558 - 2560</a>
                </div>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="#">สินค้าที่ระลึก</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="#">ผู้สนับสนุนเว็บไซต์สมาคมฯ</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="#">เว็บบอร์ด</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="#">ข่าวสารทั่วไป</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="#">แจ้งชำระเงิน</a>
            </li>
            <li class="nav-item active" style="font-size: medium;">
                <a class="nav-link text-dark" href="#">ติดต่อเรา</a>
            </li>
        </ul>
    </nav>

    <section class="vh-200 ">
        <div class="container h-100 ">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xxl " style="margin-top: 3cm; ">
                    <h1 class="text-dark mb-4 mt-2" style="width: max-content; height: max-content;">
                        สมัครสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร (ศวศ.)
                    </h1>
                    <div class="card" style="border-radius: 15px; left: 1cm;">
                        <div class="card-body">
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ชื่อผุ้ใช้งานในระบบ<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.username.$error" class="text-danger fw-bold">
                                        {{ v$.username.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg" v-model="state.username" />
                                </div>
                            </div>
                            <hr class="mx-n3" />
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">รหัสผ่าน<span class="text-danger fw-bold">*</span>
                                    </h6>
                                    <button @click="togglePassword" class="mt-2 btn btn-success  text-dark ">
                                        ดูรหัสผ่าน
                                    </button>
                                </div>

                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.password.$error" class="text-danger fw-bold">
                                        {{ v$.password.$errors[0].$message }}
                                    </span>
                                    <input :type="inputType" id="myInput" v-model="state.password"
                                        class="form-control form-control-lg" />
                                </div>
                            </div>
                            <hr class="mx-n3" />
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ยืนยันรหัสผ่าน<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.confirmpassword.$error" class="text-danger fw-bold">
                                        {{ v$.confirmpassword.$errors[0].$message }}
                                    </span>
                                    <input :type="inputType" id="myInput" v-model="state.confirmpassword"
                                        class="form-control form-control-lg" />
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">ชื่อภาษาไทย<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.thainame.$error" class="text-danger fw-bold">
                                        {{ v$.thainame.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg" v-model="state.thainame" />
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">ชื่อภาษาอังกฤษ<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.engname.$error" class="text-danger fw-bold">
                                        {{ v$.engname.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg" v-model="state.engname" />
                                </div>
                            </div>

                            <hr class="mx-n3" />
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">ข้อมูลที่อยู่ปัจจุบัน (เพื่อการจัดส่งของที่ระลึก)<span
                                            class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.address.$error" class="text-danger fw-bold">
                                        {{ v$.address.$errors[0].$message }}
                                    </span>
                                    <textarea type="text" class="form-control form-control-lg" placeholder=""
                                        v-model="state.address"></textarea>
                                </div>
                            </div>
                            <hr class="mx-n3" />
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">จังหวัด<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.cityvalue.$error" class="fw-bold text-danger">
                                        {{ v$.cityvalue.$errors[0].$message }}
                                    </span>
                                    <select class="custom-select my-2 mr-sm-2 form-control form-control-lg"
                                        id="inlineFormCustomSelectPref" v-model="state.cityvalue">
                                        <option v-for="item in city" :key="item.name_th" :value="item.name_th"
                                            placeholder="เลือก 1 อย่าง">
                                            {{ item.name_th }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <hr class="mx-n3" />


                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">รหัสไปษณีย์<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.pincode.$error" class="fw-bold text-danger">
                                        {{ v$.pincode.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg" placeholder=""
                                        v-model="state.pincode" />
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">อีเมล<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.email.$error" class="fw-bold text-danger">
                                        {{ v$.email.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg" placeholder=""
                                        v-model="state.email" />
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md ps-5">
                                    <h6 class="mb-0">หมายเลขโทรศัพท์<span class="text-danger fw-bold">*</span></h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.phonenumber.$error" class="text-danger fw-bold">
                                        {{ v$.phonenumber.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg" placeholder=""
                                        v-model="state.phonenumber" />
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center py-3">
                                <div class="col-md-6 ps-5">
                                    <h6 class="mb-0">
                                        ขอสมัครเป็นสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์
                                        มหาวิทยาลัยศิลปากร
                                        โดยยินดีปฏิบัติตามระเบียบข้อบังคับของสมาคมฯ ทุกประการ
                                        <span class="text-danger fw-bold">*</span>
                                    </h6>

                                </div>
                                <div class="col-md-5 pe-5">
                                    <span v-if="v$.levelmember.$error" class="text-danger fw-bold">
                                        {{ v$.levelmember.$errors[0].$message }}
                                    </span>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"
                                        v-model="state.levelmember">
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
                                        <span class="text-danger fw-bold">*</span>
                                    </h6>
                                </div>
                                <div class="col-md-5 pe-5">
                                    <span v-if="v$.levelmemberthing.$error" class="text-danger fw-bold">
                                        {{ v$.levelmemberthing.$errors[0].$message }}
                                    </span>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"
                                        v-model="state.levelmemberthing">
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
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">รูปถ่าย</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input ref="fileInput" class="form-control form-control-lg" id="formFileLg"
                                        type="file" @change="handleprofile" />
                                    <div class="small text-muted mt-2">
                                        (นามสกุลไฟล์ .jpg ไม่เกิน 10 MB)
                                    </div>
                                </div>
                            </div>
                            <hr class="mx-n3" />
                            <div class="row align-items-center py-3">
                                <div class="col-md-5 ps-5">
                                    <h6 class="mb-0">
                                        การส่งใบสมัครเป็นสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์
                                        มหาวิทยาลัยศิลปากร ให้ทำการเลือก "ยืนยัน"
                                        ว่าข้อมูลดังกล่าวถูกต้อง/ครบถ้วน
                                        และพิมพ์ใบสมัครเพื่อส่งมาทาง scsualumni@hotmail.com
                                        <span class="text-danger fw-bold">*</span>
                                    </h6>
                                </div>
                                <div class="col-md-5 pe-5">
                                    <div class="form-check form-check-inline">
                                        <span v-if="v$.conditionalField1.$error" class="text-danger fw-bold">
                                            {{ v$.conditionalField1.$errors[0].$message }}
                                        </span>
                                        <input v-model="state.statusinfo" class="form-check-input" type="checkbox"
                                            id="inlineCheckbox1" value="ยืนยัน" />
                                        <label class="form-check-label" for="inlineCheckbox1">ยืนยัน</label>
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
                                        <span class="text-danger fw-bold">*</span>
                                        <a href="http://www.scsualumni.net/attachments/view/?attach_id=268068"
                                            class="badge badge-primary">นโยบายคุ้มครองข้อมูลส่วนบุคคล
                                            สำหรับสมาชิกสมาคม</a>
                                    </h6>
                                </div>
                                <div class="col-md-5 pe-5">
                                    <div class="form-check form-check-inline">
                                        <span v-if="v$.conditionalField2.$error" class="text-danger fw-bold">
                                            {{ v$.conditionalField2.$errors[0].$message }}
                                        </span>
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2"
                                            value="ยืนยัน" v-model="state.pnstatus" />
                                        <label class="form-check-label" for="inlineCheckbox1">ยืนยัน</label>

                                    </div>
                                    <!-- <h6 class="mb-0"># ถ้าไม่กด ยืนยัน จะกดปุ่น Submit ไม่ได้นะครับ #</h6> -->
                                </div>
                            </div>
                            <h6 class="mb-0">
                                ส่งใบสมัคร สอบถามข้อมูลเพิ่มเติมติดต่อ scsualumni@hotmail.com
                            </h6>
                            <div class="col-md-8 pe-5">
                                <button type="submit" class="btn btn-primary btn-lg text-white mt-2 " @click="submit()">
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
import router from "@/router";
import { ref, reactive, computed } from "vue";
import axios from "axios";
import useValidate from '@vuelidate/core'
import { required, email, maxLength, helpers, sameAs, numeric, minLength } from '@vuelidate/validators'


export default {

    setup() {
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
            v$
        }
    },

    data() {
        return {
            inputType: "password",
            file: null,
            district: [],
            canton: [],
            city: [],
        };
    },
    mounted() {
        this.fetchDistrict();
        this.fetchCanton();
        this.fetchCity();
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
            this.v$.$validate() // checks all inputs
            if (this.v$.$error) {
                console.log(this.v$)
                alert('แบบฟอร์มไม่ถูกต้อง กรุณาตรวจสอบข้อมูลอีกครั้ง')
            } else {
                const URL = `${import.meta.env.VITE_API}register2`;
                let data = new FormData();
                data.append("username", this.state.username);
                data.append("password", this.state.password);
                data.append("confirmpassword", this.state.confirmpassword);
                data.append("thainame", this.state.thainame);
                data.append("engname", this.state.engname);
                data.append("address", this.state.address);
                data.append("city", this.state.cityvalue);
                data.append("pincode", this.state.pincode);
                data.append("phonenumber", this.state.phonenumber);
                data.append("email", this.state.email);
                data.append("levelmember", this.state.levelmember);
                data.append("levelmemberthing", this.state.levelmemberthing);
                data.append("statusinfo", this.state.statusinfo);
                data.append("file", this.file);
                data.append("PNstatus", this.state.pnstatus);
                let config = {
                    header: {
                        "Content-Type": "multipart/form-data",
                    },
                };

                axios.post(URL, data, config).then((response) => {
                    // console.log("this is res => ", this.date);
                    this.responseStatus = response.status
                    console.log("this is res => ", response);
                    alert("การสมัครสมาชิกสำเร็จแล้ว")
                    window.location.href = "https://mytestsilpakorn.azurewebsites.net/";

                }).catch((error) => {
                    alert(error.response.data.Text);
                });
            }
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
    style="background-color:  #e7f2fe "
import useValidate from '@vuelidate/core'
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {
    setup() {

        const state = reactive({
            username: '',
            email: '',
            
            password: '',
            confirmpassword: '',
        })

        const mustBeLearnVue = (value) => value.includes('learnvue')





        const rules = computed(() => {
            return {
                username: { required: helpers.withMessage('กรุณาใส่ข้อมูล Username', required) },
                email: { required, email, mustBeLearnVue: helpers.withMessage('Must be @learnvue', mustBeLearnVue) },
                password: { required },
                confirmpassword: { required, sameAs: sameAs(state.password) },

                // passwordtest: {
                //     passwordwww: { required, minLength: helpers.withMessage('มีมากกว่า  6 ตัว', minLength(6)) },
                //     confirmwwww: { required, sameAs: sameAs(state.password.password) },
                // }
            }
        })

        const v$ = useValidate(rules, state)
        return {
            rules,
            state,
            v$
        }
    },
    data:{
        return
    },
    methods: {
        submitForm() {
            this.v$.$validate() // checks all inputs
            if (!this.v$.$error) {
                // if ANY fail validation
                alert('Form successfully submitted.')
            } else {
                alert('Form failed validation')
            }
        },
        togglePassword() {
            this.inputType = this.inputType === "password" ? "text" : "password";
        },
    },
}


</script> -->
