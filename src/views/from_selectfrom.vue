<template>
    <div>

        <select id="selectMenu" class="form-select" aria-label="Default select example" @change="toggleDiv">
            <option selected value="default">เลือก ชนิดแบบฟอร์ม</option>
            <option value="1">แบบฟอร์มสำหรับแจ้งชำระเงินค่าสินค้าที่ระลึก</option>
            <option value="2">แบบฟอร์มสำหรับแจ้งชำระเงินค่าสมาชิก</option>
        </select>

        <div v-if="showBuyFrom" id="buyFromContainer" class="container"
            style="width: 30cm; height: 30cm; position: absolute; margin-top: 6cm; margin-left: 6cm;">
            <buyfrom />
        </div>
        <div v-if="showmemberfrom" id="buyFromContainer" class="container"
            style="width: 30cm; height: 30cm; position: absolute; margin-top: 6cm; margin-left: 6cm;">
            <memberfrom />
        </div>
    </div>
</template>

<script>
import buyfrom from "/src/components/from_buything.vue";
import memberfrom from "/src/components/from_membership.vue";
export default {
    components: {
        buyfrom,
        memberfrom
    },
    data() {
        return {
            showBuyFrom: false ,
            showmemberfrom: false
        };
    },
    methods: {
        toggleDiv(event) {
            this.showBuyFrom = event.target.value === '1';
            this.showmemberfrom = event.target.value === '2' ;
        }
    }
}
</script>

<style>
.hidden {
    display: none;
}
</style>
