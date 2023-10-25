<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <a class="logodisplay" href="#default" ><img class="logo" src=".//assets/726056.png" alt="pettergrifinvshomer"></a>
    <div class="header-right">
      <a class="active" href="#home">Home</a>
      
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  </header>
   <section>
     <h1>Je m'appelle Quentin Boyer et j'ai 19 ans.
     Je suis actuellement en formation pour devenir développeur web. Passionné par la création et l'innovation, 
     je me consacre à acquérir les compétences nécessaires pour concevoir et développer des sites web, 
     des applications et des expériences en ligne interactives. Mon parcours de formation me permet d'explorer les langages de programmation,
     les technologies front-end et back-end, ainsi que les bonnes pratiques de développement.
     Mon objectif est de contribuer à l'évolution du monde numérique en créant des solutions web efficaces et esthétiques,
     tout en restant à l'affût des dernières tendances et technologies du domaine.
     </h1>
   </section>
</template>

<style  >

html, body {
  margin:0;
  padding:0;
  height:100%;
  background-image: url(./assets/856f31d9f475501c7552c97dbe727319.jpg);
  background-size: cover ;
  background-size: 200%;
}

#app {
   
  height: 100%;
  position: absolute;
  margin-left: 0%; 
  width: 100%;
   
}
  
section {

     







}
 
h1{
    font-size:150%;
    text-align: center;
    padding-bottom:50%;
    padding-top: 15%;
    width:70%;
    margin: auto;
      
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
  border-radius: 4px ;
  width: 14%;
  height: 45%;
  background-color: gray;
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
  border-radius: 10px;
  width: 4%;
  height: 100%;
  background-color: white

}
/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.logo {
  width:100%;
  height:100%; 
  object-fit: fill;
}

/* Change the background color on mouse-over */
header a:hover {
  background-color: #ddd;
  color: black;
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

 



/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}


</style>
