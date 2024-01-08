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
    element.style.backgroundColor ='rgb(237, 237, 237)';});
  }

function proyectarDocContrato() {
  estadoContenedor = 2;
  contenedorPeticion.style.display = 'none';
  contenedorTutela.style.display = 'none';
  contenedorContrato.style.display = 'flex';
  arrayItems.forEach( function(element){
    element.style.backgroundColor = 'rgb(200,200,200)'; });

 }

function proyectarDocTutela() {
  estadoContenedor = 3;
  contenedorPeticion.style.display = 'none';
  contenedorContrato.style.display = 'none';
  contenedorTutela.style.display = 'flex';
  arrayItems.forEach( function(element){
    element.style.backgroundColor = 'lightgrey'; 
});
}

// Funciones por Tipo de Documento.

// Tipo Petición.

// Sección - Fijar fecha.

 var botonFechaPeticion = document.getElementById("botonFechaPeticion");
 botonFechaPeticion.addEventListener("focus",definirFecha);
 var botonFechaContrato = document.getElementById("botonFechaContrato");
 botonFechaContrato.addEventListener("click",definirFecha);
 function definirFecha(fechaDocumento) {
  fechaDocumento = new Date();
  var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  var dia = fechaDocumento.getDate();
  var mes = meses[fechaDocumento.getMonth()];
  var anio = fechaDocumento.getFullYear();
  var fechaFormateada = dia + " de " + mes + " de " + anio;
  document.getElementById("fecha1").innerHTML = fechaFormateada + ".";
  document.getElementById("fecha2").innerHTML = fechaFormateada;
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

const countryNames = [
"Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba",	"Australia",	"Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos","Colombia","Comoros (the)","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czechia","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands [Malvinas]","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea","República de Korea","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestina","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation","Rwanda","Réunion","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States Minor Outlying Islands","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","Åland Islands"
];

const dataListPaises = document.getElementById("listaPaises");

countryNames.forEach(name => {
  const option = document.createElement("option");
  option.value = name;
  dataListPaises.appendChild(option);
});


function elegirNacionalidad (){
	let x = document.getElementById("inputNacionalidad");
	let y = document.getElementById("nacionalidad");
	y.innerHTML = x.value;
  }




// Sección USUARIO - Sección Tipo Documento Identidad

const tiposDocumentoIdentidad = [
	"Cédula de ciudadanía","Tarjeta de identidad","Permiso Especial de Permanencia","Pasaporte","Salvoconducto"
  ];
  
  const dataListTipoDocumento = document.getElementById("listaTipoDocumento");
  
  tiposDocumentoIdentidad.forEach(string => {
	const optionTD = document.createElement("option");
	optionTD.value = string;
	dataListTipoDocumento.appendChild(optionTD);
  });

  function elegirTipoDocumento (){
	let x = document.getElementById("listaTipoDocumento");
	let y = document.getElementById("tipoDocumentoIdentidad");
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

 // Insert the newHecho element above on the list
 yEntidad.parentNode.insertBefore(newEntidad, yEntidad);

 // Clear the input field
 xEntidad.value = '';
}


document.getElementById("inputTextoEntidad").addEventListener("input", escribirEntidad);

// Add event listener to add a new <li> element when the user clicks the "botonAddHechos" button
document.getElementById("botonAddEntidad").addEventListener("click", agregarEntidad);

const inputEntidad = document.getElementById('inputTextoEntidad');

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

  // Función para resetear Hechos en caso de error.
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

  // Función para resetear Hechos en caso de error.
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
  
	  // Ajustar el tamaño de la imagen
	  img.style.width = "30%";
	  img.style.height = "auto";
  
	  // Manipular la imagen una vez que se haya cargado
	  img.onload = function () {
		// Crear un lienzo temporal
		let canvas = document.createElement('canvas');
		canvas.width = img.width;
		canvas.height = img.height;
		let ctx = canvas.getContext('2d');
  
		// Dibujar un fondo blanco en el lienzo
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
  
		// Dibujar la imagen en el lienzo
		ctx.drawImage(img, 0, 0);
  
		// Obtener los píxeles de la imagen
		let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		let data = imageData.data;
  
		// Procesar los píxeles para eliminar los colores que no estén en el rango entre negro y gris oscuro
		for (let i = 0; i < data.length; i += 4) {
		  let r = data[i];
		  let g = data[i + 1];
		  let b = data[i + 2];
  
		  // Verificar si el color no está en el rango entre negro y gris oscuro
		  if (r + g + b > 100) {
			data[i] = 12; // Establecer el componente rojo a 255 (blanco)
			data[i + 1] = 12; // Establecer el componente verde a 255 (blanco)
			data[i + 2] = 12; // Establecer el componente azul a 255 (blanco)
		  }
		}
  
		// Establecer los datos de píxeles modificados en el lienzo
		ctx.putImageData(imageData, 0, 0);
  
		// Establecer la imagen resultante como fuente para el elemento img
		img.src = canvas.toDataURL('image/jpeg');
	  };
	};
  }
  


// Función Generar PDF. html2pdf by ekoopmans. https://ekoopmans.github.io/html2pdf.js/

function generatePDF(){
  if (contenedorPeticion.style.display === 'flex')
  {
    var element = document.getElementById('esqueletoPeticion');
    var opt = {
    margin: 0.5,
    padding:0.5,
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
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
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
