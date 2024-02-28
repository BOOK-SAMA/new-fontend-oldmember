import { createRouter, createWebHistory } from 'vue-router'
import home from '/src/views/HomePage.vue'
import register from '/src/views/register.vue'
import loginUser from '/src/views/loginpage.vue'
import admin from '/src/views/loginadmin.vue'
import NotFound from '/src/views/notFound.vue'
import admintoo from '/src/views/admintoo.vue'
import admincreatefrom from '/src/views/admincreatefrom.vue'
import updateadminfrom from '/src/views/adminupdate.vue'
import catalog from '/src/views/home_product.vue'
//หน้ารายละเอียดสินค้า
import product_detail from '/src/views/product_detail.vue'
//หน้าตะกร้าสินค้า
import cart_cart from '/src/views/cart.vue'
import mainshopping from '/src/views/mainshopping.vue'
import checkout from '/src/views/checkout.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/loginadmin',
      name: 'loginadmin',
      component: admin,
    },
    {
      path: "/:notFound",
      component: NotFound,
    },
    {
      path: '/admintoo/:id',
      name: 'admintoo',
      component: admintoo,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: loginUser
    },
    {
      path: '/admincreate',
      name: 'admincreate',
      component: admincreatefrom,
      meta: { requiresAuth: true },
    },
    {
      path: '/update/:id/edit',
      name: 'update',
      component: updateadminfrom
    },
    {
      path: '/profile/:id',
      component: () => import('../views/Profile.vue'),
      meta: { requiresAuth: true }, // เพิ่ม meta field เพื่อบอกว่าหน้านี้ต้องการ authentication
    },
    {
      path: '/test',
      name: 'catalog',
      component: mainshopping
    },
    {
      path: '/product_detail/:id',
      name: 'product_detail',
      component: product_detail
    },
    {
      path: '/cart',
      name: 'cart_cart',
      component: cart_cart
    },
    {
      path: '/testnet',
      name: 'checkout',
      component: checkout
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // ตรวจสอบว่ามีข้อมูลผู้ใช้ใน localStorage หรือไม่
    const userId = localStorage.getItem('userid');
    const tokenString = localStorage.getItem('tokenstring');

    if (!userId || !tokenString) {
      // ถ้าไม่มีข้อมูลผู้ใช้, ทำการ redirect ไปยังหน้า home
      localStorage.removeItem("userid");
      localStorage.removeItem("tokenstring");
      localStorage.removeItem("uuid");
      next('/:notfound');
    } else {
      next();
    }

  } else {
    // หน้าที่ไม่ต้องการ authentication, ไปต่อไป
    next();
  }
});
export default router
