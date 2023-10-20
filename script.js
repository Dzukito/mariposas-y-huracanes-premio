window.onload = function() {
  var storyImage = document.getElementById("story-image");
  var storyParagraph = document.getElementById("story-paragraph");
  var changeStoryButton = document.getElementById("change-story-button");
  var noSaltar = document.getElementById("noSaltar");
  var audioPlayer = document.getElementById("audio-player");
  var audioFiumba = document.getElementById("fiumba");
    var audioLluvia = document.getElementById("lluvia");
   var audioTos = document.getElementById("tos");
  var audioArma = document.getElementById("arma");
  var audioFuego = document.getElementById("fuego");
  var audioPlaya= document.getElementById("playa");
  var audioLabo1 = document.getElementById("labo1");
  
  // Obtener imagen de una URL "https://s12.gifyu.com/images/Escena1.gif
  var imageUrl = "mariposa.gif";
  storyImage.src = imageUrl;
  
  setTimeout(function() {
    changeStoryButton.style.display = "inline";
  }, 1);


  // Definir la historia
  var story1 = "21 de marzo de 2040, una de la mañana. La gente se amontonaba en las esquinas de la calle San Martín atraída como polillas por la luz de las sirenas. Dos grandes cintas amarillas en cada cuadra prohibían el paso a prácticamente todos. La lluvia era la cita perfecta para que la noche contara su historia a los gatos. Una historia reflejada en los ojos de cada testigo frente al cuerpo de Javier Deques tumbado sobre la acera.";
  var story2 = "<p>Aparecí en la escena del crimen luego del disparo. La oficial de policía me dejó pasar. Era una mujer encantadora, de cabello rubio que caía sobre su uniforme. Javier Deques de 34 años había sido asesinado. Di una vuelta para convencerme de que se había tratado de un intento de robo. Capital estaba intransitable desde el último verano.</p>¿Podía yo identificar al culpable o darle claridad al asunto? Quizá era el indicado para resolverlo dada la ventaja que tenía frente al resto. Quizá por eso yo estaba ahí. Porque podía ver algo que otros no podían. Porque tenía la oportunidad de volver atrás de alguna forma e intentar entenderlo siquiera. Porque nadie más lo haría.<b></b>";
   var story3 =  "Ese fue el momento exacto. El delincuente inició el robo con una amenaza clara de disparar a cambio. Javier Deques levantó las manos y ofreció sus bolsillos, pero estaban llenos de polvo ensuciando un par de monedas y una rosa de papel. El delincuente insistió sin escucharlo, Javier Deques insistió también, ambos forcejearon, ambos rugieron, y uno disparó. A la imagen del primero se lo tragó la sombra de una esquina. A la silueta del otro la Luna le lloró.</p>";
  var story4 =  "Javier Deques salió a tomar un paseo, no venía de ningún sitio en particular. Eligió la calle San Martín porque era la más iluminada en aquel momento. Dio dinero a un hombre sin techo que estaba durmiendo en lo que intentaba parecer algo así como un techo, y se detuvo a fumar. Luego de un rato retomo el paseo y fue asaltado. ¿Podría haber sido diferente?";
  var story5 = "Quizá..."
  var story6="Javier Deques escogió no dar dinero al hombre sin techo que estaba durmiendo. Un perro que lo acompañaba se levantó a ladrarle. Tal vez era el culpable de una cicatriz redonda grabada en su cara. Siguió de largo y se detuvo a fumar sacando de su bolsillo una <a href='https://s11.gifyu.com/images/MOSHED-2023-5-22-19-0-15.gif' target='_blank' style='color: #00FFFF;'>rosa de papel</a> que le gustaba. Luego de un rato alguien lo interceptó. El delincuente inició el robo con una amenaza clara de disparar a cambio. Javier Deques levantó las manos y ofreció sus bolsillos llenos de billetes. El delincuente le pidió que los sacara, pero Javier Deques hizo un movimiento tosco por culpa de sus propios nervios y el arma por sus propios nervios no aguantó y se disparó. A la imagen de uno se lo tragó la sombra de una esquina. A la silueta del otro la Luna le lloró. <p>No había funcionado. Debía seguir retrocediendo.</p>";
  var story7="Javier Deques fue despedido a las dos de la tarde. La Academia de Física de Buenos Aires se lo comunicó mientras trabajaba en aquella máquina. La idea de un generador de agujeros negros resultaba ridícula más que peligrosa. Luego de recibir la noticia, tiró sus apuntes cubiertos de fórmulas y los prendió fuego colmado de frustración."
  var story8="No tenía idea que eso provocaría un incendio en el laboratorio. La Academia perdió parte de sus instalaciones por un retraso de los bomberos, y la policía emitió una orden de búsqueda. Sin embargo, Javier Deques desapareció hasta la noche de su crimen."
  // Mostrar la primera historia con animación de fade in
  var story9="Javier Deques conoció a Marta Iridio el 9 de abril de 2033. Estaba de vacaciones cuando unos amigos se la presentaron y cayó ante su encanto. No era muy propenso a enamorarse, pero la inteligencia de Marta lo cautivó. Esa misma tarde, el grupo de jóvenes se retiró del mar para acercarse a un precipicio junto a la playa para probar su valentía y jugar un rato. Los amigos de Javier Deques sabían que no se animaría a saltar, pero al darse cuenta de su atracción por la nueva muchacha le insistieron para que pudiera impresionarla."
   

  

  var clickCount = 0;
  var glitchTimeout;

  // Cambiar de historia al hacer clic en el botón
  function changeStory() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    clickCount++;
    //------------------------------------------------------------
     if (clickCount === 1) {
       audioPlayer.loop=true;
       audioLluvia.loop=true;
       audioPlayer.play();
       audioLluvia.play();
       imageUrl = "ciudad_lluvia.gif";
       storyImage.src = imageUrl;
       storyImage.style.width = "50%";
       storyImage.style.height = "50%";
       changeStoryButton.style.backgroundColor = "transparent";
       changeStoryButton.innerHTML = " "; 
    changeStoryButton.style.border = "none"; 
       changeStoryButton.disabled = true;
       
       fadeIn(storyParagraph, story1);
       // Mostrar el botón después de 10 segundos
      setTimeout(function() {
        changeStoryButton.style.backgroundColor = "";
        changeStoryButton.style.display = "inline";
        changeStoryButton.innerHTML = "Acercarse a la policía"; 
         changeStoryButton.style.border = ""; 
        changeStoryButton.disabled = false;
       
        }, 10000);
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
       
     
    } 
    //-----------------------------------------------------------
    else if (clickCount === 2) {
      
      storyImage.style.width = "100%";
       storyImage.style.height = "auto";
       imageUrl = "cuerpo_deques.gif";
       storyImage.src = imageUrl;
       fadeIn(storyParagraph, story2);
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
       changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
       changeStoryButton.disabled = true;
       
       
      glitchTimeout = setTimeout(function() {
        changeStoryButton.classList.add("glitch-effect");
          changeStoryButton.innerHTML = '<img src="https://s12.gifyu.com/images/giphyf0a4ae514c0495ce.gif" alt="Botón GIF" style="width: 70px; height: 70px;" /><p></p> - Viajar al pasado -';
    changeStoryButton.disabled = false;
      }, 15000);
    }
    //-----------------------------------------------------------------
   else if (clickCount === 3) {
     audioFiumba.play();
     audioLluvia.play();
    audioPlayer.pause();
     
     
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
     
       setTimeout(function() { imageUrl="atraco_deques.gif";
  storyImage.src = imageUrl;
                              fadeIn(storyParagraph, story3);
                              
  }, 2000);
    
     glitchTimeout = setTimeout(function() {
        changeStoryButton.classList.add("glitch-effect");
          changeStoryButton.innerHTML = '<img src="https://s12.gifyu.com/images/giphyf0a4ae514c0495ce.gif" alt="Botón GIF" style="width: 70px; height: 70px;" /><p></p> - Viajar un poco más -';
    changeStoryButton.disabled = false;
      }, 10000);
       
    
  }
    //----------------------------------------------------------
     else if (clickCount === 4) {
        audioFiumba.play()
        audioLluvia.play();
      
      imageUrl = "viaje_tiempo.gif";
      storyImage.src = imageUrl;
       
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
      setTimeout(function() {  
       
       audioTos.play();
                              
  }, 5000);
     
       setTimeout(function() { imageUrl="vagabundo_deques.gif";
  storyImage.src = imageUrl;
   fadeIn(storyParagraph, story4);
                              
  }, 2000);
       
      // Aplicar efecto de glitch a la imagen del botón después de 10 segundos 
    
       
       
       
      glitchTimeout = setTimeout(function() {
        changeStoryButton.classList.add("glitch-effect");
          changeStoryButton.innerHTML = '<img src="https://s12.gifyu.com/images/giphyf0a4ae514c0495ce.gif" alt="Botón GIF" style="width: 70px; height: 70px;" /><p></p> - Repetir -';
    changeStoryButton.disabled = false;
      }, 7000);
       
       
     }
    //----------------------------------------------------------------
  else if (clickCount === 5) {
    fiumba.play();
     audioLluvia.play();
     imageUrl = "viaje_tiempo.gif";
      storyImage.src = imageUrl;
    
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
    
     setTimeout(function() { imageUrl="vagabundo_deques.gif";
  storyImage.src = imageUrl;
                            fadeIn(storyParagraph, story5);
   
                              
  }, 2000);
       
    
    
    setTimeout(function() {
        changeStoryButton.style.backgroundColor = "";
        changeStoryButton.style.display = "inline";
        changeStoryButton.innerHTML = "No dar dinero"; 
        
         changeStoryButton.style.border = ""; 
        changeStoryButton.disabled = false;
       
        }, 3000);
    
  }
      //----------------------------------------------------------------
  else if (clickCount === 6) {
    audioFiumba.play();
     imageUrl = "viaje_tiempo.gif";
      storyImage.src = imageUrl;
    
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
    
     setTimeout(function() { imageUrl="atraco_deques.gif";
  storyImage.src = imageUrl;
                            fadeIn(storyParagraph, story6);
   
                              
  }, 2000);
       
    
    
  glitchTimeout = setTimeout(function() {
        changeStoryButton.classList.add("glitch-effect");
          changeStoryButton.innerHTML = '<img src="https://s12.gifyu.com/images/giphyf0a4ae514c0495ce.gif" alt="Botón GIF" style="width: 70px; height: 70px;" /><p></p> - Regresar -';
    changeStoryButton.disabled = false;
      }, 15000);
    
  }
       //----------------------------------------------------------------
  else if (clickCount === 7) {
     imageUrl = "viaje_tiempo.gif";
      storyImage.src = imageUrl;
    audioLluvia.pause();
    audioLabo1.play();
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
    
     setTimeout(function() { imageUrl="laboratorio_pesado_fallido.gif";
  storyImage.src = imageUrl;
                            fadeIn(storyParagraph, story7);
   
                              
  }, 2000);
       
    
    
    setTimeout(function() {
        changeStoryButton.style.backgroundColor = "";
        changeStoryButton.style.display = "inline";
        changeStoryButton.innerHTML = "Ver"; 
        
         changeStoryButton.style.border = ""; 
        changeStoryButton.disabled = false;
       
        }, 3000);
    
  }
       //----------------------------------------------------------------
  else if (clickCount === 8) {
     imageUrl = "viaje_tiempo.gif";
      storyImage.src = imageUrl;
    
    
    
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
    
     setTimeout(function() { imageUrl="laboratorio_llamas.gif";
  storyImage.src = imageUrl;
                            fadeIn(storyParagraph, story8);
                            audioFuego.play();
   
                              
  }, 2000);
       
    
    glitchTimeout = setTimeout(function() {
        changeStoryButton.classList.add("glitch-effect");
          changeStoryButton.innerHTML = '<img src="https://s12.gifyu.com/images/giphyf0a4ae514c0495ce.gif" alt="Botón GIF" style="width: 70px; height: 70px;" /><p></p> - Retroceder más -';
    changeStoryButton.disabled = false;
      }, 15000);
    
    
  }
    //--------------------------------------------------
     else if (clickCount === 9) {
     imageUrl = "viaje_tiempo.gif";
      storyImage.src = imageUrl;
    audioFuego.pause();
       audioLabo1.pause();
       audioPlaya.play();
      changeStoryButton.style.backgroundColor = "transparent";
    changeStoryButton.style.border = "none"; 
      changeStoryButton.innerHTML = ""; 
     storyParagraph.style.opacity = 0;
       changeStoryButton.disabled = true;
     changeStoryButton.classList.remove("glitch-effect");
    
     setTimeout(function() { imageUrl="playa_deques.gif";
  storyImage.src = imageUrl;
                            fadeIn(storyParagraph, story9);
   
                              
  }, 2000);
       
    
    
    setTimeout(function() {
        changeStoryButton.style.backgroundColor = "";
        changeStoryButton.style.display = "inline";
        changeStoryButton.innerHTML = "Saltar"; 
        
         changeStoryButton.style.border = ""; 
        changeStoryButton.disabled = false;
       
        }, 10000);
       setTimeout(function() {
        noSaltar.style.backgroundColor = "";
        noSaltar.style.display = "inline";
        noSaltar.innerHTML = "No saltar"; 
        
         noSaltar.style.border = ""; 
        noSaltar.disabled = false;
       
        }, 10000);
    
  }
     else if (clickCount === 10) {
      window.location.href = "rama1.html";
     }
  else{}
}

     function noSalto() {
       window.location.href = "rama2.html";
     };

  changeStoryButton.addEventListener("click", changeStory);
   noSaltar.addEventListener("click", noSalto);

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
