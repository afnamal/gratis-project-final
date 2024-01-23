import { boot } from 'quasar/wrappers'

import { initializeApp } from 'firebase/app'

import { getFirestore } from "firebase/firestore"; // eslint-disable-line
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyD8BiC451j5F1VC3FXi27RAlKg6tijw5Jc',
  authDomain: 'quasargratis-98054.firebaseapp.com',
  projectId: 'quasargratis-98054',
  storageBucket: 'quasargratis-98054.appspot.com',
  messagingSenderId: '813462706547',
  appId: '1:813462706547:web:64fbd91b752bb115054d06',
  measurementId: 'G-T6G52LPYY1'
}

const fapp = initializeApp(firebaseConfig)

const db = getFirestore(fapp)

import { getStorage } from 'firebase/storage'
const storage = getStorage(fapp)
export { storage }

export default boot(async ({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$db = db
  // ^ ^ ^ this will allow you to use this.$db (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$Firebaseapp = fapp
  // ^ ^ ^ this will allow you to use this.$Firebaseapp (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})
export { fapp }
export { db }
