<template>
  <q-page class="q-pa-md">
    <div class="row items-center">
      <div class="col-auto" style="margin-top: 60px;">
        <img style="width: 500px;" src="https://img.gratis.com/mnpadding/475/475/ffffff/h8b/had/8818714804254/10710660_01.jpg" alt="Product Image" class="product-image" />
      </div>

      <div class="col">
        <div class="row">
          <q-card class="col-auto" style="width: 200px; height: 100px; display: flex; flex-direction: column; justify-content: center; align-items: center;"> <!-- Adjust the width as needed -->
            <q-card-section>
              <div>
                <h4>169,00TL</h4>
              </div>
            </q-card-section>
          </q-card>

          <q-card class="col-auto" style="width: 200px; height: 100px; display: flex; flex-direction: column; justify-content: center; align-items: center;"> <!-- Adjust the width as needed -->
            <q-card-section>
              <div>
                <span style="color: purple; font-size: x-large;">STOKTA YOK</span>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div>
          <img style="margin-top: 20px;" src="https://cdn.segmentify.com/0649a38f-e2e5-4679-a4eb-3a94ac794d82/badges/Magazadan%20Teslimat%20Badge-364x36px%20copy.jpg" alt="">
        </div>

        <q-btn label="STOĞA GELİNCE HABER VER" color="purple" :disable="true" rounded bg-color="purple" style="height: 60px; width: 250px;font-size: medium;margin-top: 50px    ;" />
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.product-image {
  width: 600px;
  margin-right: 20px;
}
</style>
