console.log("script loaded");
const voldLinks = document.querySelectorAll(".vold__link");
const voldSlides = document.querySelectorAll(".vold__slide");

// create click events for the links
voldLinks.forEach(link => {
    console.log(link);
    link.addEventListener("click",(event)=>{
        event.preventDefault();
        showHideArticles(event.target.dataset.slide);
        event.target.classList.add("active");
        // TODO: remember to loop here and remove all previous "active" classes!
    });
});




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





//to top button//
const scroll = document.querySelector(".scroll-top");

scroll.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
}