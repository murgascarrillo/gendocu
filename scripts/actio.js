

// DOCUMENTO Acción Publica.


// Sección - Tipo de Acción.

let filtroAcciones = document.getElementById("listaAcciones");
let botonAcciones = document.getElementById("botonAcciones");
botonAcciones.addEventListener("click",formarAccion);
let nombre_Tipo_Accion;
let accionante_Base;
let accionado_Base;

function formarAccion()
{
    nombre_Tipo_Accion = document.getElementById("nombreTipoAccion");
    objeto_Accion = document.getElementById("objeto_Accion");
    accionante_Base = document.getElementById("accionante_Base");
    accionado_Base = document.getElementById("accionado_Base");
 if (filtroAcciones.value == "accion_Tutela")
   {
    nombre_Tipo_Accion.innerHTML = "Tutela"; 
    accionante_Base.innerHTML = "Accionante";
    accionado_Base.innerHTML = "Accionado";
   }

  if (filtroAcciones.value == "accion_Cumplimiento")
   {
    nombre_Tipo_Accion.innerHTML = "Cumplimiento"; 
    accionante_Base.innerHTML = "Persona que exige cumplimiento";
    accionado_Base.innerHTML = "Entidad que incumple";
    
   }
   if (filtroAcciones.value == "accion_Constitucionalidad")
   {
    nombre_Tipo_Accion.innerHTML = "Constitucionalidad"; 
    accionante_Base.innerHTML = "Accionante";
    accionado_Base.innerHTML = "Norma Inconstitucional";
    
   }
}