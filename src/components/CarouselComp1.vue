<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1">
        <img src="https://img.gratis.com/staticimages/desktoppr_0/8805301551154_1701434625873.jpg?v=79826902058431" style="max-width: 100%; max-height: 100vh;" />
      </q-carousel-slide>
      <q-carousel-slide :name="2">
        <img src="https://img.gratis.com/staticimages/eveve_0/8805334089778_1701670070602.jpg?v=315271628796347" style="max-width: 100%; max-height: 100vh;" />
      </q-carousel-slide>
      <q-carousel-slide :name="3">
        <img src="https://img.gratis.com/staticimages/fdvfdd_0/8805334155314_1701670140482.jpg?v=315341509736713" style="max-width: 100%; max-height: 100vh;" />
      </q-carousel-slide>
      <q-carousel-slide :name="4">
        <img src="https://img.gratis.com/staticimages/sacdndjy_0/8805334220850_1701670238513.jpg?v=315439540874920" style="max-width: 100%; max-height: 100vh;" />
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center q-mt-md" style="position: relative; z-index: 1;">
      <div
        v-for="n in 4"
        :key="n"
        class="q-mr-md navigation-box"
        @click="goToSlide(n)"
      >
      </div>
    </div>
  </div>
</template>

<style scoped>
.navigation-box {
  width: 50px;
  height: 9px;
  background-color: rgba(224, 219, 219, 0.5);
  cursor: pointer;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(18, 14, 14);
  margin-top: -150px;
}
</style>

<script>
export default {
  data () {
    return {
      slide: 1
    }
  },
  methods: {
    goToSlide (index) {
      this.slide = index
    }
  }
}
</script>
