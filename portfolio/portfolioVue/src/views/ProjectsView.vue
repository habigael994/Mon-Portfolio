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
 
<button class="Pbutton" @click="open = true , open2 = false, open3= false">Voir le projet</button>

<Teleport to="body">
  <div v-if="open" class="modal">
   
    <button class = "Ebutton" @click="open = false">X</button>
    <div class="modalText">
      <h1>Mon CV</h1>
      <p>technologies utilisées: <br>
        - HTLM5 <br>
        - CSS(flexbox) <br>
      </p>
      <img class="Proimg2"  src="../assets/cvimg.png" alt="cv">
      <p>liens:<br></p>
      <a href="https://github.com/habigael994/CV">https://github.com/habigael994/CV</a> 
       
      <p>date: 01/07/04</p>
    </div>
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
 
<button class="Pbutton" @click="open2 = true, open = false, open3 = false">Voir le projet</button>

<Teleport to="body">
  <div v-if="open2" class="modal2"  >
        <button class = "Ebutton" @click="open2 = false ">X</button>
        <div class="modalText">
          <h1>Cahier des charges</h1>
          <img class="Proimg3"  src="../assets/cdc.png" alt="cdc">
          <p>liens:</p>
          <a href="../assets/Cahier des charges (la Socketterie).pdf">Cahier des charges.pdf</a>
          <p>date: 20/10/04</p>
        </div>
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
 
<button  class="Pbutton" @click="open3 = true, open = false,open2 = false">Voir le projet</button>

<Teleport to="body">
  <div v-if="open3" class="modal3">
    
    <button class = "Ebutton" @click="open3 = false">X</button>
    <div class="modalText">
      <h1>Espace commentaire</h1>
      <p>technologies utilisées: <br>
        - HTLM5 <br>
        - CSS(flexbox)
        - Javascript <br>
      </p>
      <img class="Proimg4" src="../assets/coml.png" alt="com">
      <p>liens:</p>
      <a href="https://github.com/habigael994/EspaceCommentaireJS">https://github.com/habigael994/EspaceCommentaireJS</a> 
       
      <p>date: 14/10/04</p>
    </div>
  </div>
</Teleport>

     </div>
  </div>
    <article>

      <div class="container">
        <form action="action_page.php">

          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name..">

          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name..">

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

          <input type="submit" value="Submit">

        </form>
      </div>

  </article>
</template>

<style>


   

  

 
  a {
    font-size: 90%;
    color: black;


  }

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
    border-radius: 3%;
     

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
  border: 1px;
  border-style: solid;
  border-color: black;
  box-shadow: 5px 5px 5px black;
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
  border: 1px;
  border-style: solid;
  border-color: black;
  box-shadow: 5px 5px 5px black;
  
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
  border: 1px;
  border-style: solid;
  border-color: black;
  box-shadow: 5px 5px 5px black;
}

.Pbutton {

  background-color: darkred;
  color: white;
}

.Pbutton :hover {

  cursor: pointer;

}

.projectlink:hover {
 
  box-shadow: 5px 5px 5px black;



}

.Ebutton {
border-color: darkred;
   
background-color: darkred;
color: white;
 

 
}
 
.Ebutton:hover {

  cursor: pointer;

}

.modalText {

 margin-left: 5%;
}

.Proimg2 {
  height:80% ;
  width: 40%;
  position: absolute;
  margin-left: 50%;
  margin-top: -23%;
  border: 1px;
  border-style: solid;
  border-color: black;
  box-shadow: 2px 2px 2px black ;

}

.Proimg3 {
  height:80% ;
  width: 40%;
  position: absolute;
  margin-left: 50%;
  margin-top: -8.5%;
  border: 1px;
  border-style: solid;
  border-color: black;
  box-shadow: 2px 2px 2px black  ; 

}


.Proimg4 {
  height:80% ;
  width: 40%;
  position: absolute;
  margin-left: 50%;
  margin-top: -23%;
  border: 1px;
  border-style: solid;
  border-color: black;
  box-shadow: 2px 2px 2px black  ;

}

 
/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid darkred; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: darkred;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: red;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  margin-top: 20%;
}


/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
 

 

/*@media (min-width: 1024px) { 
 .Projects {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}*/
</style>
