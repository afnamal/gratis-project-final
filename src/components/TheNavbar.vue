<template>
  <div class="q-pa-md">
    <q-header elevated style="background-color: #4b0082">
      <q-tabs>
        <q-tab
          v-for="item in props.navItems"
          :key="item.id"
          :name="item.name"
          :label="item.name"
          style="text-transform: capitalize;"
        />
      </q-tabs>
    </q-header>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import { Navbar } from './models'

interface Props {
  navItems?: Navbar[];
}

const props = withDefaults(defineProps<Props>(), {
  navItems: () => []
})
</script>
