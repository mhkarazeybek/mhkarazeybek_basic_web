document.getElementById("contactform").addEventListener('submit', (e) => {
  
    // Timeout is needed for form to properly submit with animation
    setTimeout(function(){
     
    var subscribeForm = document.getElementById("result")  
  subscribeForm.innerHTML = `Email sent failed! try manually.`   
    
  subscribeForm.setAttribute("style", "color: #f5d26b; transition: 0.5s ease-in-out");  
  
  },500);
    
    
  })