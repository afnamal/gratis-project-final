<template>
  <q-page>
    <div class="q-pa-md q-gutter-md custom-background">
      <div class="text-center q-my-md">
        <h1 style="font-size: 60px; opacity: 20%; color: rgb(236, 213, 213)222, 205, 205);">SADECE GRATİS'TE</h1>
      </div>
      <div class="row" style="margin-top: 40px;">
        <div v-for="product in upperRowProducts" :key="product.id" class="col-lg-1.6" style="margin-left: 15px; margin-right: 15px;">
          <q-card class="custom-card" v-if="product.id !== 12">
            <img :src="product.imageUrl" class="custom-image" />
          </q-card>
          <q-card v-else class="custom-card special-card" style="width: 150px; height: 65px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <span style="font-size: 12px; text-align: center;">Tüm markaları gör</span>
            <q-icon name="arrow_forward" size="24px" color="purple" />
          </q-card>
        </div>
      </div>
      <div class="row" style="margin-bottom: 60px; margin-top: 20px;">
        <div v-for="product in lowerRowProducts" :key="product.id" class="col-lg-1.6" style="margin-left: 15px; margin-right: 15px; align-items: center;">
          <q-card class="custom-card" v-if="product.id !== 12">
            <img :src="product.imageUrl" class="custom-image" />
          </q-card>
          <q-card v-else class="custom-card special-card" style="width: 210px; height: 120px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <span style="font-size: 12px; text-align: center; color: purple;">Tüm markaları gör</span>
            <q-icon name="arrow_forward" size="24px" color="purple" />
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface TheProduct {
  id: number;
  name: string;
  imageUrl: string;
}

export default defineComponent({
  name: 'IndexPage',
  data () {
    const products: TheProduct[] = [
      {
        id: 1,
        name: 'Ürün 6',
        imageUrl: 'https://img.gratis.com/staticimages/brand_lykd_media_0/8803010805810_1697667736556.jpg'
      },
      {
        id: 2,
        name: 'Ürün 2',
        imageUrl: 'https://img.gratis.com/staticimages/brand_beaulis_media_0/8803010641970_1697667735796.jpg'
      },
      {
        id: 3,
        name: 'Ürün 3',
        imageUrl: 'https://img.gratis.com/staticimages/brand_benri_media_0/8803010674738_1697667735996.jpg'
      },
      {
        id: 4,
        name: 'Ürün 4',
        imageUrl: 'https://img.gratis.com/staticimages/brand_bee_beauty_media_0/8803010773042_1697667736440.jpg'
      },
      {
        id: 5,
        name: 'Ürün 5',
        imageUrl: 'https://img.gratis.com/staticimages/brand_eklips_media_0/8803010478130_1697667735201.jpg'
      },
      {
        id: 6,
        name: 'Ürün 6',
        imageUrl: 'https://img.gratis.com/staticimages/brand_lifein_media_0/8803010576434_1697667735561.jpg'
      },
      {
        id: 7,
        name: 'Ürün 7',
        imageUrl: 'https://img.gratis.com/staticimages/hyp-me-brand-media_0/8803040165938_1697667904601.png'
      },
      {
        id: 8,
        name: 'Ürün 8',
        imageUrl: 'https://img.gratis.com/staticimages/brand_orien_media_0/8803010936882_1697667737063.jpg'
      },
      {
        id: 9,
        name: 'Ürün 9',
        imageUrl: 'https://img.gratis.com/staticimages/brand_thebalm_media_0/8803011035186_1697667737426.jpg'
      },
      {
        id: 10,
        name: 'Ürün 10',
        imageUrl: 'https://img.gratis.com//staticimages/wetnwild5_0/8803498688562_1698315830889.jpg'
      },
      {
        id: 11,
        name: 'Ürün 11',
        imageUrl: 'https://img.gratis.com/staticimages/brand_splat_media_0/8803011002418_1697667737307.jpg'
      },
      {
        id: 12,
        name: 'Ürün 12',
        imageUrl: 'https://img.gratis.com/staticimages/brand_lykd_media_0/8803010805810_1697667736556.jpg'
      }
    ]

    const rows: TheProduct[][] = []
    for (let i = 0; i < products.length; i += 6) {
      rows.push(products.slice(i, i + 6))
    }

    const upperRowProducts = rows[0]
    const lowerRowProducts = rows[1]

    return {
      upperRowProducts,
      lowerRowProducts
    }
  }
})
</script>

<style>
.custom-card {
  width: 210px;
  height: 120px;
}

.custom-image {
  max-width: 190px;
  max-height: 110px;
}
.special-card {
  border: 2px solid purple;
}
.q-my-md {
  margin-top: 20vh;
}
.custom-background {
  background-color: #f0f0f0;
}
</style>
