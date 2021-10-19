const header = document.querySelector('header');
const section = document.querySelectorAll('section');
const titulo = document.createElement('h1');
    titulo.textContent = 'Tiempo Actual';
    titulo.className = 'titulo-cabecera';
    header.appendChild(titulo);



// URL de donde vamos a coger los datos

const requestURL = "https://www.el-tiempo.net/api/json/v2/provincias/18/municipios/18140";

// Abrimos una peticion

const request = new XMLHttpRequest();

// Indicamos que queremos que nos de datos

request.open('GET', requestURL);

// Le indicamos que esperamos un tipo JSON

request.responseType = 'json';

// Enviamos la peticion

request.send();

// Dejamos escuchando la peticion para cuando la recibamos tratarla

request.onload = function () {
  const tiempo = request.response;
  populateSection(tiempo);
}
    

// Sections


function populateSection(jsonObj) {
     const estadoH3 = document.createElement('h3');
     estadoH3.textContent = 'Estado del cielo';
     section[0].appendChild(estadoH3);

     const parrafoEstado = document.createElement('p');
     parrafoEstado.innerHTML = '<img class="icono-tiempo" src="img/dom.png" alt="CDTiempo"></a>' +'&nbsp;' + jsonObj.stateSky['description'];
     parrafoEstado.className = 'estructura-info';
     section[0].appendChild(parrafoEstado);

     const temperaturaActualH3 = document.createElement('h3');
     temperaturaActualH3.textContent = 'Temperatura';
     section[1].appendChild(temperaturaActualH3);
  
     const parrafoTemp = document.createElement('p');
     parrafoTemp.innerHTML = '<img class="icono-tiempo" src="img/caliente.png" alt="CDTiempo"></a>'+'&nbsp;' +jsonObj['temperatura_actual']+ '&nbsp; Cº';
     section[1].appendChild(parrafoTemp);

     const posibilidadLluviaH3 = document.createElement('h3');
     posibilidadLluviaH3.textContent = 'Probabilidad Lluvia';
     section[2].appendChild(posibilidadLluviaH3);
  
     const parrafoLluvia = document.createElement('p');
     parrafoLluvia.innerHTML = '<img class="icono-tiempo" src="img/lluvioso.png" alt="CDTiempo"></a>'+'&nbsp;'+jsonObj['lluvia'] + '&nbsp; %';
     section[2].appendChild(parrafoLluvia);

     const humedadH3 = document.createElement('h3');
     humedadH3.textContent = 'Humedad';
     section[3].appendChild(humedadH3);
  
     const parrafoHumedad = document.createElement('p');
     parrafoHumedad.innerHTML = '<img class="icono-tiempo" src="img/humedad.png" alt="CDTiempo"></a>'+'&nbsp;'+jsonObj['humedad']+ '&nbsp; %';
     section[3].appendChild(parrafoHumedad);

}