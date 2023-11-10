 

<template>
  <p>Je m'appelle Quentin Boyer et j'ai 19 ans.
     Je suis actuellement une formation pour devenir développeur web. Passionné par la création et l'innovation, 
     je me consacre à acquérir les compétences nécessaires pour concevoir et développer des sites web, 
     des applications et des expériences en ligne interactives. Mon parcours de formation me permet d'explorer les langages de programmation,
     les technologies front-end et back-end, ainsi que les bonnes pratiques de développement.
     Mon objectif est de contribuer à l'évolution du monde numérique en créant des solutions web efficaces et esthétiques,
     tout en restant à l'affût des dernières tendances et technologies du domaine. 
     </p>
  <div class="Pbutton">
    <RouterLink to="/Projects">Découvrir mes projets</RouterLink>
  </div>
</template>


<style scoped>

.Pbutton{
  margin: auto; 
  background-color: darkred;
  width: 50%;
  padding: 10%;
  border-radius: 4%;
}

.Pbutton a{
  background-color: whitesmoke;
  font-size: 400% ;
  color: darkred;
  border-radius: 5%;
  text-decoration: none;
  

}

.Pbutton :hover{
  background-color: #ddd;
  text-decoration: underline;

}

p {
  font-size:150%;     
  }
  
</style>