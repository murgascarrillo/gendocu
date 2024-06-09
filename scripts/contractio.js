
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
    nombre_Tipo_Contrato = document.getElementById("nombreTipoContrato");
    objeto_Contrato = document.getElementById("objeto_Contrato");
    contratante_Base = document.getElementById("contratante_Base");
    contratista_Base = document.getElementById("contratista_Base");
 if (filtroContratos.value == "contrato_Arrendamiento_Vivienda_Urbana")
   {
    nombre_Tipo_Contrato.innerHTML = "Arrendamiento de Vivienda Urbana"; 
    objeto_Contrato.innerHTML = objeto_Arrendamiento_Vivienda_Urbana;
    contratante_Base.innerHTML = "Arrendador";
    contratista_Base.innerHTML = "Arrendatario";
   }

  if (filtroContratos.value == "contrato_Comodato")
   {
    nombre_Tipo_Contrato.innerHTML = "Comodato"; 
    objeto_Contrato.innerHTML = objeto_Comodato;
    contratante_Base.innerHTML = "Comodante";
    contratista_Base.innerHTML = "Comodatario";
    
   }
}