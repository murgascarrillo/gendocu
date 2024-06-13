
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
    contratante_Base = document.getElementById("contratante_Base");
    contratista_Base = document.getElementById("contratista_Base");
 if (filtroContratos.value === "contrato_Arrendamiento_Vivienda_Urbana")
   {
    nombre_Tipo_Contrato1.innerHTML = "Arrendamiento de Vivienda Urbana"; 
    nombre_Tipo_Contrato2.innerHTML = " "+"Arrendamiento de Vivienda Urbana"; 
    objeto_Contrato.innerHTML = objeto_Arrendamiento_Vivienda_Urbana;
    contratante_Base.innerHTML = "Arrendador";
    contratista_Base.innerHTML = "Arrendatario";
   }

  if (filtroContratos.value === "contrato_Comodato")
   {
    nombre_Tipo_Contrato1.innerHTML = "Comodato"; 
    nombre_Tipo_Contrato2.innerHTML = " "+"Comodato"; 
    objeto_Contrato.innerHTML = objeto_Comodato;
    contratante_Base.innerHTML = "Comodante";
    contratista_Base.innerHTML = "Comodatario";
   }
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