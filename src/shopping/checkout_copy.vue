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
          <a class="nav-link" href="https://graduation-silpakorn.azurewebsites.net/">หน้าแรก <span
              class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a @click="router.push({ name: 'catalog' })" class="nav-link">
            ดูหน้ารายการสินค้า
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link">
            จำนวนสินค้าในตะกร้า: {{ productstore.cart.length }}
          </a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn  my-2 my-sm-0" type="submit" @click="handlelogout()">
          ออกจากระบบ
        </button>
      </form>
    </div>
  </nav>
  
 
  <div class="container" style="margin-top: 0.5cm;">
    <div class="divTable div-hover">

      <div class="rowTable bg-primary text-white pb-2">
        <div class="divTableCol">สินค้า</div>
        <div class="divTableCol">จำนวน</div>
        <div class="divTableCol">ราคา</div>
      </div>


      <div class="rowTable" v-for="item in productstore.cart" :key="item.ID">
        <div class="divTableCol">
          <div class="media">
            <a class="thumbnail pull-left mr-2">
              <img class="media-object" :src="item.image" style="width: 72px; height: 72px;" />
            </a>
            <div class="media-body">
              <h4 class="media-heading"><a href="#">{{ item.name }}</a></h4>
            </div>
          </div>
        </div>
        <div class="divTableCol">
          <h5>{{ item.quantity }}</h5>
        </div>
        <div class="divTableCol"><strong>{{ item.price }}</strong></div>
        <div class="divTableCol">
        </div>
      </div>
      ค่าส่งสินค้า : 100 บาท
      ราคารวม: {{ this.totalCartPrice }} บาท
    </div>
  </div>

  <form @submit.prevent="showrequest" style="margin-left: 6cm; height: fit-content; width: fit-content;">
    <h1>กรุณาตรวจสอบข้อมูลต่อไปนี้</h1>
    <div class="form-group">

      <label for="exampleInputEmail1">ชื่อภาษาไทย</label>
      <input type="text" class="form-control" v-model="state.thainame">
      <span v-if="v$.thainame.$error" class="text-danger fw-bold">
        {{ v$.thainame.$errors[0].$message }}
      </span>
    </div>
    <div class="form-group">

      <label for="exampleInputPassword1">ข้อมูลที่อยู่ปัจจุบัน</label>
      <textarea type="text" class="form-control" id="address" v-model="state.address">
      </textarea>
      <span v-if="v$.address.$error" class="text-danger fw-bold">
        {{ v$.address.$errors[0].$message }}
      </span>
    </div>
    <div class="form-group">

      <label for="exampleInputPassword1">จังหวัด</label>
      <input type="text" class="form-control" v-model="state.cityvalue">
      <span v-if="v$.cityvalue.$error" class="text-danger fw-bold">
        {{ v$.cityvalue.$errors[0].$message }}
      </span>
    </div>
    <div class="form-group">

      <label for="exampleInputPassword1">รหัสไปษณีย์</label>
      <input type="text" class="form-control" v-model="state.pincode">
      <span v-if="v$.pincode.$error" class="text-danger fw-bold">
        {{ v$.pincode.$errors[0].$message }}
      </span>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">เบอร์โทรศัพท์</label>
      <input type="tel" id="phone" name="phone" class="form-control" placeholder="กรอกเบอร์โทรศัพท์"
        v-model="state.phonenumber">
      <span v-if="v$.phonenumber.$error" class="text-danger fw-bold">
        {{ v$.phonenumber.$errors[0].$message }}
      </span>
    </div>
  </form>
  <button type="submit" class="btn btn-success" @click="showrequest()"
    style="margin-left: 6cm; height: fit-content; width: fit-content;">ยืนยัน</button>


</template>



<script>
import { computed, onMounted, ref, reactive } from "vue";
import { productsStore } from "/src/store/productnew.js";
import { useRoute, useRouter } from "vue-router";
import useValidate from '@vuelidate/core'
import { required, email, maxLength, helpers, sameAs, numeric, minLength } from '@vuelidate/validators'
import axios from "axios";
export default {
  setup() {
    const router = useRouter()
    const productstore = productsStore();
    const totalCartPrice = computed(() => {
      const cartTotal = productstore.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      return cartTotal + 100; // Adding 100 for shipping fee
    });

    const isEnglishOrThai = (value) => {
      // Regular expression to match English alphabetic characters, digits, and spaces
      const regex = /^[A-Za-z0-9\s/.]+$/;
      // Check if the value consists entirely of English alphabetic characters, digits, and spaces
      return regex.test(value);
    };

    const isThai = (value) => {
      // Regular expression to match Thai characters, digits, and spaces
      const thaiRegex = /^[\u0E00-\u0E7F0-9\s/.]+$/;
      // Check if the value consists entirely of Thai characters, digits, and spaces
      return thaiRegex.test(value);
    };

    const state = reactive({
      thainame: '',
      address: '',
      phonenumber: '',
      cityvalue: '',
      pincode: '',
    });

    const rules = computed(() => {
      return {
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
        email: {
          required: helpers.withMessage('กรุณาใส่ข้อมูล อีเมล ด้วยนะครับ', required),
          email: helpers.withMessage('กรุณาใส่ข้อมูล อีเมล ให้ตรงแบบฟอร์มด้วยนะครับ ', email)
        },
      }
    });

    const v$ = useValidate(rules, state);
    return {
      rules,
      state,
      v$,
      totalCartPrice,
      productstore,
      router
    };
  },
  methods: {
    handlelogout() {
			localStorage.removeItem("userid");
			localStorage.removeItem("tokenstring");
			localStorage.removeItem("uuid");
			 window.location.href = "https://graduation-silpakorn.azurewebsites.net/";
		},
    async profile(id) {
      try {
        // Make a second API call or perform additional actions here
        // Example:
        const secondApiResponse = await axios.post(
          `${import.meta.env.VITE_API2}users/profile/` + id,
          null,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("tokenstring"),
              "Content-Type": "application/json",
            },
          }
        );
        console.log(secondApiResponse);
        // Process the response from the second API as needed
        this.state.thainame = secondApiResponse.data.thing.Thainame;
        this.state.address = secondApiResponse.data.thing.Address;
        this.state.phonenumber = secondApiResponse.data.thing.Phonenumber;
        this.state.cityvalue = secondApiResponse.data.thing.City;
        this.state.pincode = secondApiResponse.data.thing.Pincode;
      } catch (error) {
        alert(error);
      }
    },
    async showrequest() {
      this.v$.$validate();
      if(this.productstore.cart.length <= 0){
        alert("ตะกร้าว่างเปล่า กรุณาตรวจสอบข้อมูลด้วยครับ");
        return;
      }

      if (this.v$.phonenumber.$error ||
        this.v$.thainame.$error ||
        this.v$.address.$error ||
        this.v$.cityvalue.$error ||
        this.v$.pincode.$error
      ) {
        alert("ข้อมูลไม่ครบครับ");
        return;
      } else {
        try {
          const userId = localStorage.getItem("userid");
          const thainame = this.state.thainame ;
          const phonenumber = this.state.phonenumber;
          const address = this.state.address ;
          const cityvalue = this.state.cityvalue;
          const pincode = this.state.pincode;
          const cart = this.productstore.cart;
          const apiEndpoint = `${import.meta.env.VITE_API2}Createdata`;
          // Log the details of the request before making the API call
          const totalCartPrice = this.totalCartPrice
          console.log("Totalprice:", JSON.stringify(totalCartPrice));


          const requestBody = {
            userId: String(userId),
            thainame,
            address,
            phonenumber,
            pincode ,
            cityvalue ,
            cart: cart.map(item => ({ itemID: item.ID, itemname: item.name, price: item.price, quantity: item.quantity })),
            totalCartPrice: String(totalCartPrice)
          }
          console.log("Body:", JSON.stringify(requestBody));

          // Make the actual API call
          const response = await fetch(apiEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Add any additional headers if needed
            },
            body: JSON.stringify(requestBody),
          });

          if (response.ok) {
            // API call was successful
            alert("ทำการสั่งซื้อสินค้าเรียบร้อยแล้ว อย่าลืมเค้าไปตรวจสอบในประวัติการสั่งซื้อนะครับ");
            window.location.href = "https://graduation-silpakorn.azurewebsites.net/";
            
          } else {
            // Handle errors
            console.error("Error submitting cart:", response);
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
    }
  },
  async mounted() {
    this.id = localStorage.getItem("userid");
    await this.profile(this.id);
  },
};
</script>



<style scoped>
.mr-2 {
  margin-right: 20px;
}

.divTable {
  display: table;
  width: 100%;
}

.rowTable {
  display: table-row;
}

.divTableHeading {
  display: table-header-group;
}

.divTableCol,
.divTableHead {
  border-bottom: 1px solid #eee;
  display: table-cell;
  padding: 3px 10px;
}

.divTableHeading {
  background-color: #EEE;
  display: table-header-group;
  font-weight: bold;
}

.divTableFoot {
  background-color: #EEE;
  display: table-footer-group;
  font-weight: bold;
}

.divTableBody {
  display: table-row-group;
}
</style>