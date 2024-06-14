<template>
    <div class="container-sm mt-5">
      <div class="form-outline mb-4 mt-2">
        <span v-if="v$.email.$error" class="text-danger fw-bold">
          {{ v$.email.$errors[0].$message }}
        </span>
        <input type="email" class="form-control" v-model="state.email" />
        <label class="form-label" for="form2Example1">อีเมลที่ลงทะเบียนไว้ในระบบ</label>
      </div>
      <button type="button" class="btn btn-primary btn-block mb-4" @click="submit">
        ยืนยัน
      </button>
    </div>
  </template>
  
  <script>
  import { ref, reactive, computed } from "vue";
  import axios from "axios";
  import useValidate from '@vuelidate/core'
  import { required, email, helpers } from '@vuelidate/validators'
  
  export default {
    setup(props, { emit }) {
      const state = reactive({
        email: '',
      });
  
      const rules = computed(() => ({
        email: {
          required: helpers.withMessage('กรุณาใส่ข้อมูล อีเมล ด้วยนะครับ', required),
          email: helpers.withMessage('กรุณาใส่ข้อมูล อีเมล ให้ตรงแบบฟอร์มด้วยนะครับ', email),
        },
      }));
  
      const v$ = useValidate(rules, state);
  
      const submit = () => {
        v$.$validate();
        if (v$.$error) {
          alert('แบบฟอร์มไม่ถูกต้อง กรุณาตรวจสอบข้อมูลอีกครั้ง');
        } else {
          const URL = `${import.meta.env.VITE_API}ReceiveRequest`;
          let data = new FormData();
          data.append("email", state.email);
          let config = {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          };
          axios.post(URL, data, config)
            .then((response) => {
              localStorage.setItem("resetemail", state.email);
              if (response.status === 200) {
                emit('email-submitted');
                alert("ทำการส่ง OTP ไปยังอีเมลแล้วกรุณาตรวจสอบด้วย");
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
  