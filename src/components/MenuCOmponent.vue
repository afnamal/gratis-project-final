<template>
  <q-menu>
    <q-list style="min-width: 100px">
      <q-item
        v-close-popup
        style="background-color: #555252; color: white; opacity: 0.8"
      >
        <div class="q-mr-xl row">
          <div>
            <div v-for="item in itemOne" :key="item.id" style="cursor: pointer">
              <q-item-section v-if="item.id == 1" style="font-weight: bold">{{
                item.name
              }}</q-item-section>
              <q-item-section v-if="item.id != 1">{{ item.name }}</q-item-section>
            </div>
          </div>
          <div>
            <div v-for="item in itemTwo" :key="item.id" style="cursor: pointer">
              <q-item-section v-if="item.id == 1" style="font-weight: bold">{{
                item.name
              }}</q-item-section>
              <q-item-section v-if="item.id != 1">{{ item.name }}</q-item-section>
            </div>
          </div>
        </div>
        <!-- Diğer item listelerini buraya ekleyin -->
      </q-item>
    </q-list>
  </q-menu>
</template>

<script setup lang="ts">
import { NavBarMenu } from 'components/models'
import { ref } from 'vue'

const createItem = (id: number, name: string) => ({ id, name })

const itemOne = ref<NavBarMenu[]>([
  createItem(1, 'Dudak Makyajı'),
  createItem(2, 'Ruj')
  // ... diğer öğeler
])

const itemTwo = ref<NavBarMenu[]>([
  createItem(1, 'Göz Makyajı'),
  createItem(2, 'Maskara')
  // ... diğer öğeler
])

// ... diğer item listeleri ...

const itemSeven = ref<NavBarMenu[]>([
  createItem(1, 'Tüm Markalar'),
  createItem(2, 'LYKD')
  // ... diğer öğeler
])

const itemEight = ref<NavBarMenu[]>([
  createItem(1, '/src/assets/fondoten.jpg'),
  createItem(2, '/src/assets/maskara.jpg')
  // ... diğer öğeler
])
</script>

<style scoped>
.separator {
  width: 10px;
  height: 100%;
  color: white;
  background-color: rgb(233, 230, 230);
  margin: 0 10px;
}
</style>
