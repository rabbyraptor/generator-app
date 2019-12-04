<template>
  <div class="container">
    <div class="indexbox">
      <img class="indexlogo" src="/img/generator_logo_uden_dato.png" />
      <h2 id="h2index">
        Festival
        <br />2020
      </h2>
    </div>

    <div class="buyticket">
      <a id="a" href="#">
        <h3 id="h3index">Buy Ticket</h3>
      </a>
    </div>

    <div class="spons">
      <img class="logo" src="/img/city_of_odense_albani.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  background-image: url(/img/bg/bg1.jpg);
  background-size: cover;
  background-position: center;
  padding: 70px 0;
}

.indexbox {
  width: 250px;
  height: 180px;
  padding: 10px;
  margin: auto;
  background-color: white;
  text-align: center;
}

.indexlogo {
  width: 100%;
}

.buyticket {
  width: 250px;
  height: 70px;
  padding: 10px;
  margin: 30px auto;
  background-color: red;
  text-align: center;
}

.buyticket:active {
  background-color: #1a17ac;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.spons {
  width: 200px;
  height: 50px;
  margin: 90px auto;
  text-align: center;
}

#a {
  text-decoration: none;
  color: white;
}

.logo {
  width: 90%;
  opacity: 0.8;
}

#h2index,
#h3index {
  font-size: 40px;
  margin: 0;
}
</style>
