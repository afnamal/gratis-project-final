<template>
  <div class="column justify-end " style="display: flex;
  flex-direction: column;
  height: 100vh;">
  <div class="row q-mb-xl" style="background-color: #f4f2f2;">
    <div class="col-2">
      <ul class="custom-list" v-for="item in itemOne" :key="item.id">
        <li style="font-weight: bold; cursor: pointer">{{ item.name }}</li>
      </ul>
    </div>
    <div class="col-2">
      <ul class="custom-list" v-for="item in itemTwo" :key="item.id">
        <li v-if="item.id == 1 || item.id == 2" style="font-weight: bold">
          {{ item.name }}
        </li>
        <li v-if="item.id != 1 && item.id != 2" style="cursor: pointer">
          <q-img
            v-if="item.id != 5"
            class="col"
            src="/src/assets/shop.png"
            style="max-width: 12%; height: 100%; object-fit: contain"
          />
          <q-img
            v-if="item.id == 5"
            class="col"
            src="/src/assets/agenda.png"
            style="max-width: 12%; height: 100%; object-fit: contain"
          />
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="col-2">
      <ul class="custom-list" v-for="item in itemThree" :key="item.id">
        <li v-if="item.id == 1" style="font-weight: bold">{{ item.name }}</li>
        <li v-if="item.id != 1" style="cursor: pointer">{{ item.name }}</li>
      </ul>
    </div>
    <div class="col-2">
      <ul class="custom-list" v-for="item in itemFour" :key="item.id">
        <li v-if="item.id == 1" style="font-weight: bold">{{ item.name }}</li>
        <li v-if="item.id != 1" style="cursor: pointer">{{ item.name }}</li>
      </ul>
    </div>
    <div class="col-2">
      <ul class="custom-list" v-for="item in itemFive" :key="item.id">
        <li v-if="item.id == 1" style="font-weight: bold">{{ item.name }}</li>
        <li v-if="item.id == 2" style="cursor: pointer">
          <q-img
            class="col"
            src="/src/assets/facebook.png"
            style="max-width: 12%; height: 100%; object-fit: contain"
          />
          {{ item.name }}
        </li>
        <li v-if="item.id == 3" style="cursor: pointer">
          <q-img
            class="col"
            src="/src/assets/instagram.png"
            style="max-width: 12%; height: 100%; object-fit: contain"
          />
          {{ item.name }}
        </li>
        <li v-if="item.id == 4" style="cursor: pointer">
          <q-img
            class="col"
            src="/src/assets/twitter.png"
            style="max-width: 12%; height: 100%; object-fit: contain"
          />
          {{ item.name }}
        </li>
        <li v-if="item.id == 5" style="cursor: pointer">
          <q-img
            class="col"
            src="/src/assets/youtube.png"
            style="max-width: 12%; height: 100%; object-fit: contain"
          />
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="col-2">
      <ul class="custom-list" v-for="item in itemSix" :key="item.id">
        <li v-if="item.id == 1" style="font-weight: bold">{{ item.name }}</li>
        <li v-if="item.id == 2" style="cursor: pointer">
          <q-img
            class="col"
            src="/src/assets/apple-logo.png"
            style="max-width: 12%; height: 100%; object-fit: contain"
          />
          {{ item.name }}
        </li>
        <li v-if="item.id == 3" style="cursor: pointer">
          <q-img
            class="col"
            src="/src/assets/google-play.png"
            style="max-width: 12%; height: 100%; object-fit: contain"
          />
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { FooterInfo } from 'components/models'
import { ref } from 'vue'

const itemOne = ref<FooterInfo[]>([
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

const itemTwo = ref<FooterInfo[]>([
  {
    id: 1,
    name: 'Kampayalar'
  },
  {
    id: 2,
    name: 'Markalar'
  },
  {
    id: 3,
    name: 'Mağazalarımız'
  },
  {
    id: 4,
    name: 'Gratis Kart'
  },
  {
    id: 5,
    name: 'Katalog'
  }
])

const itemThree = ref<FooterInfo[]>([
  {
    id: 1,
    name: 'Gratis'
  },
  {
    id: 2,
    name: 'Hakkımızda'
  },
  {
    id: 3,
    name: 'İletişim'
  },
  {
    id: 4,
    name: 'Kariyer'
  },
  {
    id: 5,
    name: 'Kurumsal Satış'
  },
  {
    id: 6,
    name: 'İş Birliği'
  }
])

const itemFour = ref<FooterInfo[]>([
  {
    id: 1,
    name: 'Yardım ve Destek'
  },
  {
    id: 2,
    name: 'Sipariş Süreci'
  },
  {
    id: 3,
    name: 'Kolay İade'
  },
  {
    id: 4,
    name: 'Üyelik'
  },
  {
    id: 5,
    name: 'Tümü'
  }
])

const itemFive = ref<FooterInfo[]>([
  {
    id: 1,
    name: 'Bizi Takip Edin'
  },
  {
    id: 2,
    name: 'Facebook'
  },
  {
    id: 3,
    name: 'Instagram'
  },
  {
    id: 4,
    name: 'Twitter'
  },
  {
    id: 5,
    name: 'Youtube'
  }
])

const itemSix = ref<FooterInfo[]>([
  {
    id: 1,
    name: 'Uygulamamızı İndirin'
  },
  {
    id: 2,
    name: 'App Store'
  },
  {
    id: 3,
    name: 'Google Play'
  }
])
</script>

<style scoped>
.custom-list {
  list-style-type: none;
}
</style>
