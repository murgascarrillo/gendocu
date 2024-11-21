

// DOCUMENTO Acción Publica.


// Sección - Tipo de Acción.

let filtroAcciones = document.getElementById("listaAcciones");
let botonAcciones = document.getElementById("botonAcciones");
botonAcciones.addEventListener("click",formarAccion);
let nombre_Tipo_Accion;
let nombre_Tipo_Accion2;
let accionante_Base;
let accionado_Base;

function formarAccion()
{
    nombre_Tipo_Accion = document.getElementById("nombreTipoAccion");
    nombre_Tipo_Accion2 = document.getElementById("nombreTipoAccion2");
    objeto_Accion = document.getElementById("objeto_Accion");
    accionante_Base = document.getElementById("accionante_Base");
    accionado_Base = document.getElementById("accionado_Base");
 if (filtroAcciones.value == "accion_Tutela")
   {
    nombre_Tipo_Accion.innerHTML = "Tutela";
    nombre_Tipo_Accion2.innerHTML = "Tutela"; 
    accionante_Base.innerHTML = "Accionante";
    accionado_Base.innerHTML = "Accionado";
   }

  if (filtroAcciones.value == "accion_Cumplimiento")
   {
    nombre_Tipo_Accion.innerHTML = "Cumplimiento"; 
    nombre_Tipo_Accion2.innerHTML = "Cumplimiento"; 
    accionante_Base.innerHTML = "Persona que exige cumplimiento";
    accionado_Base.innerHTML = "Entidad que incumple";
    
   }
   if (filtroAcciones.value == "accion_Constitucionalidad")
   {
    nombre_Tipo_Accion.innerHTML = "Constitucionalidad"; 
    nombre_Tipo_Accion2.innerHTML = "Constitucionalidad"; 
    accionante_Base.innerHTML = "Accionante";
    accionado_Base.innerHTML = "Norma Inconstitucional";
    
   }
}

// Sección ACCIONANTE - Creador del documento.

function escribirNombreAccionante()
   {
     let x = document.getElementById("textoInputNombreAccionante");
     let y0 = document.getElementById("nombreAccionante0");
     let y1 = document.getElementById("nombreAccionante1");
     let y2 = document.getElementById("nombreAccionante2");
     let y3 = document.getElementById("nombreAccionante3");
     
     y0.innerHTML = " "+x.value;
     y1.innerHTML = x.value;
     y2.innerHTML = x.value;
     y3.innerHTML = x.value;
}
function elegirNacionalidadAccionante()
{
   let x = document.getElementById("inputNacionalidadAccionante");
   let y = document.getElementById("nacionalidadAccionante");
   y.innerHTML = x.value;
}
function elegirTipoDocumentoAccionante()
{
   let x = document.getElementById("listaTipoDocumentoAccionante");
   let y = document.getElementById("tipoIdAccionante");
   y.innerHTML = x.value;
}
function escribirIdAccionante()
   {
     let x = document.getElementById("textoInputIdAccionante");
     let y0 = document.getElementById("idAccionante");
     let y1 = document.getElementById("nombreAccionante1");
     let y2 = document.getElementById("nombreAccionante2");
     let y3 = document.getElementById("nombreAccionante3");
     
     y0.innerHTML = x.value;
}

function elegirLugarVulneracion (){
   let x = document.getElementById("inputLugarVulneracionTutela");
   let y = document.getElementById("lugarJuez");
   y.innerHTML = x.value + " (Reparto)";
 }

 // Sección - Entidad Accionada.

 let xEntidadAccionada = document.getElementById("inputTextoEntidadAccionada");
 let yEntidadAccionada = document.getElementById("listaEntidadesAccionadas");
 let inputTextEntidadAccionada;
 let numEntidadAccionada = 0;
 
 function escribirEntidadAccionada() {
    
   inputTextEntidadAccionada = xEntidadAccionada.value;
 }
 let newEntidadAccionada;
 function agregarEntidadAccionada() {
 // Create a new <p> element with the input value
 
 newEntidadAccionada = document.createElement("p");
 newEntidadAccionada.id = "newEntidadAccionada";
 newEntidadAccionada.style.margin = "0px";
 newEntidadAccionada.textContent = inputTextEntidadAccionada;
 numEntidadAccionada = numEntidadAccionada + 1;
 
 // Insert the newEntidad element above on the list
 yEntidadAccionada.parentNode.insertBefore(newEntidadAccionada, yEntidadAccionada);
 
 // Clear the input field
 xEntidadAccionada.value = '';
 }
 
 // Function to update datalist based on input
 function actualizarDatalistAccionadas() {
   const valorInput = xEntidadAccionada.value.toLowerCase();
   yEntidadAccionada.innerHTML = ''+"<br/>"; // Clear previous options
 
   datosEntidades.forEach(entidad => {
     if (entidad.nombre.toLowerCase().includes(valorInput.toLowerCase()) && valorInput) {
       const option = document.createElement('option');
   
       // Caso cuando el NIT está vacío pero el email tiene valor
       if (entidad.nit === "" && entidad.email !== "") {
         option.innerHTML = "- " + entidad.nombre + " (Email: " + entidad.email + ")";
       }
       // Caso cuando el email está vacío pero el NIT tiene valor
       else if (entidad.email === "" && entidad.nit !== "") {
         option.innerHTML = "- "+ entidad.nombre + " (Nit: " + entidad.nit + ")";
       }
       // Caso cuando tanto el NIT como el email están vacíos
       else if (entidad.nit === "" && entidad.email === "") {
         option.innerHTML = "- "+ entidad.nombre;
       }
       // Caso cuando tanto el NIT como el email tienen valor
       else {
         option.innerHTML = "- "+ entidad.nombre + " (Nit: " + entidad.nit + ", Email: " + entidad.email + ")";
       }
   
       // Agregar la opción generada a yEntidad
       yEntidadAccionada.appendChild(option);
     }
   });
 }
 
 document.getElementById("inputTextoEntidadAccionada").addEventListener("input", function() {
   escribirEntidadAccionada();
   actualizarDatalistAccionadas(); // Update the datalist on input
 });
 
 document.getElementById("inputTextoEntidadAccionada").addEventListener("input", escribirEntidadAccionada);
 
 
 // Add event listener to add a new <li> element when the user clicks the "botonAddEntidad" button
 document.getElementById("botonAddEntidadAccionada").addEventListener("click", agregarEntidadAccionada);
 
 let inputEntidadAccionada = document.getElementById('inputTextoEntidadAccionada');
 
 inputEntidadAccionada.addEventListener('input', function () {
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
  let newEntidadesAccionadas;
  function eliminarEntidadAccionada() {
   newEntidadesAccionadas = document.querySelectorAll("#newEntidadAccionada");
   newEntidadesAccionadas.forEach((entidad) => {
      entidad.remove();
    });
    numEntidadAccionada = 0;
  }
 
 document.getElementById("botonResetEntidadAccionada").addEventListener("click", eliminarEntidadAccionada);


 // Sección - Pretensiones

let xPretension = document.getElementById("inputTextoPretension");
let yPretension = document.getElementById("listaPretensiones");
let inputTextPretension;
let numPretension = 1;

function escribirPretension() {
  yPretension.innerHTML = "";
  inputTextPretension = xPretension.value;
}
let newPretension;
function agregarPretension() {
// Create a new <p> element with the input value

newPretension = document.createElement("p");
 newPretension.id = "newPretension";
 newPretension.style.margin = "0px";
 newPretension.textContent = numPretension+". " + inputTextPretension + ".";
 numPretension = numPretension + 1;

// Insert the newPeticion element above on the list
yPretension.parentNode.insertBefore(newPretension, yPretension);

// Clear the input field
xPretension.value = '';
}

document.getElementById("inputTextoPretension").addEventListener("input", escribirPretension);

// Add event listener to add a new <li> element when the user clicks the "botonAddPeticion" button
document.getElementById("botonAddPretension").addEventListener("click", agregarPretension);

const inputPretension = document.getElementById('inputTextoPretension');

inputPretension.addEventListener('input', function () {
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
 let newPretensiones;
 function eliminarPretension() {
  newPretensiones = document.querySelectorAll("#newPretension");
  newPretensiones.forEach((pretension) => {
     pretension.remove();
   });
   numPretension = 1;
 }

document.getElementById("botonResetPretensiones").addEventListener("click", eliminarPretension);