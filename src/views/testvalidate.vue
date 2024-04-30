<template>
    <div class="root">
        <Banner />
        <h1 class="text-white mb-4 mt-2" style="background-color: rgb(171, 171, 171)">
            สมัครสมาชิกสมาคมศิษย์เก่าคณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร (ศวศ.)
        </h1>
        

        <p>
            <input type="text" placeholder="Email" v-model="state.email" />
            <span v-if="v$.email.$error">
                {{ v$.email.$errors[0].$message }}
            </span>
        </p>
        <p>
            <input type="password" placeholder="Password" v-model="state.password.password" />
            <span v-if="v$.password.password.$error">
                {{ v$.password.password.$errors[0].$message }}
            </span>
        </p>
        <p>
            <input type="password" placeholder="Confirm Password" v-model="state.password.confirm" />
            <span v-if="v$.password.confirm.$error">
                {{ v$.password.confirm.$errors[0].$message }}
            </span>
        </p>
        <button @click="submitForm">Submit</button>
    </div>
</template>



<script >
import useValidate from '@vuelidate/core'
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {
    setup() {

        const state = reactive({
            username:'',
            email: '',
            password: {
                password: '',
                confirm: '',
            },
        })

        const mustBeLearnVue = (value) => value.includes('learnvue')





        const rules = computed(() => {
            return {
                
                email: { required, email, mustBeLearnVue: helpers.withMessage('Must be @learnvue', mustBeLearnVue) },
                password: {
                    password: { required, minLength: minLength(6) , minLength: helpers.withMessage('ต้องมีมากกว่า  6 ตัว', minLength)  },
                    confirm: { required, sameAs: (state.password.password) },
                }
            }
        })

        const v$ = useValidate(rules, state)
        return {
            rules,
            state,
            v$
        }
    },


    methods: {
        submitForm() {
            this.v$.$validate() // checks all inputs
            if (!this.v$.$error) {
                // if ANY fail validation
                alert('Form successfully submitted.')
            } else {
                alert('Form failed validation')
            }
        },
    },
}


</script>
