'use strict';

var output = document.getElementById('output-temp');

var outputText =document.getElementById('output-text');

var button = document.getElementById('btn-cel');

var buttonFahrenheit = document.getElementById('btn-cel-2');



button.addEventListener('click', function(){  
    
  var temperature = window.prompt('wpisz temperature w stopniach celciusza');
  
  temperature = parseFloat(temperature);
  
  var tempFahrenheit = temperature * 1.8 + 32;
  
  output.innerHTML = 'temperatura w stopniach celsjusza ' +temperature+ ' temperatura w stopniach farenchaita '+ tempFahrenheit;  

  checkTemperature(temperature);

 
});

buttonFahrenheit.addEventListener('click', function(){  
    
  var temperature = window.prompt('wpisz temperature w stopniach fahrenheita');

  temperature = parseFloat(temperature);
  
  var tempCelsius = (temperature - 32) / 1.8;
  
  output.innerHTML = 'temperatura w stopniach fahrenheita ' +temperature+ ' temperatura w stopniach celsjusza '+ tempCelsius;  
  
  checkTemperature(temperature);
 
});


function checkTemperature (temperature) {

  if (isNaN(temperature)) {
    window.prompt('nie podałeś liczby');
  }
  else if (temperature === null) {
     outputText.innerHTML ='nie podałes liczy';
  }
  
  else if (18 >= temperature && temperature > 0 ) {
    outputText.innerHTML ='nie za ciepło';
  }  
  
  else if (temperature < 0) {
    outputText.innerHTML = 'brrr zimno';
  }
  
  else if (temperature === 0){
   outputText.innerHTML = 'chyba woda zamarzła';
  } 

  else if ( 30 >= temperature && temperature > 18) {
    outputText.innerHTML ='mmm przyjemnie ciepło';
  }
  
  else {
    outputText.innerHTML ='za gorąco';
  }
}
