let scrollContainer = document.getElementsByClassName("gallery")[0];
let backBtn = document.getElementById("back");
let nextBtn = document.getElementById("next");

//  scrollContainer.addEventListener("wheel",(e)=>{
//     e.preventDefault();
//     scrollContainer.scrollLeft += e.deltaY;

//  })
 nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth"
    scrollContainer.scrollLeft +=900;
 });
 backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth"

    scrollContainer.scrollLeft -=900;
 });