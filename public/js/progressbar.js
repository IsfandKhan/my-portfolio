var lang = {
    "html": "90%",
    "css": "70%",
    "javascript": "80%",
    "node": "70%",
    "java": "60%"
  };
  
  var multiply = 4;
  
  $.each( lang, function( language, pourcent) {
  
    var delay = 200;
    
    setTimeout(function() {
      $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);
    
    multiply++;
  
  });