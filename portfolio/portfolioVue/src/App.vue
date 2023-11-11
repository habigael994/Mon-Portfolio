<script   setup>
 
import { RouterLink, RouterView } from 'vue-router'
 
 
 

 
</script>

<template>
  <header>
    
    <a class="logodisplay" href="#top" ><img class="logo" src=".//assets/adobe-portfolio8664.jpg" alt="logo"></a>
    <div class="header-right">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/about">A propos</RouterLink>
      <RouterLink to="/Projects">Mes Projets</RouterLink>

    </div>
  </header>
  
   <section>
    
     
     <RouterView />
    
    
   




   </section>
   
  
 
 
   <footer>
      <div class="links">
        <a class="footerlogo" href="https://www.instagram.com/camp_thym/?hl=fr" target="_blank"><img class="logof" src="./assets/Instagram_icon.png" alt="pettergrifinvshomer"></a>
        <p class="date">Dernière mise à jour le <br>
        00/00/00</p>
        <a class="footerlogo" href="https://github.com/habigael994" target="_blank"><img class="logof" src="./assets/github-square-icon-2048x2048-dmcyqfbd.png" alt="pettergrifinvshomer"></a>
      </div>
   
   </footer>

</template>

 

<style  >

@import url('https://fonts.googleapis.com/css2?family=Karla:wght@300&family=Raleway&display=swap');

html, body {
  margin:0;
  padding:0;
  height:100%;
  background-image: url(./assets/856f31d9f475501c7552c97dbe727319.jpg);
  background-size: cover ;
  background-size: 200%;
  font-family: 'Karla', sans-serif;
   
}

#app {
   
  height: 100%;
  position: absolute;
  margin-left: 0%; 
  width: 100%;
}
  
section {
 
 text-align: center;
 padding-bottom:15%;
 padding-top: 15%;
 width:70%;
 margin: auto;
}
 
p {
  font-size:150%;     
  }
  
 
footer {
  
 height: 10%;
 width: 100%;
 background-color: darkred;
 background-image: url(./assets/conception-mise-page-saint-valentin-noel-fond-rouge-doux-luxe-abstrait-studio-salle-modele-web-rapport-activite-couleur-degrade-cercle-lisse_1258-82782.avif);


}

.links {

  width: 50%;
        margin: auto;
         
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        justify-content: space-around;

}

.footerlogo {
  width:5% ;
  height:50% ;
   



}



.logof{
 
 height:100%;
 width:100% ;
 

}

footer p {
  text-align:center ;
  font-size: 150%;




}


header {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 1% 0.5%;
  position: fixed; top: 0px;left: 0px; 
  width:100%  ;
  height: 7%;
  background-image:url(./assets/conception-mise-page-saint-valentin-noel-fond-rouge-doux-luxe-abstrait-studio-salle-modele-web-rapport-activite-couleur-degrade-cercle-lisse_1258-82782.avif);
  background-size: cover;
}

/* Style the header links */
header a {
  position: relative;
  float: left;
  color: black;
  text-align: center;
  padding: 2%;
  text-decoration: none;
  font-size:100% ;
  line-height: 150%;
  border-radius: 10% ;
  width: 14%;
  height: 45%;
  background-color: white;
  
   
}
 
 


header .logodisplay {
  position: relative;
  float: left;
  color: black;
  text-align: center;
  padding: 0;
  text-decoration: none;
  font-size: 18px;
  line-height: 90%;
  border-radius: 50%;
  width: 4%;
  height: 100%;
  background-color: white;
   
  
}

 

 

 
.date {

  background-color: white;
  border-radius: 10%;
  box-shadow: 5px 5px 5px black ;

}
   
 

 

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.logo {
  width:110%;
  height:100%; 
  object-fit: fill;
  border-radius: 20%;
}

.logo:hover{
  
  box-shadow: 5px 5px 5px black

}

/* Change the background color on mouse-over */
header a:hover {
  background-color: #ddd;
  color: black;
  box-shadow: 5px 5px 5px black ;
   
}

/* Style the active/current link*/
header a.active {
  background-color: whitesmoke;
  color: black;
}

/* Float the link section to the right */
.header-right {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  float: right;
}

 
 
 

.modal {
  position: fixed;
  z-index: 999;
  top: 30%;
  left: 50%;
  width: 40%;
  height: 40%;
  margin-left: -20%;
  background-color: white;
}
</style>
