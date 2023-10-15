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
    botonModoNocturno.style.backgroundColor = 'black';
    let titulos = document.querySelectorAll('h1,h2');
    for (let titulo of titulos) {
      titulo.style.color = '';
    }
    modoNocturnoActivo = false;
  } else {
    // Activar el modo nocturno
    entorno.style.backgroundColor = 'black';
    footer.style.color = 'black';
    botonModoNocturno.style.backgroundColor = 'white';
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

function proyectarDocPeticion() {
  estadoContenedor = 1;
  contenedorPeticion.style.display = 'flex';
  contenedorTutela.style.display = 'none';
  contenedorContrato.style.display = 'none';
}

function proyectarDocContrato() {
  estadoContenedor = 2;
  contenedorPeticion.style.display = 'none';
  contenedorTutela.style.display = 'none';
  contenedorContrato.style.display = 'flex';
}

function proyectarDocTutela() {
  estadoContenedor = 3;
  contenedorPeticion.style.display = 'none';
  contenedorContrato.style.display = 'none';
  contenedorTutela.style.display = 'flex';
}

// Funciones por Tipo de Documento.

// Tipo Petición.

// Sección - Fijar fecha.


function genPeticion()
 {

 }

 var botonFechaPeticion = document.getElementById("botonFechaPeticion");
 botonFechaPeticion.addEventListener("focus",definirFecha);
 var botonFechaContrato = document.getElementById("botonFechaContrato");
 botonFechaContrato.addEventListener("click",definirFecha);
 function definirFecha(fechaDocumento)
   {
     fechaDocumento = new Date();
     fechaFormateada = fechaDocumento.toLocaleDateString();
     document.getElementById("fecha1").innerHTML = " "+fechaFormateada;
     document.getElementById("fecha2").innerHTML = " "+fechaFormateada;
   }


// Sección Lugar de Creación.

function elegirPais()
    {
      let x = document.getElementById("inputPais");
      let y = document.getElementById("lugar1");
      let z = document.getElementById("lugar2"); 
      y.innerHTML = x.value;
      z.innerHTML = x.value;
}

// Sección - Entidad destinataria.

function escribirEntidad()
    {
      let x = document.getElementById("textoInputEntidad");
      let y = document.getElementById("entidad"); 
      y.innerHTML = "<br>"+x.value;
}

// Sección - Creador del documento.

function escribirUsuario()
    {
      let x = document.getElementById("textoInputNombreUsuario");
      let y = document.getElementById("nombreusuario1");
      let z = document.getElementById("nombreusuario2"); 
      y.innerHTML = " "+x.value;
      z.innerHTML = x.value;
}

// Sección - Peticiones.

let botonPeticiones = document.getElementById("botonPeticiones");
botonPeticiones.addEventListener("click",escribirPeticiones);
let inputPeticiones = document.getElementById("textoInputPeticiones");
function escribirPeticiones()
      {
        document.getElementById("spanPeticiones").innerHTML = inputPeticiones.value;
        inputPeticiones.value = '';
}

// Sección - Hechos.

let x = document.getElementById("inputTextoHechosPeticion");
let y = document.getElementById("listaHechosPeticion");
let inputTextHechos;

function escribirHechos() {
    
  inputTextHechos = x.value;
}
function agregarHechos() {
 // Create a new <li> element with the input value
 let newLi = document.createElement("li");
 newLi.textContent = inputTextHechos;
 newLi.type = "1";

 // Insert the new <li> element above the hn element
 y.parentNode.insertBefore(newLi, y);

 // Clear the input field
 x.value = '';
}

function eliminarLiVacio() {
  let liElements = document.querySelectorAll("li");

  for (let i = liElements.length - 1; i >= 0; i--) {
    if (liElements[i].textContent.trim() === '') {
      liElements[i].remove();
    }
  }
}

document.getElementById("inputTextoHechosPeticion").addEventListener("input", escribirHechos);

// Add event listener to remove empty <li> elements when the user leaves textoInputHechos
document.getElementById("inputTextoHechosPeticion").addEventListener("blur", eliminarLiVacio);

// Add event listener to add a new <li> element when the user clicks the "botonAddHechos" button
document.getElementById("botonAddHechosPeticion").addEventListener("click", agregarHechos);

const inputElement = document.getElementById('inputTextoHechosPeticion');

inputElement.addEventListener('input', function () {
  // Set the minimum height
  this.style.height = '24px'; // Or your preferred minimum height

  // Adjust the height based on the scrollHeight
  this.style.height = this.scrollHeight + 'px';

  // Set the minimum width
  if (this.scrollWidth > 90) { // Adjust the minimum width as needed
    this.style.width = '90%'; // Or your preferred minimum width
  } else {
    this.style.width = this.scrollWidth + 'px';
  }
});

  // Función para resetear Hechos en caso de error.
  function eliminarElementosLi() {
    let liElements = document.querySelectorAll("li");

    for (let i = liElements.length - 1; i >= 0; i--) {
      liElements[i].remove();
    }
  }

document.getElementById("botonResetHechosPeticion").addEventListener("click", eliminarElementosLi);

// Sección - Fundamentos.

let filtroFundamentos = document.getElementById("listaFundamentos");
let botonFundamentos = document.getElementById("botonFundamentos");
botonFundamentos.addEventListener("click",imprimirFundamentos);
function imprimirFundamentos()
{
  if (filtroFundamentos.value == "peticion_Basica")
    {
      document.getElementById("espacioFundamentos").innerHTML = fundamentos_Peticion;
      filtroFundamentos.value = '';
    }
}


// Sección - Pruebas.

function escribirPruebas()
    {
      let x = document.getElementById("textoInputPruebas");
      let y = document.getElementById("pruebas");
      y.innerHTML = x.value;
}

// Sección - Notificaciones.

function escribirNotificaciones1() {
  let x = document.getElementById("textoInputEmail");
  let y = document.getElementById("email");
  y.innerHTML = x.value;
}

function escribirNotificaciones2() {
  let x = document.getElementById("textoInputCelular");
  let y = document.getElementById("celular");
  y.innerHTML = x.value;
}


// Sección - Firmar documento.
function escribirIdUsuario()
  {
    let x = document.getElementById("textoInputIdUsuario");
    let y = document.getElementById("idUsuario");
    y.innerHTML = x.value; 
}

function subirFirma(input, target) {
  let file = input.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function () {
        let img = document.getElementById(target);
        // can also use "this.result"
        img.src = reader.result;
}
}


// Función Generar PDF. html2pdf by ekoopmans. https://ekoopmans.github.io/html2pdf.js/

function generatePDF(){
  if (contenedorPeticion.style.display === 'flex')
  {
    var element = document.getElementById('esqueletoPeticion');
    var opt = {
    margin: 0.5,
    filename: 'dp_gendocu.pdf',
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
    filename: 'cto_gendocu.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
    }
    html2pdf(element, opt);
  }else if(contenedorTutela.style.display === 'flex')
  {
    var element = document.getElementById('esqueletoTutela');
    var opt = {
    margin: 0.5,
    filename: 'tut_gendocu.pdf',
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

// Agrega un evento de clic al botón con ID 'botonCopiar'
document.getElementById("botonCopiar").addEventListener("click", function () {
  let idElemento = "";

  if (estadoContenedor === 1) {
    idElemento = "esqueletoPeticion";
  } else if (estadoContenedor === 2) {
    idElemento = "esqueletoContrato";
  } else if (estadoContenedor === 3) {
    idElemento = "esqueletoTutela";
  } else {
    idElemento = "contenedorVacio";
  }

  copiarAlPortapapeles(idElemento);
});



// Misceláneos

let logo = document.getElementById("logo");
