// Este archivo contiene las Clases de Objetos de la aplicación. (Desarrollo posterior).
// Clase Usuarios

class Usuario {
  constructor(nombre, id)
  {
    this.nombre = nombre;
    this.id = id;
  }
}

// Listado y push Usuarios

let listaUsuarios = [];
listaUsuarios.push(new Usuario("nombre,id"));



// Entidades

class Entidad {
  constructor(nombre, nit, email,logo)
  {
    this.nombre = nombre;
    this.nit = nit;
    this.email = email;
    this.logo = logo;
  }
}

// Listado y push Entidades

let listaEntidades = [];
listaEntidades.push(new Entidad("nombre","nit","email"));
