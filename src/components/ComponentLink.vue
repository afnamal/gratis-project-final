<template>
  <router-link :to="link">
    <q-item tag="a" target="_blank">
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>{{ caption }}</q-item-label>
      </q-item-section>
    </q-item>
  </router-link>
</template>

<script setup lang="ts">
export interface ComponentLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}
withDefaults(defineProps<ComponentLinkProps>(), {
  caption: '',
  link: '#',
  icon: ''
})
</script>
