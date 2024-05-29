const start = document.getElementById("start")
const screen = document.getElementById("screen")
const pokemon = document.getElementById("pokemon")


start.addEventListener("click", function(){
  console.log("button pressed")
  pokemon.classList.add("startup")
})