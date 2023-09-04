const colors = ["green", "red", "yellow"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

 btn.addEventListener('click', function() {
    const randonNumber= getRandonNumber()
    console.log(randonNumber)
    document.body.style.backgroundColor = colors[randonNumber]
    colors.textContent = colors[randonNumber]
}) 

function getRandonNumber() {
    return Math.floor(Math.random() * colors.length)
}