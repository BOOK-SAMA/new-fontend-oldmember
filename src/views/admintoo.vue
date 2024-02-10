<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"
      ><img
        src="http://www.scsualumni.net/images/logo/resize-1482551623803.png"
        alt="Admin"
        class="rounded-circle p-1"
        width="40"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/"
            >หน้าแรก <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admincreate">สร้าง User</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admincreate">แก้ไขหน้าเว็บ</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button
          class="btn btn-secondary my-2 my-sm-0"
          type="submit"
          @click="handlelogout()"
        >
          LOGOUT
        </button>
      </form>
    </div>
  </nav>

  <table class="table mt-4">
    <thead>
      <tr>
        <th scope="col ">#</th>
        <th scope="col">Username</th>
        <th scope="col">Thainame</th>
        <th scope="col">ENGname</th>
        <th scope="col">PhoneNumber</th>
        <th scope="col">Role</th>
        <th scope="col">Paystatus</th>
        <th scope="col">Accressstatus</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(users, index) in users" :key="index">
        <td v-text="users.ID"></td>
        <td v-text="users.Username"></td>
        <td v-text="users.Thainame"></td>
        <td v-text="users.Engname"></td>
        <td v-text="users.Phonenumber"></td>
        <td v-text="users.Role"></td>
        <td v-text="users.Paystatus"></td>
        <td v-text="users.Accessstatus"></td>
        <td class="p-1">
          <router-link
            :to="{ path: '/update/' + users.ID + '/edit' }"
            class="btn btn-success btn-sm"
            >แก้ไข</router-link
          >
          <div class="b-example-divider p-1"></div>

          <router-link
            :to="{path: '/admintoo/' +  this.$route.params.id }"
            class="btn btn-success btn-sm"
            @click="dodelete(users.ID)"
            >ลบ
          </router-link>
          <div class="b-example-divider p-1"></div>
          <router-link
            :to="{ path: '/admintoo' }"
            class="btn btn-success btn-sm"
            @click="asdasd()"
            >ประวัติการสั่งซื้อ
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<!-- <script >
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "admintoo",
  data() {
    return {
      users: "",
    };
  },
  async mounted() {
		// Ensure user is authenticated and authorized
		await this.getMessage();
  },
  methods: {
    handlelogout() {
      localStorage.removeItem("userid");
      localStorage.removeItem("tokenstring");
      localStorage.removeItem("uuid");
      router.push({ path: "/loginadmin" });
    },
    async getMessage() {
      const response = await axios
        .post(
          `${import.meta.env.VITE_API2}admin/readall/` + userId,
          null,
          {
            headers: {
              // ตัวอย่าง Header (แก้ตามความเหมาะสม)
              Authorization: "Bearer " + localStorage.getItem("tokenstring"),
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          this.users = response.data.thing;
          console.log(this.users);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    dodelete(id) {
      axios
        .post(`${import.meta.env.VITE_API}delete/${id}`, {})
        .then((res) => {
          console.log(res);
        })
        .catch();
    },
  },
  created() {
    this.getMessage();
  },
};

// export default {

//   methods: {
//     async handleView() {
//       try {
//         const res = await axios.post("http://localhost:3333/readall");

//         console.log(res.data.thing);
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   },
// };

// export default {
//   setup() {
//     const res = ref(null);
//     axios
//       .post("http://localhost:3333/readall")
//       .then((data) => (res.value = data));
//     console.log(res);
//     return { res };
//   },
// };
</script> -->

<script>
import router from "@/router";
import axios from "axios";
export default {
  name: "Updateuser",
  data() {
    return {
     users:""
    };
  },

  async mounted() {
    // Ensure user is authenticated and authorized
    const id = this.$route.params.id;
    await this.Getuser(id);
  },
  methods: {
    handlelogout() {
      localStorage.removeItem("userid");
      localStorage.removeItem("tokenstring");
      localStorage.removeItem("uuid");
      router.push({ path: "/loginadmin" });
    },
    dodelete(id) {
      axios
        .post(`${import.meta.env.VITE_API2}admin/delete/${id}`, null ,{
          headers: {
							// ตัวอย่าง Header (แก้ตามความเหมาะสม)
							Authorization: "Bearer " + localStorage.getItem("tokenstring"),
							"Content-Type": "application/json",
						},
        })
        .then((res) => {
          if (res.status == 200){
             console.log(res);
             router.push({ path: "/admintoo/" + responseData.userid });
          }
          
        })
        .catch();
    },
    async Getuser(id) {
      const userId = localStorage.getItem("userid");
      if (id != userId) {
        localStorage.removeItem("userid");
        localStorage.removeItem("tokenstring");
        localStorage.removeItem("uuid");
        router.push({ path: "/loginadmin" });
      }
      try {
        const response = await axios.get(
					`${import.meta.env.VITE_API2}admin/readall` ,
          
					{
						headers: {
							// ตัวอย่าง Header (แก้ตามความเหมาะสม)
							Authorization: "Bearer " + localStorage.getItem("tokenstring"),
							"Content-Type": "application/json",
						},
					}
				);
        this.users = response.data.user
        console.log(response.data.user)
      } catch (error) {
        localStorage.removeItem("userid");
        localStorage.removeItem("tokenstring");
        localStorage.removeItem("uuid");
        router.push({ path: "/loginadmin" });
      }
    },
    
  },
};
</script>










 <!-- <div class="">
    <tr v-for="(users, index) in users" :key="index">
      <td v-text="users.ID"></td>
      <td v-text="users.Username"></td>
      <td v-text="users.Thainame"></td>
      <td v-text="users.ENGname"></td>
      <td v-text="users.PhoneNumber"></td>
      <td v-text="users.Role"></td>
      <td v-text="users.Paystatus"></td>
      <td>
        <button class="btn btn-success btn-sm">แก้ไข</button>
        <button class="btn btn-success btn-sm">ลบ</button>
      </td>
    </tr>
  </div> -->