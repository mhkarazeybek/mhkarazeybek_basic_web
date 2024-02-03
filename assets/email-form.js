document.getElementById("contactform").addEventListener('submit', (e) => {
  
    // Timeout is needed for form to properly submit with animation
    setTimeout(function(){
     
    var subscribeForm = document.getElementById("result")
   subscribeForm.setAttribute("style", "-webkit-animation: fadeOut 1s; animation: fadeOut 1s;  animation-fill-mode: forwards;");
   document.getElementById("form").setAttribute("style", "display:none;");  
   
  subscribeForm.innerHTML = `<h1>Your Email Has Sent!</h1> `   
    
  subscribeForm.setAttribute("style", "-webkit-animation: fadeIn 1s; animation: fadeIn 1s;  animation-fill-mode: forwards;");  
  
  },500);
    
    
  })