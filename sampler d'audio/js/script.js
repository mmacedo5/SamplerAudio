//FUNCIÓ PER CANVIAR DE VIDEO - AUDIO DISPLAY
document.getElementById("botoway1").onclick = way1;
document.getElementById("botoway2").onclick = way2;
document.getElementById("botoway3").onclick = way3;

let indicadorWay1 = document.getElementById("indicadorWay1");
let indicadorWay2 = document.getElementById("indicadorWay2");
let indicadorWay3 = document.getElementById("indicadorWay3");
let indicador0 = document.getElementById("indicador0");
let reproductorWay1;
let reproductorWay2;
let reproductorWay3;

function way1() {
    reproductorWay1 = document.getElementById("musica1");
    if (indicadorWay1.style.backgroundColor == "greenyellow") {
        //posar el video en pausa i canviar el boto verd a gris
        reproductorWay1.pause();
        indicadorWay1.style.backgroundColor = "darkgrey";
        indicador0.style.backgroundColor = "darkgrey";
    } else if (reproductorWay1 != null && reproductorWay1.paused == true) {
        reproductorWay1.play();
        indicadorWay1.style.backgroundColor = "greenyellow";
        indicador0.style.backgroundColor = "greenyellow";
    } else {
        //posar el viedo i apagar la resta
        document.getElementById("pantalla").innerHTML = "<img class='formaPantalla' src=img/pantalla.png><video nocontrols autoplay id='musica1'><source src='video/way1.mp4' type='video/mp4'></video>"
        indicadorWay1.style.backgroundColor = "greenyellow";
        indicadorWay2.style.backgroundColor = "darkgrey";
        indicadorWay3.style.backgroundColor = "darkgrey";
        indicador0.style.backgroundColor = "greenyellow";
        document.getElementById("volumAudio").value = 1;
    }
}

function way2() {
    reproductorWay2 = document.getElementById("musica2");
    if (indicadorWay2.style.backgroundColor == "greenyellow") {
        //posar el video en pausa i canviar el boto verd a gris
        reproductorWay2.pause();
        indicadorWay2.style.backgroundColor = "darkgrey";
        indicador0.style.backgroundColor = "darkgrey";
    } else if (reproductorWay2 != null && reproductorWay2.paused == true) {
        reproductorWay2.play();
        indicadorWay2.style.backgroundColor = "greenyellow";
        indicador0.style.backgroundColor = "greenyellow";
    } else {
        //posar el viedo i apagar la resta
        document.getElementById("pantalla").innerHTML = "<img class='formaPantalla' src=img/pantalla.png><video nocontrols autoplay id='musica2'><source src='video/way2.mp4' type='video/mp4'></video>"
        indicadorWay2.style.backgroundColor = "greenyellow";
        indicadorWay1.style.backgroundColor = "darkgrey";
        indicadorWay3.style.backgroundColor = "darkgrey";
        indicador0.style.backgroundColor = "greenyellow";
        document.getElementById("volumAudio").value = 1;
    }
}

function way3() {
    reproductorWay3 = document.getElementById("musica3");
    if (indicadorWay3.style.backgroundColor == "greenyellow") {
        //posar el video en pausa i canviar el boto verd a gris
        reproductorWay3.pause();
        indicadorWay3.style.backgroundColor = "darkgrey";
        indicador0.style.backgroundColor = "darkgrey";
    } else if (reproductorWay3 != null && reproductorWay3.paused == true) {
        reproductorWay3.play();
        indicadorWay3.style.backgroundColor = "greenyellow";
        indicador0.style.backgroundColor = "greenyellow";
    } else {
        //posar el viedo i apagar la resta
        document.getElementById("pantalla").innerHTML = "<img class='formaPantalla' src=img/pantalla.png><video nocontrols autoplay id='musica3'><source src='video/way3.mp4' type='video/mp4'></video>"
        indicadorWay3.style.backgroundColor = "greenyellow";
        indicadorWay1.style.backgroundColor = "darkgrey";
        indicadorWay2.style.backgroundColor = "darkgrey";
        indicador0.style.backgroundColor = "greenyellow";
        document.getElementById("volumAudio").value = 1;
    }
}


//FUNCIÓ PER CANVVIAR DE VOLUM AUDIO DISPLAY
volumAudio.addEventListener("change", function (ev) {
    let reproductor1 = document.getElementById("musica1");
    reproductor1.volume = ev.currentTarget.value;
}, true);

volumAudio.addEventListener("change", function (ev) {
    let reproductor2 = document.getElementById("musica2");
    reproductor2.volume = ev.currentTarget.value;
}, true);

volumAudio.addEventListener("change", function (ev) {
    let reproductor3 = document.getElementById("musica3");
    reproductor3.volume = ev.currentTarget.value;
}, true);

//FUNCIÓ TECLAT D'AUDIOS
let reproductorAudioA1 = document.getElementById("audioA1");
let reproductorAudioB1 = document.getElementById("audioB1");
let reproductorAudioC1 = document.getElementById("audioC1");
let reproductorAudioD1 = document.getElementById("audioD1");
let reproductorAudioA2 = document.getElementById("audioA2");
let reproductorAudioB2 = document.getElementById("audioB2");
let reproductorAudioC2 = document.getElementById("audioC2");
let reproductorAudioD2 = document.getElementById("audioD2");
let reproductorAudioA3 = document.getElementById("audioA3");
let reproductorAudioB3 = document.getElementById("audioB3");
let reproductorAudioC3 = document.getElementById("audioC3");
let reproductorAudioD3 = document.getElementById("audioD3");
let reproductorAudioA4 = document.getElementById("audioA4");
let reproductorAudioB4 = document.getElementById("audioB4");
let reproductorAudioC4 = document.getElementById("audioC4");
let reproductorAudioD4 = document.getElementById("audioD4");
document.getElementById("a1").onclick = a1;
document.getElementById("b1").onclick = b1;
document.getElementById("c1").onclick = c1;
document.getElementById("d1").onclick = d1;
document.getElementById("a2").onclick = a2;
document.getElementById("b2").onclick = b2;
document.getElementById("c2").onclick = c2;
document.getElementById("d2").onclick = d2;
document.getElementById("a3").onclick = a3;
document.getElementById("b3").onclick = b3;
document.getElementById("c3").onclick = c3;
document.getElementById("d3").onclick = d3;
document.getElementById("a4").onclick = a4;
document.getElementById("b4").onclick = b4;
document.getElementById("c4").onclick = c4;
document.getElementById("d4").onclick = d4;

function a1() {
    reproductorAudioA1.play();
    document.getElementById("indicador1").style.backgroundColor = "greenyellow";
}

function b1() {
    reproductorAudioB1.play();
    document.getElementById("indicador1").style.backgroundColor = "greenyellow";
}

function c1() {
    reproductorAudioC1.play();
    document.getElementById("indicador1").style.backgroundColor = "greenyellow";
}

function d1() {
    reproductorAudioD1.play();
    document.getElementById("indicador1").style.backgroundColor = "greenyellow";
}

function a2() {
    reproductorAudioA2.play();
    document.getElementById("indicador2").style.backgroundColor = "greenyellow";
}

function b2() {
    reproductorAudioB2.play();
    document.getElementById("indicador2").style.backgroundColor = "greenyellow";
}

function c2() {
    reproductorAudioC2.play();
    document.getElementById("indicador2").style.backgroundColor = "greenyellow";
}

function d2() {
    reproductorAudioD2.play();
    document.getElementById("indicador2").style.backgroundColor = "greenyellow";
}

function a3() {
    reproductorAudioA3.play();
    document.getElementById("indicador3").style.backgroundColor = "greenyellow";
}

function b3() {
    reproductorAudioB3.play();
    document.getElementById("indicador3").style.backgroundColor = "greenyellow";
}

function c3() {
    reproductorAudioC3.play();
    document.getElementById("indicador3").style.backgroundColor = "greenyellow";
}

function d3() {
    reproductorAudioD3.play();
    document.getElementById("indicador3").style.backgroundColor = "greenyellow";
}

function a4() {
    reproductorAudioA4.play();
    document.getElementById("indicador4").style.backgroundColor = "greenyellow";
}

function b4() {
    reproductorAudioB4.play();
    document.getElementById("indicador4").style.backgroundColor = "greenyellow";
}

function c4() {
    reproductorAudioC4.play();
    document.getElementById("indicador4").style.backgroundColor = "greenyellow";
}

function d4() {
    reproductorAudioD4.play();
    document.getElementById("indicador4").style.backgroundColor = "greenyellow";
}

volum1.addEventListener("change", function (ev) {
    reproductorAudioA1.volume = ev.currentTarget.value;
    reproductorAudioB1.volume = ev.currentTarget.value;
    reproductorAudioC1.volume = ev.currentTarget.value;
    reproductorAudioD1.volume = ev.currentTarget.value;
}, true);

volum2.addEventListener("change", function (ev) {
    reproductorAudioA2.volume = ev.currentTarget.value;
    reproductorAudioB2.volume = ev.currentTarget.value;
    reproductorAudioC2.volume = ev.currentTarget.value;
    reproductorAudioD2.volume = ev.currentTarget.value;
}, true);

volum3.addEventListener("change", function (ev) {
    reproductorAudioA3.volume = ev.currentTarget.value;
    reproductorAudioB3.volume = ev.currentTarget.value;
    reproductorAudioC3.volume = ev.currentTarget.value;
    reproductorAudioD3.volume = ev.currentTarget.value;
}, true);

volum3.addEventListener("change", function (ev) {
    reproductorAudioA4.volume = ev.currentTarget.value;
    reproductorAudioB4.volume = ev.currentTarget.value;
    reproductorAudioC4.volume = ev.currentTarget.value;
    reproductorAudioD4.volume = ev.currentTarget.value;
}, true);


//FUNCIO BOTO AUTO VOLUM
document.getElementById("auto0").onclick = volumAuto0;
document.getElementById("auto1").onclick = volumAuto1;
document.getElementById("auto2").onclick = volumAuto2;
document.getElementById("auto3").onclick = volumAuto3;
document.getElementById("auto4").onclick = volumAuto4;


function volumAuto0() {
    document.getElementById("volumAudio").value = 0.5;
    
    if (reproductorWay1 != null && reproductorWay2 == null && reproductorWay3 == null) {
        reproductorWay1.volume = 0.5;
    } else if (reproductorWay1 == null && reproductorWay2 != null && reproductorWay3 == null) {
       reproductorWay2.volume = 0.5;  
    } else if (reproductorWay1 == null && reproductorWay2 == null && reproductorWay3 != null) {
        reproductorWay3.volume = 0.5;
    }
}

function volumAuto1() {
    reproductorAudioA1.volume = 0.5;
    reproductorAudioB1.volume = 0.5;
    reproductorAudioC1.volume = 0.5;
    reproductorAudioD1.volume = 0.5;
    document.getElementById("volum1").value = 0.5;
}

function volumAuto2() {
    reproductorAudioA2.volume = 0.5;
    reproductorAudioB2.volume = 0.5;
    reproductorAudioC2.volume = 0.5;
    reproductorAudioD2.volume = 0.5;
    document.getElementById("volum2").value = 0.5;
}

function volumAuto3() {
    reproductorAudioA3.volume = 0.5;
    reproductorAudioB3.volume = 0.5;
    reproductorAudioC3.volume = 0.5;
    reproductorAudioD3.volume = 0.5;
    document.getElementById("volum3").value = 0.5;
}

function volumAuto4() {
    reproductorAudioA4.volume = 0.5;
    reproductorAudioB4.volume = 0.5;
    reproductorAudioC4.volume = 0.5;
    reproductorAudioD4.volume = 0.5;
    document.getElementById("volum4").value = 0.5;
}