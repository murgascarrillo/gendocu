// DOCUMENTO Petición.

// Sección - Fijar fecha.

var botonFechaPeticion = document.getElementById("botonFechaPeticion");
botonFechaPeticion.addEventListener("click",definirFechaPeticion);
function definirFechaPeticion(){
    definirFecha("datePickerPetitio");
}


// Sección Lugar de Creación.

function elegirLugarCreacion()
   {
     if (estadoContenedor === 1){
       let x = document.getElementById("inputPais");
     let y = document.getElementById("nacionalidad"); 
     y.innerHTML = x.value;
     }
     
     else if (estadoContenedor === 2){
       let x = document.getElementById("inputLugarContrato");
       let y = document.getElementById("lugarContrato");
       let z = document.getElementById("lugarDomicilio");
       y.innerHTML = x.value;
       z.innerHTML = x.value;
     }

     else if (estadoContenedor === 3){
       let x = document.getElementById("inputLugarTutela");
       let y = document.getElementById("lugarJuez");
       y.innerHTML = x.value;
     }

     else{ 
       console.log("¡Ups! No se pudo elegir lugar de creación..")
     }
   }

// Sección USUARIO - Creador del documento.

function escribirUsuario()
   {
     let x = document.getElementById("textoInputNombreUsuario");
     let y = document.getElementById("nombreusuario1");
     let z = document.getElementById("nombreusuario2"); 
     y.innerHTML = " "+x.value;
     z.innerHTML = x.value;
}

// Sección USUARIO - Sección Nacionalidad.

function elegirNacionalidad (){
   let x = document.getElementById("inputNacionalidad");
   let y = document.getElementById("nacionalidad");
   y.innerHTML = x.value;
 }

// Sección USUARIO - Sección Tipo Documento Identidad

 function elegirTipoDocumento (){
   let x = document.getElementById("listaTipoDocumentoSolicitante");
   let y = document.getElementById("tipoDocumentoIdentidad");
   y.innerHTML = x.value;
 }

// Sección USUARIO - Sección ID Usuario
function escribirIdUsuario()
{
  let x = document.getElementById("textoInputIdUsuario");
  let y = document.getElementById("idUsuario");
  y.innerHTML = x.value; 
}

// Sección - Entidad destinataria.

let xEntidad = document.getElementById("inputTextoEntidad");
let yEntidad = document.getElementById("listaEntidades");
let inputTextEntidad;
let numEntidad = 0;

function escribirEntidad() {
   
 inputTextEntidad = xEntidad.value;
}
let newEntidad;
function agregarEntidad() {
// Create a new <p> element with the input value

newEntidad = document.createElement("p");
 newEntidad.id = "newEntidad";
 newEntidad.style.margin = "0px";
 newEntidad.textContent = inputTextEntidad;
numEntidad = numEntidad + 1;

// Insert the newEntidad element above on the list
yEntidad.parentNode.insertBefore(newEntidad, yEntidad);

// Clear the input field
xEntidad.value = '';
}

// Function to update datalist based on input
function actualizarDatalist() {
  const valorInput = xEntidad.value.toLowerCase();
  yEntidad.innerHTML = ''+"<br/>"; // Clear previous options

  datosEntidades.forEach(entidad => {
    if (entidad.nombre.toLowerCase().includes(valorInput.toLowerCase()) && valorInput) {
      const option = document.createElement('option');
  
      // Caso cuando el NIT está vacío pero el email tiene valor
      if (entidad.nit === "" && entidad.email !== "") {
        option.innerHTML = entidad.nombre + " (Email: " + entidad.email + ")";
      }
      // Caso cuando el email está vacío pero el NIT tiene valor
      else if (entidad.email === "" && entidad.nit !== "") {
        option.innerHTML = entidad.nombre + " (Nit: " + entidad.nit + ")";
      }
      // Caso cuando tanto el NIT como el email están vacíos
      else if (entidad.nit === "" && entidad.email === "") {
        option.innerHTML = entidad.nombre;
      }
      // Caso cuando tanto el NIT como el email tienen valor
      else {
        option.innerHTML = entidad.nombre + " (Nit: " + entidad.nit + ", Email: " + entidad.email + ")";
      }
  
      // Agregar la opción generada a yEntidad
      yEntidad.appendChild(option);
    }
  });
}

document.getElementById("inputTextoEntidad").addEventListener("input", function() {
  escribirEntidad();
  actualizarDatalist(); // Update the datalist on input
});

document.getElementById("inputTextoEntidad").addEventListener("input", escribirEntidad);


// Add event listener to add a new <li> element when the user clicks the "botonAddEntidad" button
document.getElementById("botonAddEntidad").addEventListener("click", agregarEntidad);

let inputEntidad = document.getElementById('inputTextoEntidad');

inputEntidad.addEventListener('input', function () {
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

 // Función para resetear Entidades en caso de error.
 let newEntidades;
 function eliminarEntidad() {
   newEntidades = document.querySelectorAll("#newEntidad");
   newEntidades.forEach((entidad) => {
     entidad.remove();
   });
   numEntidad = 0;
 }

document.getElementById("botonResetEntidad").addEventListener("click", eliminarEntidad);

// Sección - Peticiones.

let xPeticion = document.getElementById("inputTextoPeticion");
let yPeticion = document.getElementById("listaPeticiones");
let inputTextPeticion;
let numPeticion = 1;

function escribirPeticion() {
   yPeticion.innerHTML = "";
 inputTextPeticion = xPeticion.value;
}
let newPeticion;
function agregarPeticion() {
// Create a new <p> element with the input value

newPeticion = document.createElement("p");
 newPeticion.id = "newPeticion";
 newPeticion.style.margin = "0px";
 newPeticion.textContent = numPeticion + ". " + inputTextPeticion + ".";
numPeticion = numPeticion + 1;

// Insert the newPeticion element above on the list
yPeticion.parentNode.insertBefore(newPeticion, yPeticion);

// Clear the input field
xPeticion.value = '';
}

document.getElementById("inputTextoPeticion").addEventListener("input", escribirPeticion);

// Add event listener to add a new <li> element when the user clicks the "botonAddPeticion" button
document.getElementById("botonAddPeticion").addEventListener("click", agregarPeticion);

const inputPeticion = document.getElementById('inputTextoPeticion');

inputPeticion.addEventListener('input', function () {
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

 // Función para resetear Peticiones en caso de error.
 let newPeticiones;
 function eliminarPeticion() {
   newPeticiones = document.querySelectorAll("#newPeticion");
   newPeticiones.forEach((peticion) => {
     peticion.remove();
   });
   numPeticion = 0;
 }

document.getElementById("botonResetPeticiones").addEventListener("click", eliminarPeticion);

// en TUTELA:

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
let yHechos = document.getElementById("listaHechosPeticion");
let inputTextHechos;
let numHechos = 1;

function escribirHechos() {
  yHechos.innerHTML = ""; 
 inputTextHechos = x.value;
}
let newHecho;
function agregarHechos() {
// Create a new <p> element with the input value

newHecho = document.createElement("p");
 newHecho.id = "newHecho";
newHecho.style.margin = "1px";
newHecho.textContent = numHechos + ". " + inputTextHechos + ".";
numHechos = numHechos + 1;

// Insert the newHecho element above on the list
yHechos.parentNode.insertBefore(newHecho, yHechos);

// Clear the input field
x.value = '';
}


document.getElementById("inputTextoHechosPeticion").addEventListener("input", escribirHechos);

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
 let newHechos;
 function eliminarHechos() {
   newHechos = document.querySelectorAll("#newHecho");
   newHechos.forEach((hecho) => {
     hecho.remove();
   });
   numHechos = 1;
 }

document.getElementById("botonResetHechosPeticion").addEventListener("click", eliminarHechos);

// Sección - Fundamentos.

let filtroFundamentosPeticion = document.getElementById("listaFundamentosPeticion");
let botonFundamentos = document.getElementById("botonFundamentos");
botonFundamentos.addEventListener("click",imprimirFundamentos);
function imprimirFundamentos() {
  let contenido = fundamentos_Peticion;
  
  switch (filtroFundamentosPeticion.value) {
      case "peticion_Basica":
          break;
      case "peticion_HabeasData":
          contenido += "<br/>" + fundamentos_Habeas_Data;
          break;
      case "peticion_Informacion_Publica":
          contenido += "<br/>" + fundamentos_Informacion_Publica;
          break;
      case "peticion_Vida":
          contenido += "<br/>" + fundamentos_Vida;
          break;
      case "peticion_Proteccion_Desaparicion_Tortura":
          contenido += "<br/>" + fundamentos_Proteccion_Desaparicion_Tortura;
          break;
      case "peticion_Igualdad":
          contenido += "<br/>" + fundamentos_Igualdad;
          break;
      case "peticion_Personalidad_Juridica":
          contenido += "<br/>" + fundamentos_Personalidad_Juridica;
          break;
      case "peticion_Intimidad_BuenNombre":
          contenido += "<br/>" + fundamentos_Intimidad_BuenNombre;
          break;
      case "peticion_Libre_Desarrollo_Personalidad":
          contenido += "<br/>" + fundamentos_Libre_Desarrollo_Personalidad;
          break;
      case "peticion_Proteccion_Esclavitud_Servidumbre_TrataHumana":
          contenido += "<br/>" + fundamentos_Proteccion_Esclavitud_Servidumbre_TrataHumana;
          break;
      case "peticion_Libertad_Conciencia":
          contenido += "<br/>" + fundamentos_Libertad_Conciencia;
          break;
      case "peticion_Libertad_Cultos":
          contenido += "<br/>" + fundamentos_Libertad_Cultos;
          break;
      case "peticion_Libertad_Expresion":
          contenido += "<br/>" + fundamentos_Libertad_Expresion;
          break;
      default:
          return; // Exit if no valid option is selected
  }
  
  document.getElementById("espacioFundamentos").innerHTML = contenido;
  filtroFundamentosPeticion.value = '';
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
 let x = document.getElementById("textoInputEmailSolicitante");
 let y = document.getElementById("email");
 y.innerHTML = x.value;
}

function escribirNotificaciones2() {
 let x = document.getElementById("textoInputCelularSolicitante");
 let y = document.getElementById("celular");
 y.innerHTML = x.value;
}


// Sección - Firmar documento.


// Sección - Firmar documento.
function subirFirma(input, target) {
 let file = input.files[0];
 let reader = new FileReader();

 reader.readAsDataURL(file);
 reader.onload = function () {
   let img = document.getElementById(target);
   // can also use "this.result"
   img.src = reader.result;
   // Ajustar el tamaño de la imagen
   img.style.width = "20%";
   img.style.height = "auto";
 };
}