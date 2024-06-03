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
            แก้ไขข้อมูลสินค้า
          </h1>

          <div class="card" style="border-radius: 15px">
            <div class="card-body">
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0">รหัสของสินค้า</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <p>{{ this.products.ID }}</p>
                </div>
              </div>

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
                  <input type="text" class="form-control form-control-lg" v-model="this.state.quantity" />
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
                  <input type="text" class="form-control form-control-lg" v-model="this.state.price" />
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
                  <textarea class="form-control form-control-lg" v-model="this.state.producttext" rows="3"></textarea>
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
                  <img v-if="this.products.image" :src="this.products.image" alt="Preview" class="p-1" width="200" />
                  <!-- Display a default image if previewFile is not available -->
                  <p v-else>
                    <img src="http://www.scsualumni.net/images/logo/resize-1482551623803.png" alt="Admin" class="p-1"
                      width="200" />
                  </p>
                  <input ref="fileInput" class="form-control form-control-lg" id="formFileLg" type="file"
                    @change="handleproductimage" />
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
        name: {
          required: helpers.withMessage('กรุณาใส่ข้อมูลชื่อของสินค้าที่จะเพิ้มในระบบด้วย', required),
          isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai),
          minLength: helpers.withMessage(' กรุณาใส่ข้อมูลชื่อของสินค้าอย่างน้อย  4 ตัวอักษรด้วยครับ', minLength(4))
        },

        quantity: {
          numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ ', numeric),
          required: helpers.withMessage('กรุณาใส่ข้อมูล จำนวนสินค้าที่ต้องการจะเพิ่มด้วยครับ', required),
          minLength: helpers.withMessage(' กรุณาใส่ข้อมูลอย่างน้อย  4 ตัวด้วยครับ', minLength(4))
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
      products: [],
      file: null,
    };
  },
  async mounted() {
    console.log(this.$route.params.id);
    await this.Getproduct(this.$route.params.itemid);
    await this.downloadImageAndDisplay(this.products.image);

  },
  methods: {
    async Getproduct(id) {
      const userId = localStorage.getItem("userid");
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API2}getproduct/${id}`,

          {
            headers: {
              // ตัวอย่าง Header (แก้ตามความเหมาะสม)
              Authorization: "Bearer " + localStorage.getItem("tokenstring"),
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data);
        this.products = response.data;
        this.state.name = this.products.name;
        this.state.quantity = this.products.quantity;
        this.state.price = this.products.price;
        this.state.producttext = this.products.producttext;

      } catch (error) {
        localStorage.removeItem("userid");
        localStorage.removeItem("tokenstring");
        localStorage.removeItem("uuid");
        router.push({ path: "/loginadmin" });
      }
    },
    async downloadImageAndDisplay(uuid) {
      try {
        // Fetch the image content from the server
        const response = await axios.get(
          `${import.meta.env.VITE_API2}admin/preview/${uuid}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("tokenstring"),
              "Content-Type": "application/json",
            },
            responseType: "arraybuffer", // Set the responseType to 'arraybuffer' to handle binary data
          }
        );

        // Convert the binary data to a data URL
        const imageSrc = `data:${response.headers["content-type"]
          };base64,${btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          )}`;

        // Display the image using the data URL
        const imgElement = document.getElementById("your-image-id"); // Replace 'your-image-id' with the actual ID of your image element
        if (imgElement) {
          imgElement.src = imageSrc;
        }
        this.products.image = imageSrc;
        console.log("Image downloaded and displayed.");
      } catch (error) {

      }
    },

    handleproductimage(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },

    submitUpdate() {
      this.v$.$validate() // checks all inputs
      if (this.v$.$error) {
        console.log(this.v$)
      } else {
        const id = this.$route.params.id;
        let data = new FormData();
        data.append("name", this.state.name);
        data.append("quantity", this.state.quantity);
        data.append("price", this.state.price);
        data.append("producttext", this.state.producttext);
        data.append("file", this.file);
        axios
          .put(`${import.meta.env.VITE_API2}admin/updateproduct/${this.$route.params.itemid}`, data, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("tokenstring"),
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(data)
            console.log(res)
            alert("ทำการ update ข้อมูลสินค้าสำเร็จแล้ว")
          })
          .catch((error) => {
            console.error("Error updating:", error);
          });
      }
    },
  },
};
</script>