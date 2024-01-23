<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <q-btn class="girisbtn" label="GİRİŞ YAP" @click="goToLoginPage" rounded style="height: 45px;width: 8%; margin-left: 1200px; color:white;margin-top:10px; background-color: purple; font-size: medium;" />

      <NavBarMenu/>

      <router-view />
      <TheFooter/>
      <TheBottom/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import NavBarMenu from 'src/components/NavbarMenu.vue'
import TheFooter from 'components/TheFooter.vue'
import TheBottom from 'components/TheBottom.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLoginPage = () => {
  router.push('/login')
}

</script>
