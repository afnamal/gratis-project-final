<template>
  <div class="q-pa-md row justify-between">
    <q-footer bordered class="bg-grey-3 text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey-8"
        style="background-color: #4b0082"
      >
        <q-img
          class="col"
          src="/src/assets/logoGratis.svg"
          style="max-width: 12%; height: 100%; object-fit: contain"
        />
        <q-tab
          v-for="item in items"
          :key="item.id"
          :name="item.name"
          :label="item.name"
          style="color: antiquewhite"
        />
      </q-tabs>
    </q-footer>
  </div>
</template>

<script setup lang="ts">
import { BottomItem } from 'components/models'
import { ref } from 'vue'

const items = ref<BottomItem[]>([

  {
    id: 2,
    name: 'Copyright © 2015, Gratis A.Ş '
  },
  {
    id: 3,
    name: 'Gizlilik ve Çerez'
  },
  {
    id: 3,
    name: 'Kullanım Koşulları'
  },
  {
    id: 4,
    name: 'Bilgi Toplumu Hizmetleri'
  },
  {
    id: 5,
    name: 'Yasal Uyarı KVKK Aydınlatma Metni'
  }
])
</script>
