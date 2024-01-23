// store.ts

import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    counter: 0
  }),
  actions: {
    incrementCounter () {
      this.counter++
    }
  }
})
