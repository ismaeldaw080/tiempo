/* Slider*/

const horas = document.querySelectorAll(".horas");

let slider = document.getElementById("slider");


function removeActivaClase() {
    horas.forEach(hora => {
        hora.classList.remove("horasactivo");
    });
}

function mostrarinfohora() {
    horas[slider.value - 1].classList.add("horasactivo")
}

slider.addEventListener('change', function () {
    removeActivaClase();
    mostrarinfohora();
})

/* TABS*/

function openDia(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}