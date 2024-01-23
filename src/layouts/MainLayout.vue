<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <component-link
          v-for="link in componentLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ComponentLink, {
  ComponentLinkProps
} from 'components/ComponentLink.vue'

const componentLinks: ComponentLinkProps[] = [
  {
    title: 'Faruk 1',
    caption: '',
    icon: 'record_voice_over',
    link: '/comp1'
  },
  {
    title: 'Faruk 2',
    caption: '',
    icon: 'record_voice_over',
    link: '/comp2'
  },
  {
    title: 'Faruk 3',
    caption: '',
    icon: 'record_voice_over',
    link: '/comp3'
  },
  {
    title: 'Faruk 4',
    caption: '',
    icon: 'record_voice_over',
    link: '/comp4'
  },
  {
    title: 'Yakup 1',
    caption: '',
    icon: 'record_voice_over',
    link: '/comp5'
  },
  {
    title: 'Yakup 2',
    caption: '',
    icon: 'record_voice_over',
    link: '/comp6'
  },
  {
    title: 'Yakup 3',
    caption: '',
    icon: 'record_voice_over',
    link: '/comp7'
  },
  {
    title: 'Yakup 4',
    caption: '',
    icon: 'record_voice_over',
    link: '/comp8'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
