<template>
    <div class="Pbuttone">
        <img src="../assets/erreur-404.png" alt="404">
        <p>Oups,la page demandée n'existe pas.</p>
        <RouterLink to="/">Cliquez ici pour revenir à l'accueil</RouterLink>
    </div>
</template>


<style scoped>
.Pbuttone{
  margin: auto; 
  background-color: darkred;
  width: 50%;
  padding: 10%;
  border-radius: 4%;
}

.Pbuttone a{
  background-color: black;
  font-size: 200% ;
  color: darkred;
  border-radius: 5%;
  text-decoration: none;
}
.Pbuttone p{
  font-size: 200% ;
  color: black;
  border-radius: 5%;
  text-decoration: none;
}
 
img {
  object-fit: fill;
  width: 30%;
}


p {
  font-size:150%;     
}
</style>