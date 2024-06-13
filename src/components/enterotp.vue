<template>
    <div class="container-sm mt-5">
        <!-- เราจะใช้ componet ในการทำลืมรหัสผ่าน -->
        <div class="form-outline mb-4 mt-2">
            <span v-if="v$.otp.$error" class="text-danger fw-bold">
                {{ v$.otp.$errors[0].$message }}
            </span>
            <input type="email" class="form-control" v-model="state.otp" />
            <label class="form-label" for="form2Example1">กรุณาใส่ Otp ที่ได้รับทางอีเมลด้วย</label>
        </div>

        <!-- Submit button -->
        <button type="button" class="btn btn-primary btn-block mb-4" @click="Submit()">
            ยืนยัน
        </button>
    </div>
</template>

<script>
import router from "@/router";
import { ref, reactive, computed } from "vue";
import axios from "axios";
import useValidate from '@vuelidate/core'
import { required, email, maxLength, helpers, sameAs, numeric, minLength } from '@vuelidate/validators'
import banner from "/src/components/Banner.vue";

export default {

    setup() {
        const state = reactive({
            otp: '',
        })
        const rules = computed(() => {
            return {
                otp: {
                    required: helpers.withMessage('กรุณาใส่ข้อมูล OTP ด้วยนะครับ', required),
                    numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ ', numeric),
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
    components() {
        banner
    },
    methods: {
        submit() {
            this.v$.$validate() // checks all inputs
            if (this.v$.$error) {
                console.log(this.v$)
                alert('แบบฟอร์มไม่ถูกต้อง กรุณาตรวจสอบข้อมูลอีกครั้ง')
            } else {
                const URL = `${import.meta.env.VITE_API}ReceiveResponsse`;
                let data = new FormData();
                data.append("otp", this.state.otp);
                data.append("email", localStorage.getItem("resetemail"));
                let config = {
                    header: {
                        "Content-Type": "multipart/form-data",
                    },
                };
                axios.post(URL, data, config).then((response) => {
                    localStorage.setItem("resetuserid", response.data.userid);
                    this.responseStatus = response.status
                    console.log("this is res => ", response);
                    alert("กำลังตรวจสอบ OTP ")
                }).catch((error) => {
                    alert(error.response.data.Text);
                });
            }
        },
    },
};
</script>