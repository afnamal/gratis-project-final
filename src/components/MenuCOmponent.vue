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
              <q-item-section v-if="item.id == 1" style="font-weight: bold">{{ item.name }}</q-item-section>
              <q-item-section v-if="item.id != 1">{{ item.name }}</q-item-section>
            </div>
            <div>
              <div v-for="item in itemTwo" :key="item.id" style="cursor: pointer">
                <q-item-section v-if="item.id == 1" style="font-weight: bold">{{ item.name }}</q-item-section>
                <q-item-section v-if="item.id != 1">{{ item.name }}</q-item-section>
              </div>
            </div>
          </div>
          <div>
            <div v-for="item in itemthree" :key="item.id" style="cursor: pointer">
              <q-item-section v-if="item.id == 1" style="font-weight: bold">{{ item.name }}</q-item-section>
              <q-item-section v-if="item.id != 1">{{ item.name }}</q-item-section>
            </div>
            <div>
              <div v-for="item in itemFour" :key="item.id" style="cursor: pointer">
                <q-item-section v-if="item.id == 1" style="font-weight: bold">{{ item.name }}</q-item-section>
                <q-item-section v-if="item.id != 1">{{ item.name }}</q-item-section>
              </div>
            </div>
          </div>
          <div>
            <div v-for="item in itemFive" :key="item.id" style="cursor: pointer">
              <q-item-section v-if="item.id == 1" style="font-weight: bold">{{ item.name }}</q-item-section>
              <q-item-section v-if="item.id != 1">{{ item.name }}</q-item-section>
            </div>
            <div>
              <div v-for="item in itemSix" :key="item.id" style="cursor: pointer">
                <q-item-section v-if="item.id == 1" style="font-weight: bold">{{ item.name }}</q-item-section>
                <q-item-section v-if="item.id != 1">{{ item.name }}</q-item-section>
              </div>
            </div>
          </div>
          <div>
            <div v-for="item in itemSeven" :key="item.id" style="cursor: pointer">
              <q-item-section v-if="item.id == 1" style="font-weight: bold">{{ item.name }}</q-item-section>
              <q-item-section v-if="item.id != 1">{{ item.name }}</q-item-section>
            </div>
          </div>
          <div>
            <div v-for="item in itemEight" :key="item.id" style="cursor: pointer">
              <q-item-section v-if="item.id == 1||item.id==2" style=" margin-bottom:10px; width: 120px; font-weight: bold">
                <q-img v-if="item.name.endsWith('.jpg') || item.name.endsWith('.png')" :src="item.name" />
              </q-item-section>
            </div>
          </div>
        </div>
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
  createItem(2, 'Ruj'),
  createItem(3, 'Likit Ruj'),
  createItem(4, 'Dudak Kalemi'),
  createItem(6, 'Dudak Parlatıcısı')
])

const itemTwo = ref<NavBarMenu[]>([
  createItem(1, 'Göz Makyajı'),
  createItem(2, 'Maskara'),
  createItem(3, 'Eyeliner'),
  createItem(4, 'Göz Kalemi'),
  createItem(5, 'Far'),
  createItem(6, 'Kaş')
])

const itemthree = ref<NavBarMenu[]>([
  createItem(1, 'Yüz Makyajı'),
  createItem(2, 'Aydınlatıcı'),
  createItem(3, 'Allık'),
  createItem(4, 'Bronzer'),
  createItem(5, 'Fondöten'),
  createItem(6, 'BB-CC Kremler'),
  createItem(7, 'Kapatıcı'),
  createItem(8, 'Kontür'),
  createItem(9, 'Pudra'),
  createItem(10, 'Makyaj Bazı'),
  createItem(11, 'Makyaj Sabitleyici')
])

const itemFour = ref<NavBarMenu[]>([
  createItem(1, 'Tırnak Bakımı'),
  createItem(2, 'Oje'),
  createItem(3, 'Tırnak Bakım Ürünleri'),
  createItem(4, 'Takma Tırnak'),
  createItem(5, 'Tırnak Süsler'),
  createItem(6, 'Aseton')
])

const itemFive = ref<NavBarMenu[]>([
  createItem(1, 'Manikür & Pedikür Malzemeleri'),
  createItem(2, 'Makas & Pensler'),
  createItem(3, 'Törpü'),
  createItem(4, 'Manikür & Pedikür Setleri')
])

const itemSix = ref<NavBarMenu[]>([
  createItem(1, 'Makyaj Fırçaları'),
  createItem(2, 'Makyaj Süngerleri'),
  createItem(3, 'Makyaj Fırça Setleri'),
  createItem(4, 'Makyaj Aynaları'),
  createItem(5, 'Takma Kirpikler'),
  createItem(6, 'Makyaj & Takı'),
  createItem(7, 'Düzenleyiciler'),
  createItem(8, 'Diğer Aksesuarlar')
])

const itemSeven = ref<NavBarMenu[]>([
  createItem(1, 'Tüm Markalar'),
  createItem(2, 'LYKD'),
  createItem(3, 'Beaulis'),
  createItem(4, 'wet n wild'),
  createItem(5, 'Physicians Formula'),
  createItem(6, 'theBalm'),
  createItem(7, 'Bee Beauty'),
  createItem(8, 'Benri'),
  createItem(9, 'Eklips')
])

const itemEight = ref<NavBarMenu[]>([
  createItem(1, '/src/assets/fondoten.jpg'),
  createItem(2, '/src/assets/maskara.jpg')
])
</script>

<style scoped>
.separator {
  width: 10px;
  height: 100%;
  color: rgb(126, 77, 77);
  background-color: rgb(138, 69, 69);
  margin: 0 10px;
}
</style>
