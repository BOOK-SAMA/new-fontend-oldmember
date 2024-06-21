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
                    <a class="nav-link" :href="`/admintoo/${id}`">หน้าหลัก</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/addproduct">เพิ่ม สินค้า</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" :href="`/seeallproduct/${id}`">จัดการสินค้า</a>
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
                                    <span v-if="v$.name.$error" class="text-danger fw-bold">
                                        {{ v$.name.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg" v-model="this.state.name" />

                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ปริมาณสินค้าที่มีในคลัง</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.quantity.$error" class="text-danger fw-bold">
                                        {{ v$.quantity.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg"
                                        v-model="this.state.quantity" />
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">ราคาของสินค้า</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.price.$error" class="text-danger fw-bold">
                                        {{ v$.price.$errors[0].$message }}
                                    </span>
                                    <input type="text" class="form-control form-control-lg"
                                        v-model="this.state.price" />
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">คำอธิบายสินค้า</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <span v-if="v$.producttext.$error" class="text-danger fw-bold">
                                        {{ v$.producttext.$errors[0].$message }}
                                    </span>
                                    <textarea class="form-control form-control-lg" v-model="this.state.producttext"
                                        rows="3"></textarea>
                                </div>
                            </div>
                            <hr class="mx-n3" />

                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
                                    <h6 class="mb-0">รุปถ่ายของผู้ใช้</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    
                                    <input ref="fileInput" class="form-control form-control-lg" id="formFileLg"
                                        type="file" @change="handleproductimage" />
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
            // Regular expression to match English alphabetic characters, digits, and spaces
            const regex = /^[A-Za-z0-9\s/():.-]+$/;

            // Check if the value consists entirely of English alphabetic characters, digits, and spaces
            return regex.test(value);
        };

        const isThai = (value) => {
            // Regular expression to match Thai characters, digits, and spaces
            const thaiRegex = /^[\u0E00-\u0E7F0-9\s/():.-]+$/;

            // Check if the value consists entirely of Thai characters, digits, and spaces
            return thaiRegex.test(value);
        };

        const state = reactive({
            name: "",
            quantity: "",
            price: "",
            producttext: "",
        })
        const rules = computed(() => {
            return {
                name: {
                    required: helpers.withMessage('กรุณาใส่ข้อมูลชื่อของสินค้าที่จะเพิ้มในระบบด้วย', required),
                    isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai),
                    minLength: helpers.withMessage(' กรุณาใส่ข้อมูลชื่อของสินค้าอย่างน้อย  1 ตัวอักษรด้วยครับ', minLength(1))
                },

                quantity: {
                    numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ ', numeric),
                    required: helpers.withMessage('กรุณาใส่ข้อมูล จำนวนสินค้าที่ต้องการจะเพิ่มด้วยครับ', required),
                    minLength: helpers.withMessage(' กรุณาใส่ข้อมูลอย่างน้อย  1 ตัวด้วยครับ', minLength(1))
                },

                price: {
                    required: helpers.withMessage('กรุณาใส่ข้อมูล ราคาของสินค้าที่จะเพิ่มด้วยครับ', required),
                    numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ ', numeric),
                },

                producttext: {
                    isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai)
                }
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
            id:  localStorage.getItem("userid") 
        };
    },
    methods: {
        handleproductimage(event) {
            this.file = event.target.files[0];
            console.log(this.file);
        },
        submitUpdate() {
            this.v$.$validate() // checks all inputs
            if (this.v$.$error) {
                alert("ไม่สามารถทำการเพิ่มสินค้าสำเร็จแล้ว")
            } else {
                // Assuming you want to use $route.params.id
                const id = this.$route.params.id;

                let data = new FormData();
                data.append("name", this.state.name);
                data.append("quantity", this.state.quantity);
                data.append("price", this.state.price);
                data.append("producttext", this.state.producttext);
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
                        router.push({ path: "/admintoo" + id });
                    })
                    .catch((error) => {
                       alert("ไม่สามารถทำการเพิ่มสินค้าสำเร็จแล้ว")
                    });
            }
        }

    },
};
</script>