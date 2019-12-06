<template>
  <div class="page-container" :style="pageBackground(this.$route.name)">
    <div class="indexbox">
      <img class="indexlogo" src="/img/generator_logo_2020_white.png" />
    </div>

    <div class="buyticket">
      <nuxt-link to="./tickets" id="a">
        <h3 id="h3index">Buy tickets now!</h3>
      </nuxt-link>
    </div>

    <div class="spons">
      <hoved-sponsor style="position: absolute; bottom:0;" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.indexlogo {
  width: 100%;
  margin-top: 70px;
  text-align: center;
}

.buyticket {
  max-width: 250px;
  padding: 12px;
  margin: auto;
  margin-top: 50px;
  background-color: red;
  text-align: center;
  border-radius: 50px;
}

.buyticket:active {
  background-color: #1a17ac;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

#a {
  text-decoration: none;
  color: white;
}

#h2index,
#h3index {
  font-size: 32px;
  margin: 0;
}
</style>
