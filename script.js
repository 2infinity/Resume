const cookieCakes = document.getElementById("cookieCakes");
const xBtn = document.getElementById("xBtn");
const cakeBox = document.getElementById("cakeBox");

function displayCakes(){
    cakeBox.style.display = "flex";
}
function closeCakes(){
    cakeBox.style.display = "none";
}

xBtn.addEventListener("click", closeCakes);
cookieCakes.addEventListener("click", displayCakes);