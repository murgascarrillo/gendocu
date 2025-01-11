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
constructor(nombre, nit, email)
{
this.nombre = nombre;
this.nit = nit;
this.email = email;
}
}

// Listado y push Entidades

const datosEntidades = [
// Entidades Públicas

// Entidades Territoriales

// Alcaldías
{
nombre: "Alcaldía de Barrancas, La Guajira",
nit: "800.099.223-3",
email: "contactenos@barrancas-laguajira.gov.co"
},

// Gobernaciones
{
nombre: "Gobernación de La Guajira",
nit: "892.115.015-1",
email: "contactenos@laguajira.gov.co"
},

// Entidades Nacionales
{
nombre: "Agencia Nacional de Tierras - ANT",
nit: "900.948.953-8",
email: "atencionalciudadano@ant.gov.co"
},
{
nombre: "Administradora Colombiana de Pensiones - Colpensiones",
nit: "900.336.004-7",
email: "contacto@colpensiones.gov.co",
email_judicial: "notificacionesjudiciales@colpensiones.gov.co"
},
{
nombre: "Unidad para la Atención y Reparación Integral a las Víctimas - UARIV",
nit: "",
email: "servicioalciudadano@unidadvictimas.gov.co"
},
{
nombre: "Migración Colombia",
nit: "",
email: ""
},
{
nombre: "Ministerio de Vivienda, Ciudad y Territorio",
nit: "",
email: ""
},
{
nombre: "Ministerio del Interior",
nit: "",
email: "servicioalciudadano@mininterior.gov.co"
},
{
nombre: "Dirección para la Democracia, la Participación Ciudadana y la Acción Comunal del Ministerio del Interior",
nit: "830.114.475-6",
email: "accioncomunal@mininterior.gov.co"
},
{
nombre:"Dirección de Asuntos para Comunidades Negras, Afrocolombianas, Raizales y Palenqueras del Ministerio del Interior",
nit:"",
email:"servicioalciudadano@mininterior.gov.co"
},
{
nombre: "Ministerio de Relaciones Exteriores",
nit: "",
email: ""
},
{
nombre: "Ministerio de Educación",
nit:"",
email:""
},
{
nombre:"Ministerio de Agricultura y Desarrollo Rural",
nit:"899.999.028-5",
email:"atencionalciudadano@minagricultura.gov.co"
},
{
nombre:"Ministerio del Trabajo",
nit:"",
email:"notificacionesjudiciales@mintrabajo.gov.co"
},
{
nombre:"Instituto de Crédito Educativo y Estudios Técnicos en el Exterior - ICETEX",
nit:"899.999.035-7",
email:"tutramite@icetex.gov.co"
},
{
nombre:"Agencia Nacional Digital - AND",
nit:"901.144.049-7",
email:"agencianacionaldigital@and.gov.co"
},
{
nombre: "Presidencia de la República de Colombia",
nit: "",
email: ""
},
{
nombre: "Departamento Nacional de Planeación - DNP",
nit: "",
email: ""
},
{
nombre: "Departamento Administrativo para la Prosperidad Social - DPS",
nit: "900.039.533-8",
email: ''
},
{
nombre: "Instituto Geográfico Agustín Codazzi - IGAC",
nit: "899.999.004-9",
email: "contactenos@igac.gov.co"
},
{
nombre: "Servicio Nacional de Aprendizaje - SENA",
nit: "899.999.034-1",
email: "contactenos@igac.gov.co"
},
{
nombre: "Fiscalía General de la Nación",
nit: "",
email: "juridicanotificacionestutela@fiscalia.gov.co"
},
{
nombre: "Instituto Nacional Penitenciario y Carcelario – INPEC",
nit:"800.215.546-5",
email: "notificaciones@inpec.gov.co"
},
{
nombre: "Autoridad Nacional de Licencias Ambientales - ANLA",
nit: "900.467.239-2",
email: "licencias@anla.gov.co"
},
{
nombre:"Patrimonio Autónomo de Remanentes de la Caja Agraria en Liquidación",
nit:"",
email:"gravamenescajaagraria@parugp.com.co, parcal@parugp.com.co"
},
{
nombre:"Caja Promotora de Vivienda Militar y Policía - CAJAHONOR",
nit:"",
email:"notificaciones.judiciales@cajahonor.gov.co"
},
{
nombre:"Procuraduría General de la Nación",
nit:"",
email:"procesosjudiciales@procuraduria.gov.co"
},
{
nombre:"Superintendencia Nacional de Salud",
nit:"",
email:"snsnotificacionesjudiciales@supersalud.gov.co"
},
{
nombre:"Consejo Superior de la Judicatura",
nit:"",
email:"info@cendoj.ramajudicial.gov.co"
},

// Entidades con Presencia Territorial
{
nombre: "E.S.E Hospital Nuestra Señora del Carmen de Hatonuevo",
nit: "825.000.620-1",
email: "gerencia@hospicarmenhatonuevo.gov.co"
},
{
nombre: "Secretaría de Tránsito y Transporte de Valledupar",
nit: "",
email: "atencionusuariotransitovpar@valledupar.gov.co"
},
{
nombre: "Secretaría de Tránsito y Transporte de Curumaní",
nit: "",
email: "info@transitocurumani.com"
},
{
nombre: "Instituto Municipal de Tránsito y Transporte de Maicao",
nit: "",
email: "transitomaicao@gmail.com"
},
{
nombre: "Policia Metropolitana de Barranquilla",
nit: "900.263.078-7",
email: "mebar.coseg@policia.gov.co"
},
{
nombre: "Registraduría Municipal de San Juan del Cesar",
nit: "",
email: "sanjuandelcesar@registraduria.gov.co"
},
// Registradurías

// Notarías
{
nombre: "Notaría Única de Barrancas, La Guajira",
nit: "",
email: "Notaría Única debarrancas@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Bogota",
nit: "",
email: "primerabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Bogota",
nit: "",
email: "segundabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Bogota",
nit: "",
email: "tercerabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Bogota",
nit: "",
email: "cuartabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Quinta de Bogota",
nit: "",
email: "quintabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Sexta de Bogota",
nit: "",
email: "sextabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Septima de Bogota",
nit: "",
email: "septimabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Octava de Bogota",
nit: "",
email: "octavabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Novena de Bogota",
nit: "",
email: "novenabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Decima de Bogota",
nit: "",
email: "decimabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Once de Bogota",
nit: "",
email: "oncebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Doce de Bogota",
nit: "",
email: "docebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Trece de Bogota",
nit: "",
email: "trecebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Catorce de Bogota",
nit: "",
email: "catorcebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Quince de Bogota",
nit: "",
email: "quincebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Dieciseis de Bogota",
nit: "",
email: "dieciseisbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Diecisiete de Bogota",
nit: "",
email: "diecisietebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Dieciocho de Bogota",
nit: "",
email: "dieciochobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Diecinueve de Bogota",
nit: "",
email: "diecinuevebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Veinte de Bogota",
nit: "",
email: "veintebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Veintiuno de Bogota",
nit: "",
email: "veintiunabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Veintidos de Bogota",
nit: "",
email: "veintidosbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Veintitres de Bogota",
nit: "",
email: "veintitresbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Veinticuatro de Bogota",
nit: "",
email: "veinticuatrobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Veinticinco de Bogota",
nit: "",
email: "veinticincobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Veintiseis de Bogota",
nit: "",
email: "veintiseisbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Veintisiete de Bogota",
nit: "",
email: "veintisietebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Veintiocho de Bogota",
nit: "",
email: "veintiochobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Veintinueve de Bogota",
nit: "",
email: "veintinuevebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Treinta de Bogota",
nit: "",
email: "treintabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Treinta y Uno de Bogota",
nit: "",
email: "treintayunabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Treinta y Dos de Bogota",
nit: "",
email: "treintaydosbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Treinta y Tres de Bogota",
nit: "",
email: "treintaytresbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Treinta y Cuatro de Bogota",
nit: "",
email: "treintaycuatrobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Treinta y Cinco de Bogota",
nit: "",
email: "treintaycincobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Treinta y Seis de Bogota",
nit: "",
email: "treintayseisbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Treinta y Siete de Bogota",
nit: "",
email: "treintaysietebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Treinta y Ocho de Bogota",
nit: "",
email: "treintayochobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Treinta y Nueve de Bogota",
nit: "",
email: "treintaynuevebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarenta de Bogota",
nit: "",
email: "cuarentabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarenta y Una de Bogota",
nit: "",
email: "cuarentayunabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarenta y Dos de Bogota",
nit: "",
email: "cuarentaydosbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarenta y Tres de Bogota",
nit: "",
email: "cuarentaytresbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarenta y Cuatro de Bogota",
nit: "",
email: "cuarentaycuatrobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarenta y Cinco de Bogota",
nit: "",
email: "cuarentaycincobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarenta y Seis de Bogota",
nit: "",
email: "cuarentayseisbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarenta y Siete de Bogota",
nit: "",
email: "cuarentaysietebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarenta y Ocho de Bogota",
nit: "",
email: "cuarentayochobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarenta y Nueve de Bogota",
nit: "",
email: "cuarentaynuevebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cincuenta de Bogota",
nit: "",
email: "cincuentabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cincuenta y Uno de Bogota",
nit: "",
email: "cincuentayunobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cincuenta y Dos de Bogota",
nit: "",
email: "cincuentaydosbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cincuenta y Tres de Bogota",
nit: "",
email: "cincuentaytresbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cincuenta y Cuatro de Bogota",
nit: "",
email: "cincuentaycuatrobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cincuenta y Cinco de Bogota",
nit: "",
email: "cincuentaycincobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cincuenta y Seis de Bogota",
nit: "",
email: "cincuentayseisbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cincuenta y Siete de Bogota",
nit: "",
email: "cincuentaysietebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cincuenta y Ocho de Bogota",
nit: "",
email: "cincuentayochobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Cincuenta y Nueve de Bogota",
nit: "",
email: "cincuentaynuevebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Sesenta de Bogota",
nit: "",
email: "sesentabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Sesenta y Una de Bogota",
nit: "",
email: "sesentayunabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Sesenta y Dos de Bogota",
nit: "",
email: "sesentaydosbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Sesenta y Tres de Bogota",
nit: "",
email: "sesentaytresbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Sesenta y Cuatro de Bogota",
nit: "",
email: "sesentaycuatrobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Sesenta y Cinco de Bogota",
nit: "",
email: "sesentaycincobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Sesenta y Seis de Bogota",
nit: "",
email: "sesentayseisbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Sesenta y Siete de Bogota",
nit: "",
email: "sesentaysietebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Sesenta y Ocho de Bogota",
nit: "",
email: "sesentayochobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Sesenta y Nueve de Bogota",
nit: "",
email: "sesentaynuevebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Setenta de Bogota",
nit: "",
email: "setentabogota@supernotariado.gov.co"
},
{
nombre: "Notaría Setenta y Uno de Bogota",
nit: "",
email: "setentayunobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Setenta y Dos de Bogota",
nit: "",
email: "setentaydosbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Setenta y Tres de Bogota",
nit: "",
email: "setentaytresbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Setenta y Cuatro de Bogota",
nit: "",
email: "setentaycuatrobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Setenta y Cinco de Bogota",
nit: "",
email: "setentaycincobogota@supernotariado.gov.co"
},
{
nombre: "Notaría Setenta y Seis de Bogota",
nit: "",
email: "setentayseisbogota@supernotariado.gov.co"
},
{
nombre: "Notaría Setenta y Siete de Bogota",
nit: "",
email: "setentaysietebogota@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Tunja",
nit: "",
email: "primeratunja@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Tunja",
nit: "",
email: "segundatunja@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Tunja",
nit: "",
email: "terceratunja@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Tunja",
nit: "",
email: "cuartatunja@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Aquitania",
nit: "",
email: "Notaría Única deaquitania@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Belen",
nit: "",
email: "Notaría Única debelen@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Boavita",
nit: "",
email: "Notaría Única deboavita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Campo Hermoso ",
nit: "",
email: "Notaría Única decampohermoso@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Chiquinquira",
nit: "",
email: "primerachiquinquira@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Chiquinquira",
nit: "",
email: "segundachiquinquira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chiscas",
nit: "",
email: "Notaría Única dechiscas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chita",
nit: "",
email: "Notaría Única dechita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cubara",
nit: "",
email: "Notaría Única decubara@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Duitama",
nit: "",
email: "primeraduitama@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Duitama",
nit: "",
email: "segundaduitama@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Cocuy ",
nit: "",
email: "Notaría Única deelcocuy@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Garagoa",
nit: "",
email: "Notaría Única degaragoa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guateque",
nit: "",
email: "Notaría Única deguateque@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guayata",
nit: "",
email: "Notaría Única deguayata@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Labranzagrande",
nit: "",
email: "Notaría Única delabranzagrande@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villa de Leyva",
nit: "",
email: "Notaría Única devilladeleyva@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Macanal",
nit: "",
email: "Notaría Única demacanal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Maripi",
nit: "",
email: "Notaría Única demaripi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Miraflores",
nit: "",
email: "Notaría Única demiraflores@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Moniquira",
nit: "",
email: "primeramoniquira@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Moniquira",
nit: "",
email: "segundamoniquira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Muzo",
nit: "",
email: "Notaría Única demuzo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Nobsa",
nit: "",
email: "Notaría Única denobsa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Paipa",
nit: "",
email: "Notaría Única depaipa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pauna",
nit: "",
email: "Notaría Única depauna@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Paz de Rio",
nit: "",
email: "Notaría Única depazderio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pesca",
nit: "",
email: "Notaría Única depesca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Boyaca ",
nit: "",
email: "Notaría Única depuertoboyaca@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Ramiriqui",
nit: "",
email: "primeraramiriqui@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Ramiriqui",
nit: "",
email: "segundaramiriqui@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Saboya",
nit: "",
email: "Notaría Única desaboya@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Luis de Gaceno ",
nit: "",
email: "Notaría Única desanluisdegaceno@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Rosa de Viterbo ",
nit: "",
email: "Notaría Única desantarosadeviterbo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sativanorte",
nit: "",
email: "Notaría Única desativanorte@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Soata",
nit: "",
email: "Notaría Única desoata@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Socha",
nit: "",
email: "Notaría Única desocha@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Sogamoso",
nit: "",
email: "primerasogamoso@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Sogamoso",
nit: "",
email: "segundasogamoso@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Sogamoso",
nit: "",
email: "tercerasogamoso@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Somondoco",
nit: "",
email: "Notaría Única desomondoco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sotaquira",
nit: "",
email: "Notaría Única desotaquira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tenza",
nit: "",
email: "Notaría Única detenza@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tinjaca",
nit: "",
email: "Notaría Única detinjaca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Toca",
nit: "",
email: "Notaría Única detoca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Turmeque",
nit: "",
email: "Notaría Única deturmeque@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Umbita",
nit: "",
email: "Notaría Única deumbita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ventaquemada",
nit: "",
email: "Notaría Única deventaquemada@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Zetaquira",
nit: "",
email: "Notaría Única dezetaquira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Agua de Dios",
nit: "",
email: "Notaría Única deaguadedios@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Anapoima",
nit: "",
email: "Notaría Única deanapoima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Anolaima",
nit: "",
email: "Notaría Única deanolaima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bojaca",
nit: "",
email: "Notaría Única debojaca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cajica",
nit: "",
email: "Notaría Única decajica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caparrapi",
nit: "",
email: "Notaría Única decaparrapi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caqueza",
nit: "",
email: "Notaría Única decaqueza@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Chia",
nit: "",
email: "primerachia@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Chia",
nit: "",
email: "segundachia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chipaque",
nit: "",
email: "Notaría Única dechipaque@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Choconta",
nit: "",
email: "Notaría Única dechoconta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cota",
nit: "",
email: "Notaría Única decota@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Colegio ",
nit: "",
email: "Notaría Única deelcolegio@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Facatativa",
nit: "",
email: "primerafacatativa@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Facatativa",
nit: "",
email: "segundafacatativa@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Facatativa",
nit: "",
email: "tercerafacatativa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Fomeque",
nit: "",
email: "Notaría Única defomeque@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Funza",
nit: "",
email: "Notaría Única defunza@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Fusagasuga",
nit: "",
email: "primerafusagasuga@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Fusagasuga",
nit: "",
email: "segundafusagasuga@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Gachala",
nit: "",
email: "Notaría Única degachala@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Gacheta",
nit: "",
email: "Notaría Única degacheta@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Girardot",
nit: "",
email: "primeragirardot@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Girardot",
nit: "",
email: "segundagirardot@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guaduas",
nit: "",
email: "Notaría Única deguaduas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guatavita",
nit: "",
email: "Notaría Única deguatavita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Junin",
nit: "",
email: "Notaría Única dejunin@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Calera ",
nit: "",
email: "Notaría Única delacalera@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Mesa ",
nit: "",
email: "Notaría Única delamesa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Palma ",
nit: "",
email: "Notaría Única delapalma@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Vega Cundinamarca",
nit: "",
email: "Notaría Única delavegacundinamarca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Macheta",
nit: "",
email: "Notaría Única demacheta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Madrid",
nit: "",
email: "Notaría Única demadrid@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Manta",
nit: "",
email: "Notaría Única demanta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Medina",
nit: "",
email: "Notaría Única demedina@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mosquera",
nit: "",
email: "Notaría Única demosquera@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Nemocon",
nit: "",
email: "Notaría Única denemocon@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Nocaima",
nit: "",
email: "Notaría Única denocaima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pacho",
nit: "",
email: "Notaría Única depacho@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Paime",
nit: "",
email: "Notaría Única depaime@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pandi",
nit: "",
email: "Notaría Única depandi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Salgar ",
nit: "",
email: "Notaría Única depuertosalgar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Francisco ",
nit: "",
email: "Notaría Única desanfrancisco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Juan de Rio Seco",
nit: "",
email: "Notaría Única desanjuanderio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sasaima",
nit: "",
email: "Notaría Única desasaima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sesquile",
nit: "",
email: "Notaría Única desesquile@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Silvania",
nit: "",
email: "Notaría Única desilvania@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Simijaca",
nit: "",
email: "Notaría Única desimijaca@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Soacha",
nit: "",
email: "primerasoacha@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Soacha",
nit: "",
email: "segundasoacha@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Subachoque",
nit: "",
email: "Notaría Única desubachoque@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tabio",
nit: "",
email: "Notaría Única detabio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tenjo",
nit: "",
email: "Notaría Única detenjo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tocaima",
nit: "",
email: "Notaría Única detocaima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tocancipa",
nit: "",
email: "Notaría Única detocancipa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ubala",
nit: "",
email: "Notaría Única deubala@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Ubate",
nit: "",
email: "primeraubate@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Ubate",
nit: "",
email: "segundaubate@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Une",
nit: "",
email: "Notaría Única deune@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Utica",
nit: "",
email: "Notaría Única deutica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villa Pinzon ",
nit: "",
email: "Notaría Única devillapinzon@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villeta",
nit: "",
email: "Notaría Única devilleta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Viota",
nit: "",
email: "Notaría Única deviota@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Yacopi",
nit: "",
email: "Notaría Única deyacopi@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Zipaquira",
nit: "",
email: "primerazipaquira@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Zipaquira",
nit: "",
email: "segundazipaquira@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Neiva",
nit: "",
email: "primeraneiva@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Neiva",
nit: "",
email: "segundaneiva@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Neiva",
nit: "",
email: "terceraneiva@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Neiva",
nit: "",
email: "cuartaneiva@supernotariado.gov.co"
},
{
nombre: "Notaría Quinta de Neiva",
nit: "",
email: "quintaneiva@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Acevedo Huila ",
nit: "",
email: "Notaría Única deacevedohuila@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Agrado",
nit: "",
email: "Notaría Única deagrado@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Aipe",
nit: "",
email: "Notaría Única deaipe@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Algeciras",
nit: "",
email: "Notaría Única dealgeciras@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Baraya",
nit: "",
email: "Notaría Única debaraya@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Campoalegre",
nit: "",
email: "Notaría Única decampoalegre@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Colombia",
nit: "",
email: "Notaría Única decolombia@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Garzon",
nit: "",
email: "primeragarzon@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Garzon",
nit: "",
email: "segundagarzon@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Gigante",
nit: "",
email: "Notaría Única degigante@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guadalupe Huila ",
nit: "",
email: "Notaría Única deguadalupehuila@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Plata ",
nit: "",
email: "Notaría Única delaplata@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Palermo",
nit: "",
email: "Notaría Única depalermo@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Pitalito",
nit: "",
email: "primerapitalito@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Pitalito",
nit: "",
email: "segundapitalito@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Agustin ",
nit: "",
email: "Notaría Única desanagustin@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tesalia",
nit: "",
email: "Notaría Única detesalia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Timana",
nit: "",
email: "Notaría Única detimana@supernotariado.gov.co"
},
{
nombre: "Notaría Única de yaguara",
nit: "",
email: "Notaría Única deyaguara@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Cucuta",
nit: "",
email: "primeracucuta@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Cucuta",
nit: "",
email: "segundacucuta@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Cucuta",
nit: "",
email: "terceracucuta@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Cucuta",
nit: "",
email: "cuartacucuta@supernotariado.gov.co"
},
{
nombre: "Notaría Quinta de Cucuta",
nit: "",
email: "quintacucuta@supernotariado.gov.co"
},
{
nombre: "Notaría Sexta de Cucuta",
nit: "",
email: "sextacucuta@supernotariado.gov.co"
},
{
nombre: "Notaría Septima de Cucuta",
nit: "",
email: "septimacucuta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Abrego",
nit: "",
email: "Notaría Única deabrego@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Arboledas",
nit: "",
email: "Notaría Única dearboledas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bucarasica",
nit: "",
email: "Notaría Única debucarasica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cachira",
nit: "",
email: "Notaría Única decachira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chinacota",
nit: "",
email: "Notaría Única dechinacota@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Convencion",
nit: "",
email: "Notaría Única deconvencion@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cucutilla",
nit: "",
email: "Notaría Única decucutilla@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Durania",
nit: "",
email: "Notaría Única dedurania@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Carmen Norte de Santander",
nit: "",
email: "Notaría Única deelcarmennortede@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Tarra ",
nit: "",
email: "Notaría Única deeltarra@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Zulia ",
nit: "",
email: "Notaría Única deelzulia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Gramalote",
nit: "",
email: "Notaría Única degramalote@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Hacari",
nit: "",
email: "Notaría Única dehacari@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Los Patios ",
nit: "",
email: "Notaría Única delospatios@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Ocaña",
nit: "",
email: "primeraocaña@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Ocaña",
nit: "",
email: "segundaocaña@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Pamplona",
nit: "",
email: "primerapamplona@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Pamplona",
nit: "",
email: "segundapamplona@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Santander ",
nit: "",
email: "Notaría Única depuertosantander@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Salazar de Las Palmas ",
nit: "",
email: "Notaría Única desalazardelaspalmas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Calixto ",
nit: "",
email: "Notaría Única desancalixto@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sardinata",
nit: "",
email: "Notaría Única desardinata@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Teorama",
nit: "",
email: "Notaría Única deteorama@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tibu",
nit: "",
email: "Notaría Única detibu@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Toledo",
nit: "",
email: "Notaría Única detoledo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villacaro",
nit: "",
email: "Notaría Única devillacaro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villa del Rosario",
nit: "",
email: "Notaría Única devilladelrosario@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Bucaramanga",
nit: "",
email: "primerabucaramanga@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Bucaramanga",
nit: "",
email: "segundabucaramanga@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Bucaramanga",
nit: "",
email: "tercerabucaramanga@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Bucaramanga",
nit: "",
email: "cuartabucaramanga@supernotariado.gov.co"
},
{
nombre: "Notaría Quinta de Bucaramanga",
nit: "",
email: "quintabucaramanga@supernotariado.gov.co"
},
{
nombre: "Notaría Sexta de Bucaramanga",
nit: "",
email: "sextabucaramanga@supernotariado.gov.co"
},
{
nombre: "Notaría Septima de Bucaramanga",
nit: "",
email: "septimabucaramanga@supernotariado.gov.co"
},
{
nombre: "Notaría Octava de Bucaramanga",
nit: "",
email: "octavabucaramanga@supernotariado.gov.co"
},
{
nombre: "Notaría Novena de Bucaramanga",
nit: "",
email: "novenabucaramanga@supernotariado.gov.co"
},
{
nombre: "Notaría Decima de Bucaramanga",
nit: "",
email: "decimabucaramanga@supernotariado.gov.co"
},
{
nombre: "Notaría Once de Bucaramanga",
nit: "",
email: "oncebucaramanga@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Barbosa Santander ",
nit: "",
email: "Notaría Única debarbosasantander@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Barichara",
nit: "",
email: "Notaría Única debarichara@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Barrancabermeja",
nit: "",
email: "primerabarrancabermeja@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Barrancabermeja",
nit: "",
email: "segundabarrancabermeja@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bolivar Santander ",
nit: "",
email: "Notaría Única debolivarsantander@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Charala",
nit: "",
email: "Notaría Única decharala@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cimitarra",
nit: "",
email: "Notaría Única decimitarra@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Concepcion",
nit: "",
email: "Notaría Única deconcepcion@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Contratacion",
nit: "",
email: "Notaría Única decontratacion@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Carmen Santander",
nit: "",
email: "Notaría Única deelcarmensantander@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Playon ",
nit: "",
email: "Notaría Única deelplayon@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Floridablanca",
nit: "",
email: "primerafloridablanca@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Floridablanca",
nit: "",
email: "segundafloridablanca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Galan",
nit: "",
email: "Notaría Única degalan@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Gambita",
nit: "",
email: "Notaría Única degambita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Giron",
nit: "",
email: "Notaría Única degiron@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guaca",
nit: "",
email: "Notaría Única deguaca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guadalupe Santander ",
nit: "",
email: "Notaría Única deguadalupesantander@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Jesus Maria ",
nit: "",
email: "Notaría Única dejesusmaria@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Lebrija",
nit: "",
email: "Notaría Única delebrija@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Malaga",
nit: "",
email: "primeramalaga@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Malaga",
nit: "",
email: "segundamalaga@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Matanza",
nit: "",
email: "Notaría Única dematanza@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mogotes",
nit: "",
email: "Notaría Única demogotes@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Oiba",
nit: "",
email: "Notaría Única deoiba@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Onzaga",
nit: "",
email: "Notaría Única deonzaga@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Piedecuesta",
nit: "",
email: "Notaría Única depiedecuesta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puente Nacional ",
nit: "",
email: "Notaría Única depuentenacional@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Wilches ",
nit: "",
email: "Notaría Única depuertowilches@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Rionegro",
nit: "",
email: "Notaría Única derionegro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sabana de Torres",
nit: "",
email: "Notaría Única desabanadetorres@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Andres Santander",
nit: "",
email: "Notaría Única desanandressantander@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de San Gil ",
nit: "",
email: "primerasangil@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de San Gil ",
nit: "",
email: "segundasangil@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Vicente de Chucuri ",
nit: "",
email: "Notaría Única desanvicentedechucuri@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Simacota",
nit: "",
email: "Notaría Única desimacota@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Socorro",
nit: "",
email: "primerasocorro@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Socorro",
nit: "",
email: "segundasocorro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Suaita",
nit: "",
email: "Notaría Única desuaita@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Velez",
nit: "",
email: "primeravelez@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Velez",
nit: "",
email: "segundavelez@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Zapatoca",
nit: "",
email: "Notaría Única dezapatoca@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Ibague",
nit: "",
email: "primeraibague@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Ibague",
nit: "",
email: "segundaibague@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Ibague",
nit: "",
email: "terceraibague@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Ibague",
nit: "",
email: "cuartaibague@supernotariado.gov.co"
},
{
nombre: "Notaría Quinta de Ibague",
nit: "",
email: "quintaibague@supernotariado.gov.co"
},
{
nombre: "Notaría Sexta de Ibague",
nit: "",
email: "sextaibague@supernotariado.gov.co"
},
{
nombre: "Notaría Septima de Ibague",
nit: "",
email: "septimaibague@supernotariado.gov.co"
},
{
nombre: "Notaría Octava de Ibague",
nit: "",
email: "octavaibague@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ambalema",
nit: "",
email: "Notaría Única deambalema@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Armero",
nit: "",
email: "Notaría Única dearmero@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ataco",
nit: "",
email: "Notaría Única deataco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cajamarca",
nit: "",
email: "Notaría Única decajamarca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chaparral",
nit: "",
email: "Notaría Única dechaparral@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Coyaima",
nit: "",
email: "Notaría Única decoyaima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cunday",
nit: "",
email: "Notaría Única decunday@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Dolores",
nit: "",
email: "Notaría Única dedolores@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Espinal",
nit: "",
email: "primeraespinal@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Espinal",
nit: "",
email: "segundaespinal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Flandes",
nit: "",
email: "Notaría Única deflandes@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Fresno",
nit: "",
email: "Notaría Única defresno@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Guamo Tolima",
nit: "",
email: "Notaría Única deelguamotolima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Herveo",
nit: "",
email: "Notaría Única deherveo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Honda",
nit: "",
email: "Notaría Única dehonda@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Lerida",
nit: "",
email: "Notaría Única delerida@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Libano",
nit: "",
email: "Notaría Única delibano@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mariquita",
nit: "",
email: "Notaría Única demariquita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Melgar",
nit: "",
email: "Notaría Única demelgar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Natagaima",
nit: "",
email: "Notaría Única denatagaima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ortega",
nit: "",
email: "Notaría Única deortega@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Planadas",
nit: "",
email: "Notaría Única deplanadas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Purificacion",
nit: "",
email: "Notaría Única depurificacion@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Rioblanco",
nit: "",
email: "Notaría Única derioblanco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Rovira",
nit: "",
email: "Notaría Única derovira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Saldaña",
nit: "",
email: "Notaría Única desaldaña@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Antonio",
nit: "",
email: "Notaría Única desanantonio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Luis",
nit: "",
email: "Notaría Única desanluis@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Venadillo",
nit: "",
email: "Notaría Única devenadillo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villahermosa",
nit: "",
email: "Notaría Única devillahermosa@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Medellin",
nit: "",
email: "primeramedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Medellin",
nit: "",
email: "segundamedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Medellin",
nit: "",
email: "terceramedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Medellin",
nit: "",
email: "cuartamedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Quinta de Medellin",
nit: "",
email: "quintamedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Sexta de Medellin",
nit: "",
email: "sextamedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Septima de Medellin",
nit: "",
email: "septimamedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Octava de Medellin",
nit: "",
email: "octavamedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Novena de Medellin",
nit: "",
email: "novenamedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Decima de Medellin",
nit: "",
email: "decimamedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Once de Medellin",
nit: "",
email: "oncemedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Doce de Medellin",
nit: "",
email: "docemedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Trece de Medellin",
nit: "",
email: "trecemedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Catorce de Medellin",
nit: "",
email: "catorcemedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Quince de Medellin",
nit: "",
email: "quincemedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Dieciseis de Medellin",
nit: "",
email: "dieciseismedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Diecisiete de Medellin",
nit: "",
email: "diecisietemedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Dieciocho de Medellin",
nit: "",
email: "dieciochomedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Diecinueve de Medellin",
nit: "",
email: "diecinuevemedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Veinte de Medellin",
nit: "",
email: "veintemedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Veintiuno de Medellin",
nit: "",
email: "veintiunamedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Veintidos de Medellin",
nit: "",
email: "veintidosmedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Veintitres de Medellin",
nit: "",
email: "veintitresmedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Veinticuatro de Medellin",
nit: "",
email: "veinticuatromedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Veinticinco de Medellin",
nit: "",
email: "veinticincomedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Veintiseis de Medellin",
nit: "",
email: "veintiseismedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Veintisiete de Medellin",
nit: "",
email: "veintisietemedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Veintiocho de Medellin",
nit: "",
email: "veintiochomedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Veintinueve de Medellin",
nit: "",
email: "veintinuevemedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Treinta de Medellin",
nit: "",
email: "treintamedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Treinta y Una de Medellin",
nit: "",
email: "treintayunmedellin@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Abejorral",
nit: "",
email: "Notaría Única deabejorral@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Amaga",
nit: "",
email: "Notaría Única deamaga@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Amalfi",
nit: "",
email: "Notaría Única deamalfi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Andes",
nit: "",
email: "Notaría Única deandes@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Angostura",
nit: "",
email: "Notaría Única deangostura@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Anori",
nit: "",
email: "Notaría Única deanori@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santafe de Antioquia",
nit: "",
email: "Notaría Única desantafedeantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Apartado",
nit: "",
email: "Notaría Única deapartado@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Arboletes",
nit: "",
email: "Notaría Única dearboletes@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Argelia Antioquia",
nit: "",
email: "Notaría Única deargeliaantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Armenia",
nit: "",
email: "Notaría Única dearmenia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Barbosa Antioquia",
nit: "",
email: "Notaría Única debarbosaantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Bello",
nit: "",
email: "primerabello@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Bello",
nit: "",
email: "segundabello@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Betania",
nit: "",
email: "Notaría Única debetania@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Betulia",
nit: "",
email: "Notaría Única debetulia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bolivar Antioquia",
nit: "",
email: "Notaría Única debolivarantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Briceño",
nit: "",
email: "Notaría Única debriceno@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Buritica",
nit: "",
email: "Notaría Única deburitica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caceres",
nit: "",
email: "Notaría Única decaceres@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caldas",
nit: "",
email: "Notaría Única decaldas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cañasgordas",
nit: "",
email: "Notaría Única decanasgordas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caramanta",
nit: "",
email: "Notaría Única decaramanta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Carepa",
nit: "",
email: "Notaría Única decarepa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Carmen de Viboral",
nit: "",
email: "Notaría Única decarmendeviboral@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Carolina",
nit: "",
email: "Notaría Única decarolina@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caucasia",
nit: "",
email: "Notaría Única decaucasia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chigorodo",
nit: "",
email: "Notaría Única dechigorodo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cisneros",
nit: "",
email: "Notaría Única decisneros@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cocorna",
nit: "",
email: "Notaría Única decocorna@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Concordia",
nit: "",
email: "Notaría Única deconcordia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Copacabana",
nit: "",
email: "Notaría Única decopacabana@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Dabeiba",
nit: "",
email: "Notaría Única dedabeiba@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Don Matias",
nit: "",
email: "Notaría Única dedonmatias@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ebejico",
nit: "",
email: "Notaría Única deebejico@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Bagre",
nit: "",
email: "Notaría Única deelbagre@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Entrerrios",
nit: "",
email: "Notaría Única deentrerrios@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Envigado",
nit: "",
email: "primeraenvigado@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Envigado",
nit: "",
email: "segundaenvigado@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Envigado",
nit: "",
email: "terceraenvigado@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Fredonia",
nit: "",
email: "Notaría Única defredonia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Frontino",
nit: "",
email: "Notaría Única defrontino@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Girardota",
nit: "",
email: "Notaría Única degirardota@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Gomez Plata",
nit: "",
email: "Notaría Única degomezplata@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Granada Antioquia",
nit: "",
email: "Notaría Única degranadaantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guarne",
nit: "",
email: "Notaría Única deguarne@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Itagui",
nit: "",
email: "primeraitagui@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Itagui",
nit: "",
email: "segundaitagui@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ituango",
nit: "",
email: "Notaría Única deituango@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Jardin",
nit: "",
email: "Notaría Única dejardin@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Jerico",
nit: "",
email: "Notaría Única dejerico@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Ceja",
nit: "",
email: "Notaría Única delaceja@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Estrella",
nit: "",
email: "Notaría Única delaestrella@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Union Antioquia",
nit: "",
email: "Notaría Única delaunionantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Liborina",
nit: "",
email: "Notaría Única deliborina@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Maceo",
nit: "",
email: "Notaría Única demaceo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Marinilla",
nit: "",
email: "Notaría Única demarinilla@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Nariño",
nit: "",
email: "Notaría Única denarino@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Necocli",
nit: "",
email: "Notaría Única denecocli@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Nechi",
nit: "",
email: "Notaría Única denechi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Peñol",
nit: "",
email: "Notaría Única deelpenol@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pueblo Rico Antioquia",
nit: "",
email: "Notaría Única depuebloricoantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Berrio",
nit: "",
email: "Notaría Única depuertoberrio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Nare",
nit: "",
email: "Notaría Única depuertonare@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Triunfo",
nit: "",
email: "Notaría Única depuertotriunfo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Remedios",
nit: "",
email: "Notaría Única deremedios@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Retiro",
nit: "",
email: "Notaría Única deelretiro@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Rionegro",
nit: "",
email: "primerarionegro@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Rionegro",
nit: "",
email: "segundarionegro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sabaneta",
nit: "",
email: "Notaría Única desabaneta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Salgar",
nit: "",
email: "Notaría Única desalgar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Andres Antioquia",
nit: "",
email: "Notaría Única desanandresantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Carlos Antioquia",
nit: "",
email: "Notaría Única desancarlosantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Jeronimo",
nit: "",
email: "Notaría Única desanjeronimo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Juan de Uraba ",
nit: "",
email: "Notaría Única desanjuandeuraba@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Pedro de Belmira ",
nit: "",
email: "Notaría Única desanpedrodebelmira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Pedro de Uraba ",
nit: "",
email: "Notaría Única desanpedrodeuraba@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Rafael",
nit: "",
email: "Notaría Única desanrafael@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Roque",
nit: "",
email: "Notaría Única desanroque@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Vicente",
nit: "",
email: "Notaría Única desanvicente@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Barbara",
nit: "",
email: "Notaría Única desantabarbara@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Rosa de Osos ",
nit: "",
email: "Notaría Única desantarosadeosos@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santo Domingo",
nit: "",
email: "Notaría Única desantodomingo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santuario Antioquia",
nit: "",
email: "Notaría Única desantuarioantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Segovia",
nit: "",
email: "Notaría Única desegovia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sonson",
nit: "",
email: "Notaría Única desonson@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sopetran",
nit: "",
email: "Notaría Única desopetran@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tamesis",
nit: "",
email: "Notaría Única detamesis@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Taraza",
nit: "",
email: "Notaría Única detaraza@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tarso",
nit: "",
email: "Notaría Única detarso@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Titiribi",
nit: "",
email: "Notaría Única detitiribi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Turbo",
nit: "",
email: "Notaría Única deturbo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Urrao",
nit: "",
email: "Notaría Única deurrao@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Valdivia",
nit: "",
email: "Notaría Única devaldivia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Valparaiso",
nit: "",
email: "Notaría Única devalparaiso@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Vegachi",
nit: "",
email: "Notaría Única devegachi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Venecia",
nit: "",
email: "Notaría Única devenecia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Yali",
nit: "",
email: "Notaría Única deyali@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Yarumal",
nit: "",
email: "primerayarumal@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Yarumal",
nit: "",
email: "segundayarumal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Yolombo",
nit: "",
email: "Notaría Única deyolombo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Zaragoza",
nit: "",
email: "Notaría Única dezaragoza@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Manizales",
nit: "",
email: "primeramanizales@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Manizales",
nit: "",
email: "segundamanizales@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Manizales",
nit: "",
email: "terceramanizales@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Manizales",
nit: "",
email: "cuartamanizales@supernotariado.gov.co"
},
{
nombre: "Notaría Quinta de Manizales",
nit: "",
email: "quintamanizales@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Aguadas",
nit: "",
email: "Notaría Única deaguadas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Anserma",
nit: "",
email: "Notaría Única deanserma@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Aranzazu",
nit: "",
email: "Notaría Única dearanzazu@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Belalcazar",
nit: "",
email: "Notaría Única debelalcazar@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Chinchina",
nit: "",
email: "primerachinchina@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Chinchina",
nit: "",
email: "segundachinchina@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Filadelfia",
nit: "",
email: "Notaría Única defiladelfia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Dorada",
nit: "",
email: "Notaría Única deladorada@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Manzanares",
nit: "",
email: "Notaría Única demanzanares@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Marmato",
nit: "",
email: "Notaría Única demarmato@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Marquetalia",
nit: "",
email: "Notaría Única demarquetalia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Marulanda",
nit: "",
email: "Notaría Única demarulanda@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Neira",
nit: "",
email: "Notaría Única deneira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pacora",
nit: "",
email: "Notaría Única depacora@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Palestina",
nit: "",
email: "Notaría Única depalestina@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pensilvania",
nit: "",
email: "Notaría Única depensilvania@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Riosucio",
nit: "",
email: "Notaría Única deriosucio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Risaralda",
nit: "",
email: "Notaría Única derisaralda@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Salamina Caldas",
nit: "",
email: "Notaría Única desalaminacaldas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Samana",
nit: "",
email: "Notaría Única desamana@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Supia",
nit: "",
email: "Notaría Única desupia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Victoria Caldas",
nit: "",
email: "Notaría Única delavictoriacaldas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villamaria",
nit: "",
email: "Notaría Única devillamaria@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Viterbo",
nit: "",
email: "Notaría Única deviterbo@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Armenia",
nit: "",
email: "primeraarmenia@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Armenia",
nit: "",
email: "segundaarmenia@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Armenia",
nit: "",
email: "terceraarmenia@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Armenia",
nit: "",
email: "cuartaarmenia@supernotariado.gov.co"
},
{
nombre: "Notaría Quinta de Armenia",
nit: "",
email: "quintaarmenia@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Calarca",
nit: "",
email: "primeracalarca@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Calarca",
nit: "",
email: "segundacalarca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Circasia",
nit: "",
email: "Notaría Única decircasia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Filandia",
nit: "",
email: "Notaría Única defilandia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Genova",
nit: "",
email: "Notaría Única degenova@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Tebaida",
nit: "",
email: "Notaría Única delatebaida@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Montenegro",
nit: "",
email: "Notaría Única demontenegro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pijao",
nit: "",
email: "Notaría Única depijao@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Quimbaya",
nit: "",
email: "Notaría Única dequimbaya@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Salento",
nit: "",
email: "Notaría Única desalento@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Pereira",
nit: "",
email: "primerapereira@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Pereira",
nit: "",
email: "segundapereira@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Pereira",
nit: "",
email: "tercerapereira@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Pereira",
nit: "",
email: "cuartapereira@supernotariado.gov.co"
},
{
nombre: "Notaría Quinta de Pereira",
nit: "",
email: "quintapereira@supernotariado.gov.co"
},
{
nombre: "Notaría Sexta de Pereira",
nit: "",
email: "sextapereira@supernotariado.gov.co"
},
{
nombre: "Notaría Septima de Pereira",
nit: "",
email: "septimapereira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Apia",
nit: "",
email: "Notaría Única deapia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Balboa Risaralda",
nit: "",
email: "Notaría Única debalboarisaralda@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Belen de Umbria",
nit: "",
email: "Notaría Única debelendeumbria@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Dosquebradas",
nit: "",
email: "Notaría Única dedosquebradas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guatica",
nit: "",
email: "Notaría Única deguatica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Celia",
nit: "",
email: "Notaría Única delacelia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Virginia",
nit: "",
email: "Notaría Única delavirginia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Marsella",
nit: "",
email: "Notaría Única demarsella@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mistrato",
nit: "",
email: "Notaría Única demistrato@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pueblo Rico Risaralda",
nit: "",
email: "Notaría Única depuebloricorisaralda@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Quinchia",
nit: "",
email: "Notaría Única dequinchia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Rosa de Cabal ",
nit: "",
email: "Notaría Única desantarosadecabal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Santuario Risaralda",
nit: "",
email: "Notaría Única deelsantuariorisaralda@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Popayan",
nit: "",
email: "primerapopayan@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Popayan",
nit: "",
email: "segundapopayan@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Popayan",
nit: "",
email: "tercerapopayan@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Almaguer",
nit: "",
email: "Notaría Única dealmaguer@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Balboa",
nit: "",
email: "Notaría Única debalboa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bolivar Cauca ",
nit: "",
email: "Notaría Única debolivarcauca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Buenos Aires ",
nit: "",
email: "Notaría Única debuenosaires@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caldono",
nit: "",
email: "Notaría Única decaldono@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caloto",
nit: "",
email: "Notaría Única decaloto@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Corinto",
nit: "",
email: "Notaría Única decorinto@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Tambo Cauca",
nit: "",
email: "Notaría Única deeltambocauca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guapi",
nit: "",
email: "Notaría Única deguapi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Inza",
nit: "",
email: "Notaría Única deinza@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Vega Cauca",
nit: "",
email: "Notaría Única delavegacauca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Lopez de Micay",
nit: "",
email: "Notaría Única delopezdemicay@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mercaderes",
nit: "",
email: "Notaría Única demercaderes@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Miranda",
nit: "",
email: "Notaría Única demiranda@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Morales Cauca ",
nit: "",
email: "Notaría Única demoralescauca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Patia El Bordo",
nit: "",
email: "Notaría Única depatiaelbordo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Piendamo",
nit: "",
email: "Notaría Única depiendamo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Tejada ",
nit: "",
email: "Notaría Única depuertotejada@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Rosas",
nit: "",
email: "Notaría Única derosas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Sebastian ",
nit: "",
email: "Notaría Única desansebastian@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santander de Quilichao",
nit: "",
email: "Notaría Única desantanderdequilichao@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Silvia",
nit: "",
email: "Notaría Única desilvia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Timbio",
nit: "",
email: "Notaría Única detimbio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Timbiqui",
nit: "",
email: "Notaría Única detimbiqui@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Toribio",
nit: "",
email: "Notaría Única detoribio@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Quibdo",
nit: "",
email: "primeraquibdo@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Quibdo",
nit: "",
email: "segundaquibdo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Acandi",
nit: "",
email: "Notaría Única deacandi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Alto Baudo Pie de Pato",
nit: "",
email: "Notaría Única dealtobaudopiedepato@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bahia Solano ",
nit: "",
email: "Notaría Única debahiasolano@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bajo Baudo Pizarro",
nit: "",
email: "Notaría Única debajobaudopizarro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bojaya Bellavista ",
nit: "",
email: "Notaría Única debojayabellavista@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Istmina",
nit: "",
email: "Notaría Única deistmina@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Jurado",
nit: "",
email: "Notaría Única dejurado@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Lloro",
nit: "",
email: "Notaría Única delloro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Novita",
nit: "",
email: "Notaría Única denovita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Nuqui",
nit: "",
email: "Notaría Única denuqui@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Jose del Palmar ",
nit: "",
email: "Notaría Única desanjosedelpalmar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sipi",
nit: "",
email: "Notaría Única desipi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tado",
nit: "",
email: "Notaría Única detado@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Unguia",
nit: "",
email: "Notaría Única deunguia@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Pasto",
nit: "",
email: "primerapasto@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Pasto",
nit: "",
email: "segundapasto@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Pasto",
nit: "",
email: "tercerapasto@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Pasto",
nit: "",
email: "cuartapasto@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Jose De Alban ",
nit: "",
email: "Notaría Única desanjosedealban@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Barbacoas",
nit: "",
email: "Notaría Única debarbacoas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Buesaco",
nit: "",
email: "Notaría Única debuesaco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cumbal",
nit: "",
email: "Notaría Única decumbal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Charco ",
nit: "",
email: "Notaría Única deelcharco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Tambo Nariño",
nit: "",
email: "Notaría Única deeltambonarino@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Ipiales",
nit: "",
email: "primeraipiales@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Ipiales",
nit: "",
email: "segundaipiales@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Cruz ",
nit: "",
email: "Notaría Única delacruz@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Union Nariño",
nit: "",
email: "Notaría Única delaunionnarino@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Linares",
nit: "",
email: "Notaría Única delinares@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Los Andes ",
nit: "",
email: "Notaría Única delosandes@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerres",
nit: "",
email: "Notaría Única depuerres@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ricaurte",
nit: "",
email: "Notaría Única dericaurte@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Samaniego",
nit: "",
email: "Notaría Única desamaniego@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sandona",
nit: "",
email: "Notaría Única desandona@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Taminango",
nit: "",
email: "Notaría Única detaminango@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tumaco",
nit: "",
email: "Notaría Única detumaco@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Tuquerres",
nit: "",
email: "primeratuquerres@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Tuquerres",
nit: "",
email: "segundatuquerres@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Pablo ",
nit: "",
email: "Notaría Única desanpablo@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Cali",
nit: "",
email: "primeracali@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Cali",
nit: "",
email: "segundacali@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Cali",
nit: "",
email: "terceracali@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Cali",
nit: "",
email: "cuartacali@supernotariado.gov.co"
},
{
nombre: "Notaría Quinta de Cali",
nit: "",
email: "quintacali@supernotariado.gov.co"
},
{
nombre: "Notaría Sexta de Cali",
nit: "",
email: "sextacali@supernotariado.gov.co"
},
{
nombre: "Notaría Septima de Cali",
nit: "",
email: "septimacali@supernotariado.gov.co"
},
{
nombre: "Notaría Octava de Cali",
nit: "",
email: "octavacali@supernotariado.gov.co"
},
{
nombre: "Notaría Novena de Cali",
nit: "",
email: "novenacali@supernotariado.gov.co"
},
{
nombre: "Notaría Decima de Cali",
nit: "",
email: "decimacali@supernotariado.gov.co"
},
{
nombre: "Notaría Once de Cali",
nit: "",
email: "oncecali@supernotariado.gov.co"
},
{
nombre: "Notaría Doce de Cali",
nit: "",
email: "docecali@supernotariado.gov.co"
},
{
nombre: "Notaría Trece de Cali",
nit: "",
email: "trececali@supernotariado.gov.co"
},
{
nombre: "Notaría Catorce de Cali",
nit: "",
email: "catorcecali@supernotariado.gov.co"
},
{
nombre: "Notaría Quince de Cali",
nit: "",
email: "quincecali@supernotariado.gov.co"
},
{
nombre: "Notaría Dieciseis de Cali",
nit: "",
email: "dieciseiscali@supernotariado.gov.co"
},
{
nombre: "Notaría Diecisiete de Cali",
nit: "",
email: "diecisietecali@supernotariado.gov.co"
},
{
nombre: "Notaría Dieciocho de Cali",
nit: "",
email: "dieciochocali@supernotariado.gov.co"
},
{
nombre: "Notaría Diecinueve de Cali",
nit: "",
email: "diecinuevecali@supernotariado.gov.co"
},
{
nombre: "Notaría Veinte de Cali",
nit: "",
email: "veintecali@supernotariado.gov.co"
},
{
nombre: "Veintiun Cali",
nit: "",
email: "veintiuncali@supernotariado.gov.co"
},
{
nombre: "Notaría Veintidos de Cali",
nit: "",
email: "veintidoscali@supernotariado.gov.co"
},
{
nombre: "Notaría Veintitres de Cali",
nit: "",
email: "veintitrescali@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Alcala",
nit: "",
email: "Notaría Única dealcala@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Andalucia",
nit: "",
email: "Notaría Única deandalucia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Anserma Nuevo ",
nit: "",
email: "Notaría Única deansermanuevo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Argelia Valle ",
nit: "",
email: "Notaría Única deargeliavalle@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bolivar Valle ",
nit: "",
email: "Notaría Única debolivarvalle@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Buenaventura",
nit: "",
email: "primerabuenaventura@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Buenaventura",
nit: "",
email: "segundabuenaventura@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Buenaventura",
nit: "",
email: "tercerabuenaventura@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Buga",
nit: "",
email: "primerabuga@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Buga",
nit: "",
email: "segundabuga@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bugalagrande",
nit: "",
email: "Notaría Única debugalagrande@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caicedonia",
nit: "",
email: "Notaría Única decaicedonia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Calima El Darien",
nit: "",
email: "Notaría Única decalimaeldarien@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Candelaria",
nit: "",
email: "Notaría Única decandelaria@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Cartago",
nit: "",
email: "primeracartago@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Cartago",
nit: "",
email: "segundacartago@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Dagua",
nit: "",
email: "Notaría Única dedagua@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Aguila ",
nit: "",
email: "Notaría Única deelaguila@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Cairo ",
nit: "",
email: "Notaría Única deelcairo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Cerrito ",
nit: "",
email: "Notaría Única deelcerrito@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Dovio ",
nit: "",
email: "Notaría Única deeldovio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Florida",
nit: "",
email: "Notaría Única deflorida@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ginebra",
nit: "",
email: "Notaría Única deginebra@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guacari",
nit: "",
email: "Notaría Única deguacari@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Jamundi",
nit: "",
email: "Notaría Única dejamundi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Cumbre ",
nit: "",
email: "Notaría Única delacumbre@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Union Valle",
nit: "",
email: "Notaría Única delaunionvalle@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Victoria Valle",
nit: "",
email: "Notaría Única delavictoriavalle@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Obando",
nit: "",
email: "Notaría Única deobando@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Palmira",
nit: "",
email: "primerapalmira@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Palmira",
nit: "",
email: "segundapalmira@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Palmira",
nit: "",
email: "tercerapalmira@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Palmira",
nit: "",
email: "cuartapalmira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pradera",
nit: "",
email: "Notaría Única depradera@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Restrepo",
nit: "",
email: "Notaría Única derestrepo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Rio Frio ",
nit: "",
email: "Notaría Única deriofrio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Roldanillo",
nit: "",
email: "Notaría Única deroldanillo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Pedro Valle",
nit: "",
email: "Notaría Única desanpedrovalle@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Sevilla",
nit: "",
email: "primerasevilla@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Sevilla",
nit: "",
email: "segundasevilla@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Toro",
nit: "",
email: "Notaría Única detoro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Trujillo",
nit: "",
email: "Notaría Única detrujillo@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Tulua",
nit: "",
email: "primeratulua@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Tulua",
nit: "",
email: "segundatulua@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Tulua",
nit: "",
email: "terceratulua@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ulloa",
nit: "",
email: "Notaría Única deulloa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Versalles",
nit: "",
email: "Notaría Única deversalles@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Vijes",
nit: "",
email: "Notaría Única devijes@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Yotoco",
nit: "",
email: "Notaría Única deyotoco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Yumbo",
nit: "",
email: "primerayumbo@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Yumbo",
nit: "",
email: "segundayumbo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Zarzal",
nit: "",
email: "Notaría Única dezarzal@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Barranquilla",
nit: "",
email: "primerabarranquilla@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Barranquilla",
nit: "",
email: "segundabarranquilla@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Barranquilla",
nit: "",
email: "tercerabarranquilla@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Barranquilla",
nit: "",
email: "cuartabarranquilla@supernotariado.gov.co"
},
{
nombre: "Notaría Quinta de Barranquilla",
nit: "",
email: "quintabarranquilla@supernotariado.gov.co"
},
{
nombre: "Notaría Sexta de Barranquilla",
nit: "",
email: "sextabarranquilla@supernotariado.gov.co"
},
{
nombre: "Notaría Septima de Barranquilla",
nit: "",
email: "septimabarranquilla@supernotariado.gov.co"
},
{
nombre: "Notaría Octava de Barranquilla",
nit: "",
email: "octavabarranquilla@supernotariado.gov.co"
},
{
nombre: "Notaría Novena de Barranquilla",
nit: "",
email: "novenabarranquilla@supernotariado.gov.co"
},
{
nombre: "Notaría Decima de Barranquilla",
nit: "",
email: "decimabarranquilla@supernotariado.gov.co"
},
{
nombre: "Notaría Once de Barranquilla",
nit: "",
email: "oncebarranquilla@supernotariado.gov.co"
},
{
nombre: "Notaría Doce de Barranquilla",
nit: "",
email: "docebarranquilla@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Baranoa",
nit: "",
email: "Notaría Única debaranoa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Campo de la Cruz ",
nit: "",
email: "Notaría Única decampodelacruz@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Galapa",
nit: "",
email: "Notaría Única degalapa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Juan de Acosta",
nit: "",
email: "Notaría Única dejuandeacosta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Luruaco",
nit: "",
email: "Notaría Única deluruaco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Malambo",
nit: "",
email: "Notaría Única demalambo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Manati",
nit: "",
email: "Notaría Única demanati@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ponedera",
nit: "",
email: "Notaría Única deponedera@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Colombia ",
nit: "",
email: "Notaría Única depuertocolombia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Repelon",
nit: "",
email: "Notaría Única derepelon@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sabanalarga",
nit: "",
email: "Notaría Única desabanalarga@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santo Tomas ",
nit: "",
email: "Notaría Única desantotomas@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Soledad",
nit: "",
email: "primerasoledad@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Soledad",
nit: "",
email: "segundasoledad@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Cartagena",
nit: "",
email: "primeracartagena@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Cartagena",
nit: "",
email: "segundacartagena@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Cartagena",
nit: "",
email: "terceracartagena@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Cartagena",
nit: "",
email: "cuartacartagena@supernotariado.gov.co"
},
{
nombre: "Notaría Quinta de Cartagena",
nit: "",
email: "quintacartagena@supernotariado.gov.co"
},
{
nombre: "Notaría Sexta de Cartagena",
nit: "",
email: "sextacartagena@supernotariado.gov.co"
},
{
nombre: "Notaría Septima de Cartagena",
nit: "",
email: "septimacartagena@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Achi",
nit: "",
email: "Notaría Única deachi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Arjona",
nit: "",
email: "Notaría Única dearjona@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Barranco de Loba",
nit: "",
email: "Notaría Única debarrancodeloba@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Calamar",
nit: "",
email: "Notaría Única decalamar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cordoba",
nit: "",
email: "Notaría Única decordoba@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Carmen de Bolivar",
nit: "",
email: "Notaría Única decarmendebolivar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Guamo Bolivar",
nit: "",
email: "Notaría Única deelguamobolivar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Magangue",
nit: "",
email: "Notaría Única demagangue@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mahates",
nit: "",
email: "Notaría Única demahates@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Maria La Baja",
nit: "",
email: "Notaría Única demarialabaja@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mompos",
nit: "",
email: "Notaría Única demompos@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Morales Bolvar ",
nit: "",
email: "Notaría Única demoralesbolvar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pinillos",
nit: "",
email: "Notaría Única depinillos@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Rio Viejo ",
nit: "",
email: "Notaría Única derioviejo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Estanislao ",
nit: "",
email: "Notaría Única desanestanislao@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Jacinto ",
nit: "",
email: "Notaría Única desanjacinto@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Juan Nepomuceno",
nit: "",
email: "Notaría Única desanjuannepomuceno@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Martin de Loba ",
nit: "",
email: "Notaría Única desanmartindeloba@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Pablo Bolivar",
nit: "",
email: "Notaría Única desanpablobolivar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Catalina ",
nit: "",
email: "Notaría Única desantacatalina@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Rosa del Sur ",
nit: "",
email: "Notaría Única desantarosadelsur@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Simiti",
nit: "",
email: "Notaría Única desimiti@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Talaigua Nuevo ",
nit: "",
email: "Notaría Única detalaiguanuevo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Turbaco",
nit: "",
email: "Notaría Única deturbaco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Zambrano",
nit: "",
email: "Notaría Única dezambrano@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Valledupar",
nit: "",
email: "primeravalledupar@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Valledupar",
nit: "",
email: "segundavalledupar@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Valledupar",
nit: "",
email: "terceravalledupar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Aguachica",
nit: "",
email: "Notaría Única deaguachica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Codazzi",
nit: "",
email: "Notaría Única decodazzi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Astrea",
nit: "",
email: "Notaría Única deastrea@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Becerril",
nit: "",
email: "Notaría Única debecerril@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bosconia",
nit: "",
email: "Notaría Única debosconia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chimichagua",
nit: "",
email: "Notaría Única dechimichagua@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chiriguana",
nit: "",
email: "Notaría Única dechiriguana@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Curumani",
nit: "",
email: "Notaría Única decurumani@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Copey ",
nit: "",
email: "Notaría Única deelcopey@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Paso ",
nit: "",
email: "Notaría Única deelpaso@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Gamarra",
nit: "",
email: "Notaría Única degamarra@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Gonzalez",
nit: "",
email: "Notaría Única degonzalez@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Gloria ",
nit: "",
email: "Notaría Única delagloria@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Jagua de Ibirico ",
nit: "",
email: "Notaría Única delajaguadeibirico@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pailitas",
nit: "",
email: "Notaría Única depailitas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pueblo Bello ",
nit: "",
email: "Notaría Única depueblobello@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Rio de Oro",
nit: "",
email: "Notaría Única deriodeoro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Paz Robles",
nit: "",
email: "Notaría Única delapazrobles@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Alberto ",
nit: "",
email: "Notaría Única desanalberto@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Diego ",
nit: "",
email: "Notaría Única desandiego@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tamalameque",
nit: "",
email: "Notaría Única detamalameque@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Monteria",
nit: "",
email: "primeramonteria@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Monteria",
nit: "",
email: "segundamonteria@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Monteria",
nit: "",
email: "terceramonteria@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ayapel",
nit: "",
email: "Notaría Única deayapel@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Buenavista",
nit: "",
email: "Notaría Única debuenavista@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cerete",
nit: "",
email: "Notaría Única decerete@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chinu",
nit: "",
email: "Notaría Única dechinu@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cienaga de Oro",
nit: "",
email: "Notaría Única decienagadeoro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Lorica",
nit: "",
email: "Notaría Única delorica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Montelibano",
nit: "",
email: "Notaría Única demontelibano@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Planeta Rica ",
nit: "",
email: "Notaría Única deplanetarica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pueblo Nuevo ",
nit: "",
email: "Notaría Única depueblonuevo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Libertador ",
nit: "",
email: "Notaría Única depuertolibertador@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Purisima",
nit: "",
email: "Notaría Única depurisima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sahagun",
nit: "",
email: "Notaría Única desahagun@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Andres de Sotavento ",
nit: "",
email: "Notaría Única desanandresdesotavento@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Antero ",
nit: "",
email: "Notaría Única desanantero@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Bernardo del Viento",
nit: "",
email: "Notaría Única desanbernardodelviento@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Carlos ",
nit: "",
email: "Notaría Única desancarlos@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Jose de Ure ",
nit: "",
email: "Notaría Única desanjosedeure@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Pelayo ",
nit: "",
email: "Notaría Única desanpelayo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tierralta",
nit: "",
email: "Notaría Única detierralta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Valencia",
nit: "",
email: "Notaría Única devalencia@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Riohacha",
nit: "",
email: "primerariohacha@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Riohacha",
nit: "",
email: "segundariohacha@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Barrancas",
nit: "",
email: "Notaría Única debarrancas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Fonseca",
nit: "",
email: "Notaría Única defonseca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Maicao",
nit: "",
email: "Notaría Única demaicao@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Juan del Cesar ",
nit: "",
email: "Notaría Única desanjuandelcesar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Uribia",
nit: "",
email: "Notaría Única deuribia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villanueva Guajira ",
nit: "",
email: "Notaría Única devillanuevaguajira@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Santa Marta ",
nit: "",
email: "primerasantamarta@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Santa Marta ",
nit: "",
email: "segundasantamarta@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Santa Marta ",
nit: "",
email: "tercerasantamarta@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Santa Marta ",
nit: "",
email: "cuartasantamarta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Algarrobo",
nit: "",
email: "Notaría Única dealgarrobo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Aracataca",
nit: "",
email: "Notaría Única dearacataca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ariguani",
nit: "",
email: "Notaría Única deariguani@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cerro de San Antonio ",
nit: "",
email: "Notaría Única decerrodesanantonio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chivolo",
nit: "",
email: "Notaría Única dechivolo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cienaga",
nit: "",
email: "Notaría Única decienaga@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Banco ",
nit: "",
email: "Notaría Única deelbanco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Piñon Magdalena",
nit: "",
email: "Notaría Única deelpinonmagdalena@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Fundacion",
nit: "",
email: "Notaría Única defundacion@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guamal",
nit: "",
email: "Notaría Única deguamal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pedraza",
nit: "",
email: "Notaría Única depedraza@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pivijay",
nit: "",
email: "Notaría Única depivijay@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Plato",
nit: "",
email: "Notaría Única deplato@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Remolino",
nit: "",
email: "Notaría Única deremolino@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sabanas de San Angel ",
nit: "",
email: "Notaría Única desabanasdesanangel@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Salamina Magdalena ",
nit: "",
email: "Notaría Única desalaminamagdalena@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Sebastian de Buenavista ",
nit: "",
email: "Notaría Única desansebastiandebuenavista@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Zenon ",
nit: "",
email: "Notaría Única desanzenon@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Ana ",
nit: "",
email: "Notaría Única desantaana@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sitio Nuevo ",
nit: "",
email: "Notaría Única desitionuevo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tenerife",
nit: "",
email: "Notaría Única detenerife@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Zona Bananera ",
nit: "",
email: "Notaría Única dezonabananera@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Sincelejo",
nit: "",
email: "primerasincelejo@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Sincelejo",
nit: "",
email: "segundasincelejo@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Sincelejo",
nit: "",
email: "tercerasincelejo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caimito",
nit: "",
email: "Notaría Única decaimito@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Coloso",
nit: "",
email: "Notaría Única decoloso@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Corozal",
nit: "",
email: "Notaría Única decorozal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Galeras",
nit: "",
email: "Notaría Única degaleras@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guaranda",
nit: "",
email: "Notaría Única deguaranda@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Los Palmitos ",
nit: "",
email: "Notaría Única delospalmitos@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Majagual",
nit: "",
email: "Notaría Única demajagual@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ovejas",
nit: "",
email: "Notaría Única deovejas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Palmito",
nit: "",
email: "Notaría Única depalmito@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sampues",
nit: "",
email: "Notaría Única desampues@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Benito Abad",
nit: "",
email: "Notaría Única desanbenitoabad@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Marcos ",
nit: "",
email: "Notaría Única desanmarcos@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Onofre ",
nit: "",
email: "Notaría Única desanonofre@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Pedro ",
nit: "",
email: "Notaría Única desanpedro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Since",
nit: "",
email: "Notaría Única desince@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sucre",
nit: "",
email: "Notaría Única desucre@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tolu",
nit: "",
email: "Notaría Única detolu@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tolu Viejo",
nit: "",
email: "Notaría Única detoluviejo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Andres Islas",
nit: "",
email: "Notaría Única desanandresislas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Providencia",
nit: "",
email: "Notaría Única deprovidencia@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Florencia ",
nit: "",
email: "primeraflorencia@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Florencia ",
nit: "",
email: "segundaflorencia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Belen de los Andaquies",
nit: "",
email: "Notaría Única debelendelosandaquies@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cartagena del Chaira ",
nit: "",
email: "Notaría Única decartagenadelchaira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Doncello",
nit: "",
email: "Notaría Única deeldoncello@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Montañita",
nit: "",
email: "Notaría Única delamontanita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Rico Caqueta ",
nit: "",
email: "Notaría Única depuertoricocaqueta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Vicente del Caguan",
nit: "",
email: "Notaría Única desanvicentedelcaguan@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Villavicencio ",
nit: "",
email: "primeravillavicencio@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Villavicencio ",
nit: "",
email: "segundavillavicencio@supernotariado.gov.co"
},
{
nombre: "Notaría Tercera de Villavicencio ",
nit: "",
email: "terceravillavicencio@supernotariado.gov.co"
},
{
nombre: "Notaría Cuarta de Villavicencio ",
nit: "",
email: "cuartavillavicencio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Acacias ",
nit: "",
email: "Notaría Única deacacias@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Granada Meta",
nit: "",
email: "Notaría Única degranadameta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Macarena",
nit: "",
email: "Notaría Única delamacarena@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Uribe Uribe",
nit: "",
email: "Notaría Única deuribeuribe@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Gaitan",
nit: "",
email: "Notaría Única depuertogaitan@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Lopez",
nit: "",
email: "Notaría Única depuertolopez@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Rico Rico ",
nit: "",
email: "Notaría Única depuertoricorico@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Juan de Arama",
nit: "",
email: "Notaría Única desanjuandearama@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Martin",
nit: "",
email: "Notaría Única desanmartin@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Vistahermosa ",
nit: "",
email: "Notaría Única devistahermosa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Arauca ",
nit: "",
email: "Notaría Única dearauca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Arauquita ",
nit: "",
email: "Notaría Única dearauquita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cravo Norte",
nit: "",
email: "Notaría Única decravonorte@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Fortul ",
nit: "",
email: "Notaría Única defortul@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Rondon",
nit: "",
email: "Notaría Única depuertorondon@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Saravena ",
nit: "",
email: "Notaría Única desaravena@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tame ",
nit: "",
email: "Notaría Única detame@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Yopal ",
nit: "",
email: "primerayopal@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Yopal ",
nit: "",
email: "segundayopal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Aguazul ",
nit: "",
email: "Notaría Única deaguazul@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Hato Corozal",
nit: "",
email: "Notaría Única dehatocorozal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Monterrey ",
nit: "",
email: "Notaría Única demonterrey@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Nunchia ",
nit: "",
email: "Notaría Única denunchia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Orocue ",
nit: "",
email: "Notaría Única deorocue@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Paz de Ariporo ",
nit: "",
email: "Notaría Única depazdeariporo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tauramena ",
nit: "",
email: "Notaría Única detauramena@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villanueva Casanare",
nit: "",
email: "Notaría Única devillanuevacasanare@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mocoa ",
nit: "",
email: "Notaría Única democoa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Orito ",
nit: "",
email: "Notaría Única deorito@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Asis",
nit: "",
email: "Notaría Única depuertoasis@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Leguizamo",
nit: "",
email: "Notaría Única depuertoleguizamo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Miguel",
nit: "",
email: "Notaría Única desanmiguel@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santiago ",
nit: "",
email: "Notaría Única desantiago@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Valle del Guamez ",
nit: "",
email: "Notaría Única devalledelguamez@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villagarzon ",
nit: "",
email: "Notaría Única devillagarzon@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Leticia ",
nit: "",
email: "Notaría Única deleticia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Inirida Guainia ",
nit: "",
email: "Notaría Única depuertoiniridaguainia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Jose del Guaviare",
nit: "",
email: "Notaría Única desanjosedelguaviare@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mitu ",
nit: "",
email: "Notaría Única demitu@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Carreño",
nit: "",
email: "Notaría Única depuertocarreno@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Primavera",
nit: "",
email: "Notaría Única delaprimavera@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Rosalia",
nit: "",
email: "Notaría Única desantarosalia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cumaribo ",
nit: "",
email: "Notaría Única decumaribo@supernotariado.gov.co"
},
// Instituciones Educativas
{
nombre: "Institución Etnoeducativa Monte Alvernia",
nit: "",
email: "montealvernia1968@yahoo.es"
},
// Entidades Privadas

// Entidades Educativas
{
nombre:"Fundación de Educación Superior San José - USANJOSÉ",
nit:"",
email:"admisiones@usanjose.edu.co"
},

// Entidades Centrales de Riesgo Financiero
{
nombre: "CIFIN S.A.S.",
nit: "900.572.445-1",
email: ""
},
{
nombre: "Experian Colombia S.A. - Datacrédito",
nit: "900.422.614-8",
email: "servicioalciudadano@experian.com"
},
// Entidades Financieras
{
nombre: "Red Empresarial de Servicios S.A. - SUPERGIROS",
nit: "900.084.777-9",
email: "servicioalcliente@supergiros.com.co"
},
{
nombre:"Compañía de Inversiones y Libranzas S.A.S. - PRESTAGENTE",
nit:"900.902.511-8",
email:"contacto@prestagente.com"
},
{
nombre:"Adelante Soluciones Financieras - ADDI",
nit:"901216.768-4",
email:"datos@addi.com"
},
// Empresas Promotoras de Salud - EPS
{
nombre: "EPS SANITAS S.A.S.",
nit: "800.251.440-6",
email: "notificajudiciales@keralty.com"
},
{
nombre: "NUEVA EPS S.A.",
nit: "900.156.264-2",
email: "secretaria.general@nuevaeps.com.co"
},
{
nombre: "DUSAKAWI E.P.S.I",
nit: "824.002.362-1",
email: "callcenter@dusakawiepsi.com"
},
{
nombre: "SOCIEDAD ADMINISTRADORA DE FONDOS DE PENSIONES Y CESANTIAS PORVENIR S.A.",
nit: "800.144.331-3",
email: "defensoriaporvenir@legalcrc.com"
},
{
nombre: "Clinica del Cesar S.A.",
nit: "892.300.979-9",
email: "gerencia@clinicadelcesar.com"
},
 

// Empresas Proveedoras de Energía Eléctrica.
{
nombre: "Caribesol de la Costa S.A.S. E.S.P - AIR-E",
nit: "",
email: "servicioalcliente@air-e.com"
},

// Empresas Proveedoras de Acueducto.

{
nombre:"Veolia Aguas de la Guajira S.A.S E.S.P",
nit:"901.434.831-0",
email:"co.servicioalcliente.guajira@veolia.com"
},

// Empresas Proveedoras de Internet.
{
nombre: "World Connections S.A.S.",
nit: "900.632.211-4",
email: "info@worldconnections.com.co"
},
// Empresas de TelecomNotaría Única deciones | Telefonía Móvil
{
nombre:"ComNotaría Única deción Celular S.A. Comcel S.A. - CLARO",
nit:"800.153.993-7",
email:"notificacionesclaro@claro.com.co"
},
{
nombre: "Carbones del Cerrejón Limited",
nit: "860.069.804-2",
email: "contactenos@cerrejon.com"
},
{
nombre: "Sodexo S.A.S.",
nit: "800.230.447-7",
email: "claudia.diaz@sodexo.com"
},
{
nombre: "Isa Intercolombia S.A. E.S.P.",
nit: "900.667.590-1",
email: "contactenos@cerrejon.com"
},
// Empresas Aseguradoras
{
nombre: "COMPAÑÍA MUNDIAL DE SEGUROS S.A. - SEGUROS MUNDIAL",
nit: "860.037.013-6",
email: "mundial@segurosmundial.com.co"
},
{
nombre:"Compañía de Seguros Bolívar S.A.",
nit:"860.002.503-2",
email:"servicioalcliente@segurosbolivar.com"
}
];



let listaPaises = document.getElementById("listaPaises");
const countryNames = [
"Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba",	"Australia",	"Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos","Colombia","Comoros (the)","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czechia","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands [Malvinas]","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea","República de Korea","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestina","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation","Rwanda","Réunion","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States Minor Outlying Islands","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","Åland Islands"
];


countryNames.forEach(name => {
const option = document.createElement("option");
option.value = name;
listaPaises.appendChild(option);
 });

 let listaMunicipios = document.getElementById("listaMunicipios");
 const nombreMunicipios = [
"Barrancas, La Guajira",
"Riohacha, La Guajira",
"Fonseca, La Guajira",
"Hatonuevo, La Guajira",
"Medellín, La Guajira",
"Bogotá D.C.",
"Uribia, La Guajira",
"Barranquilla, Atlántico",
"Soledad, Atlántico",
"Malambo, Atlántico"
 ];
 nombreMunicipios.forEach(name => {
const option = document.createElement("option");
option.value = name;
listaMunicipios.appendChild(option);
 })