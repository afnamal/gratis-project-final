import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    submitCount: 0
  }),
  actions: {
    incrementSubmitCount () {
      this.submitCount++
    }
  }
})
