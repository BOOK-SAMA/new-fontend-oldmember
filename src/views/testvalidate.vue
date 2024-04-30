<!-- <template>
    <div class="root vh-200">

        <h1 class="text-white mb-4 mt-2" style="background-color: rgb(171, 171, 171)">
            สมัครสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร (ศวศ.)
        </h1>
         <div class="card-body">
            <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Username</h6>
                </div>
                <div class="col-md-9 pe-5">
                    <input type="text" class="form-control form-control-lg" v-model="state.username" />
                    <span v-if="v$.username.$error">
                        {{ v$.username.$errors[0].$message }}
                    </span>
                </div>
            </div>
        </div> 
        <div class="card" style="border-radius: 15px; background-color: rgb(171, 171, 171)">
            <div class="card-body">
            <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Username</h6>
                </div>
                <div class="col-md-9 pe-5">
                    <input type="text" class="form-control form-control-lg" v-model="state.username" />
                    <span v-if="v$.username.$error">
                        {{ v$.username.$errors[0].$message }}
                    </span>
                </div>
            </div>
        </div>
        </div>
        <p>
            <input type="text" placeholder="Email" v-model="state.email" />
            <span v-if="v$.email.$error">
                {{ v$.email.$errors[0].$message }}
            </span>
        </p>
        <p>
            <input type="password" placeholder="Password" v-model="state.password.password" />
            <span v-if="v$.password.password.$error">
                {{ v$.password.password.$errors[0].$message }}
            </span>
        </p>
        <p>
            <input type="password" placeholder="Confirm Password" v-model="state.password.confirm" />
            <span v-if="v$.password.confirm.$error">
                {{ v$.password.confirm.$errors[0].$message }}
            </span>
        </p>
        <button @click="submitForm">Submit</button>
    </div>
</template> -->
<template>
    <section class="vh-200" style="
        background-image: url(https://v3i.rweb-images.com/www.scsualumni.net/images/background/main/crop-1702428316.jpg?1702428316);
        background-repeat: no-repeat;
      ">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xxl">
                    <h1 class="text-white mb-4 mt-2" style="background-color: rgb(171, 171, 171)">
                        สมัครสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร (ศวศ.)
                    </h1>

                    <div class="card" style="border-radius: 15px; background-color: rgb(171, 171, 171)">
                        <div class="card-body">
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">Username</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input type="text" class="form-control form-control-lg" v-model="state.username" />
                                    <span v-if="v$.username.$error">
                                        {{ v$.username.$errors[0].$message }}
                                    </span>
                                </div>
                            </div>

                            <hr class="mx-n3" />
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">รหัสผ่าน</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input :type="inputType" id="myInput" v-model="state.password"
                                        class="form-control form-control-lg" />
                                    <span v-if="v$.password.$error">
                                        {{ v$.password.$errors[0].$message }}
                                    </span>
                                </div>
                                <button @click="togglePassword" class="mt-2 ">
                                    Toggle Password
                                </button>
                            </div>

                            <hr class="mx-n3" />

                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ยืนยันรหัสผ่าน</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input :type="inputType" id="myInput" v-model="state.confirmpassword"
                                        class="form-control form-control-lg" />
                                    <span v-if="v$.confirmpassword.$error">
                                        {{ v$.confirmpassword.$errors[0].$message }}
                                    </span>
                                </div>
                            </div>

                            <hr class="mx-n3" />






                            <hr class="mx-n2" />
                            <div class="col-md-9 pe-5">
                                <button type="submit" class="btn btn-primary btn-lg" @click="submit()">
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
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators'


export default {

    setup() {
        const state = reactive({
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
        })
        const rules = computed(() => {
            return {
                username: { required: helpers.withMessage('กรุณาใส่ข้อมูล Username', required) },
                password: { required: helpers.withMessage('กรุณาใส่ข้อมูล Password', required) },
                confirmpassword: { required, sameAs: sameAs(state.password) },
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
        };
    },

    methods: {

        togglePassword() {
            this.inputType = this.inputType === "password" ? "text" : "password";
        },

        submit() {
            console.log(this.v$)
            this.v$.$validate() // checks all inputs
            console.log(this.v$.$validate())
            if (this.v$.$error) {
                // if ANY fail validation
                alert('Form failed validation')
            } else {
                alert('Form successfully submitted.')
            }
            // const URL = `${import.meta.env.VITE_API2}register2`;
            // let data = new FormData();


            // data.append("username", this.username);
            // data.append("password", this.password);
            // data.append("confirmpassword", this.confirmpassword);

            // data.append("thainame", this.thainame);
            // data.append("engname", this.engname);
            // data.append("oldname", this.oldname);
            // data.append("nickname", this.nickname);
            // data.append("dateofbirth", this.date);

            // data.append("status", this.status);
            // data.append("academicstatus", this.academicstatus);
            // data.append("academicnumber", this.academicnumber);
            // data.append("masterdegree", this.masterdegree);
            // data.append("masterdegreenumber", this.masterdegreenumber);
            // data.append("doctordegree", this.doctordegree);
            // data.append("doctordegreenumber", this.doctordegreenumber);

            // data.append("address", this.address);
            // data.append("phonenumber", this.phonenumber);
            // data.append("phonemail", this.phonemail);
            // data.append("idline", this.Idline);
            // data.append("email", this.email);
            // data.append("job", this.job);
            // data.append("jobposition", this.jobposition);
            // data.append("jobaddress", this.jobadress);
            // data.append("levelmember", this.levelmember);
            // data.append("levelmemberthing", this.levelmemberthing);
            // data.append("statusinfo", this.statusinfo);
            // data.append("file", this.file);
            // data.append("PNstatus", this.pnstatus);
            // let config = {
            //   header: {
            //     "Content-Type": "multipart/form-data",
            //   },
            // };

            // axios.post(URL, data, config).then((response) => {
            //   // console.log("this is res => ", this.date);
            //   this.responseStatus = response.status
            //   console.log("this is res => ", response);
            //   alert("การสมัครสมาชิกสำเร็จแล้ว")
            //   window.location.href = "https://mytestsilpakorn.azurewebsites.net/";

            // }).catch((error) => {
            //   alert("this is error => ", error);
            //   router.push({ path: "/:notfound" });
            // });
        },
    },
};
</script>




















<!-- <style lang="css">
.root {

    margin: 0 auto;
    background-color: #fff;
    padding: 30px;
    margin-top: 100px;
    border-radius: 20px;
}

input {
    border: none;
    outline: none;
    border-bottom: 1px solid #ddd;
    font-size: 1em;
    padding: 5px 0;
    margin: 10px 0 5px 0;
    width: 100%;
}

button {
    background-color: #3498db;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    color: white;
}
</style> -->


<!-- <script>
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
