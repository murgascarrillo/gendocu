// Funciones que modifican Documentos Tipo Mandato.


// Sección FECHA

// Fija la Fecha.

var botonFechaMandato = document.getElementById("botonFechaMandato");
botonFechaMandato.addEventListener("focus",definirFechaMandato);
function definirFechaMandato(fechaDocumento) {
 fechaDocumento = new Date();
 var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
 var dia = fechaDocumento.getDate();
 var mes = meses[fechaDocumento.getMonth()];
 var anio = fechaDocumento.getFullYear();
 var fechaFormateada = dia + " de " + mes + " de " + anio;
 document.getElementById("fechaMandato").innerHTML = fechaFormateada;
}

// Sección LUGAR

// Elige el Lugar de Creación.

function elegirLugarCreacionMandato (){
	let x = document.getElementById("inputPaisMandato");
	let y = document.getElementById("paisMandato1");
  let z = document.getElementById("paisMandato2");
	y.innerHTML = x.value;
  z.innerHTML = x.value;
  }

// Sección SUJETOS

// MANDANTE - NOMBRE

function escribirMandante()
    {
      let x = document.getElementById("textoInputNombreMandante");
      let y = document.getElementById("nombreMandante1");
      let z = document.getElementById("nombreMandante2"); 
      y.innerHTML = " "+x.value;
      z.innerHTML = x.value;
}


// MANDANTE - NACIONALIDAD

// Elige el Lugar de Nacionalidad.

function elegirNacionalidadMandante(){
	let x = document.getElementById("inputPaisNacionalidadMandante");
	let y = document.getElementById("nacionalidadMandante");
	y.innerHTML = x.value;
  }




// Sección MANDANTE - Sección Tipo Documento Identidad

const tiposDocumentoIdentidadMandante = [
	"Cédula de ciudadanía","Tarjeta de identidad","Permiso Especial de Permanencia","Pasaporte","Salvoconducto"
  ];
  
  const dataListTipoDocumentoMandante = document.getElementById("listaTipoDocumentoMandante");
  
  tiposDocumentoIdentidadMandante.forEach(string => {
	const optionTD = document.createElement("option");
	optionTD.value = string;
	dataListTipoDocumentoMandante.appendChild(optionTD);
  });

  function elegirTipoDocumento (){
	let x = document.getElementById("listaTipoDocumentoMandante");
	let y = document.getElementById("tipoDocumentoIdentidadMandante");
	y.innerHTML = x.value;
  }

 // Sección USUARIO - Sección ID Usuario
 function escribirIdMandante()
 {
   let x = document.getElementById("textoInputIdMandante");
   let y = document.getElementById("idMandante");
   y.innerHTML = x.value; 
}