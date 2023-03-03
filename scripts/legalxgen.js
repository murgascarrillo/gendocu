// Funciones generales.


// Función de Proyectar borrador de Documento según Tipo
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

function proyectarDocPeticion (){
    contenedorTutela.style.display = 'none';
    contenedorContrato.style.display = 'none';
    contenedorPeticion.style.display = 'flex';
}
function proyectarDocContrato (){
    contenedorPeticion.style.display = 'none';
    contenedorTutela.style.display = 'none';
    contenedorContrato.style.display = 'flex';
}
function proyectarDocTutela (){
    contenedorPeticion.style.display = 'none';
    contenedorContrato.style.display = 'none';
    contenedorTutela.style.display = 'flex';
}

// Funciones por Tipo de Documento.

// Tipo Petición.

// Sección - Fijar fecha.

var botonFechaPeticion = document.getElementById("botonFechaPeticion");
botonFechaPeticion.addEventListener("click",definirFecha);
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

function escribirHechos()
    {
      let x = document.getElementById("textoInputHechos");
      let y = document.getElementById("hecho2");
      y.innerHTML = x.value;
}

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
  if (contenedorPeticion.style.display = "none" == true)
    {
      var element = document.getElementById('esqueletoTutela');
  var opt = {
    margin: 0.5,
    filename: 'tutela_gendocu.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'legal', orientation: 'portrait' }
  };
  html2pdf(element, opt);
    }
  else if (contenedorContrato.style.display = 'flex' == true)
    {
      var element = document.getElementById('esqueletoContrato');
      var opt = {
        margin: 0.5,
        filename: 'contrato_gendocu.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf(element, opt);
    }
    else {
      var element = document.getElementById('esqueletoPeticion');
    var opt = {
      margin: 0.5,
      filename: 'dp_gendocu.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf(element, opt);
    }
}

// Misceláneos.

let logo = document.getElementById("logo");
