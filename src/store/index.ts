import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface AuthTokens {
  access_token: string
  refresh_token: string
}

export const useMainStore = defineStore('main', () => {
  const access_token = ref(localStorage.getItem('access_token'))
  const refresh_token = ref(localStorage.getItem('refresh_token'))

  const getTokens = computed(() => {
    return {
      access_token: access_token.value,
      refresh_token: refresh_token.value
    }
  })

  const isAuthenticated = computed(() => {
    return !(!access_token.value && !refresh_token.value)
  })

  const setTokens = (tokens: AuthTokens) => {
    localStorage.setItem('access_token', tokens.access_token)
    localStorage.setItem('refresh_token', tokens.refresh_token)
    access_token.value = tokens.access_token
    refresh_token.value = tokens.refresh_token
  }

  const logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    access_token.value = null
    refresh_token.value = null
  }

  return {
    getTokens,
    setTokens,
    isAuthenticated,
    logout
  }
})
