import { createRouter, createWebHistory } from 'vue-router'
import home from '/src/views/HomePage.vue'
import register from '/src/views/register.vue'
import loginUser from '/src/views/loginpage.vue'
import admin from '/src/views/loginadmin.vue'
import NotFound from '/src/views/notFound.vue'
import admintoo from '/src/views/admintoo.vue'
import admincreatefrom from '/src/views/from.vue'
import updateadminfrom from '/src/views/updatefrom.vue'

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
      name: 'test',
      component: updateadminfrom
    },
    {
      path: '/profile/:id',
      component: () => import('../views/Profile.vue'),
      meta: { requiresAuth: true }, // เพิ่ม meta field เพื่อบอกว่าหน้านี้ต้องการ authentication
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