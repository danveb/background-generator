// alert("connected"); 

// Select h3, color1 class and color2 class
const css = document.querySelector("h3"); 
const color1 = document.querySelector(".color1"); 
const color2 = document.querySelector(".color2"); 
const body = document.getElementById("gradient"); 

// console.log(css); 
// console.log(color1); 
// console.log(color2); 
// console.log(body); 

// // click, mouseenter, keypress, input 
// color1.addEventListener("input", function() {
//     // console.log(color1.value); 
//     body.style.background = "linear-gradient(to right, " 
//     + color1.value 
//     + ", " 
//     + color2.value 
//     + ")";  
// })
// color2.addEventListener("input", function() {
//     // console.log(color1.value); 
//     body.style.background = "linear-gradient(to right, " 
//     + color1.value 
//     + ", " 
//     + color2.value 
//     + ")";  
// })

// change background color of body 

// set a function to avoid DRY 
function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";  

    css.textContent = body.style.background + ","; 
}
color1.addEventListener("input", setGradient); 
color2.addEventListener("input", setGradient); 

