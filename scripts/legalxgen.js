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
  document.getElementById("datePickerPetitio").focus();
  }

function proyectarDocContrato() {
  estadoContenedor = 2;
  contenedorPeticion.style.display = 'none';
  contenedorTutela.style.display = 'none';
  contenedorContrato.style.display = 'flex';
  arrayItems.forEach( function(element){
    element.style.backgroundColor = 'rgb(221,221,221)'; });
  document.getElementById("datePickerContractio").focus();
 }

function proyectarDocTutela() {
  estadoContenedor = 3;
  contenedorPeticion.style.display = 'none';
  contenedorContrato.style.display = 'none';
  contenedorTutela.style.display = 'flex';
  arrayItems.forEach( function(element){
    element.style.backgroundColor = 'rgb(187,187,187)'; });
    document.getElementById("listaAcciones").focus();
}

// Obtener todos los items y el item-11
const items = document.querySelectorAll('.item input');
const item11 = document.querySelector('.item-11');
const item11Contenedor = document.querySelector('.item-11-contenedor');
const botones = document.querySelectorAll('.botonesFormulario');

// Función que asegura que el item-11 esté siempre visible dentro de su contenedor
function focusOnItem11() {
  item11Contenedor.scroll({
    top: item11.offsetTop, // Posición de item-11 dentro de su contenedor
    behavior: 'smooth'     // Scroll suave
  });
}

// Agregar evento 'input' a cada campo dentro de los items
items.forEach(input => {
  input.addEventListener('input', focusOnItem11);
});

// También aplica para los botones
botones.forEach(button => {
  button.addEventListener('click', focusOnItem11);
});



// Función Fecha

function definirFecha(selectorDeFecha) {
  const datePicker = document.getElementById(selectorDeFecha);
  let fechaDocumento;

  if (datePicker.value) {
      const dateParts = datePicker.value.split("-");
      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1;
      const day = parseInt(dateParts[2], 10);
      fechaDocumento = new Date(year, month, day);
  } else {
      fechaDocumento = new Date();
  }

  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const dia = fechaDocumento.getDate();
  const mes = meses[fechaDocumento.getMonth()];
  const anio = fechaDocumento.getFullYear();
  const fechaFormateada = dia + " de " + mes + " de " + anio;

  if (estadoContenedor === 1) {
    document.getElementById("fecha1").innerHTML = fechaFormateada + ".";
  }
  if (estadoContenedor === 2) {
    document.getElementById("fechaContrato1").innerHTML = fechaFormateada;
    document.getElementById("fechaContrato2").innerHTML = fechaFormateada;
  }
}

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

var botonOpcionPaga1 = document.querySelector('.itemBoton#botonCopiar');
var botonOpcionPaga2 = document.querySelector('.itemBoton#botonExportar');

document.addEventListener('DOMContentLoaded', function() {
  var botonCopiar = document.getElementById('botonCopiar');
  botonCopiar.addEventListener('click', function(){
    copiarAlPortapapeles(idElemento);
  })
  var botonExportar = document.getElementById('botonExportar');
  botonExportar.addEventListener('click', function(){
        generatePDF();
  })

}
);

// QR imagen al click 

function mostrarImagenSuperpuesta() {
  var imagenSuperpuesta = document.getElementById('imagenSuperpuesta');
  imagenSuperpuesta.style.display = 'block';
}

function ocultarImagenSuperpuesta() {
  var imagenSuperpuesta = document.getElementById('imagenSuperpuesta');
  imagenSuperpuesta.style.display = 'none';
}