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
                <li class="nav-item active">
                    <a class="nav-link" href="https://mytestsilpakorn.azurewebsites.net/">หน้าแรก <span
                            class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/addproduct">เพิ่ม สินค้า</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" :href="state ? '#' : `/seeallproduct/${this.$route.params.id}`">จัดการสินค้า</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button class="btn  my-2 my-sm-0" type="submit" @click="handlelogout()">
                    ออกจากระบบ
                </button>
            </form>
        </div>
    </nav>



    <section class="vh">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
                    <h1 class="text-dark mb-4">
                        เพิ่มสินค้า
                    </h1>
                    <div class="card" style="border-radius: 15px">
                        <div class="card-body">
                            <hr class="mx-n3" />

                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ชื่อของสินค้า</h6>
                                </div>
                                <div class="col-md-9 pe-5">

                                    <input type="text" class="form-control form-control-lg" v-model="this.name" />

                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ปริมาณสินค้าที่มีใน stock</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input type="text" class="form-control form-control-lg" v-model="this.quantity" />
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ราคาของสินค้า</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <input type="text" class="form-control form-control-lg" v-model="this.price" />
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">คำอธิบายสินค้า</h6>
                                </div>
                                <div class="col-md-9 pe-5">

                                    <textarea class="form-control form-control-lg" v-model="producttext"
                                        rows="3"></textarea>
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">รุปถ่ายของผู้ใช้</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <img v-if="profileimage" :src="profileimage" alt="Preview" class="p-1"
                                        width="200" />
                                    <!-- Display a default image if previewFile is not available -->
                                    <p v-else>
                                        <img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png"
                                            alt="Admin" class="p-1" width="200" />
                                    </p>
                                    <input ref="fileInput" class="form-control form-control-lg" id="formFileLg"
                                        type="file" @change="handleprofile" />
                                    <div class="small text-muted mt-2">
                                        (นามสกุลไฟล์ .jpg ไม่เกิน 10 MB)
                                    </div>
                                </div>
                            </div>
                            <hr class="mx-n3" />




                            <div class="px-5 py-4">
                                <button type="submit" class="btn btn-primary btn-lg" @click="submitUpdate">
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

import axios from "axios";
import { useRouter } from "vue-router";
import { ref, reactive, computed } from "vue";

import useValidate from '@vuelidate/core'
import { required, email, maxLength, helpers, sameAs, numeric, minLength } from '@vuelidate/validators'

export default {
    name: "addproduct",
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
            name: "",
            quantity: "",
            price: "",
            producttext: "",
        })
        const rules = computed(() => {
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
            file: null,
            router: useRouter(),
        };
    },
    async mounted() {
        console.log(this.$route.params.id);
    },
    methods: {
        handleproductimage(event) {
            this.file = event.target.files[0];
            console.log(this.file);
        },
        submitUpdate() {
            // Assuming you want to use $route.params.id
            const id = this.$route.params.id;

            let data = new FormData();
            data.append("name", this.name);
            data.append("quantity", this.quantity);
            data.append("price", this.price);
            data.append("producttext", this.producttext);
            data.append("file", this.file);

            axios
                .post(`${import.meta.env.VITE_API2}admin/addproduct`, data, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("tokenstring"),
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    console.log(data)
                    console.log(res)
                    alert("ทำการเพิ่มสินค้าสำเร็จแล้ว")
                    this.router.push({ path: 'https://mytestsilpakorn.azurewebsites.net/' });
                })
                .catch((error) => {
                    console.error("Error updating:", error);
                });
        },
    },
};
</script>