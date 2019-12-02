<template>
  <div class="container">
   <div class="indexbox">
     <img class="indexlogo" src="../assets/img/generator_logo_uden_dato.png">
     <h2 id="h2index">Festival</h2>
     <h2 id="h2index">2020</h2>
     </div>  
  
  <div class="buyticket">
   <a id="a" href="#">
   <h3 id="h3index">Buy Ticket</h3>
   </a>
  </div>

  <div class="spons">
    <img class="logo" src="../assets/img/city_of_odense_albani.png">
  </div> 


   </div>

</template>

<script>

export default {
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  background-image: url(../assets/img/background3.png);
  background-size: cover;
  background-position: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.indexbox {
  width: 250px; 
  height: 200px;
  padding: 20px; 
  margin: 70px auto;
  background-color: white;
  text-align: center;
  opacity: 0.80;
}

.indexlogo {
  width: 100%;
}

.buyticket {
  width: 250px; 
  height: 70px;
  padding: 10px; 
  margin: 30px auto;
  background-color: white;
  text-align: center;
  opacity: 0.80; 
}

.spons {
  width: 200px; 
  height: 50px;
   
  margin: 90px auto;
  text-align: center;
}

#a {
  text-decoration: none;
}

.logo {
  width: 90%; 
  opacity: 0.80;
}

#h2index {
  font-size: 50px; 
}

#h3index {
  font-size: 35px; 
}

</style>
