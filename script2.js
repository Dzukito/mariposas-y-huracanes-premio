window.onload = function() {
  var storyImage = document.getElementById("story-image");
  var storyParagraph = document.getElementById("story-paragraph");
  var changeStoryButton = document.getElementById("change-story-button");
  var noSaltar = document.getElementById("noSaltar");
  var audioPlaya = document.getElementById("playa");
  var audioFiumba = document.getElementById("fiumba");
    var audioHospital = document.getElementById("hospital");
   var audioLabo2 = document.getElementById("labo2");
  var audioBlackHole = document.getElementById("blackHole");
  
  
  // Obtener imagen de una URL "https://s12.gifyu.com/images/Escena1.gif
  var imageUrl = "viaje_tiempo.gif";
      storyImage.src = imageUrl;
  
    setTimeout(function() { imageUrl="playa_precipicio.gif";
  storyImage.src = imageUrl;
                            fadeIn(storyParagraph, story1);
 changeStoryButton.style.display = "inline";                       
                              
  }, 2000);
  
  //---------------------------------Muerte
  

  audioPlaya.play()
  
  //.........................................




  // Definir la historia
  var story1 = "Javier Deques se negó a saltar, era demasiado tosco para intentarlo. Sin embargo, sus amigos no lo dejaron escapar tan fácil. Al ver que se resistía, los jóvenes más grandes empujaron a Javier al risco para que volara como mejor pudiera. Desde ese día, una silla de ruedas lo acompañó";
  var story2 = "<p>A pesar del trágico evento que marcaría su vida, Marta Iridio permaneció a su lado como su mejor amiga, cuidando de él en ciertas ocasiones. Javier Deques sonreía cuando estaban juntos, pero no podía ocultar por dentro la rabia de no poder haberla conquistado. Pasó sus días solo y repleto de libros sobre física de partículas y el espacio, sus grandes pasiones en aquel entonces. </p><p>Fue en ese momento en que se le ocurrió la idea de inventar una máquina. Un artefacto capaz de crear agujeros negros, <a href='https://s11.gifyu.com/images/MOSHED-2023-5-28-13-37-52.gif' style='color: #00FFFF;' target='_blank'>pero no cualquiera.</a> Javier Deques había teorizado sobre el hecho de poder viajar en el tiempo a través de un agujero de gusano. Quizá, de construir esa máquina podría volver a aquella tarde del precipicio y probar suerte.</p> ";
   var story3 =  "Diez años después lo consiguió en el laboratorio de la Academia de Física de Buenos Aires. Una noche que nadie estaba cerca rondando el establecimiento, encendió su máquina y el tiempo retrocedió para darle una segunda oportunidad.";
 
  changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
  
  
    glitchTimeout = setTimeout(function() {
        changeStoryButton.classList.add("glitch-effect");
          changeStoryButton.innerHTML = '<img src="https://s12.gifyu.com/images/giphyf0a4ae514c0495ce.gif" alt="Botón GIF" style="width: 70px; height: 70px;" /><p></p> - Avanzar tiempo -';
    changeStoryButton.disabled = false;
      }, 5000);
      

  

  var clickCount = 0;
  var glitchTimeout;

  // Cambiar de historia al hacer clic en el botón
  function changeStory() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    clickCount++;
   
    //----------------------------  L-------------------------------
    if (clickCount === 1) {
      imageUrl = "viaje_tiempo.gif";
      storyImage.src = imageUrl;
      audioPlaya.pause()
      audioHospital.play()
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
    
     setTimeout(function() { imageUrl="marta_javier_silladeruedas.gif";
  storyImage.src = imageUrl;
                            fadeIn(storyParagraph, story2);
                            
   
                              
  }, 2000);
       
    
    glitchTimeout = setTimeout(function() {
        changeStoryButton.classList.add("glitch-effect");
          changeStoryButton.innerHTML = '<img src="https://s12.gifyu.com/images/giphyf0a4ae514c0495ce.gif" alt="Botón GIF" style="width: 70px; height: 70px;" /><p></p> - Avanzar -';
    changeStoryButton.disabled = false;
      }, 15000);
      
    }
    //----------------------------LLEGA AL JURASICO-------------------------------------
   else if (clickCount === 2) {
     audioHospital.pause();
     audioLabo2.play();
  
     
       
      setTimeout(function() {  
       audioArma.play();
                              
  }, 6000);
     
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
       changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     
    storyParagraph.opacity=0;
      imageUrl = "viaje_tiempo.gif";
  storyImage.src = imageUrl;
     
       setTimeout(function() { 
         imageUrl="labo_sillaruedas_exito.gif";
  storyImage.src = imageUrl;
                              fadeIn(storyParagraph, story3);
                              
  }, 2000);
     
     changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
   
    
      setTimeout(function() {
        changeStoryButton.style.backgroundColor = "";
        changeStoryButton.style.display = "inline";
        changeStoryButton.innerHTML = ">"; 
        
         changeStoryButton.style.border = ""; 
        changeStoryButton.disabled = false;
       
        }, 5000);
       
    
  }
    //----------------------------------------------------------
     else if (clickCount === 3) {
       storyParagraph.opacity=0;
       audioLabo2.pause()
       audioBlackHole.play()
      imageUrl = "agujero negro.gif";
  storyImage.src = imageUrl;
       
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
    
       
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
       
        
   setTimeout(function() {
        window.location.href = "rama1.html";
       
        }, 6000);
       
      
       
     }
    //----------------------------------------------------------------

  else{}
}


  changeStoryButton.addEventListener("click", changeStory);
   noSaltar.addEventListener("click", noSaltar);

  // Función para animar el fade in
  function fadeIn(element, text) {
    element.style.opacity = 0;
    element.innerHTML = text;

    var opacity = 0;
    var interval = setInterval(function() {
      if (opacity < 1) {
        opacity += 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }

  storyParagraph.style.fontFamily = "Arial, Montserrat";
};
