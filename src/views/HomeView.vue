<template>
  <div>
    <div class="w-screen h-screen flex items-center justify-center flex-col">
      <div class="text-left mb-12">
        <img src="@/assets/logo.svg" alt="logo" />
      </div>
      <Card>
        <p v-if="unauthorized" class="text-red-500 font-medium mb-2 font-rubik">login xatolik!</p>

        <h4 class="mb-11 font-bold text-2xl leading-7">Kirish</h4>

        <form @submit.prevent="onSubmit">
          <label class="font-rubik font-medium text-sm uppercase tracking-wider" for="login"
            >LOGIN</label
          >
          <Input class="mt-2 mb-5" id="login" v-model="form.login" :error="v$.login.$error" />
          <label class="font-rubik font-medium text-sm uppercase" for="password">PAROL</label>
          <Input class="mt-2" id="password" v-model="form.password" :error="v$.password.$error" />

          <div class="w-full mt-5">
            <VueRecaptcha
              class="!scale-[calc(315_/_304)] !origin-[0_0]"
              sitekey="6LfjcaomAAAAAGpl5O8XghDalAilrcc9ElWP8pvK"
              :load-recaptcha-script="true"
              @verify="onSuccess"
              @error="onError"
            />
          </div>

          <Button class="mt-5">
            <div class="flex items-center justify-center gap-4">
              <div v-if="isLoading" class="spinner"></div>
              <span v-else> Kirish </span>
            </div>
          </Button>
        </form>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '@/components/Form/Input.vue'
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'
import { VueRecaptcha } from 'vue-recaptcha'
import instance from '@/plugins/axios'
import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

import { useMainStore } from '@/store'
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'

const store = useMainStore()

const router = useRouter()
const isLoading = ref(false)
const unauthorized = ref(false)
const isSucceed = ref(false)

const form = reactive({
  login: '',
  password: ''
})

const login = ref('')
const password = ref('')

const rules = {
  login: {
    required
  },
  password: {
    required
  }
}

const v$ = useVuelidate(rules, form)

const onSubmit = async () => {
  v$.value.$touch()

  if (isSucceed.value && !v$.value.$error) {
    unauthorized.value = false
    isLoading.value = true

    try {
      const { data } = await instance.post('/auth/login/', {
        username: form.login,
        password: form.password
      })

      store.setTokens({
        access_token: data.access,
        refresh_token: data.refresh
      })

      router.push('/admin/sponsors')
    } catch (err) {
      unauthorized.value = true
    } finally {
      isLoading.value = false
    }
  }
}

const onSuccess = () => {
  isSucceed.value = true
}

const onError = () => {}
</script>

<style scoped>
.spinner {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #1f203b 94%, #0000) top/3.8px 3.8px no-repeat,
    conic-gradient(#0000 30%, #0d0d1a);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 3.8px), #000 0);
  animation: spinner-c7wet2 0.6s infinite linear;
}

@keyframes spinner-c7wet2 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
