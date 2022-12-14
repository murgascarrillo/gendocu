// Funciones generales.

// insertarDatos modifica el contenido del documento generado según el input ingresado.
function insertarDatos(id,contenido){
  document.getElementById(id).innerHTML = contenido.value;
}

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
      document.getElementById("fecha1").innerHTML = fechaFormateada;
}

// Sección - Entidad destinataria.

var botonEntidad = document.getElementById("botonEntidad");
botonEntidad.addEventListener("click",escribirEntidad);
function escribirEntidad(inputEntidad)
    {
    inputEntidad = document.getElementById("textoInputEntidad");
    insertarDatos("entidad",inputEntidad);
    inputEntidad.value = '';
}

// Sección - Creador del documento.

var botonNombreUsuario = document.getElementById("botonNombreUsuario");
botonNombreUsuario.addEventListener("click",escribirNombreUsuario);
function escribirNombreUsuario(inputNombreUsuario)
    {
    inputNombreUsuario = document.getElementById("textoInputNombreUsuario");
    insertarDatos("nombreusuario1",inputNombreUsuario);
    insertarDatos("nombreusuario2",inputNombreUsuario);
    inputNombreUsuario.value = '';
}

// Sección - Peticiones.

let botonPeticiones = document.getElementById("botonPeticiones");
botonPeticiones.addEventListener("click",escribirPeticiones);
function escribirPeticiones(inputPeticiones)
      {
        inputPeticiones = document.getElementById("textoInputPeticiones");
        insertarDatos("spanPeticiones",inputPeticiones);
        inputPeticiones.value = '';
}

// Sección - Hechos.

let botonHechos = document.getElementById("botonHechos");
botonHechos.addEventListener("click",escribirHechos);
function escribirHechos(inputHechos)
      {
        inputHechos = document.getElementById("textoInputHechos");
        insertarDatos("spanHechos",inputHechos);
        inputHechos.value = '';
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

let botonPruebas = document.getElementById("botonPruebas");
botonPruebas.addEventListener("click",escribirPruebas);
function escribirPruebas(inputPruebas)
    {
      inputPruebas = document.getElementById("textoInputPruebas");
      insertarDatos("pruebas",inputPruebas);
      inputPruebas.value = '';
}

// Sección - Notificaciones.

let botonNotificaciones = document.getElementById("botonNotificaciones");
botonNotificaciones.addEventListener("click",escribirNotificaciones);
function escribirNotificaciones(inputEmail,inputCelular)
    {
      inputEmail = document.getElementById("textoInputEmail");
      inputCelular = document.getElementById("textoInputCelular");
      insertarDatos("email",inputEmail);
      insertarDatos("celular",inputCelular);
      inputEmail.value = '';
      inputCelular.value = '';
}

// Sección - Firmar documento.

let botonFirma = document.getElementById("botonFirma");
botonFirma.addEventListener("click",firmar);
  function firmar(inputIdUsuario, imagen)
  {
    imagen = document.createElement("img");
    inputIdUsuario = document.getElementById("textoInputIdUsuario");
    let idusuario = inputIdUsuario.value;
    imagen.id = 'imagenFirma';
    imagen.src = 'imagenes/firmas/firma_'+idusuario+'.png';
    imagen.height = 70;
    imagen.width = 200;
    imagen.alt = "esto no cargó";
    let src = document.getElementById("imagenFirma");
    src.appendChild(imagen);
    insertarDatos("idusuario",inputIdUsuario);
    inputIdUsuario.value = '';
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
