document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector(".btn");
  const toast = document.querySelector(".toast"); 

  button.addEventListener("click", function() {
      
      toast.classList.add("show");

      
      setTimeout(function() {
          toast.classList.remove("show");
      }, 3000);  
  });
});
