<template>
  <button @click="router.push({ name: 'catalog' })" class="btn btn-secondary">
    back to catalog
  </button>
  <div class="cart-items" @click="router.push({ name: 'catalog' })">
    <p>
      Item in Cart: {{ productstore.cart.length }}
    </p>
  </div>
  <!-- <div class="cart-item">
    <div class="cartitem" v-for="item in productstore.cart" :key="item.ID">

      <div class="item-detail">
        <div>
          <div class="product-image">
            <img :src="item.image" alt="">
          </div>
          <div class="product-details">
            <p>ชื่อสินค้า: {{ item.name }} </p>
            <p>ราคาสินค้า:{{ item.price }} </p>
            <button class="btn btn-sm btn-secondary" @click="decrement_quantity(item.ID)">-</button>
            <span class="mx-2">{{ item.quantity }}</span>
            <button class="btn btn-sm btn-secondary" @click="increment_quantity(item.ID)">+</button>
            <button class="btn btn-secondary" @click="removeformcart(item.ID)"></button>
          </div>

        </div>
      </div>

    </div>
    <router-link to="/checkout"> ยืนยัน </router-link>
  </div> -->

    <div class="container">
    <div class="divTable div-hover">
        
            <div class="rowTable bg-primary text-white pb-2">
                <div class="divTableCol">สินค้า</div>
                <div class="divTableCol"></div>
                         <div class="divTableCol">จำนวน</div>
                                  <div class="divTableCol"></div>
                <div class="divTableCol">ราคา</div>
                <div class="divTableCol">Actions</div>
            </div>
        
           
            <div class="rowTable" v-for="item in productstore.cart" :key="item.ID">
                <div class="divTableCol" >
                    <div class="media">
                        <a class="thumbnail pull-left mr-2" href="#">
                            <img class="media-object" :src="item.image" style="width: 72px; height: 72px;" />
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">{{item.name}}</a></h4>
                        </div>
                    </div>
                </div>
                <button class="btn btn-sm btn-secondary" @click="decrement_quantity(item.ID)">-</button>
                <div class="divTableCol">
                    <h5>{{ item.quantity }}</h5>
                </div>
                <button class="btn btn-sm btn-secondary" @click="increment_quantity(item.ID)">+</button>
                <div class="divTableCol"><strong>{{item.price}}</strong></div>
                <div class="divTableCol">
                    <button type="button" class="btn btn-danger text-white" @click="removeformcart(item.ID)"><span class="fa fa-remove"></span> ลบ</button>
                </div>
            </div>
                <div class="divTableCol">
                 
                  <router-link to="/checkout" class="btn btn-sm btn-primary"> ยืนยัน </router-link>
                </div>
            </div>        
    </div>
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "cart",
});
//27.43
</script>

<script setup>
import catalog from "/src/shopping/catalog.vue";
import { computed, onMounted } from "vue";
import { productsStore } from "/src/store/productnew.js";
import { useRoute, useRouter } from "vue-router";
const quantity = 0
const productstore = productsStore()
const router = useRouter()
const route = useRoute()
const removeformcart = (id) => {
  productstore.removeFromCart(id)
}
const decrement_quantity = (id) => {
  productstore.decrement_quantity(id)
}
const increment_quantity = (id) => {
  productstore.increment_quantity(id)
}

const userId = localStorage.getItem("userid");

</script>
<style scoped>
.mr-2{
  margin-right: 20px;
}

.divTable{
	display: table;
	width: 100%;
}
.rowTable {
	display: table-row;
}
.divTableHeading {
	display: table-header-group;
}
.divTableCol, .divTableHead {
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