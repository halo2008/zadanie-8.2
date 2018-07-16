'use strict';

var output = document.getElementById('output-temp');

var outputText =document.getElementById('output-text');

var button = document.getElementById('btn-cel');

var buttonFahrenheit = document.getElementById('btn-cel-2');



button.addEventListener('click', function(){  
    
  var temp = window.prompt('wpisz temperature w stopniach celciusza');
  
  temp = parseFloat(temp);
  
  var tempFahrenheit = temp * 1.8 + 32;
  
  output.innerHTML = 'temperatura w stopniach celsjusza ' +temp+ ' temperatura w stopniach farenchaita '+ tempFahrenheit;
  
  temperature(temp);
 
});

buttonFahrenheit.addEventListener('click', function(){  
    
  var temp = window.prompt('wpisz temperature w stopniach celciusza');
  
  var tempCelsius = (temp - 32) / 1.8;
  
  output.innerHTML = 'temperatura w stopniach fahrenheita ' +temp+ ' temperatura w stopniach celsjusza '+ tempCelsius;  
  
  temperature(tempCelsius);
 
});

function temperature (temp) {
  if (isNaN(temp) || !temp) {
    window.prompt('nie podałeś liczby');
  }
  
  else if (temp === null){
    outputText.innerHTML = 'wychodzisz?';
  }
  
  else if (temp === ''){
    outputText.innerHTML ='nic nie wpisałes';
  }
  
  else if (temp < 0) {
    outputText.innerHTML = 'brrr zimno';
  }
  
  else if (temp === 0){
   outputText.innerHTML = 'chyba woda zamarzła';
  }
  
  else if (18 >= temp && temp > 0 ) {
    outputText.innerHTML ='nie za ciepło';
  }
  
  else if ( 30 >= temp && temp > 18) {
    outputText.innerHTML ='mmm przyjemnie ciepło';
  }
  
  else {
    outputText.innerHTML ='za gorąco';
  }
}
