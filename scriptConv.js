window.onload = function() {
  var storyImage = document.getElementById("story-image");
  var storyParagraph = document.getElementById("story-paragraph");
  var changeStoryButton = document.getElementById("change-story-button");
  var noSaltar = document.getElementById("noSaltar");
  var audioPlayer = document.getElementById("audio-player");
  var audioFiumba = document.getElementById("fiumba"); 
    var audioLluvia = document.getElementById("lluvia");
   var audioBebe = document.getElementById("bebe");
  var audioJungla = document.getElementById("jungla");
  var audioNenes = document.getElementById("nenes");
  
  // Obtener imagen de una URL "https://s12.gifyu.com/images/Escena1.gif
  var imageUrl = "viaje_tiempo.gif";
      storyImage.src = imageUrl;
  
    setTimeout(function() { imageUrl="cuna_javier.gif";
  storyImage.src = imageUrl;
                            fadeIn(storyParagraph, story1);
 changeStoryButton.style.display = "inline";                       
                              
  }, 2000);
  
  //---------------------------------Muerte
  
var audioContainerMuerte = document.getElementById("audioContainerMuerte");
var audioContainerMuerte2 = document.getElementById("audioContainerMuerte2");

  //.........................................
audioContainerMuerte.style.display = "none"; 
audioContainerMuerte2.style.display = "none"; 



  // Definir la historia
  var story1 = "Javier Deques nació un 5 de mayo de 2023. Apareció un día en la puerta del orfanato mientras llovía. Lo acogió una mujer arrugada de gran corazón. El niño creció allí toda su vida hasta cumplir 16.";
  var story2 = "Su infancia se llenó de libros sobre el espacio y aventuras con otro niño al que le gustaban los perros. Su amistad nació luego de que Javier le salvara de la mordida de un caniche que le dejó una marca redonda en la cara. Podría haber modificado un recuerdo feliz como ese, pero no lo hice. Era especial en su Vida. Tenía que buscar otra idea.";
   var story3 =  "La Tierra. 70 millones de años atrás. Claramente no había nada de él allí, o quizá sí. Por mucho que intentara modificar el pasado, nada parecía cambiar la última noche de Javier Deques en aquel San Martín tan lejano. Me rehusaba a pensar que una idea como el Destino existiera. Estaba al tanto de aquella teoría. Del efecto mariposa.";
  var story4 =  "Quizá, si modificaba el aleteo de algún insecto en un instante tan remoto del tiempo como lo era este podría salvarlo, provocando un huracán en Buenos Aires, no me importaba realmente. Ya estaba dispuesto a considerar el extremo de que todo volara por los aires con tan solo sacarme la curiosidad y cambiar su vida.";
  var story5 = "<p>Lo hubiera intentado, si alguien no me hubiese detenido. Reconocí el 911 grabado en su pecho antes de verla a los ojos. Era una mujer encantadora. De cabello rubio que caía sobre su uniforme.</p><p>- Ya es ir demasiado lejos, ¿no crees?</p>"
  var story6="<p>Cuando llegué esa noche a la escena del crimen, tenía mis dudas. Pero era imposible no darse cuenta de quién era.</p><p>- ¿Por qué te atreves? Esa mariposa tiene su propio camino, como el resto.</p>";
  var story7="Estábamos de acuerdo con que no era una policía."
  var story8="<p>- ¿Por qué todo esto entonces? – susurré entre el viento cálido del Jurásico. </p><p>- Quería ver hasta qué punto estabas dispuesto a llegar, de que cosas te emocionabas, de cuales te arrepentías. Es parte de mi trabajo, tengo que hacer el juicio y saber a cuál de los dos sitios enviarte.</p>"
 var story9="<p>- ¿Y que viste?</p><p> - Vi toda una Vida. Hice mi veredicto, fue interesante. Suelo hacer este experimento con todos, pero siempre me sorprendo y aprendo cosas nuevas de ustedes. Quería saber que sentías mientras lo repasabas."
  var story10="<p>Su cara blanca era una belleza letal que solo yo podía presenciar en ese momento.</p><p>- ¿Es tiempo entonces?</p><p>- Lo es Javier Deques, fue un sinfín de historias sucediendo a la vez. Me demostraste quien eras desde los últimos minutos hasta los primeros, intentando cambiarlos o simplemente cuidando que no se muevan. Fue una sentencia sencilla.</p>"
  var story11= "<p>Me senté a reflexionar mientras lo entendía.</p><p>-	Se siente frágil y complejo verlo de ese modo. La Vida, quiero decir, siempre fue una cadena de mariposas y huracanes entrelazándose.</p>"
   var story12= "<p>Sin guadañas ni vestidos negros, sonrió gentilmente y tomó mi mano.</p><p>-	La Vida, fragil y bella como las mariposas, feroz y abrupta como los huracanes – susurró en mi oído, y como ella solía hacerlo, acomodó el tiempo, apagó las luces, y cuando estuve listo, San Martin desapareció.</p>"
   var story13=""

  
  
  audioLluvia.play();
  audioLluvia.loop=true;
  audioBebe.volume = 0.05;
  audioBebe.play();
  audioBebe.loop=true;
  
  
 

  

  var clickCount = 0;
  var glitchTimeout;

  // Cambiar de historia al hacer clic en el botón
  function changeStory() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    clickCount++;
   
    //----------------------------  L-------------------------------
    if (clickCount === 1) {
      audioBebe.pause();
      audioLluvia.pause();
      
      imageUrl = "viaje_tiempo.gif";
      storyImage.src = imageUrl;
    
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
    
     setTimeout(function() { imageUrl="nenes_javierXtimoti.gif";
  storyImage.src = imageUrl;
                            fadeIn(storyParagraph, story2);
                            

  
                        
   
                              
  }, 2000);
      setTimeout(function() {    
        audioNenes.volume = 0.2;
      audioNenes.play(); 
  }, 4500);
      
    
    glitchTimeout = setTimeout(function() {
        changeStoryButton.classList.add("glitch-effect");
          changeStoryButton.innerHTML = '<img src="https://s12.gifyu.com/images/giphyf0a4ae514c0495ce.gif" alt="Botón GIF" style="width: 70px; height: 70px;" /><p></p> - Viajar -';
    changeStoryButton.disabled = false;
      }, 15000);
      
    }
    //----------------------------LLEGA AL JURASICO-------------------------------------
   else if (clickCount === 2) {
     audioFiumba.play();
      audioJungla.volume = 0.2;
      audioJungla.play();
     audioJungla.loop= true;
       
      setTimeout(function() {  
        
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
         imageUrl="jurasico.gif";
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
        changeStoryButton.innerHTML = ">>"; 
        
         changeStoryButton.style.border = ""; 
        changeStoryButton.disabled = false;
       
        }, 3000);
       
    
  }
    //----------------------------------------------------------
     else if (clickCount === 3) {
       
     
    fadeIn(storyParagraph, story4);
       
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
    
       
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
       
         changeStoryButton.style.backgroundColor = "";
    changeStoryButton.style.border = ""; 
      changeStoryButton.innerHTML = "Proceder"; 
     storyParagraph.style.opacity = 1;
       changeStoryButton.disabled = false;
     changeStoryButton.classList.remove("glitch-effect");
   
       
      
       
     }
    //----------------------------------------------------------------
  else if (clickCount === 4) {
   
      
 
       
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     audioContainerMuerte.style.display = "block"; 
    fadeIn(storyParagraph, story5);
    
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
    
       
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
   
       
        changeStoryButton.style.backgroundColor = "";
    changeStoryButton.style.border = ""; 
      changeStoryButton.innerHTML = "?"; 
     storyParagraph.style.opacity = 1;
       changeStoryButton.disabled = false;
     changeStoryButton.classList.remove("glitch-effect");
   
       
    
  }
      //----------------------------------------------------------------
  else if (clickCount === 5) {

      audioContainerMuerte2.style.display = "none"; 
    fadeIn(storyParagraph, story6);  
 
       
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
    
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
         audioContainerMuerte.style.display = "none"; 
     setTimeout(function() { audioContainerMuerte2.style.display = "block";   
                              
  }, 3000);
    setTimeout(function() { 
          
      
      
        
        changeStoryButton.style.backgroundColor = "";
    changeStoryButton.style.border = ""; 
      changeStoryButton.innerHTML = "?"; 
     storyParagraph.style.opacity = 1;
       changeStoryButton.disabled = false;
     changeStoryButton.classList.remove("glitch-effect");
  }, 6000);
   
    
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
    
       
    
   
    
  }
       //----------------------------------------------------------------
  else if (clickCount === 6) {
 
      audioContainerMuerte2.style.display = "none"; 
    fadeIn(storyParagraph, story7);  
 
  
    
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
         
   
    setTimeout(function() { 
          
      
      
        
        changeStoryButton.style.backgroundColor = "";
    changeStoryButton.style.border = ""; 
      changeStoryButton.innerHTML = "Responder"; 
     storyParagraph.style.opacity = 1;
       changeStoryButton.disabled = false;
     changeStoryButton.classList.remove("glitch-effect");
  }, 6000);
   
    
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
    
       
    
  }
       //----------------------------------------------------------------
  else if (clickCount === 7) {
  
      audioContainerMuerte2.style.display = "none"; 
    fadeIn(storyParagraph, story8);  
 
  
    
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
         
   
    setTimeout(function() { 
          
      
      
        
        changeStoryButton.style.backgroundColor = "";
    changeStoryButton.style.border = ""; 
      changeStoryButton.innerHTML = ">"; 
     storyParagraph.style.opacity = 1;
       changeStoryButton.disabled = false;
     changeStoryButton.classList.remove("glitch-effect");
  }, 6000);
   
    
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
    
    
  }
    //--------------------------------------------------
     else if (clickCount === 8) {
   
      audioContainerMuerte2.style.display = "none"; 
    fadeIn(storyParagraph, story9);  
 
  
    
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
         
   
    setTimeout(function() { 
          
      
      
        
        changeStoryButton.style.backgroundColor = "";
    changeStoryButton.style.border = ""; 
      changeStoryButton.innerHTML = ">"; 
     storyParagraph.style.opacity = 1;
       changeStoryButton.disabled = false;
     changeStoryButton.classList.remove("glitch-effect");
  }, 6000);
   
    
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
    
    
  }
    //--------------------------------------------------
     else if (clickCount === 9) {
  
      audioContainerMuerte.style.display = "none"; 
    fadeIn(storyParagraph, story10);  
 
  
    
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
         
   
    setTimeout(function() { 
          
      
      
        
        changeStoryButton.style.backgroundColor = "";
    changeStoryButton.style.border = ""; 
      changeStoryButton.innerHTML = ">"; 
     storyParagraph.style.opacity = 1;
       changeStoryButton.disabled = false;
     changeStoryButton.classList.remove("glitch-effect");
  }, 6000);
   
    
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
    
    
  }
    //--------------------------------------------------
     else if (clickCount === 10) {
    

      audioContainerMuerte.style.display = "none"; 
    fadeIn(storyParagraph, story11);  
 
  
    
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
         
   
    setTimeout(function() { 
          
      
      
        
        changeStoryButton.style.backgroundColor = "";
    changeStoryButton.style.border = ""; 
      changeStoryButton.innerHTML = ">"; 
     storyParagraph.style.opacity = 1;
       changeStoryButton.disabled = false;
     changeStoryButton.classList.remove("glitch-effect");
  }, 6000);
   
    
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
    
    
  }
    //--------------------------------------------------
     else if (clickCount === 11) {

      audioContainerMuerte.style.display = "none"; 
    fadeIn(storyParagraph, story12);  
 
  
    
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
       
        setTimeout(function() { 
      imageUrl = "nenes_javierXtimoti.gif";
      storyImage.src = imageUrl;
  }, 11000);
         setTimeout(function() { 
      imageUrl = "cuna_javier.gif";
      storyImage.src = imageUrl;
  }, 14000);
         setTimeout(function() { 
      imageUrl = "playa_precipicio.gif";
      storyImage.src = imageUrl;
  }, 17000);
         setTimeout(function() { 
      imageUrl = "laboratorio_llamas.gif";
      storyImage.src = imageUrl;
  }, 20000);
         setTimeout(function() { 
      imageUrl = "laboratorio_pesado_fallido.gif";
      storyImage.src = imageUrl;
           audioLluvia.play()
  }, 23000);
         setTimeout(function() { 
      imageUrl = "vagabundo_deques.gif";
      storyImage.src = imageUrl;
  }, 25000);
         setTimeout(function() { 
      imageUrl = "atraco_deques.gif";
      storyImage.src = imageUrl;
           audioJungla.pause()
  }, 28000);
        setTimeout(function() { 
      imageUrl = "cuerpo_deques.gif";
      storyImage.src = imageUrl;
  }, 31000);
       
         
   
    setTimeout(function() { 
          
      
      
        
        changeStoryButton.style.backgroundColor = "";
    changeStoryButton.style.border = ""; 
      changeStoryButton.innerHTML = "Fin"; 
     storyParagraph.style.opacity = 1;
       changeStoryButton.disabled = false;
     changeStoryButton.classList.remove("glitch-effect");
  }, 37000);
   
    
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
    
    
  } else if (clickCount === 12) {
    
   
      audioContainerMuerte.style.display = "none"; 
   
 
  
      
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
         
   storyImage.style.display="none";
    
  }
    
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
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
