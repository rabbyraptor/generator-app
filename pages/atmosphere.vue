<template>
  <div class="page-container">
    <div class="atmosphere">
      <h1>Atmosphere</h1>
    </div>

    <div class="imgCol">
      <v-ons-row>
        <v-ons-col>
          <img class="img" src="/img/bf_optimized.jpg" alt="#" />
        </v-ons-col>
      </v-ons-row>

      <v-ons-row>
        <v-ons-col>
          <img class="img" src="/img/no_12q_optimized.jpg" alt="#" />
        </v-ons-col>
      </v-ons-row>

      <v-ons-row>
        <v-ons-col>
          <img class="img" src="/img/no_26_optimized.jpg" alt="#" />
        </v-ons-col>
      </v-ons-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.atmosphere {
  padding: 10px;
  margin: auto;
  text-align: center;
}

.imgCol {
  display: block;
  margin-left: 10px;
  margin-right: 10px;
}

.img {
  height: auto;
  width: 100%;
}
</style>
