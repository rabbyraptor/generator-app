<template>
  <div class="container">
   <div class="indexbox">
     <img class="indexlogo" src="../assets/img/generator_logo_uden_dato.png">
     <h2 id="h2index">Festival<br>2020</h2>
     
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
  background-image: url(../assets/img/background3.jpg);
  background-size: cover;
  background-position: center;
  padding: 70px 0;
}

.indexbox {
  width: 250px; 
  height: 200px;
  padding: 20px; 
  margin: auto;
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
<<<<<<< Updated upstream
  font-size: 50px; 
}

#h3index {
  font-size: 35px; 
}
=======
  font-size: 40px;
  margin: 0;  
}

#h3index {
  color: white; 
  font-size: 40px;
  margin: 0; 
} 
>>>>>>> Stashed changes

</style>
