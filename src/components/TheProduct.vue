<template>
  <div
    class="column justify-center"
    style="
      display: flex;
      flex-direction: column;
      height: 100vh;
      background-color: ;
    "
  >
    <q-carousel
      v-model="inner"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      navigation
      prev-icon="arrow_left"
      next-icon="arrow_right"
      infinite
      control-color="purple"
      arrows
      height="85%"
      class="shadow-1 rounded-borders"
    >
      <q-carousel-slide :name="3" class="column">
        <div
          class="q-pa-md q-ml-xl row justify-center q-gutter-xs"
          style="width: 90%"
        >
          <q-card
            style="height: 103%; width: 25%"
            class="my-card q-gutter-sm"
            flat
            bordered
            v-for="item in productsOne"
            :key="item.id"
            :name="item.name"
            :label="item.name"
          >
            <q-carousel
              animated
              v-model="slide"
              navigation
              infinite
              control-color="purple"
              transition-duration="100"
              :autoplay="autoplay"
              transition-prev="slide-right"
              transition-next="slide-left"
              @mouseenter="autoplay = false"
              @mouseleave="autoplay = true"
            >
              <q-carousel-slide :name="1" :img-src="item.imageOne" />
              <q-carousel-slide :name="2" :img-src="item.imageTwo" />
            </q-carousel>

            <q-card-section style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
              <div class="column items-center">
                <div
                  class="col text-caption"
                  text
                  style="font-size:large; font-weight: bold; text-align:center"
                >
                  {{ item.name }}
                </div>
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <div
                class="col text-h6 ellipsis row justify-center"
                style="font-weight: bold"
              >
                <span style="font-weight: bold; font-size: larger">{{
                  item.price
                }}</span>&nbsp;
                 <span style="position: relative; top: -0.07em; color: #aaa;"
                  ><sup>,00 <span style="color: #ddd;">TL</span></sup></span
                >
              </div>

            </q-card-actions>
            <div class="row justify-center">
              <q-btn
                style="
                  background-color: #4b0082;
                  color: antiquewhite;
                  font-weight: bolder;
                  width: 80%;
                "
                size="large"

              >
                <span style="text-transform: capitalize">Gratis Kart </span>
                &nbsp;
                <span style="text-transform: lowercase"> ile</span> &nbsp;&nbsp;
                <span style="font-weight:900; font-size: larger">{{
                  item.price / 2
                }}</span>&nbsp;
                <span style="position: relative; top: -0.0125em; color: #ccc;"
                  ><sup>,00 <span style="color: #aaaa;">TL</span></sup></span
                >
              </q-btn>

            </div>

          </q-card>

        </div>

      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column">
        <div
          class="q-pa-md q-ml-xl row justify-center q-gutter-xs"
          style="width: 90%"
        >
          <q-card
            style="height: 103%; width: 25%"
            class="my-card q-gutter-sm"
            flat
            bordered
            v-for="item in productsTwo"
            :key="item.id"
            :name="item.name"
            :label="item.name"
          >
            <q-carousel
              animated
              v-model="slide"
              navigation
              infinite
              control-color="purple"
              transition-duration="100"
              :autoplay="autoplay"
              transition-prev="slide-right"
              transition-next="slide-left"
              @mouseenter="autoplay = false"
              @mouseleave="autoplay = true"
            >
              <q-carousel-slide :name="1" :img-src="item.imageOne" />
              <q-carousel-slide :name="2" :img-src="item.imageTwo" />
            </q-carousel>

            <q-card-section style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
              <div class="column items-center">
                <div
                  class="col text-caption"
                  text
                  style="font-size:large; font-weight: bold; text-align:center"
                >
                  {{ item.name }}
                </div>
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <div
                class="col text-h6 ellipsis row justify-center"
                style="font-weight: bold"
              >
                <span style="font-weight: bold; font-size: larger">{{
                  item.price
                }}</span>&nbsp;
                 <span style="position: relative; top: -0.07em; color: #aaa;"
                  ><sup>,00 <span style="color: #ddd;">TL</span></sup></span
                >
              </div>

            </q-card-actions>
            <div class="row justify-center">
              <q-btn
                style="
                  background-color: #4b0082;
                  color: antiquewhite;
                  font-weight: bolder;
                  width: 80%;
                "
                size="large"

              >
                <span style="text-transform: capitalize">Gratis Kart </span>
                &nbsp;
                <span style="text-transform: lowercase"> ile</span> &nbsp;&nbsp;
                <span style="font-weight:900; font-size: larger">{{
                  item.price / 2
                }}</span>&nbsp;
                <span style="position: relative; top: -0.0125em; color: #ccc;"
                  ><sup>,00 <span style="color: #aaaa;">TL</span></sup></span
                >
              </q-btn>

            </div>

          </q-card>

        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import { Product } from 'components/models'
import { ref } from 'vue'

const carousel = ref([
  {
    id: 1,
    name: 'first'
  },
  {
    id: 2,
    name: 'second'
  }
])

const productsOne = ref<Product[]>([
  {
    id: 1,
    name: 'Tepe Arayüz Fırçası 8 Adet',
    price: 320,
    imageOne: 'src/assets/1.jpg',
    imageTwo: 'src/assets/1-2.jpg'
  },
  {
    id: 2,
    name: 'Parodontax Diş Fırçası',
    price: 112,
    imageOne: 'src/assets/2.jpg',
    imageTwo: 'src/assets/2-2.jpg'
  },
  {
    id: 3,
    name: 'Rimmel London Eyeliner Black',
    price: 300,
    imageOne: 'src/assets/3.jpg',
    imageTwo: 'src/assets/3-2.jpg'
  }
])

const productsTwo = ref<Product[]>([
  {
    id: 4,
    name: 'Golden Rose Nude Lipstick No:3',
    price: 168,
    imageOne: 'src/assets/4.jpg',
    imageTwo: 'src/assets/4-2.jpg'
  },
  {
    id: 5,
    name: 'Slazenger Erkek Parfüm 125 ml',
    price: 650,
    imageOne: 'src/assets/5.jpg',
    imageTwo: 'src/assets/5-2.jpg'
  }
])

const inner = ref(3)
const slide = ref(1)
const autoplay = ref(true)
</script>
