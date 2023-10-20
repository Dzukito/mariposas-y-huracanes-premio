window.onload = function() {
  var storyImage = document.getElementById("story-image");
  var storyParagraph = document.getElementById("story-paragraph");
  var changeStoryButton = document.getElementById("change-story-button");
  var noSaltar = document.getElementById("noSaltar");
  var audioFuego = document.getElementById("fuego");
  var audioFiumba = document.getElementById("fiumba");
    var audioLluvia = document.getElementById("lluvia");
   var audioPlaya = document.getElementById("playa");
  var audioCafe = document.getElementById("cafe");

  
  // Obtener imagen de una URL "https://s12.gifyu.com/images/Escena1.gif
  var imageUrl = "https://s12.gifyu.com/images/puopu.gif";
      storyImage.src = imageUrl;
  
    setTimeout(function() { imageUrl="playa_precipicio.gif";
  storyImage.src = imageUrl;
                            fadeIn(storyParagraph, story1);
 changeStoryButton.style.display = "inline";                       
                              
  }, 2000);
  
  //---------------------------------Muerte
  
var audioContainerMuerte = document.getElementById("audioContainerMuerte");
  
  
  //.........................................



  // Definir la historia
  var story1 = "Javier Deques quiso que la tierra lo tragara, pero finalmente saltó. No era bueno para manejar los nervios. Esa tarde se fracturó el tobillo, eso de los retos no era lo suyo. El lado bueno es que Marta se ofreció a cuidarlo durante el resto del verano.";
  var story2 = "La relación entre ambos perduró unos cuantos años. Eran una pareja excéntrica dadas las profesiones de cada uno. Javier le contaba en cada cena las teorías sobre agujeros negros que no le dejaban dormir y la idea loca de una máquina para crear uno que les permitiera viajar a través del Universo. Marta, enamorada de su lucidez, le complementaba cada hipótesis con sus estudios en física de partículas y su pasión por las pequeñas cosas de la vida. En cada cita, ella le regalaba un origami dedicado y firmado para él. Se separaron cinco años después de que Javier llevara su idea de la máquina demasiado lejos, obsesionándose sin tiempo para nadie más.";
   var story3 =  "El incendio consumió gran parte de la Academia, no solo del laboratorio de Javier. El fuego trepó plantas arriba y arrasó con los proyectos de cada uno de los investigadores. Marta Iridio trabajaba en el piso tres. El trabajo de su vida se vio consumido en cenizas por el incidente. Quedó sin empleo y con algunas quemaduras por no poder huir a tiempo del lugar. ";
   var story4 =  "Marta Iridio llevaba dos semanas casi sin comer. Debía hacer algo o moriría en la pobreza. Esa misma noche se convenció de que se trataba de supervivencia. Nadie sabe de dónde sacó la pistola. Se tapó la cara, se apretó el estómago, y se dirigió a la calle San Martín de madrugada a conseguir algo de dinero para no morir.";
 
  changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
  
    audioPlaya.play();
  
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
    audioPlaya.pause();
      audioCafe.play();
      audioFuego.pause()
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
    
     setTimeout(function() { imageUrl="martaXjavier_feliz.gif";
  storyImage.src = imageUrl;
                            fadeIn(storyParagraph, story2);
                            
   
                              
  }, 2000);
       
    
    glitchTimeout = setTimeout(function() {
        changeStoryButton.classList.add("glitch-effect");
          changeStoryButton.innerHTML = '<img src="https://s12.gifyu.com/images/giphyf0a4ae514c0495ce.gif" alt="Botón GIF" style="width: 70px; height: 70px;" /><p></p> - Avanzar más -';
    changeStoryButton.disabled = false;
      }, 15000);
      audioFuego.pause()
    }
    //----------------------------LLEGA AL JURASICO-------------------------------------
   else if (clickCount === 2) {
     audioCafe.pause();
     audioFuego.play();
     
     
       
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
         imageUrl="marta_llamas.gif";
  storyImage.src = imageUrl;
                              fadeIn(storyParagraph, story3);
                              
  }, 2000);
     
     changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
   
    
       glitchTimeout = setTimeout(function() {
        changeStoryButton.classList.add("glitch-effect");
          changeStoryButton.innerHTML = '<img src="https://s12.gifyu.com/images/giphyf0a4ae514c0495ce.gif" alt="Botón GIF" style="width: 70px; height: 70px;" /><p></p> - Ir a la noche -';
    changeStoryButton.disabled = false;
      }, 15000);
       
    
  }
    //----------------------------------------------------------
     else if (clickCount === 3) {
       storyParagraph.opacity=0;
         audioCafe.pause();
    audioFuego.pause();
       audioLluvia.play();
    
      imageUrl = "viaje_tiempo.gif";
  storyImage.src = imageUrl;
     
       setTimeout(function() { 
         imageUrl="marta_calle.gif";
  storyImage.src = imageUrl;
                              fadeIn(storyParagraph, story4);
                              
  }, 2000);
       
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
    
       
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
       
        
   glitchTimeout = setTimeout(function() {
        changeStoryButton.classList.add("glitch-effect");
          changeStoryButton.innerHTML = '<img src="https://s12.gifyu.com/images/giphyf0a4ae514c0495ce.gif" alt="Botón GIF" style="width: 70px; height: 70px;" /><p></p>';
    changeStoryButton.disabled = false;
      }, 15000);
      
     }
    //----------------------------------------------------------------
 //----------------------------------------------------------
     else if (clickCount === 4) {
        
      
       storyParagraph.opacity=0;
       window.location.href = "convergencia.html";
      
     }
    
     
  else{
  
  }
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
