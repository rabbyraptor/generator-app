<template>
  <div class="container">
   <div class="indexbox">
     <img class="indexlogo" src="../assets/img/generator_logo_uden_dato.png">
     <h2>Festival</h2>
     <h2>2020</h2>
   </div>  
  
  <div class="buyticket">
   <a id="a" href="#">
   <h3>Buy Ticket</h3>
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
  width: 300px; 
  height: 200px;
  padding: 30px; 
  margin: 70px auto;
  background-color: whitesmoke;
  text-align: center;
}

.indexlogo {
  width: 75%;
}

.buyticket {
  width: 200px; 
  height: 50px;
  padding: 10px; 
  margin: 30px auto;
  background-color: whitesmoke;
  text-align: center; 
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
}

</style>
