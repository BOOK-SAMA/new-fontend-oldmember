<template>
  <section class="vh" style="background-color: #2779e2">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-9">
          <h1 class="text-white mb-4">
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
                  
                  <textarea class="form-control form-control-lg" v-model="producttext" rows="3"></textarea>
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
        this.name = this.products.name;
        this.quantity = this.products.quantity;
        this.price = this.products.price;
        this.producttext = this.products.producttext;

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
      // Assuming you want to use $route.params.id
      const id = this.$route.params.id;

      let data = new FormData();
      data.append("name", this.name);
      data.append("quantity", this.quantity);
      data.append("price", this.price);
      data.append("producttext", this.producttext);
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
        })
        .catch((error) => {
          console.error("Error updating:", error);
        });
    },


  },
};
</script>