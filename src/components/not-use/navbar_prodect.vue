<template>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">สินค้าที่ระลึก</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <routerLink to="/" class="nav-link" aria-current="page">หน้าแรก</routerLink>
                    </li>
                    <li class="nav-item">
                        <routerLink to="/cart" class="nav-link" aria-current="page">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-cart" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                            ตะกร้าสินค้า
                        </routerLink>
                    </li>
                </ul>
                <div class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="ค้นหาเลย.." aria-label="Search"
                        v-model="product_store.input">
                </div>
            </div>
        </div>
    </nav>
</template>


<script setup>
import { useProductStore } from '../../store/not-use/product';

const product_store = useProductStore()

</script>

<style lang="scss" scoped></style>