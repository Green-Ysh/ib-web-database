import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as userApi from '@/api/user'

export const useUserStore = defineStore('user', () => {
  // state
  const username = ref('用户名')
  const avatar = ref('')
  
  // actions
  async function logout() {
    await userApi.logout()
    resetAll()
  }
  
  async function getUserInfo() {
    try {
      const { data } = await userApi.getUserInfo()
      if (!data) return
      
      const { username: name, avatar: pic } = data
      username.value = name
      avatar.value = pic
    } catch (error) {
      console.error('Failed to get user info:', error)
    }
  }
  
  function resetAll() {
    // Clear session storage
    sessionStorage.clear()
    
    // Reset all state
    username.value = '用户名'
    avatar.value = ''
  }
  
  return {
    // state
    username,
    avatar,
    
    // actions
    logout,
    getUserInfo,
    resetAll
  }
})
