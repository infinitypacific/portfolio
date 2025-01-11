function MHMO() {
    document.getElementById("MainHeader").innerHTML = "LOL"
    document.head.querySelector("title").innerHTML = "LOL"
    document.getElementById("favicon").href = "reaction.png"
}
function MHML() {
    document.getElementById("MainHeader").innerHTML = "Pacifiky"
    document.head.querySelector("title").innerHTML = "Pacifiky Website"
    document.getElementById("favicon").href = "icon.ico"
}
function move(p){
    document.getElementById("mouse").style.left = (p.pageX-10) + "px";
    document.getElementById("mouse").style.top = (p.pageY-10) + "px";
}
function click() {
    console.log("click")
}
addEventListener('mousemove', move, false);
addEventListener('wheel', move, false);
addEventListener('touchmove', move, false);
addEventListener('touchstart', move, false);
addEventListener('mousedown', click, false);