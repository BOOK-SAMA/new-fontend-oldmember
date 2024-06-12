<template>
    <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xxl">
                <div class="card" style="border-radius: 15px; ">
                    <div class="card-body">
                        <!-- Thai Name -->
                        <div class="row align-items-center pt-4 pb-3">
                            <div class="col-md-3 ps-5">
                                <h6 class="mb-0">ชื่อภาษาไทย<span class="text-danger fw-bold">*</span></h6>
                            </div>
                            <div class="col-md-9 pe-5">
                                <span v-if="v$.thainame.$error" class="text-danger fw-bold">
                                    {{ v$.thainame.$errors[0].$message }}
                                </span>
                                <input type="text" class="form-control form-control-lg" v-model="state.thainame" />
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="row align-items-center pt-4 pb-3">
                            <div class="col-md ps-5">
                                <h6 class="mb-0">อีเมลที่ได้ลงทะเบียนไว้<span class="text-danger fw-bold">*</span> </h6>
                            </div>
                            <div class="col-md-9 pe-5">
                                <span v-if="v$.email.$error" class="text-danger fw-bold">
                                    {{ v$.email.$errors[0].$message }}
                                </span>
                                <input type="text" class="form-control form-control-lg" v-model="state.email" />
                            </div>
                        </div>

                        <!-- Phone Number -->
                        <div class="row align-items-center pt-4 pb-3">
                            <div class="col-md ps-5">
                                <h6 class="mb-0">เบอร์โทรศัพท์ที่ได้ลงทะเบียนไว้<span
                                        class="text-danger fw-bold">*</span></h6>
                            </div>
                            <div class="col-md-9 pe-5">
                                <span v-if="v$.phonenumber.$error" class="text-danger fw-bold">
                                    {{ v$.phonenumber.$errors[0].$message }}
                                </span>
                                <input type="text" class="form-control form-control-lg" v-model="state.phonenumber" />
                            </div>
                        </div>

                        <!-- QR Code and Payment Info -->
                        <div class="row align-items-center py-3">
                            <div class="col-md-3 ps-5">
                                <h6 class="mb-0">Qr code สำหรับการจ่ายเงิน</h6>
                                <h6 class="mb-0">ช่องทางการชำระเงิน ธนาคารกรุงไทย สาขาสำนักนานาเหนือ เลขที่
                                    000-0-35556-9</h6>
                            </div>
                            <div class="col-md-9 pe-5">
                                <img src="https://lh4.googleusercontent.com/RMQziLQRistxbkv9ZX30hyx1zWSyZ9RgZPISwbahv0IqBa9JJ9T_f6AFLXuj7cM_m8uARSm5GPfGCkZy-EqTlXjXccfTjl60r4mD5h5X1OdYf5bwxO7Jbf-wb3sOaHmO3g=w584"
                                    class="HxhGpf" style="width: 584px;" title="" alt="">
                            </div>
                        </div>

                        <!-- Price Value -->
                        <div class="row align-items-center pt-4 pb-3">
                            <div class="col-md ps-5">
                                <h6 class="mb-0">จำนวนเงินที่โอนด้วย<span class="text-danger fw-bold">*</span></h6>
                            </div>
                            <div class="col-md-9 pe-5">
                                <span v-if="v$.pricevalue.$error" class="text-danger fw-bold">
                                    {{ v$.pricevalue.$errors[0].$message }}
                                </span>
                                <input type="text" class="form-control form-control-lg" v-model="state.pricevalue" />
                            </div>
                        </div>

                        <!-- File Upload -->
                        <div class="row align-items-center py-3">
                            <div class="col-md-3 ps-5">
                                <h6 class="mb-0">สำเนาใบโอนเงิน<span class="text-danger fw-bold">*</span></h6>
                            </div>
                            <div class="col-md-9 pe-5">
                                <input type="file" @change="onFileChange">
                                <span v-if="!v$.file.required" class="text-danger fw-bold">
                                    รบกวนใส่รูปสลิปด้วยนะครับ
                                </span>
                                <div class="small text-muted mt-2">
                                    (นามสกุลไฟล์ .jpg ไม่เกิน 10 MB)
                                </div>
                            </div>
                        </div>

                        <!-- Additional Information -->
                        <div class="row align-items-center pt-4 pb-3">
                            <div class="col-md ps-5">
                                <h6 class="mb-0">ข้อมูลเพิ่มเติม</h6>
                            </div>
                            <div class="col-md-9 pe-5">
                                <input type="text" class="form-control form-control-lg" v-model="state.text" />
                            </div>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="col-md-9 pe-5">
                        <button type="submit" class="btn btn-primary btn-lg text-white" @click="submit()">
                            ยืนยัน
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
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

                file: { required },

                pricevalue: {
                    required: helpers.withMessage('กรุณาใส่ข้อมูล จำนวนเงินที่โอนด้วย ด้วยนะครับ', required),
                    numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ ', numeric),
                    minLength: helpers.withMessage(' กรุณาใส่ตัวเลขมากกว่า 1 ตัวด้วยครับ', minLength(1))
                },
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
            this.v$.$validate()
            if (this.v$.$error) {
                alert('แบบฟอร์มไม่ถูกต้อง กรุณาตรวจสอบข้อมูลอีกครั้ง')
            } else {
                const URL = `${import.meta.env.VITE_API2}checkmembership`;
                let data = new FormData();
                data.append("email", this.state.email);
                data.append("phonenumber", this.state.phonenumber);
                let config = {
                    header: {
                        "Content-Type": "multipart/form-data",
                    },
                };
                axios.post(URL, data, config).then((response) => {
                    if (response.status == 200) {
                        const URL = `${import.meta.env.VITE_API2}fromformembership`;
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
                }).catch((error) => {
                    alert(error.response.data.message);
                });
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
}
</script>
