<template>
    <button @click="router.push({ name: 'catalog' })" class="btn btn-secondary">
        กลับไปยังหน้าเลือกสินค้า
    </button>
    <div class="col-sm-12 col-md-12 mt-4">
        <h2>สินค้าในตะกร้า</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>ชื่อของสินค้า</th>
                    <th>ราคา</th>
                    <th>จำนวน</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cartItems" :key="item.ID">
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.quantity }}</td>
                </tr>
            </tbody>
        </table>
        <h2>ราคารวมทั้งหมด : {{ totalCartPrice }}</h2>
        <h2>ค่าส่ง : 100 บาท</h2>
    </div>
    <div class="col-sm-12 col-md-12">
        <h1>กรุณากรอกข้อมูลต่อไปนี้</h1>
    </div>
    <div class="col-sm-12 col-md-4 col-md-offset-0">
        <form @submit.prevent="showrequest">
            <div class="form-group">
                <span v-if="v$.thainame.$error" class="text-danger fw-bold">
                    {{ v$.thainame.$errors[0].$message }}
                </span>
                <label for="name">คำนำหน้าชื่อ - ชื่อ - นามสกุล</label>
                <input type="text" class="form-control" id="name"
                    placeholder="(เว้นวรรคระหว่างชื่อนามกับนามสกุล) ภาษาไทย" v-model="state.thainame" />
            </div>
            <div class="form-group">
                <span v-if="v$.address.$error" class="text-danger fw-bold">
                    {{ v$.address.$errors[0].$message }}
                </span>
                <label for="address">ข้อมูลที่อยู่ปัจจุบัน</label>
                <textarea type="text" class="form-control" id="address" v-model="state.address"></textarea>
            </div>
            <div class="form-group">
                <span v-if="v$.phonenumber.$error" class="text-danger fw-bold">
                    {{ v$.phonenumber.$errors[0].$message }}
                </span>
                <label for="phone">เบอร์โทรศัพท์</label>
                <input type="tel" id="phone" name="phone" class="form-control" placeholder="กรอกเบอร์โทรศัพท์"
                    v-model="state.phonenumber" />
            </div>
            <button type="submit" class="btn btn-success" @click="showrequest">ยืนยัน</button>
        </form>
    </div>
</template>


<script>
import { ref, reactive, computed } from "vue";
import axios from "axios";
import useValidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import catalog from "/src/shopping/catalog.vue";
import { computed, onMounted, ref } from "vue";
import { productsStore } from "/src/store/productnew.js";
import { useRoute, useRouter } from "vue-router";

export default {
    setup(props, { emit }) {
        const state = reactive({
            thainame: '',
            address: '',
            phonenumber: '',
        });

        const rules = computed(() => ({

            thainame: {
                required: helpers.withMessage('กรุณาใส่ข้อมูล ชื่อภาษาไทย ด้วยนะครับ', required),
                isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai)
            },

            address: {
                required: helpers.withMessage('กรุณาใส่ข้อมูล ที่อยู่ ด้วยนะครับ', required),
                isThai: helpers.withMessage('กรุณาใส่ข้อมูลเป็นภาษาไทยเท่านั้น', isThai)
            },

            phonenumber: {
                required: helpers.withMessage('กรุณาใส่ข้อมูล เบอร์โทรศัพท์ ด้วยนะครับ', required),
                numeric: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขเท่านั่นนะครับ ', numeric),
                maxLength: helpers.withMessage('กรุณาใส่เฉพาะตัวเลขจำนวน 10 ตัวเท่านั่นนะครับ ', maxLength(10)),
                minLength: helpers.withMessage(' กรุณาใส่ตัวเลขให้ครบ 10 ตัวด้วยครับ', minLength(10))
            },


        }));

        const v$ = useValidate(rules, state);

        const showrequest = async () => {
            try {


                const cart = productsStore.cart;

                const apiEndpoint = `${import.meta.env.VITE_API2}Createdata`;

                // Log the details of the request before making the API call
                const totalCartPrice = cart.reduce((total, item) => {
                    return total + item.price * item.quantity;
                }, 0);
                console.log("Totalprice:", JSON.stringify(totalCartPrice));


                const requestBody = {
                    userId: String(userId),
                    thainame,
                    address,
                    phonenumber,

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

                } else {
                    // Handle errors
                    alert("Error submitting cart:", response);
                }
            } catch (error) {
                alert("An error occurred:", error);
            }
        };

        return {
            state,
            v$,
            submit,
            showrequest
            
        };
    },
};
</script>
