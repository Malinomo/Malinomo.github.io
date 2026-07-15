const btnFS=document.getQuerySelector("#btnFS");
const btnWS=document.getQuerySelector("#btnWS");

btnFS.addEventListener("click", enterFullscreen);
btnWS.addEventListener("click", exitFullscreen);

function enterFullscreen(){
    document.documentElement.requestFullscreen();
} 

function exitFullscreen(){
    document.exitFullscreen();
}