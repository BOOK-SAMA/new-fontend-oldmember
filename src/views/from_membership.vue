<template>
    <nav class="navbar navbar-expand  fixed-top " style="background-color: #F9CC02; ">
        <ul class="navbar-nav mr-auto p-2" style="position: relative; left: 6cm; align-items: center;">
            <img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png" alt="Admin"
                class="rounded-circle p-1" width="55" />
            <li class="nav-item active">
                <a class="nav-link text-dark" href="#" style="font-size: medium;">หน้าแรก</a>
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

    <section class="vh-200" style="
        background-image: url(https://v3i.rweb-images.com/www.scsualumni.net/images/background/main/crop-1702428316.jpg?1702428316);
        background-repeat: no-repeat;
      ">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xxl">
                    <banner />
                    <h1 class="text-white mb-4 mt-2" style="background-color: rgb(171, 171, 171)">
                        แบบฟอร์มแจ้งชำระเงิน สำหรับค่าสมาชิก
                    </h1>

                    <form class="was-validated">
                        <div class="card" style="border-radius: 15px; background-color: rgb(171, 171, 171)">
                            <div class="card-body">
                                <div class="row align-items-center pt-4 pb-3 ">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">ชื่อ</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <span v-if="v$.thainame.$error" class="text-danger fw-bold">
                                            {{ v$.thainame.$errors[0].$message }}
                                        </span>
                                        <input type="text" class="form-control form-control-lg is-invalid"
                                            v-model="state.thainame" />
                                    </div>
                                </div>

                                <div class="row align-items-center pt-4 pb-3">
                                    <div class="col-md ps-5">
                                        <h6 class="mb-0">Email ของผู้แจ้งชำระเงิน </h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <span v-if="v$.email.$error" class="text-danger fw-bold">
                                            {{ v$.email.$errors[0].$message }}
                                        </span>
                                        <input type="text" class="form-control form-control-lg is-invalid"
                                            v-model="state.email" />

                                    </div>
                                </div>

                                <div class="row align-items-center pt-4 pb-3">
                                    <div class="col-md ps-5">
                                        <h6 class="mb-0">เบอร์โทรศัพท์</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <span v-if="v$.phonenumber.$error" class="text-danger fw-bold">
                                            {{ v$.phonenumber.$errors[0].$message }}
                                        </span>
                                        <input type="text" class="form-control form-control-lg is-invalid"
                                            v-model="state.phonenumber" />

                                    </div>
                                </div>




                                <div class="row align-items-center py-3">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">Qr code สำหรับการจ่ายเงิน</h6>
                                        <h6 class="mb-0">ช่องทางการชำระเงิน ธนาคารกรุงไทย สาขาสำนักนานาเหนือ เลขที่
                                            000-0-35556-9</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <img src="https://lh4.googleusercontent.com/RMQziLQRistxbkv9ZX30hyx1zWSyZ9RgZPISwbahv0IqBa9JJ9T_f6AFLXuj7cM_m8uARSm5GPfGCkZy-EqTlXjXccfTjl60r4mD5h5X1OdYf5bwxO7Jbf-wb3sOaHmO3g=w584"
                                            class="HxhGpf" style="width: 584px; " title="" alt="">
                                    </div>
                                </div>

                                <div class="row align-items-center pt-4 pb-3 was-validated">
                                    <div class="col-md ps-5">
                                        <h6 class="mb-0">ยอดเงินที่โอน</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <span v-if="v$.pricevalue.$error" class="text-danger fw-bold">
                                            {{ v$.pricevalue.$errors[0].$message }}
                                        </span>
                                        <input type="text" class="form-control form-control-lg"
                                            v-model="state.pricevalue" />

                                    </div>
                                </div>



                                <div class="row align-items-center py-3 was-validated">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">สำเนาใบโอนเงิน</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input type="file" @change="onFileChange">
                                        <span v-if="!$v.file.required" class="text-danger fw-bold">
                                            รบกวนใส่รูปสลิปด้วยนะครับ
                                        </span>
                                        <div class="small text-muted mt-2">
                                            (นามสกุลไฟล์ .jpg ไม่เกิน 10 MB)
                                        </div>
                                    </div>
                                </div>

                                <div class="row align-items-center pt-4 pb-3">
                                    <div class="col-md ps-5">
                                        <h6 class="mb-0">ข้อมูลเพิ่มเติม</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input type="text" class="form-control form-control-lg" v-model="state.text" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9 pe-5">
                                <button type="submit" class="btn btn-primary btn-lg" @click="submit()">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
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

            thainame: "",
            email: "",
            phonenumber: "",
            pricevalue: "",
            text: "",
            file: null,
        })
        const rules = computed(() => {


            return {



                thainame: {
                    required: helpers.withMessage('กรุณาใส่ข้อมูล ชื่อภาษาไทย ด้วยนะครับ', required),
                    isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai)
                },

                phonenumber: {
                    required: helpers.withMessage('กรุณาใส่ข้อมูล เบอร์โทรศัพท์ ด้วยนะครับ', required),
                    numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ ', numeric),
                    maxLength: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขจำนวน 10 ตัวเท่านั่นนะครับ ', maxLength(10)),
                    minLength: helpers.withMessage(' กรุณาใส่ตัวเลขให้ครบ 10 ตัวด้วยครับ', minLength(10))
                },

                email: {
                    required: helpers.withMessage('กรุณาใส่ข้อมูล อีเมล ด้วยนะครับ', required),
                    email: helpers.withMessage('กรุณาใส่ข้อมูล อีเมล ให้ตรงแบบฟอร์มด้วยนะครับ ', email)
                },

                file: { required }
            }
        })

        const v$ = useValidate(rules, state)
        return {
            rules,
            state,
            v$
        }
    },
    methods: {
        onFileChange(event) {
            this.file = event.target.files[0] || null;
            this.$v.file.$touch();
        },
        handleprofile(event) {
            this.file = event.target.files[0];
            console.log(this.file)
        },
        submit() {
            // check uniqueorder before required 
            this.v$.$validate()
            if (this.v$.$error) {
                alert('แบบฟอร์มไม่ถูกต้อง กรุณาตรวจสอบข้อมูลอีกครั้ง')
            } else {
                const URL = `${import.meta.env.VITE_API2}frommembership`;
                let data = new FormData();

                data.append("thainame", this.state.thainame);
                data.append("email", this.state.email);
                data.append("text", this.state.text);
                data.append("phonenumber", this.state.phonenumber);
                data.append("pricevalue", this.state.pricevalue);
                data.append("file", this.state.file);
                let config = {
                    header: {
                        "Content-Type": "multipart/form-data",
                    },
                };
                axios.post(URL, data, config).then((response) => {
                    this.responseStatus = response.status
                    alert("กรอกแบบฟอร์มสำเร็จแล้ว")
                }).catch(() => {
                    alert("ไม่สามารถบันทึก แบบฟอร์มแจ้งชำระเงิน ได้");
                });
            }

        }
    },

    mounted() {

        document.querySelectorAll('input[name="exampleRadios"]').forEach((elem) => {

            elem.addEventListener('change', () => {

                if (elem.value === 'option1') {
                    document.getElementById('orderNumberInput').style.display = 'none'; // ซ่อน input เลขที่คำสั่งซื้อ
                } else {
                    document.getElementById('orderNumberInput').style.display = 'block'; // แสดง input เลขที่คำสั่งซื้อ
                }
            });
        });
    }
}

</script>
