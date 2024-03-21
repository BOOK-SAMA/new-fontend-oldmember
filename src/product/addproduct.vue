<template>
    <section class="vh" style="background-color: #2779e2">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-9">
                    <h1 class="text-white mb-4">
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
                                    <h6 class="mb-0">รุปถ่ายของสินค้า</h6>
                                </div>
                                <div class="col-md-9 pe-5">
                                    <h6 class="mb-0">รูปที่แสดงอยู่นี้เป็นไฟล์รูปใน database</h6>
                                    <h6 class="mb-0">
                                        หากต้องการเปลี่ยนแปลงสามารถ upload ไฟล์ได้ด้านล่าง
                                    </h6>
                                    <h6 class="mb-0">
                                        ปล. preview จะเปลี่ยนก็ต่อเมื่อกดปุ่ม submit เท่านั่น
                                    </h6>
                                    <img v-if="this.products.image" :src="this.products.image" alt="Preview" class="p-1"
                                        width="200" />
                                    <!-- Display a default image if previewFile is not available -->
                                    <p v-else>
                                        <img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png"
                                            alt="Admin" class="p-1" width="200" />
                                    </p>
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
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
    name: "Updateproduct",

    data() {
        return {
            products: [],
            file: null,
            name: "",
            quantity: "",
            price: "",
            producttext: "",

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
                })
                .catch((error) => {
                    console.error("Error updating:", error);
                });
        },


    },
};
</script>