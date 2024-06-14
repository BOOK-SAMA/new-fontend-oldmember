<template>
  <div class="container-sm mt-5">
    <form>
      <banner />
      <div class="form-outline mb-4 mt-2">
        <enteremail v-if="!isEmailSubmitted" @email-submitted="handleEmailSubmitted" />
        <enterotp v-if="isEmailSubmitted && !isOtpVerified" @otp-verified="handleOtpVerified" />
        <resetpassword v-if="isOtpVerified" />
      </div>
    </form>
  </div>
</template>

<script>
import banner from "/src/components/Banner.vue";
import enteremail from "/src/components/enteremail.vue";
import enterotp from "/src/components/enterotp.vue";
import resetpassword from "/src/components/resetpassword.vue";

export default {
  components: {
    banner,
    enteremail,
    enterotp,
    resetpassword,
  },
  data() {
    return {
      isEmailSubmitted: false,
      isOtpVerified: false,
    };
  },
  methods: {
    handleEmailSubmitted() {
      this.isEmailSubmitted = true;
    },
    handleOtpVerified() {
      this.isOtpVerified = true;
    },
  },
};
</script>
