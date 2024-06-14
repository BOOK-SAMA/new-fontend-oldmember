<template>
    <div class="container-sm mt-5">
        <div class="form-outline mb-4 mt-2">
            <span v-if="v$.password.$error" class="text-danger fw-bold">
                {{ v$.password.$errors[0].$message }}
            </span>
            <input type="password" class="form-control" v-model="state.password" />
            <label class="form-label" for="form2Example1">กรุณาใส่รหัสผ่านใหม่</label>
        </div>
        <div class="form-outline mb-4 mt-2">
            <span v-if="v$.confirmPassword.$error" class="text-danger fw-bold">
                {{ v$.confirmPassword.$errors[0].$message }}
            </span>
            <input type="password" class="form-control" v-model="state.confirmPassword" />
            <label class="form-label" for="form2Example1">กรุณายืนยันรหัสผ่านใหม่</label>
        </div>
        <button type="button" class="btn btn-primary btn-block mb-4" @click="submit">
            ยืนยัน
        </button>
    </div>
</template>

<script>
import { reactive, computed } from "vue";
import axios from "axios";
import useValidate from '@vuelidate/core'
import { required, minLength, helpers, sameAs } from '@vuelidate/validators'

export default {
    setup() {
        const state = reactive({
            password: '',
            confirmPassword: '',
        });

        const rules = computed(() => ({
            password: {
                required: helpers.withMessage('กรุณาใส่รหัสผ่าน', required),
                minLength: helpers.withMessage('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร', minLength(6)),
            },
            confirmPassword: {
                required: helpers.withMessage('กรุณายืนยันรหัสผ่าน', required),
                sameAs: helpers.withMessage('รหัสผ่านไม่ตรงกัน', sameAs(state.password)),
            },
        }));

        const v$ = useValidate(rules, state);

        const submit = () => {
            v$.$validate();
            if (v$.$error) {
                alert('แบบฟอร์มไม่ถูกต้อง กรุณาตรวจสอบข้อมูลอีกครั้ง');
            } else {
                const URL = `${import.meta.env.VITE_API}ResetPassword`;
                let data = new FormData();
                data.append("password", state.password);
                data.append("userid", localStorage.getItem("resetuserid"));
                let config = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                };
                axios.post(URL, data, config)
                    .then((response) => {
                        if (response.status === 200) {
                            alert("รหัสผ่านเปลี่ยนเรียบร้อย");
                        }
                    })
                    .catch((error) => {
                        alert(error.response.data.Text);
                    });
            }
        };

        return {
            state,
            v$,
            submit,
        };
    },
};
</script>