// Funciones generales.


// Funciones por sección.
// Sección - Seleccionar género.

var botonGenero = document.getElementById("botonGenero");
var selectorGenero = document.getElementById("selectorGenero");
botonGenero.addEventListener("click",pulirDocumento);
function pulirDocumento(radioGenero1,radioGenero2,spanGenero1,spanGenero2,spanHechoSexo)
  {
    radioGenero1 = document.getElementById("genero1");
    radioGenero2 = document.getElementById("genero2");
    spanGenero1 = document.getElementById("spanGenero1");
    spanGenero2 = document.getElementById("spanGenero2");
    spanHechoSexo = document.getElementById("spanHechoSexo");
    if(radioGenero1.checked == true)
    {
      spanGenero1.innerHTML = "a";
      spanGenero2.innerHTML = "a";
      spanHechoSexo.innerHTML = "mujer";
      radioGenero1.checked = false;
    }
    if(radioGenero2.checked == true)
      {
        spanGenero1.innerHTML = "o";
        spanGenero2.innerHTML = "o";
        spanHechoSexo.innerHTML = "hombre";
        radioGenero2.checked = false;
      }
}

// Sección - Fijar fecha.

var botonFecha = document.getElementById("botonFecha");
botonFecha.addEventListener("click",definirFecha);
function definirFecha(fechaDocumento)
    {
      fechaDocumento = new Date();
      fechaFormateada = fechaDocumento.toLocaleDateString();
      document.getElementById("fecha1").innerHTML = " "+fechaFormateada;
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

let botonFirma = document.getElementById("botonFirma");
botonFirma.addEventListener("click",firmar); 
function firmar(inputIdUsuario, imagen)
  {
    inputIdUsuario = document.getElementById("textoInputIdUsuario");
    let idusuario = inputIdUsuario.value;
    document.getElementById("idusuario").innerHTML = idusuario;
    inputIdUsuario.value = '';
}
let cargarFirma = function(event) {
  var imagen = document.getElementById('output');
  imagen.src = URL.createObjectURL(event.target.files[0]);
}


// Sección - Imprimir o Resetear documento.
// Función imprimir
let botonImprimir = document.getElementById("botonImprimir");
let botonReset = document.getElementById("botonReset");
let botonImprimirEstado = 1;
botonImprimir.addEventListener("click",imprimirDiv);
botonReset.addEventListener("click",resetDiv);
function imprimirDiv()
  {
      var divContents = document.getElementById("esqueletoPeticion").innerHTML;
      var a = window.open('height=700, width=500');
      a.document.write('<html><body>');
      a.document.write('<img src="imagenes/conclavebg.png" style="height:60;width:60;display:block;margin:auto;"/>');
      a.document.write(divContents);
      a.document.write('</body></html>');
      a.document.close();
}
// Función Resetear
function resetDiv()
  {
    if (botonImprimirEstado == 1)
      {
        spanGenero1.innerHTML = "";
        spanGenero2.innerHTML = "";
        spanHechoSexo.innerHTML = "";
        document.getElementById("fecha1").innerHTML = "";
        document.getElementById('entidad').innerHTML = "";
        document.getElementById('nombreusuario1').innerHTML = "";
        document.getElementById('nombreusuario2').innerHTML = "";
        document.getElementById("espacioFundamentos").innerHTML = "";
        document.getElementById('pruebas').innerHTML = "";
        document.getElementById('email').innerHTML = "";
        document.getElementById('celular').innerHTML = "";
        document.getElementById('idusuario').innerHTML = "";
        imagen.src = '';
      }
}

// Misceláneos.

let logo = document.getElementById("logo");
