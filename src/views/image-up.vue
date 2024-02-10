<template>
  <div class="row align-items-center pt-4 pb-3">
    <div class="col-md-3 ps-5">
      <h6 class="mb-0">Email ของตนเอง</h6>
    </div>
    <div class="col-md-9 pe-5">
      <input
        v-model="Username"
        placeholder="ปล. อีเมลนี้จะนำไปใช้ในการ CC Email เพื่อที่ท่านจะได้รับสำเนาการส่งเรื่อง"
        class="form-control form-control-lg"
      />
    </div>
  </div>

  <div class="row align-items-center pt-4 pb-3">
    <div class="col-md-3 ps-5">
      <h6 class="mb-0">ข้อมูลแนบอีเมล</h6>
    </div>
    <div class="col-md-9 pe-5">
      <input
        v-model="address"
        placeholder="ปล. กรุณาใส่ที่อยู่ของท่าน 
        หากเป็นการชำระเงินค่าสมาชิก 
        และต้องมีการส่งของที่ระลึกที่ท่านได้เลือกไว้ "
        class="form-control form-control-lg"
      />
    </div>
  </div>
  <div class="row align-items-center pt-4 pb-3">
    <div class="col-md-3 ps-5">
      <h6 class="mb-0">แนบหลักฐานการชำระเงิน</h6>
    </div>
    <div class="col-md-9 pe-5">
      <h6 class="mb-0">แนบหลักฐานการชำระเงิน</h6>
    <img :src="previewImage" class="uploading-image" />
    <input type="file" accept="image/jpeg" />
    </div>
  </div>
  <div>
   
  </div>
  <div class="px-5 py-4">
    <button type="submit" class="btn btn-primary btn-lg" @click="uploadImage()">
      Submit
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "imageUpload",
  data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    uploadImage() {
      const address = this.address;
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };

      const URL = `${import.meta.env.VITE_API}image`;

      let data = new FormData();
      data.append("name", "my-picture");
      data.append("file", e.target.files[0]);
      data.append("body", address);
      let config = {
        header: {
          "Content-Type": "image/png",
        },
      };

      axios.post(URL, data, config).then((response) => {
        console.log("image upload response > ", response);
      });
    },
  },
};
</script>

<style>
.uploading-image {
  display: flex;
}
</style>

<!--
<script>
import axios from "axios";
export default {
  name: "imageUpload",
  data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    uploadImage() {
      const address = this.address;
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };

      const URL = `${import.meta.env.VITE_API}image`;

      let data = new FormData();
      data.append("name", "my-picture");
      data.append("file", e.target.files[0]);
      data.append("body", address);
      let config = {
        header: {
          "Content-Type": "image/png",
        },
      };

      axios.post(URL, data, config).then((response) => {
        console.log("image upload response > ", response);
      });
    },
  },
};
</script>

โค้ดที่คุณให้มานั้นเป็น Vue.js component ที่มีหน้าที่ทำการอัปโหลดไฟล์รูปภาพผ่าน API โดยใช้ Axios library และมีการแสดง preview ของรูปภาพที่เลือกในตัวแปร previewImage ด้วย FileReader.

นี้คือการอธิบายโค้ด:

import axios from "axios";: นำเข้า Axios library เพื่อทำ HTTP requests.

export default { ... }: ประกาศ Vue.js component และ export ตัวมันเอง.

name: "imageUpload",: กำหนดชื่อของ Vue component เป็น "imageUpload".

data() { return { previewImage: null, }; },: กำหนด data property ใน Vue instance ที่มีชื่อว่า previewImage เพื่อเก็บข้อมูลของรูปภาพที่เลือก.

methods: { ... }: กำหนด methods ที่ใช้ใน Vue component.

uploadImage() { ... }: Method ที่ใช้ในการอัปโหลดไฟล์รูปภาพ.

const address = this.address;: น่าจะมีคำผิดพลาด ที่ไม่มีการกำหนด this.address ใน data property ของ Vue instance. ควรปรับให้เป็น const address = this.$data.address; หรือต้องกำหนด address ใน data property ด้วย.

const image = e.target.files[0];: เก็บข้อมูลของไฟล์รูปภาพที่ถูกเลือก.

const reader = new FileReader();: สร้าง FileReader object เพื่ออ่านข้อมูลจากไฟล์.

reader.readAsDataURL(image);: ใช้ FileReader เพื่ออ่านข้อมูลและแปลงให้เป็น data URL ของไฟล์รูปภาพ.

reader.onload = (e) => { ... };: เมื่อการอ่านไฟล์เสร็จสิ้น, จะเก็บ data URL ที่ได้ไว้ใน this.previewImage เพื่อแสดง preview ของรูปภาพ.

const URL = ${import.meta.env.VITE_API}image;: สร้าง URL สำหรับส่งข้อมูลไปยัง API โดยใช้ environment variable ของ Vite (ดูไฟล์ .env).

let data = new FormData();: สร้าง FormData object เพื่อเก็บข้อมูลที่จะส่งไปยัง API.

data.append("name", "my-picture");: เพิ่มข้อมูล "name" ใน FormData.

data.append("file", e.target.files[0]);: เพิ่มไฟล์รูปภาพใน FormData.

data.append("body", address);: เพิ่มข้อมูล "body" (อาจจะต้องแก้ไขจาก address เป็นข้อมูลที่ถูกต้อง) ใน FormData.

let config = { header: { "Content-Type": "image/png", }, };: กำหนด configuration สำหรับ header ใน HTTP request.

axios.post(URL, data, config).then((response) => { ... });: ส่ง HTTP POST request ไปยัง API ด้วยข้อมูลที่อยู่ใน FormData และ configuration ที่กำหนด.

};: ปิด methods และ Vue instance.

โค้ดนี้ทำงานโดยการอัปโหลดไฟล์รูปภาพที่เลือกไปยัง API และแสดง preview ของรูปภาพนั้น. โปรดระวังตรง this.address ที่น่าจะต้องแก้ไขตามความต้องการของโปรเจค.





-->