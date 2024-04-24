/// Funciones generales.

// Entorno


// Modo Nocturno 
let botonModoNocturno = document.getElementById("botonModoNocturno");
let entorno = document.body;
let footer = document.getElementById("footer");
let modoNocturnoActivo = false;

function toggleModoNocturno() {
  if (modoNocturnoActivo) {
    // Desactivar el modo nocturno
    entorno.style.backgroundColor = '';
    footer.style.color = 'black';
    botonModoNocturno.style.backgroundColor = 'rgb(18, 29, 36)';
    botonModoNocturno.innerHTML = '🌛';
    let titulos = document.querySelectorAll('h1,h2');
    for (let titulo of titulos) {
      titulo.style.color = '';
    }
    modoNocturnoActivo = false;
  } else {
    // Activar el modo nocturno
    entorno.style.backgroundColor = 'rgb(18 29 36)';
    footer.style.color = 'white';
    botonModoNocturno.style.backgroundColor = "#efefef";
    botonModoNocturno.innerHTML = '🌞';
    let pSelector = document.getElementById('parrafoSelector');
    pSelector.style.color = 'white';
    let titulos = document.querySelectorAll('h1,h2');
    for (let titulo of titulos) {
      titulo.style.color = 'white';
    }
    modoNocturnoActivo = true;
  }
}

botonModoNocturno.addEventListener("click", toggleModoNocturno);



/// Función de Proyectar borrador de Documento según Tipo
let contenedorGen = document.getElementsByClassName("botonGen");
let botonGenPeticion = document.getElementById("botonGenPeticion");
let contenedorPeticion = document.getElementById("contenedorPeticion");
botonGenPeticion.addEventListener("click",proyectarDocPeticion);
let botonGenContrato = document.getElementById("botonGenContrato");
let contenedorContrato = document.getElementById("contenedorContrato");
botonGenContrato.addEventListener("click",proyectarDocContrato);
let botonGenTutela = document.getElementById("botonGenTutela");
let contenedorTutela = document.getElementById("contenedorTutela");
botonGenTutela.addEventListener("click",proyectarDocTutela);

let estadoContenedor = 0;  // Para manipulación y alistamiento del Documento.

 // Para manipualción de items generadores.
let arrayItems = document.getElementsByClassName('item');
arrayItems = Array.prototype.slice.call(arrayItems);
function proyectarDocPeticion() {
  estadoContenedor = 1;
  contenedorPeticion.style.display = 'flex';
  contenedorTutela.style.display = 'none';
  contenedorContrato.style.display = 'none';
  arrayItems.forEach(  function(element){
    element.style.backgroundColor ='rgb(238,238,238)';});
  }

function proyectarDocContrato() {
  estadoContenedor = 2;
  contenedorPeticion.style.display = 'none';
  contenedorTutela.style.display = 'none';
  contenedorContrato.style.display = 'flex';
  arrayItems.forEach( function(element){
    element.style.backgroundColor = 'rgb(221,221,221)'; });
 }


function proyectarDocTutela() {
  estadoContenedor = 3;
  contenedorPeticion.style.display = 'none';
  contenedorContrato.style.display = 'none';
  contenedorTutela.style.display = 'flex';
  arrayItems.forEach( function(element){
    element.style.backgroundColor = 'rgb(187,187,187)'; 
});
}

// Funciones por Tipo de Documento.


  

// Función Generar PDF. html2pdf by ekoopmans. https://ekoopmans.github.io/html2pdf.js/

function generatePDF(){
  if (contenedorPeticion.style.display === 'flex')
  {
    var element = document.getElementById('esqueletoPeticion');
    var opt = {
    margin: 0.5,
    padding:0.5,
    filename: 'peticion_gendocu.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    }
    html2pdf(element, opt);
  }
  else if(contenedorContrato.style.display === 'flex')
  {
    var element = document.getElementById('esqueletoContrato');
    var opt = {
    margin: 0.5,
    filename: 'contrato_gendocu.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    }
    html2pdf(element, opt);
  }

  else if(contenedorTutela.style.display === 'flex')
  {
    var element = document.getElementById('esqueletoAccion');
    var opt = {
    margin: 0.5,
    filename: 'accion_publica_gendocu.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
    }
    html2pdf(element, opt);
  }
  else{
    alert("¡No hay nada creado para exportar!");
  }

}

// Función para copiar texto al portapapeles
function copiarAlPortapapeles(idElemento) {

  // Selecciona el elemento que contiene el texto que deseas copiar
  let elemento = document.getElementById(idElemento);

  // Crea un elemento de área de texto
  let textarea = document.createElement("textarea");
  textarea.value = elemento.textContent;

  // Añade el área de texto al cuerpo del documento
  document.body.appendChild(textarea);

  // Selecciona el contenido del área de texto
  textarea.select();

  try {
    // Utiliza la API del Portapapeles para copiar el texto seleccionado
    navigator.clipboard.writeText(textarea.value).then(function () {
      console.log("Texto copiado al portapapeles exitosamente!.");
    }).catch(function (err) {
      console.error("¡Ups! No se pudo copiar el texto al portapapeles. Intenta luego.", err);
    });
  } finally {
    // Elimina el área de texto temporal
    document.body.removeChild(textarea);
  }
}
let idElemento = "";
// Agrega un evento de clic al botón con ID 'botonCopiar'
document.getElementById("botonCopiar").addEventListener("click", function () {
  if (estadoContenedor === 1) {
    idElemento = "esqueletoPeticion";
  } else if (estadoContenedor === 2) {
    idElemento = "esqueletoContrato";
  } else if (estadoContenedor === 3) {
    idElemento = "esqueletoMandato";
  } else if (estadoContenedor === 4) {
    idElemento = "esqueletoTutela";
  }
  else {
    idElemento = "contenedorVacio";
  }


});



// Misceláneos

let logo = document.getElementById("logo");




// EXPERIMENTAL

// Chequeos de pago

let pagoRealizado = false;
let opcionPaga = 0;
var botonOpcionPaga1 = document.querySelector('.itemBoton#botonCopiar');
var botonOpcionPaga2 = document.querySelector('.itemBoton#botonExportar');

document.addEventListener('DOMContentLoaded', function() {
  var botonCopiar = document.getElementById('botonCopiar');
  botonCopiar.addEventListener('click', function(){
    opcionPaga = opcionPaga + 1;
  })
  var botonExportar = document.getElementById('botonExportar');
  botonExportar.addEventListener('click', function(){
    opcionPaga = opcionPaga + 2;
  })


  var popup = document.getElementById('popup');
  
  function mostrarPopup() {
    popup.style.display = 'block';
  }

  var closePopUp = document.getElementById('closePopUp');

  function cerrarPopup() {
    popup.style.display = 'none';
    pagoRealizado = true;
    opcionPaga = opcionPaga - opcionPaga;
  }

  // Workflow Opcion Paga 1: Copiar
  
  botonOpcionPaga1.addEventListener('click', function() {
    pagoRealizado = false;
    if (botonOpcionPaga1.id === "botonCopiar"){
      mostrarPopup();
    }
  });

  
  // Workflow Opcion Paga 2: Exportar

  botonOpcionPaga2.addEventListener('click', function() {
    pagoRealizado = false;
    if (botonOpcionPaga2.id === "botonExportar"){
      mostrarPopup();
    }
  });


  // Workflow Cerrar Opciones Pagas

  closePopUp.addEventListener('click', function(){
    if (opcionPaga === 1){
      copiarAlPortapapeles(idElemento);
    }
    else if (opcionPaga === 2){
      generatePDF();
    }
    else {
      console.log("¡No ocurrió nada!");
    };
    cerrarPopup();
  });


});


// QR imagen al click 


function mostrarImagenSuperpuesta() {
  var imagenSuperpuesta = document.getElementById('imagenSuperpuesta');
  imagenSuperpuesta.style.display = 'block';
}

function ocultarImagenSuperpuesta() {
  var imagenSuperpuesta = document.getElementById('imagenSuperpuesta');
  imagenSuperpuesta.style.display = 'none';
}