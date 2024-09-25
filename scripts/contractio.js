
// DOCUMENTO Contrato.

// Sección - Fijar fecha.


var botonFechaContrato = document.getElementById("botonFechaContrato");
botonFechaContrato.addEventListener("click",definirFechaContrato);

function definirFechaContrato(){
    definirFecha("datePickerContractio");
};


// Sección - Tipo de Contrato.

let filtroContratos = document.getElementById("listaContratos");
let botonContratos = document.getElementById("botonContratos");
botonContratos.addEventListener("click",formarContrato);
function formarContrato()
{
    nombre_Tipo_Contrato1 = document.getElementById("nombreTipoContrato1");
    nombre_Tipo_Contrato2 = document.getElementById("nombreTipoContrato2");
    objeto_Contrato = document.getElementById("objeto_Contrato");
    obligaciones_Base = document.getElementById("obligaciones_Contratante_Base");
    contratante_Base = document.getElementById("contratante_Base");
    contratante_Base_2 = document.getElementById("contratante_Base_2")
    contratista_Base = document.getElementById("contratista_Base");
    contratista_Base_2 = document.getElementById("contratista_Base_2");

// Arrendamiento de Vivienda Urbana 
    // Especiales para Arrendamiento de Vivienda Urbana
    let inmueble = document.getElementById("divInmueble");
    let paragrafoInmueble = document.getElementById("paragrafoInmueble");
    let canon = document.getElementById("divCanonArrendamiento");
    let paragrafoCanon = document.getElementById("paragrafoCanonArrendamiento");

 if (filtroContratos.value === "contrato_Arrendamiento_Vivienda_Urbana")
   {
  
    nombre_Tipo_Contrato1.innerHTML = "Arrendamiento de Vivienda Urbana"; 
    nombre_Tipo_Contrato2.innerHTML = " "+"Arrendamiento de Vivienda Urbana"; 
    objeto_Contrato.innerHTML = objeto_Arrendamiento_Vivienda_Urbana;
    obligaciones_Base.innerHTML = obligaciones_Arrendador_Vivienda_Urbana + "<br/>" + obligaciones_Arrendatario_Vivienda_Urbana;
    contratante_Base.innerHTML = "Arrendador";
    contratante_Base_2.innerHTML = "Arrendador";
    contratista_Base.innerHTML = "Arrendatario";
    contratista_Base_2.innerHTML = "Arrendatario";
    inmueble.style.display = "block";
    paragrafoInmueble.style.display = "block";
    canon.style.display = "block";
    paragrafoCanon.style.display = "block";
   }
   else {
    // Ocultar los elementos si se selecciona un valor diferente
    inmueble.style.display = "none";
    paragrafoInmueble.style.display = "none";
    canon.style.display = "none";
    paragrafoCanon.style.display = "none";}

// Compraventa

if (filtroContratos.value === "contrato_Compraventa")
  {
   nombre_Tipo_Contrato1.innerHTML = "Compraventa"; 
   nombre_Tipo_Contrato2.innerHTML = " "+"Compraventa"; 
   objeto_Contrato.innerHTML = objeto_Compraventa;
   contratante_Base.innerHTML = "Vendedor";
   contratante_Base_2.innerHTML = "Vendedor";
   contratista_Base.innerHTML = "Comprador";
   contratista_Base_2.innerHTML = "Comprador";
  }


// Comodato

  if (filtroContratos.value === "contrato_Comodato")
   {
    nombre_Tipo_Contrato1.innerHTML = "Comodato"; 
    nombre_Tipo_Contrato2.innerHTML = " "+"Comodato"; 
    objeto_Contrato.innerHTML = objeto_Comodato;
    contratante_Base.innerHTML = "Comodante";
    contratante_Base_2.innerHTML = "Comodante";
    contratista_Base.innerHTML = "Comodatario";
    contratista_Base_2.innerHTML = "Comodatario";
   }
}

// OBJETO ARRENDAMIENTO


// Inmueble Arrendado
function describirInmueble()
{
  let x = document.getElementById("textoInputInmuebleArrendado");
  let y = document.getElementById("descripcionInmuebleArrendado");
  y.innerHTML = x.value;
}

// Canon Arrendamiento
function escribirCanon()
{
  let x = document.getElementById("textoInputCanon");
  let y = document.getElementById("canonArrendamiento");
  y.innerHTML = x.value;
}


// PARTES 

// Sección Nombre.

function escribirContratante()
   {
     let x = document.getElementById("textoInputContratante");
     let y = document.getElementById("nombreContratante1");
     let z = document.getElementById("nombreContratante2"); 
     y.innerHTML = " "+x.value;
     z.innerHTML = x.value;
    }

function escribirContratista()
    {
      let x = document.getElementById("textoInputContratista");
      let y = document.getElementById("nombreContratista1");
      let z = document.getElementById("nombreContratista2"); 
      y.innerHTML = " "+x.value;
      z.innerHTML = x.value;
    }

// Sección Domicilio.

function elegirDomicilioContratante(){
   let x = document.getElementById("inputDomicilioContratante");
   let y = document.getElementById("domicilioContratante");
   y.innerHTML = x.value;
 }

 function elegirDomicilioContratista(){
  let x = document.getElementById("inputDomicilioContratista");
  let y = document.getElementById("domicilioContratista");
  y.innerHTML = x.value;
}

// Sección Tipo y Número de ID.
function escribirIdContratante()
{
  let x = document.getElementById("textoInputIdContratante");
  let y = document.getElementById("idContratante");
  y.innerHTML = x.value; 
}

function escribirIdContratista()
{
  let x = document.getElementById("textoInputIdContratista");
  let y = document.getElementById("idContratista");
  y.innerHTML = x.value; 
}

// Sección E-mail de notificaciones.
function escribirEmailContratante()
{
  let x = document.getElementById("textoInputEmailContratante");
  let y = document.getElementById("emailContratante");
  y.innerHTML = x.value; 
}

function escribirEmailContratista()
{
  let x = document.getElementById("textoInputEmailContratista");
  let y = document.getElementById("emailContratista");
  y.innerHTML = x.value; 
}