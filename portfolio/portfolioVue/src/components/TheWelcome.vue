<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
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

  text-decoration: underline;

}

</style>