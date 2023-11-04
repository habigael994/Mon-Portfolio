 <script setup>
  import { RouterLink, RouterView } from 'vue-router'
   
  import { ref } from 'vue'

  const open = ref(false)
  const open2 = ref(false)
  const open3 = ref(false)


</script>


<template>
  <div class="Projects">
     <div class="projectlink">
      <img class="Proimg"  src="../assets/cvimg.png" alt="cv">
      <div class="outer">
  <div>
    <MyModal />
  </div>
</div>
 
<button class="Pbutton" @click="open = true , open2 = false, open3= false">Open Modal</button>

<Teleport to="body">
  <div v-if="open" class="modal">
   
    <button class = "Ebutton" @click="open = false">Close</button>
    <p>1</p>
  </div>
</Teleport>
     
     </div>
     <div class="projectlink">
      <img class="Proimg"  src="../assets/cdc.png" alt="cv">
      <div class="outer">
  <div>
    <MyModal />
  </div>
</div>
 
<button class="Pbutton" @click="open2 = true, open = false, open3 = false">Open Modal</button>

<Teleport to="body">
  <div v-if="open2" class="modal2">
    
    <button class = "Ebutton" @click="open2 = false ">Close</button>
    <p>2</p>
  </div>
</Teleport>

     </div>
     <div class="projectlink">
      <img class="Proimg"  src="../assets/coml.png" alt="cv">
      <div class="outer">
  <div>
    <MyModal />
  </div>
</div>
 
<button  class="Pbutton" @click="open3 = true, open = false,open2 = false">Open Modal</button>

<Teleport to="body">
  <div v-if="open3" class="modal3">
    
    <button class = "Ebutton" @click="open3 = false">Close</button>
    <p>3</p>
  </div>
</Teleport>

     </div>
  </div>
</template>

<style>

  .Projects { 
     
    background-color: darkred;
    width: 100%;
    min-height: 60vh;
    border-radius: 2%;
    display: flex;
    align-items: center;
    justify-content: space-around   ;




  }

  .projectlink {
    background-color: white;
    width: 20%;
    border-style: solid;
    border-color: whitesmoke;
    box-shadow: 12px
  }

  .Proimg {
    width:100% ;
    height:100% ;

      
     


  }

  .projectlink h1 {

    background-color: darkred;



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

.modal2 {
  position: fixed;
  z-index: 999;
  top: 30%;
  left: 50%;
  width: 40%;
  height: 40%;
  margin-left: -20%;
  background-color: white;
}


.modal3 {
  position: fixed;
  z-index: 999;
  top: 30%;
  left: 50%;
  width: 40%;
  height: 40%;
  margin-left: -20%;
  background-color: white;
}

.Pbutton {

  background-color: darkred;
  color: white;
}

.Ebutton {

background-color: darkred;
color: white;
 
 
 
}




/*@media (min-width: 1024px) { 
 .Projects {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}*/
</style>
