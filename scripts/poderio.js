// DOCUMENTO Poder.
// Sección PODERDANTE.
function escribirPoderdante()
   {
     let x = document.getElementById("textoInputNombrePoderdante");
     let y = document.getElementById("nombrepoderdante1");
     let z = document.getElementById("nombrepoderdante2"); 
     y.innerHTML = " "+x.value;
     z.innerHTML = x.value;
}
// Sección Lugar de Nacionalidad.
function elegirLugarNacionalidadPoderdante()
   {
     if (estadoContenedor === 4){
       let x = document.getElementById("inputPaisPoderdante");
     let y = document.getElementById("nacionalidadPoderdante"); 
     y.innerHTML = x.value;
     }
     else{ 
       console.log("¡Ups! No se pudo elegir lugar de nacionalidad..")
     }
   }
// Sección PODERDANTE - Sección Tipo Documento Identidad

 function elegirTipoDocumentoPoderdante (){
   let x = document.getElementById("listaTipoDocumentoPoderdante");
   let y = document.getElementById("tipoDocumentoIdentidadPoderdante");
   y.innerHTML = x.value;
 }
// Sección PODERDANTE - Sección ID Poderdante
function escribirIdPoderdante()
{
  let x = document.getElementById("textoInputIdPoderdante");
  let y = document.getElementById("idPoderdante");
  y.innerHTML = x.value; 
}
// Sección APODERADO.
function escribirApoderado()
   {
     let x = document.getElementById("textoInputNombreApoderado");
     let y = document.getElementById("nombreapoderado1");
     let z = document.getElementById("nombreapoderado2"); 
     y.innerHTML = " "+x.value;
     z.innerHTML = x.value;
}
// Sección APODERADO - Lugar de Nacionalidad.
function elegirLugarNacionalidadApoderado()
   {
     if (estadoContenedor === 4){
       let x = document.getElementById("inputPaisApoderado");
     let y = document.getElementById("nacionalidadApoderado"); 
     y.innerHTML = x.value;
     }
     else{ 
       console.log("¡Ups! No se pudo elegir lugar de nacionalidad..")
     }
   }
// Sección APODERADO - Tipo Documento Identidad
 function elegirTipoDocumentoApoderado (){
   let x = document.getElementById("listaTipoDocumentoApoderado");
   let y = document.getElementById("tipoDocumentoIdentidadApoderado");
   y.innerHTML = x.value;
 }
// Sección APODERADO - ID Apoderado
function escribirIdApoderado()
{
  let x = document.getElementById("textoInputIdApoderado");
  let y = document.getElementById("idApoderado");
  y.innerHTML = x.value; 
}
// Sección - Entidad destinataria.
let xEntidadDestino = document.getElementById("inputTextoEntidadDestino");
let yEntidadDestino = document.getElementById("listaEntidadesDestinoPoder");
function escribirEntidadDestinoPoder() {
   
  yEntidadDestino.innerHTML = xEntidadDestino.value;
}

let inputEntidadDestino = document.getElementById('inputTextoEntidadDestino');

inputEntidadDestino.addEventListener('input', function () {
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
// Sección - Mandato.
let xMandato = document.getElementById("inputTextoMandato");
let yMandato = document.getElementById("objetoMandato");
function escribirMandato() {
  yMandato.innerHTML = xMandato.value;
}
let inputTextMandato = document.getElementById('inputTextoMandato');
inputTextMandato.addEventListener('input', function () {
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