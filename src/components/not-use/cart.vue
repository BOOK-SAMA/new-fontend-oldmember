<template>
  <div>
    <ul>
      <section class="h-100 h-custom" style="background-color: #eee;">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card">
                <div class="card-body p-4">

                  <div class="row">

                    <div class="col">


                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p class="mb-1">Shopping cart</p>
                          <p class="mb-0">You have {{ cartLength }} items in your cart</p>
                        </div>
                        <div>
                          <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price
                              <i class="fas fa-angle-down mt-1"></i></a></p>
                        </div>
                      </div>
                      <li v-for="item in cart" :key="item.id">
                        <div class="card mb-3 mb-lg-0">
                          <div class="card-body">
                            <div class="d-flex justify-content-between">
                              <div class="d-flex flex-row align-items-center">
                                <div>
                                  <img :src="item.image" class="img-fluid rounded-3" alt="Shopping item"
                                    style="width: 65px;">
                                </div>
                                <div class="ms-3">
                                  <h5> {{ item.name }}</h5>
                                </div>
                              </div>
                              <div class="d-flex flex-row align-items-center">
                                <div style="width: 50px;">
                                  <h5 class="fw-normal mb-0">{{ this.thing }}</h5>
                                  <button @click="increment"> + </button>
                                  <button @click="decrement"> - </button>
                                </div>
                                <div style="width: 80px;">
                                  <h5 class="mb-0">{{ item.price }} บาท</h5>
                                </div>
                                <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div class="card bg-primary text-white rounded-3">
                      <div class="card-body">


                        <button type="button" class="btn btn-info btn-block btn-lg">
                          <div class="d-flex justify-content-between">
                            <div>ยืนยันการสั่งซื้อ </div>
                          </div>
                        </button>

                      </div>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
    thing: 1 ,
  },
  computed: {
    cartLength() {
      return this.cart.length;
    }
  },
  increment() {
    this.$emit('update:item', { ...this.item, quantity: this.item.quantity + 1 });
  },
  decrement() {
    if (this.item.quilete > 0) {
      this.$emit('update:item', { ...this.item, quantity: this.item.quantity - 1 });
    }
  }
}
</script>
  