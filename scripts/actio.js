

// DOCUMENTO Acción Publica.


// Sección - Tipo de Acción.

let filtroAcciones = document.getElementById("listaAcciones");
let botonAcciones = document.getElementById("botonAcciones");
botonAcciones.addEventListener("click",formarAccion);
let nombre_Tipo_Accion;
let nombre_Tipo_Accion2;
let accionante_Base;
let accionado_Base;

function formarAccion()
{
    nombre_Tipo_Accion = document.getElementById("nombreTipoAccion");
    nombre_Tipo_Accion2 = document.getElementById("nombreTipoAccion2");
    objeto_Accion = document.getElementById("objeto_Accion");
    accionante_Base = document.getElementById("accionante_Base");
    accionado_Base = document.getElementById("accionado_Base");
 if (filtroAcciones.value == "accion_Tutela")
   {
    nombre_Tipo_Accion.innerHTML = "Tutela";
    nombre_Tipo_Accion2.innerHTML = "Tutela"; 
    accionante_Base.innerHTML = "Accionante";
    accionado_Base.innerHTML = "Accionado";
   }

  if (filtroAcciones.value == "accion_Cumplimiento")
   {
    nombre_Tipo_Accion.innerHTML = "Cumplimiento"; 
    nombre_Tipo_Accion2.innerHTML = "Cumplimiento"; 
    accionante_Base.innerHTML = "Persona que exige cumplimiento";
    accionado_Base.innerHTML = "Entidad que incumple";
    
   }
   if (filtroAcciones.value == "accion_Constitucionalidad")
   {
    nombre_Tipo_Accion.innerHTML = "Constitucionalidad"; 
    nombre_Tipo_Accion2.innerHTML = "Constitucionalidad"; 
    accionante_Base.innerHTML = "Accionante";
    accionado_Base.innerHTML = "Norma Inconstitucional";
    
   }
}

// Sección ACCIONANTE - Creador del documento.

function escribirNombreAccionante()
   {
     let x = document.getElementById("textoInputNombreAccionante");
     let y0 = document.getElementById("nombreAccionante0");
     let y1 = document.getElementById("nombreAccionante1");
     let y2 = document.getElementById("nombreAccionante2");
     let y3 = document.getElementById("nombreAccionante3");
     
     y0.innerHTML = " "+x.value;
     y1.innerHTML = x.value;
     y2.innerHTML = x.value;
     y3.innerHTML = x.value;
}

