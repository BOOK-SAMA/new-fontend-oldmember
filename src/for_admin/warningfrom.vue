<template>
    <nav class="navbar navbar-expand-lg " style="background-color: #F9CC02; ">
        <a class="navbar-brand" href="#"><img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png"
                alt="Admin" class="rounded-circle p-1" width="40" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" :href="`/admintoo/${this.$route.params.id}`">หน้าหลัก</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admincreate">สร้างผู้ใช้</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"
                        href="https://graduation-silpakorn.azurewebsites.net/wp-admin/">แก้ไขหน้าเว็บ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="`/seeallproduct/${this.$route.params.id}`">จัดการสินค้า</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="`/seeallorder`">ดูรายการสั่งซื้อต่างๆ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="`/seeallfrom`">ดูรายการแจ้งชำระเงินต่างๆ</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button class="btn  my-2 my-sm-0" type="submit" @click="handlelogout()">
                    ออกจากระบบ
                </button>
            </form>
        </div>
    </nav>
    <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xxl">
                <h1 class="text-dark mb-4 mt-2" style="width: max-content; height: max-content;">
                    แบบฟอร์มการแจ้งเตือนเรื่องต่างๆ
                </h1>
                <div class="card" style="border-radius: 15px; ">
                    <div class="card-body">
                        <!-- Additional Information -->
                        <div class="row align-items-center pt-4 pb-3">
                            <div class="col-md ps-5">
                                <h6 class="mb-0">เรื่องที่จะติดต่อ</h6>
                            </div>
                            <div class="col-md-9 pe-5">
                                <span class="text-danger fw-bold">
                                    กรุณาใส่เรื่องที่จะติดต่อ
                                </span>
                                <input type="text" class="form-control form-control-lg" v-model="state.header" />
                            </div>
                        </div>

                        <div class="row align-items-center pt-4 pb-3">
                            <div class="col-md ps-5">
                                <h6 class="mb-0">เนื้อหา</h6>
                            </div>
                            <div class="col-md-9 pe-5">
                                <span class="text-danger fw-bold">
                                    กรุณาใส่เนื้อหาเรื่องที่จะติดต่อ
                                </span>
                                <textarea class="form-control form-control-lg" v-model="state.body" rows="10">
                                </textarea>
                            </div>
                        </div>

                        <div class="row align-items-center py-3">
                            <div class="col-md-3 ps-5">
                                <h6 class="mb-0">แนบเนื้อหา</h6>
                            </div>
                            <div class="col-md-9 pe-5">
                                <input ref="fileInput" class="form-control form-control-lg" id="formFileLg" type="file"
                                    @change="handleprofile" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="b-example-divider p-1"></div>
                <!-- Submit Button -->
                <div class="col-md-9 pe-5">
                    <button type="submit" class="btn btn-primary btn-lg text-white" @click="submit()">
                        ยืนยัน
                    </button>
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
        const state = reactive({
            header: "",
            body: "",
            file: null,
        })
        const rules = computed(() => {
            return {
                header: {
                    required: helpers.withMessage('กรุณาใส่ข้อมูลเรื่องที่จะแจ้งเตือนผู้ใช้ด้วยนะครับ', required),
                },
                body: {
                    required: helpers.withMessage('กรุณาใส่ข้อมูลเนื้อหาการแจ้งเตือนด้วยนะครับ', required),
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
        handlelogout() {
            localStorage.removeItem("userid");
            localStorage.removeItem("tokenstring");
            localStorage.removeItem("uuid");
            window.location.href = "https://graduation-silpakorn.azurewebsites.net/";
        },
        handleprofile(event) {
            this.state.file = event.target.files[0];
        },
        submit() {
            this.v$.$validate()
            if (this.v$.$error) {
                alert('แบบฟอร์มไม่ถูกต้อง กรุณาตรวจสอบข้อมูลอีกครั้ง')
            } else {
                const formattedText = this.state.body.replace(/\n/g, '<br>');
                const URL = `${import.meta.env.VITE_API2}warning`;
                let data = new FormData();
                data.append("userid", this.$route.params.id);
                data.append("adminid", localStorage.getItem('userid'));
                data.append("header", this.state.header);
                data.append("body", formattedText);
                data.append("file", this.state.file);
                let config = {
                    header: {
                        "Content-Type": "multipart/form-data",
                    },
                };
                axios.post(URL, data, config).then((response) => {
                    this.responseStatus = response.status
                    alert("กรอกแบบฟอร์มสำเร็จแล้ว")
                    window.location.href = "https://graduation-silpakorn.azurewebsites.net/";
                }).catch((error) => {
                    console.log(error)
                    alert("ไม่สามารถบันทึก แบบฟอร์มแจ้งเตือน ได้");
                });
            }
        }
    },
}

</script>
