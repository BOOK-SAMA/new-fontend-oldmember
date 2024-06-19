<template>
  <div class="container-sm mt-5">
    <label class="form-label" for="form2Example1">กรุณาใส่ Otp ที่ได้รับทางอีเมลด้วย</label>
    <div class="form-outline mb-4 mt-2">
      <span v-if="v$.otp.$error" class="text-danger fw-bold">
        {{ v$.otp.$errors[0].$message }}
      </span>
      <input type="text" class="form-control" v-model="state.otp" />
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
import { required, numeric, helpers } from '@vuelidate/validators'

export default {
  setup(props, { emit }) {
    const state = reactive({
      otp: '',
    });

    const rules = computed(() => ({
      otp: {
        required: helpers.withMessage('กรุณาใส่ข้อมูล OTP ด้วยนะครับ', required),
        numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ', numeric),
      },
    }));

    const v$ = useValidate(rules, state);

    const submit = () => {
      v$.value.$validate();
      if (v$.value.$error) {
        alert('แบบฟอร์มไม่ถูกต้อง กรุณาตรวจสอบข้อมูลอีกครั้ง');
      } else {
        const URL = `${import.meta.env.VITE_API}ReceiveResponsse`;
        let data = new FormData();
        data.append("otp", state.otp);
        data.append("email", localStorage.getItem("resetemail"));
        let config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        axios.post(URL, data, config)
          .then((response) => {
            localStorage.setItem("resetuserid", response.data.userid);
            if (response.status === 200) {
              emit('otp-verified');
              alert("OTP ยืนยันสำเร็จ");
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