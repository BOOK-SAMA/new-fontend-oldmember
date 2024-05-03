import { createRouter, createWebHistory } from 'vue-router'
import home from '/src/views/HomePage.vue'
import register from '/src/views/testvalidate.vue'
import loginUser from '/src/views/loginpage.vue'
import admin from '/src/views/loginadmin.vue'
import NotFound from '/src/views/notfound.vue'
import admintoo from '/src/views/admintoo.vue'
import admincreatefrom from '/src/views/admincreatefrom.vue'
import updateadminfrom from '/src/views/adminupdate.vue'
import emailform    from '/src/views/sentemail.vue'
import notpay from '/src/views/notpay.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/emailform',
      name: 'emailform',
      component: emailform
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
      path: "/:notpay",
      component: notpay,
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
      component: () => import('../views/profile.vue'),
      meta: { requiresAuth: true }, // เพิ่ม meta field เพื่อบอกว่าหน้านี้ต้องการ authentication
    },
    {
      path: '/catalog',
      component: () => import('../shopping/mainshopping.vue'),
      name: 'catalog',
      meta: { requiresAuth: true }
      // เพิ่ม meta field เพื่อบอกว่าหน้านี้ต้องการ authentication
    },
    {
      path: '/productdetail/:id',
      component: () => import('../shopping/productdetail.vue'),
      name: 'productdetail',
      meta: { requiresAuth: true }
      // เพิ่ม meta field เพื่อบอกว่าหน้านี้ต้องการ authentication
    },
    {
      path: '/cart',
      component: () => import('../shopping/cart.vue'),
      name: 'cart',
      meta: { requiresAuth: true }
      // เพิ่ม meta field เพื่อบอกว่าหน้านี้ต้องการ authentication
    },
    {
      path: '/checkout',
      component: () => import('../shopping/checkout.vue'),
      name: 'checkout',
      // meta: { requiresAuth: true }

    },
    {
      path: '/orderdetail/:id/:ordernumber',
      component: () => import('../shopping/userorder-detail.vue'),
      name: 'checkorderdetail',
    },
    {
      path: '/orderhistory/:id',
      component: () => import('/src/shopping/user-order.vue'),
      name: 'checkorder',
    },
    {
      path: `/updateuser/:id/edit`,
      component: () => import('/src/views/userupdate.vue'),
      name: 'userupdate',
      meta: { requiresAuth: true }
    },
    {
      path: `/seeallproduct/:id/`,
      component: () => import('/src/product/producttool.vue'),
      name: 'seeallproduct',
    },
    {
      path: `/:id/updateproduct/:itemid/edit`,
      component: () => import('/src/product/updateproduct.vue'),
      name: 'productupdate',
    },
    {
      path: `/addproduct`,
      component: () => import('/src/product/addproduct.vue'),
      name: 'addproduct',
    },
    {
      path: `/seeallorder`,
      component: () => import('/src/views/allorder.vue'),
      name: 'seeallorder',
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // ตรวจสอบว่ามีข้อมูลผู้ใช้ใน localStorage หรือไม่
    const userId = localStorage.getItem('userid');
    const tokenString = localStorage.getItem('tokenstring');
    console.log(userId)
    console.log(tokenString)



    if (userId == null || tokenString == null) {
      // ถ้าไม่มีข้อมูลผู้ใช้, ทำการ redirect ไปยังหน้า home
      localStorage.removeItem("userid");
      localStorage.removeItem("tokenstring");
      localStorage.removeItem("uuid");
      window.location.href = "https://mytestsilpakorn.azurewebsites.net/";
    } else {
      next();
    }

  } else {
    // หน้าที่ไม่ต้องการ authentication, ไปต่อไป
    next();
  }
});
export default router
