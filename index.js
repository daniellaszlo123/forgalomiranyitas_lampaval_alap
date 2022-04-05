window.addEventListener("load", init);

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

function $(elem) {
    return document.querySelectorAll(elem);
}

var auto;
var lampa;
var piros;
var zold ;
var sarga;

function init() {
    auto=$(".auto")[0];
    piros= $(".piros")[0];
    zold = $(".zold")[0];
    sarga= $(".sarga")[0];
    sarga.style.opacity="20%";
    zold.style.opacity="20%";
    piros.style.opacity="100%";
    valt();

}
var allapot=false;
function valt() {
    setInterval(()=>{
        if (!allapot) {
            sarga.style.opacity="100%";
        }
    }, 1000);

    setInterval(()=>{
        if (allapot) {
            piros.style.opacity="100%";
            sarga.style.opacity="20%";
            zold.style.opacity="20%";
        }else{
            piros.style.opacity="20%";
            sarga.style.opacity="20%";
            zold.style.opacity="100%";
            auto.classList.add("balroljobbra");
        }
        allapot=!allapot;
    }, 2000);
}