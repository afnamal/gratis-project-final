<template>
  <q-page class="row items-center justify-evenly">
    <CarouselComp1 />
    <TheProduct />
    <TheBrands style="margin-top: 550px;"/>
    <TheFooter style="margin-left: 70px;"></TheFooter>
  </q-page>
</template>

<script setup lang="ts">
import CarouselComp1 from 'components/CarouselComp1.vue'
import TheBrands from 'components/TheBrands.vue'
import TheProduct from 'components/TheProduct.vue'

</script>
