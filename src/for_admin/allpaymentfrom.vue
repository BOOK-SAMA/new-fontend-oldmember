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
                <li class="nav-item">
                    <a class="nav-link" :href="`/admintoo/${this.id}`">หน้าหลัก</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admincreate">สร้าง User</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://graduation-silpakorn.azurewebsites.net/wp-admin/">แก้ไขหน้าเว็บ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="`/seeallproduct/${this.id}`">จัดการสินค้า</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="`/seeallorder`">ดูรายการสั่งซื้อต่างๆ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="`/seeallfrom`">ดูรายการแจ้งชำระเงินต่างๆ</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button class="btn  my-2 my-sm-0" type="submit" @click="handlelogout()">
                    ออกจากระบบ
                </button>
            </form>
        </div>
    </nav>


    <div style="margin-top: 2cm; height: fit-content; width: fit-content; margin-left: 2cm;">
        <select class="form-select" aria-label="Default select example" v-model="selectedOption">
            <option value="" disabled selected>เลือกดูแบบฟอร์ม</option>
            <option value="1">ดูรายการแจ้งชำระเงินสำหรับค่าสมาชิก</option>
            <option value="2">ดูรายการแจ้งชำระเงินสำหรับค่าสินค้าที่ระลึก</option>
        </select>
    </div>

    <div class="container table-responsive py-5">
        <showmembership v-if="selectedOption === '1'" />
        <showbuything v-if="selectedOption === '2'" />
    </div>

</template>




<script>
import showbuything from "/src/components/showbuything.vue"
import showmembership from "/src/components/showmembership.vue"

export default {
    components: {
        showbuything,
        showmembership
    },
    data() {
        return {
            selectedOption: "",
            id: localStorage.getItem("userid")
        };
    },
    methods: {
       handlelogout() {
			localStorage.removeItem("userid");
			localStorage.removeItem("tokenstring");
			localStorage.removeItem("uuid");
			 window.location.href = "https://graduation-silpakorn.azurewebsites.net/";
		},
    }
}
</script>
