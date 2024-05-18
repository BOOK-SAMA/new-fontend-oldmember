import { createRouter, createWebHistory } from 'vue-router'
import home from '/src/views/HomePage.vue'
import register from '/src/views/registerpage.vue'
import loginUser from '/src/views/loginpage.vue'
import admin from '/src/views/loginadmin.vue'
import NotFound from '/src/views/notfound.vue'
import admintoo from '/src/views/admintoo.vue'
import admincreatefrom from '/src/views/admincreatefrom.vue'
import updateadminfrom from '/src/views/adminupdate.vue'
import emailform    from '/src/views/sentemail.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    // ========== สำหรับไม่ login
    {
      path: '/register',
      name: 'register',
      component: register
      // ต้องทำการแก้ไข
    },
    {
      path: '/login',
      name: 'login',
      component: loginUser
      // ต้องทำการแก้ไข
    },
    {
      path: '/loginadmin',
      name: 'loginadmin',
      component: admin,
    },
    {
      path: '/emailform',
      name: 'emailform',
      component: emailform
      // ต้องทำการแก้ไข
    }, 
    {
      path: "/:notFound",
      component: NotFound,
    },
    // ========== สำหรับใช้ได้ก็ต่อเมื่อ user login เท่านั่น 
    {
      // ต้องทำการแก้ไข
      path: '/profile/:id',
      component: () => import('../views/profile.vue'),
      //meta: { requiresAuth: true }, // เพิ่ม meta field เพื่อบอกว่าหน้านี้ต้องการ authentication
    },
    {
      // ต้องทำการแก้ไข
      path: `/updateuser/:id/edit`,
      component: () => import('/src/views/userupdate.vue'),
      name: 'userupdate',
      meta: { requiresAuth: true }
    },
    {
      path: '/catalog',
      component: () => import('../shopping/mainshopping.vue'),
      name: 'catalog',
      meta: { requiresAuth: true }
      
    },
    {
      path: '/productdetail/:id',
      component: () => import('../shopping/productdetail.vue'),
      name: 'productdetail',
      meta: { requiresAuth: true }
     
    },
    {
      // ต้องทำการแก้ไข
      path: '/cart',
      component: () => import('../shopping/cart.vue'),
      name: 'cart',
      meta: { requiresAuth: true }
     
    },
    {
      // ต้องทำการแก้ไข
      path: '/checkout',
      component: () => import('../shopping/checkout.vue'),
      name: 'checkout',
      meta: { requiresAuth: true }

    },
    {
      path: '/orderdetail/:id/:ordernumber',
      component: () => import('../shopping/userorder-detail.vue'),
      name: 'checkorderdetail',
      meta: { requiresAuth: true }
    },
    {
      // ต้องทำการแก้ไข
      path: '/orderhistory/:id',
      component: () => import('/src/shopping/user-order.vue'),
      name: 'checkorder',
      meta: { requiresAuth: true }
    },
    // ========== สำหรับใช้ได้ก็ต่อเมื่อ admin login เท่านั่น 
    {
      path: '/admintoo/:id',
      name: 'admintoo',
      component: admintoo,
      meta: { requiresAuth: true }
    },
    {
      path: '/admincreate',
      name: 'admincreate',
      component: admincreatefrom,
      meta: { requiresAuth: true },
      // ต้องทำการแก้ไข
    },
    {
      path: '/update/:id/edit',
      name: 'update',
      component: updateadminfrom
      // ต้องทำการแก้ไข
    },
    /////////////////////////////
    {
      path: `/seeallproduct/:id/`,
      component: () => import('/src/product/producttool.vue'),
      name: 'seeallproduct',
      meta: { requiresAuth: true }
    },
    {
      // ต้องทำการแก้ไข
      path: `/addproduct`,
      component: () => import('/src/product/addproduct.vue'),
      name: 'addproduct',
      meta: { requiresAuth: true }
    },
    {
      // ต้องทำการแก้ไข
      path: `/:id/updateproduct/:itemid/edit`,
      component: () => import('/src/product/updateproduct.vue'),
      name: 'productupdate',
      meta: { requiresAuth: true }
    },
    ///////////////////////////////////
    {
      path: `/seeallorder`,
      component: () => import('/src/views/allorder.vue'),
      name: 'seeallorder',
      meta: { requiresAuth: true }
    },
    {
      // ต้องทำการแก้ไข
      path: `/seeoneorder/:uniqueorder/`,
      component: () => import('/src/views/vieworder.vue'),
      name: 'seeoneorder',
      meta: { requiresAuth: true }
    },
    { 
      // ต้องทำการแก้ไข
      path: `/editorder/:uniqueorder/`,
      component: () => import('/src/views/updateorder.vue'),
      name: 'editorder',
      meta: { requiresAuth: true }
    },
    ///////////////////////////////////
    {
      path: '/seeallfrom',
      component: () => import('../views/allpaymentfrom.vue'),
      meta: { requiresAuth: true }, 
    },
    {
      // ต้องทำการแก้ไข
      path: '/editpaymentfrom/:id',
      component: () => import('../views/editpaymentfrom.vue'),
      meta: { requiresAuth: true }, 
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
      alert("คุณยังไม่ได้เข้าสู่ระบบ รบกวนเข้าสู่ระบบก่อนนะครับ")
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
