const cursorElement = document.getElementById('cursor');
function MHMO(){
    document.getElementById("MainHeader").innerHTML = "LOL"
    document.title = "LOL"
    document.getElementById("favicon").href = "reaction.png"
}
function MHML(){
    document.getElementById("MainHeader").innerHTML = "Pacifiky"
    document.title = "Pacifiky Website"
    document.getElementById("favicon").href = "icon.ico"
}
function cursorMove(e){
    if(e.target.classList.contains('cursor_hover')){
        cursorElement.classList.add('cursor--hover')
    }else{
        cursorElement.classList.remove('cursor--hover')
    }
    cursorElement.style.left = e.screenX + "px";
    cursorElement.style.top = e.screenY + "px";
}
addEventListener('mousemove', cursorMove, false);
addEventListener('touchmove', cursorMove, false);
addEventListener('touchstart', cursorMove, false);
addEventListener('mousedown', ()=>cursorElement.classList.add('cursor--clicked'), false);
addEventListener('mouseup', ()=>cursorElement.classList.remove('cursor--clicked'), false);