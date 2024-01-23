<template>
  <div class="q-pa-md">
    <q-header elevated style="background-color: #4b0082">

      <q-tabs
      >
        <q-tab
          v-for="item in navItems"
          :key="item.name"
          :name="item.name"
          :label="item.name"
          style="text-transform: capitalize;"

        >
        <menu-component v-if="item.id == 1" />
      </q-tab>

      </q-tabs>

    </q-header>
  </div>
</template>

<script setup lang="ts">
import { Navbar } from 'components/models'
import { ref } from 'vue'
import MenuComponent from './MenuCOmponent.vue'

const navItems = ref<Navbar[]>([
  {
    id: 1,
    name: 'Makyaj'
  },
  {
    id: 2,
    name: 'Cilt Bakım'
  },
  {
    id: 3,
    name: 'Saç Bakım'
  },
  {
    id: 4,
    name: 'Parfüm & Deodorant'
  },
  {
    id: 5,
    name: 'Erkek Bakım'
  },
  {
    id: 6,
    name: 'Kişisel Bakım'
  },
  {
    id: 7,
    name: 'Anne & Bebek'
  },
  {
    id: 8,
    name: 'Ev & Yaşam'
  },
  {
    id: 9,
    name: 'Moda & Aksesuar'
  },
  {
    id: 10,
    name: 'Süpermarket'
  },
  {
    id: 11,
    name: 'Elektrikli Ürünler'
  }
])
</script>
