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
          <Input class="mt-2 mb-5" id="login" v-model="login" />
          <label class="font-rubik font-medium text-sm uppercase" for="password">PAROL</label>
          <Input class="mt-2" id="password" v-model="password" />

          <div class="w-full mt-5">
            <VueRecaptcha
              class="!scale-[calc(320_/_304)] !origin-[0_0]"
              sitekey="6LfjcaomAAAAAGpl5O8XghDalAilrcc9ElWP8pvK"
              :load-recaptcha-script="true"
              @verify="onSuccess"
              @error="onError"
            />
          </div>

          <Button class="mt-5" />
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
import { useMainStore } from '@/store'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const store = useMainStore()
const login = ref('')
const password = ref('')
const router = useRouter()
const unauthorized = ref(false)

const onSubmit = async () => {
  unauthorized.value = false

  try {
    const { data } = await instance.post('/auth/login/', {
      username: login.value,
      password: password.value
    })

    store.setTokens({
      access_token: data.access,
      refresh_token: data.refresh
    })

    router.push('/sponsors')
  } catch (err) {
    unauthorized.value = true
  }
}

const onSuccess = () => {}

const onError = () => {}
</script>
