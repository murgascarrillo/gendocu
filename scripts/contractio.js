
// DOCUMENTO Contrato.

// Sección - Fijar fecha.


var botonFechaContrato = document.getElementById("botonFechaContrato");
botonFechaContrato.addEventListener("click",definirFechaContrato);

function definirFechaContrato(){
    definirFecha("datePickerContractio");
};


// Sección - Tipo de Contrato.

let filtroContratos = document.getElementById("listaContratos");
filtroContratos.addEventListener("click",formarContrato);
function formarContrato()
{
    nombre_Tipo_Contrato1 = document.getElementById("nombreTipoContrato1");
    nombre_Tipo_Contrato2 = document.getElementById("nombreTipoContrato2");
    objeto_Contrato = document.getElementById("objeto_Contrato");
    obligaciones_Base = document.getElementById("obligaciones_Contratante_Base");
    contratante_Base = document.getElementById("contratante_Base");
    contratante_Base_2 = document.getElementById("contratante_Base_2");
    contratante_Base_3 = document.getElementById("contratante_Base_3");
    contratante_Base_4 = document.getElementById("contratante_Base_4");
    contratista_Base = document.getElementById("contratista_Base");
    contratista_Base_2 = document.getElementById("contratista_Base_2");
    contratista_Base_3 = document.getElementById("contratista_Base_3");
    contratista_Base_4 = document.getElementById("contratista_Base_4");

    // Especiales para Arrendamiento de Vivienda Urbana
    let inmueble = document.getElementById("divInmueble");
    let paragrafoInmueble = document.getElementById("paragrafoInmueble");
    let canon = document.getElementById("divCanonArrendamiento");
    let paragrafoCanon = document.getElementById("paragrafoCanonArrendamiento");

    // Especiales para Compraventa
    let cosaVendida = document.getElementById("divCosaVendida");
    let paragrafoCosaVendida = document.getElementById("paragrafoCosaVendida");
    let precio = document.getElementById("divPrecioCompraventa");
    let paragrafoPrecioCompraventa = document.getElementById("paragrafoPrecioCompraventa");;

if (filtroContratos.value === "- Selecciona el contrato -"){
  nombre_Tipo_Contrato1.innerHTML = "_____"; 
  nombre_Tipo_Contrato2.innerHTML = " "+"_____"; 
  objeto_Contrato.innerHTML = "";
  obligaciones_Base.innerHTML = "";
  contratante_Base.innerHTML = "Contratante";
  contratante_Base_2.innerHTML = "Contratante";
  contratante_Base_3.innerHTML = "Contratante";
  contratante_Base_4.innerHTML = "Contratante";
  contratista_Base.innerHTML = "Contratista";
  contratista_Base_2.innerHTML = "Contratista";
  contratista_Base_3.innerHTML = "Contratista";
  contratista_Base_4.innerHTML = "Contratista";
}
// Arrendamiento Vivienda Urbana
if (filtroContratos.value === "contrato_Arrendamiento_Vivienda_Urbana"){
    nombre_Tipo_Contrato1.innerHTML = "Arrendamiento de Vivienda Urbana"; 
    nombre_Tipo_Contrato2.innerHTML = " "+"Arrendamiento de Vivienda Urbana"; 
    objeto_Contrato.innerHTML = objeto_Arrendamiento_Vivienda_Urbana;
    obligaciones_Base.innerHTML = obligaciones_Arrendador_Vivienda_Urbana + " " + obligaciones_Arrendatario_Vivienda_Urbana;
    contratante_Base.innerHTML = "Arrendador";
    contratante_Base_2.innerHTML = "Arrendador";
    contratante_Base_3.innerHTML = "Arrendador";
    contratante_Base_4.innerHTML = "Arrendador";
    contratista_Base.innerHTML = "Arrendatario";
    contratista_Base_2.innerHTML = "Arrendatario";
    contratista_Base_3.innerHTML = "Arrendatario";
    contratista_Base_4.innerHTML = "Arrendatario";
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
if (filtroContratos.value === "contrato_Compraventa"){
   nombre_Tipo_Contrato1.innerHTML = "Compraventa"; 
   nombre_Tipo_Contrato2.innerHTML = " "+"Compraventa"; 
   objeto_Contrato.innerHTML = objeto_Compraventa;
   obligaciones_Base.innerHTML = obligaciones_Vendedor + " " + obligaciones_Comprador;
   contratante_Base.innerHTML = "Vendedor";
   contratante_Base_2.innerHTML = "Vendedor";
   contratante_Base_3.innerHTML = "Vendedor";
   contratante_Base_4.innerHTML = "Vendedor";
   contratista_Base.innerHTML = "Comprador";
   contratista_Base_2.innerHTML = "Comprador";
   contratista_Base_3.innerHTML = "Comprador";
    contratista_Base_4.innerHTML = "Comprador";
    cosaVendida.style.display = "block";
    paragrafoCosaVendida.style.display = "block";
    precio.style.display = "block";
    paragrafoPrecioCompraventa.style.display = "block";
  }
  else {
    // Ocultar los elementos si se selecciona un valor diferente
    cosaVendida.style.display = "none";
    paragrafoCosaVendida.style.display = "none";
    precio.style.display = "none";
    paragrafoPrecioCompraventa.style.display = "none";}


// Comodato

  if (filtroContratos.value === "contrato_Comodato")
   {
    nombre_Tipo_Contrato1.innerHTML = "Comodato"; 
    nombre_Tipo_Contrato2.innerHTML = " "+"Comodato"; 
    objeto_Contrato.innerHTML = objeto_Comodato;
    obligaciones_Base.innerHTML = obligaciones_Comodante + " " + obligaciones_Comodatario;
    contratante_Base.innerHTML = "Comodante";
    contratante_Base_2.innerHTML = "Comodante";
    contratante_Base_3.innerHTML = "Comodante";
   contratante_Base_4.innerHTML = "Comodante";
    contratista_Base.innerHTML = "Comodatario";
    contratista_Base_2.innerHTML = "Comodatario";
    contratista_Base_3.innerHTML = "Comodatario";
    contratista_Base_4.innerHTML = "Comodatario";    
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

// OBJETO COMPRAVENTA
// Cosa Vendida 
function describirCosaVendida()
{
  let x = document.getElementById("textoInputCosaVendida");
  let y = document.getElementById("descripcionCosaVendida");
  y.innerHTML = x.value;
}
// Precio Compraventa
function escribirPrecioCompraventa()
{
  let x = document.getElementById("textoInputPrecio");
  let y = document.getElementById("precioCompraventa");
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