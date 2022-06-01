console.log("script loaded");
const voldLinks = document.querySelectorAll(".vold__link");
const voldSlides = document.querySelectorAll(".vold__slide");

function resetAllLinksActive() {
  // removes the class "active" from all links, here it performes the action
  voldLinks.forEach(link =>{
    link.classList.remove('active');
  });
}
// when you click on one then the active status is removed from others
function showHideArticles(id){
    console.log("clicked",id);
    voldSlides.forEach(text => {
        if(text.getAttribute("id")===id){
            console.log("found",text)
            text.classList.add("active");
        } else {
            text.classList.remove("active");
        }
    });
}


// create click events for the links
voldLinks.forEach(link => {
    console.log(link);
    link.addEventListener("click",(event)=>{
        event.preventDefault();
        showHideArticles(event.target.dataset.slide);
        resetAllLinksActive();
        event.target.classList.add("active");
        // it removes all active classes!
    });
});






// source : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top */

//Get the button:
mybutton = document.getElementById("myBtn");

// When you scroll down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When you click on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


