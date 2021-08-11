let menuSlider=document.getElementById("menuSlider");
let boutton=document.getElementById("toggle")

boutton.addEventListener('click', function(event) {
    event.preventDefault();
    menuSlider.classList.toggle('open');   
});
// ------------------------------modal
let modal=document.getElementById("modal");
let btn=document.getElementById("signup");

btn.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.replace("OFF","modal-container");   
});

let close=document.getElementById("close");

close.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.replace("modal-container","OFF");   
});




// function Menu(){
//     document.getElementById("menuSlider").classList.toggle("open");
//   }