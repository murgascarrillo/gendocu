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
// Rama Ejecutiva del Poder Público
// Entidades Territoriales

// Alcaldías
{
nombre: "Alcaldía de Barrancas, La Guajira",
nit: "800.099.223-3",
email: "contactenos@barrancas-laguajira.gov.co, notificacionjudicial@barrancas-laguajira.gov.co"
},
{
    nombre:"Alcaldía de Distracción, La Guajira",
    nit:"825.000.166-7",
    email:"alcaldia@distraccion-laguajira.gov.co, notificacionjudicial@distraccion-laguajira.gov.co"
},
{
    nombre:"Alcaldía de Fonseca, La Guajira",
    nit:"892.170.008-3",
    email:"alcaldia@fonseca-laguajira.gov.co, notificacionjudicial@fonseca-guajira.gov.co"
},

// Gobernaciones y sus Dependencias
{
nombre: "Gobernación de La Guajira",
nit: "892.115.015-1",
email: "contactenos@laguajira.gov.co, notificacionesjudiciales@laguajira.gov.co"
},

{
    nombre: "Departamento Administrativo de Tránsito y Transporte Departamental de La Guajira",
    nit: "892.115.015-1",
    email: "transitodepartamental@laguajira.gov.co"
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
{nombre:"Unidad de Pensiones y Parafiscales - UGPP",
    nit:"",
    email:"contactenos@ugpp.gov.co"
},
{
nombre: "Unidad para la Atención y Reparación Integral a las Víctimas - UARIV",
nit: "900.490.473-6",
email: "servicioalciudadano@unidadvictimas.gov.co, notificaciones.juridicauariv@unidadvictimas.gov.co"
},
{
nombre: "Migración Colombia",
nit: "",
email: ""
},
{
nombre: "Ministerio de Vivienda, Ciudad y Territorio de Colombia",
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
email: "servicioalciudadano@sena.edu.co"
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
    nombre:"Superintendencia Nacional de Salud",
    nit:"",
    email:"snsnotificacionesjudiciales@supersalud.gov.co"
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

// Entidades con Presencia Territorial
{
    nombre: "E.S.E Hospital Nuestra Señora del Carmen de Hatonuevo",
    nit: "825.000.620-1",
    email: "gerencia@hospicarmenhatonuevo.gov.co"
    },
    
    // Sector Tránsito
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
    nombre:"Instituto de Tránsito y Transporte de Riohacha",
    nit:"",
    email:"info@instram.gov.co"
    },
    {
    nombre: "Policia Metropolitana de Barranquilla",
    nit: "900.263.078-7",
    email: "mebar.coseg@policia.gov.co"
    },
   
// Rama Judicial del Poder Público
{
    nombre: "Fiscalía General de la Nación",
    nit: "",
    email: "ges.documentalpqrs@fiscalia.gov.co, juridicanotificacionestutela@fiscalia.gov.co"
    },
{
nombre:"Consejo Superior de la Judicatura",
nit:"",
email:"info@cendoj.ramajudicial.gov.co"
},
// Juzgados
{
    nombre:"Despacho 001 Sala Penal Tribunal Superior Distrito Judicial de Riohacha, La Guajira",
    nit:"",
    email:"des01sptsrioha@cendoj.ramajudicial.gov.co"
},
{
nombre:"Juzgado Primero Civil Del Circuito San Juan Del Cesar, La Guajira",
nit:"",
email:"j01ctoclsjuan@cendoj.ramajudicial.gov.co"
},
{
nombre:"Juzgado Promiscuo Municipal de Barrancas, La Guajira",
nit:"",
email:"jprmpalbarrancas@cendoj.ramajudicial.gov.co"
},
{
    nombre:"Juzgado Promiscuo Municipal de Hatonuevo, La Guajira",
    nit:"",
    email:"jprmpalhatonuevo@cendoj.ramajudicial.gov.co"
    },
    {nombre:"Juzgado Sexto Penal Municipal con Funciones de Conocimiento de Riohacha",
        nit:"",
        email:"j06pmpalrioha@cendoj.ramajudicial.gov.co"
    },
{
    nombre:"Juzgado Sexto Civil del Circuito de Barranquilla",
    nit:"",
    email:"ccto06ba@cendoj.ramajudicial.gov.co"
},

// Registradurías
{
    nombre: "Registraduría Municipal de San Juan del Cesar",
    nit: "",
    email: "sanjuandelcesar@registraduria.gov.co"
    },
// Notarías
{
nombre: "Notaría Única de Barrancas, La Guajira",
nit: "",
email: "unicabarrancas@supernotariado.gov.co"
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
email: "unicaaquitania@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Belen",
nit: "",
email: "unicabelen@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Boavita",
nit: "",
email: "unicaboavita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Campo Hermoso ",
nit: "",
email: "unicacampohermoso@supernotariado.gov.co"
},
{
nombre: "Notaría Primera de Chiquinquira",
nit: "",
email: "unicachiquinquira@supernotariado.gov.co"
},
{
nombre: "Notaría Segunda de Chiquinquira",
nit: "",
email: "segundachiquinquira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chiscas",
nit: "",
email: "unicachiscas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chita",
nit: "",
email: "unicachita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cubara",
nit: "",
email: "unicacubara@supernotariado.gov.co"
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
email: "unicaelcocuy@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Garagoa",
nit: "",
email: "unicagaragoa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guateque",
nit: "",
email: "unicaguateque@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guayata",
nit: "",
email: "unicaguayata@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Labranzagrande",
nit: "",
email: "unicalabranzagrande@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villa de Leyva",
nit: "",
email: "unicavilladeleyva@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Macanal",
nit: "",
email: "unicamacanal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Maripi",
nit: "",
email: "unicamaripi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Miraflores",
nit: "",
email: "unicamiraflores@supernotariado.gov.co"
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
email: "unicamuzo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Nobsa",
nit: "",
email: "unicanobsa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Paipa",
nit: "",
email: "unicapaipa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pauna",
nit: "",
email: "unicapauna@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Paz de Rio",
nit: "",
email: "unicapazderio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pesca",
nit: "",
email: "unicapesca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Boyaca ",
nit: "",
email: "unicapuertoboyaca@supernotariado.gov.co"
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
email: "unicasaboya@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Luis de Gaceno ",
nit: "",
email: "unicasanluisdegaceno@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Rosa de Viterbo ",
nit: "",
email: "unicasantarosadeviterbo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sativanorte",
nit: "",
email: "unicasativanorte@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Soata",
nit: "",
email: "unicasoata@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Socha",
nit: "",
email: "unicasocha@supernotariado.gov.co"
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
email: "unicasomondoco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sotaquira",
nit: "",
email: "unicasotaquira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tenza",
nit: "",
email: "unicatenza@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tinjaca",
nit: "",
email: "unicatinjaca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Toca",
nit: "",
email: "unicatoca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Turmeque",
nit: "",
email: "unicaturmeque@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Umbita",
nit: "",
email: "unicaumbita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ventaquemada",
nit: "",
email: "unicaventaquemada@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Zetaquira",
nit: "",
email: "unicazetaquira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Agua de Dios",
nit: "",
email: "unicaaguadedios@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Anapoima",
nit: "",
email: "unicaanapoima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Anolaima",
nit: "",
email: "unicaanolaima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bojaca",
nit: "",
email: "unicabojaca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cajica",
nit: "",
email: "unicacajica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caparrapi",
nit: "",
email: "unicacaparrapi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caqueza",
nit: "",
email: "unicacaqueza@supernotariado.gov.co"
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
email: "unicachipaque@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Choconta",
nit: "",
email: "unicachoconta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cota",
nit: "",
email: "unicacota@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Colegio ",
nit: "",
email: "unicaelcolegio@supernotariado.gov.co"
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
email: "unicafomeque@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Funza",
nit: "",
email: "unicafunza@supernotariado.gov.co"
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
email: "unicagachala@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Gacheta",
nit: "",
email: "unicagacheta@supernotariado.gov.co"
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
email: "unicaguaduas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guatavita",
nit: "",
email: "unicaguatavita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Junin",
nit: "",
email: "unicajunin@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Calera ",
nit: "",
email: "unicalacalera@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Mesa ",
nit: "",
email: "unicalamesa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Palma ",
nit: "",
email: "unicalapalma@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Vega Cundinamarca",
nit: "",
email: "unicalavegacundinamarca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Macheta",
nit: "",
email: "unicamacheta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Madrid",
nit: "",
email: "unicamadrid@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Manta",
nit: "",
email: "unicamanta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Medina",
nit: "",
email: "unicamedina@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mosquera",
nit: "",
email: "unicamosquera@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Nemocon",
nit: "",
email: "unicanemocon@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Nocaima",
nit: "",
email: "unicanocaima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pacho",
nit: "",
email: "unicapacho@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Paime",
nit: "",
email: "unicapaime@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pandi",
nit: "",
email: "unicapandi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Salgar ",
nit: "",
email: "unicapuertosalgar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Francisco ",
nit: "",
email: "unicasanfrancisco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Juan de Rio Seco",
nit: "",
email: "unicasanjuanderio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sasaima",
nit: "",
email: "unicasasaima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sesquile",
nit: "",
email: "unicasesquile@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Silvania",
nit: "",
email: "unicasilvania@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Simijaca",
nit: "",
email: "unicasimijaca@supernotariado.gov.co"
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
email: "unicasubachoque@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tabio",
nit: "",
email: "unicatabio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tenjo",
nit: "",
email: "unicatenjo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tocaima",
nit: "",
email: "unicatocaima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tocancipa",
nit: "",
email: "unicaetocancipa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ubala",
nit: "",
email: "unicaubala@supernotariado.gov.co"
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
email: "unicaune@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Utica",
nit: "",
email: "unicautica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villa Pinzon ",
nit: "",
email: "unicavillapinzon@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villeta",
nit: "",
email: "unicavilleta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Viota",
nit: "",
email: "unicaviota@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Yacopi",
nit: "",
email: "unicayacopi@supernotariado.gov.co"
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
email: "unicaacevedohuila@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Agrado",
nit: "",
email: "unicaagrado@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Aipe",
nit: "",
email: "unicaaipe@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Algeciras",
nit: "",
email: "unicaalgeciras@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Baraya",
nit: "",
email: "unicabaraya@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Campoalegre",
nit: "",
email: "unicacampoalegre@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Colombia",
nit: "",
email: "unicacolombia@supernotariado.gov.co"
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
email: "unicagigante@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guadalupe Huila ",
nit: "",
email: "unicaguadalupehuila@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Plata ",
nit: "",
email: "unicalaplata@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Palermo",
nit: "",
email: "unicapalermo@supernotariado.gov.co"
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
email: "unicasanagustin@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tesalia",
nit: "",
email: "unicatesalia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Timana",
nit: "",
email: "unicatimana@supernotariado.gov.co"
},
{
nombre: "Notaría Única de yaguara",
nit: "",
email: "unicayaguara@supernotariado.gov.co"
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
email: "unicaabrego@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Arboledas",
nit: "",
email: "unicaarboledas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bucarasica",
nit: "",
email: "unicabucarasica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cachira",
nit: "",
email: "unicacachira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chinacota",
nit: "",
email: "unicachinacota@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Convencion",
nit: "",
email: "unicaconvencion@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cucutilla",
nit: "",
email: "unicacucutilla@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Durania",
nit: "",
email: "unicadurania@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Carmen Norte de Santander",
nit: "",
email: "unicaelcarmennortede@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Tarra ",
nit: "",
email: "unicaeltarra@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Zulia ",
nit: "",
email: "unicaelzulia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Gramalote",
nit: "",
email: "unicagramalote@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Hacari",
nit: "",
email: "unicahacari@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Los Patios ",
nit: "",
email: "unicalospatios@supernotariado.gov.co"
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
nombre: "Notaría Única de Puerto Santander",
nit: "",
email: "unicapuertosantander@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Salazar de Las Palmas ",
nit: "",
email: "unicasalazardelaspalmas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Calixto ",
nit: "",
email: "unicasancalixto@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sardinata",
nit: "",
email: "unicasardinata@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Teorama",
nit: "",
email: "unicateorama@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tibu",
nit: "",
email: "unicatibu@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Toledo",
nit: "",
email: "unicatoledo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villacaro",
nit: "",
email: "unicavillacaro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villa del Rosario",
nit: "",
email: "unicavilladelrosario@supernotariado.gov.co"
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
email: "unicabarbosasantander@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Barichara",
nit: "",
email: "unicabarichara@supernotariado.gov.co"
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
email: "unicabolivarsantander@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Charala",
nit: "",
email: "unicacharala@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cimitarra",
nit: "",
email: "unicacimitarra@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Concepcion",
nit: "",
email: "unicaconcepcion@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Contratacion",
nit: "",
email: "unicacontratacion@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Carmen Santander",
nit: "",
email: "unicaelcarmensantander@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Playon ",
nit: "",
email: "unicaelplayon@supernotariado.gov.co"
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
email: "unicagalan@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Gambita",
nit: "",
email: "unicagambita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Giron",
nit: "",
email: "unicagiron@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guaca",
nit: "",
email: "unicaguaca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guadalupe Santander ",
nit: "",
email: "unicaguadalupesantander@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Jesus Maria ",
nit: "",
email: "unicajesusmaria@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Lebrija",
nit: "",
email: "unicalebrija@supernotariado.gov.co"
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
email: "unicamatanza@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mogotes",
nit: "",
email: "unicamogotes@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Oiba",
nit: "",
email: "unicaoiba@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Onzaga",
nit: "",
email: "unicaonzaga@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Piedecuesta",
nit: "",
email: "unicapiedecuesta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puente Nacional ",
nit: "",
email: "unicapuentenacional@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Wilches ",
nit: "",
email: "unicapuertowilches@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Rionegro",
nit: "",
email: "unicarionegro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sabana de Torres",
nit: "",
email: "unicasabanadetorres@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Andres Santander",
nit: "",
email: "unicasanandressantander@supernotariado.gov.co"
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
email: "unicasanvicentedechucuri@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Simacota",
nit: "",
email: "unicasimacota@supernotariado.gov.co"
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
email: "unicasuaita@supernotariado.gov.co"
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
email: "unicazapatoca@supernotariado.gov.co"
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
email: "unicaambalema@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Armero",
nit: "",
email: "unicaarmero@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ataco",
nit: "",
email: "unicaataco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cajamarca",
nit: "",
email: "unicacajamarca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chaparral",
nit: "",
email: "unicachaparral@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Coyaima",
nit: "",
email: "unicacoyaima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cunday",
nit: "",
email: "unicacunday@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Dolores",
nit: "",
email: "unicadolores@supernotariado.gov.co"
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
email: "unicaflandes@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Fresno",
nit: "",
email: "unicafresno@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Guamo Tolima",
nit: "",
email: "unicaelguamotolima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Herveo",
nit: "",
email: "unicaherveo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Honda",
nit: "",
email: "unicahonda@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Lerida",
nit: "",
email: "unicalerida@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Libano",
nit: "",
email: "unicalibano@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mariquita",
nit: "",
email: "unicamariquita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Melgar",
nit: "",
email: "unicamelgar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Natagaima",
nit: "",
email: "unicanatagaima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ortega",
nit: "",
email: "unicaortega@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Planadas",
nit: "",
email: "unicaplanadas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Purificacion",
nit: "",
email: "unicapurificacion@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Rioblanco",
nit: "",
email: "unicarioblanco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Rovira",
nit: "",
email: "unicarovira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Saldaña",
nit: "",
email: "unicasaldaña@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Antonio",
nit: "",
email: "unicasanantonio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Luis",
nit: "",
email: "unicasanluis@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Venadillo",
nit: "",
email: "unicavenadillo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villahermosa",
nit: "",
email: "unicavillahermosa@supernotariado.gov.co"
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
email: "unicaabejorral@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Amaga",
nit: "",
email: "unicaamaga@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Amalfi",
nit: "",
email: "unicaamalfi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Andes",
nit: "",
email: "unicaandes@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Angostura",
nit: "",
email: "unicaangostura@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Anori",
nit: "",
email: "unicaanori@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santafe de Antioquia",
nit: "",
email: "unicasantafedeantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Apartado",
nit: "",
email: "unicaapartado@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Arboletes",
nit: "",
email: "unicaarboletes@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Argelia Antioquia",
nit: "",
email: "unicaargeliaantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Armenia",
nit: "",
email: "unicaarmenia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Barbosa Antioquia",
nit: "",
email: "unicabarbosaantioquia@supernotariado.gov.co"
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
email: "unicabetania@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Betulia",
nit: "",
email: "unicabetulia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bolivar Antioquia",
nit: "",
email: "unicabolivarantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Briceño",
nit: "",
email: "unicabriceno@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Buritica",
nit: "",
email: "unicaburitica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caceres",
nit: "",
email: "unicacaceres@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caldas",
nit: "",
email: "unicacaldas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cañasgordas",
nit: "",
email: "unicacanasgordas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caramanta",
nit: "",
email: "unicacaramanta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Carepa",
nit: "",
email: "unicacarepa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Carmen de Viboral",
nit: "",
email: "unicacarmendeviboral@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Carolina",
nit: "",
email: "unicacarolina@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caucasia",
nit: "",
email: "unicacaucasia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chigorodo",
nit: "",
email: "unicachigorodo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cisneros",
nit: "",
email: "unicacisneros@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cocorna",
nit: "",
email: "unicacocorna@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Concordia",
nit: "",
email: "unicaconcordia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Copacabana",
nit: "",
email: "unicacopacabana@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Dabeiba",
nit: "",
email: "unicadabeiba@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Don Matias",
nit: "",
email: "unicadonmatias@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ebejico",
nit: "",
email: "unicaebejico@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Bagre",
nit: "",
email: "unicaelbagre@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Entrerrios",
nit: "",
email: "unicaentrerrios@supernotariado.gov.co"
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
email: "unicafredonia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Frontino",
nit: "",
email: "unicafrontino@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Girardota",
nit: "",
email: "unicagirardota@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Gomez Plata",
nit: "",
email: "unicagomezplata@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Granada Antioquia",
nit: "",
email: "unicagranadaantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guarne",
nit: "",
email: "unicaguarne@supernotariado.gov.co"
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
email: "unicaituango@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Jardin",
nit: "",
email: "unicajardin@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Jerico",
nit: "",
email: "unicajerico@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Ceja",
nit: "",
email: "unicalaceja@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Estrella",
nit: "",
email: "unicalaestrella@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Union Antioquia",
nit: "",
email: "unicalaunionantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Liborina",
nit: "",
email: "unicaliborina@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Maceo",
nit: "",
email: "unicamaceo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Marinilla",
nit: "",
email: "unicamarinilla@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Nariño",
nit: "",
email: "unicanarino@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Necocli",
nit: "",
email: "unicanecocli@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Nechi",
nit: "",
email: "unicanechi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Peñol",
nit: "",
email: "unicaelpenol@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pueblo Rico Antioquia",
nit: "",
email: "unicapuebloricoantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Berrio",
nit: "",
email: "unicapuertoberrio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Nare",
nit: "",
email: "unicapuertonare@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Triunfo",
nit: "",
email: "unicapuertotriunfo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Remedios",
nit: "",
email: "unicaremedios@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Retiro",
nit: "",
email: "unicaelretiro@supernotariado.gov.co"
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
email: "unicasabaneta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Salgar",
nit: "",
email: "unicasalgar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Andres Antioquia",
nit: "",
email: "unicasanandresantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Carlos Antioquia",
nit: "",
email: "unicasancarlosantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Jeronimo",
nit: "",
email: "unicasanjeronimo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Juan de Uraba ",
nit: "",
email: "unicasanjuandeuraba@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Pedro de Belmira ",
nit: "",
email: "unicasanpedrodebelmira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Pedro de Uraba ",
nit: "",
email: "unicasanpedrodeuraba@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Rafael",
nit: "",
email: "unicasanrafael@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Roque",
nit: "",
email: "unicasanroque@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Vicente",
nit: "",
email: "unicasanvicente@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Barbara",
nit: "",
email: "unicasantabarbara@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Rosa de Osos ",
nit: "",
email: "unicasantarosadeosos@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santo Domingo",
nit: "",
email: "unicasantodomingo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santuario Antioquia",
nit: "",
email: "unicasantuarioantioquia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Segovia",
nit: "",
email: "unicasegovia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sonson",
nit: "",
email: "unicasonson@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sopetran",
nit: "",
email: "unicasopetran@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tamesis",
nit: "",
email: "unicatamesis@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Taraza",
nit: "",
email: "unicataraza@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tarso",
nit: "",
email: "unicatarso@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Titiribi",
nit: "",
email: "unicatitiribi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Turbo",
nit: "",
email: "unicaturbo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Urrao",
nit: "",
email: "unicaurrao@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Valdivia",
nit: "",
email: "unicavaldivia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Valparaiso",
nit: "",
email: "unicavalparaiso@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Vegachi",
nit: "",
email: "unicavegachi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Venecia",
nit: "",
email: "unicavenecia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Yali",
nit: "",
email: "unicayali@supernotariado.gov.co"
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
email: "unicayolombo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Zaragoza",
nit: "",
email: "unicazaragoza@supernotariado.gov.co"
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
email: "unicaaguadas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Anserma",
nit: "",
email: "unicaanserma@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Aranzazu",
nit: "",
email: "unicaaranzazu@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Belalcazar",
nit: "",
email: "unicabelalcazar@supernotariado.gov.co"
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
email: "unicafiladelfia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Dorada",
nit: "",
email: "unicaladorada@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Manzanares",
nit: "",
email: "unicamanzanares@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Marmato",
nit: "",
email: "unicamarmato@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Marquetalia",
nit: "",
email: "unicamarquetalia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Marulanda",
nit: "",
email: "unicamarulanda@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Neira",
nit: "",
email: "unicaneira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pacora",
nit: "",
email: "unicapacora@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Palestina",
nit: "",
email: "unicapalestina@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pensilvania",
nit: "",
email: "unicapensilvania@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Riosucio",
nit: "",
email: "unicariosucio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Risaralda",
nit: "",
email: "unicarisaralda@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Salamina Caldas",
nit: "",
email: "unicasalaminacaldas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Samana",
nit: "",
email: "unicasamana@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Supia",
nit: "",
email: "unicasupia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Victoria Caldas",
nit: "",
email: "unicalavictoriacaldas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villamaria",
nit: "",
email: "unicavillamaria@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Viterbo",
nit: "",
email: "unicaviterbo@supernotariado.gov.co"
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
email: "unicacircasia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Filandia",
nit: "",
email: "unicafilandia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Genova",
nit: "",
email: "unicagenova@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Tebaida",
nit: "",
email: "unicalatebaida@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Montenegro",
nit: "",
email: "unicamontenegro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pijao",
nit: "",
email: "unicapijao@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Quimbaya",
nit: "",
email: "unicaquimbaya@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Salento",
nit: "",
email: "unicasalento@supernotariado.gov.co"
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
email: "unicaapia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Balboa Risaralda",
nit: "",
email: "unicabalboarisaralda@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Belen de Umbria",
nit: "",
email: "unicabelendeumbria@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Dosquebradas",
nit: "",
email: "unicadosquebradas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guatica",
nit: "",
email: "unicaguatica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Celia",
nit: "",
email: "unicalacelia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Virginia",
nit: "",
email: "unicalavirginia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Marsella",
nit: "",
email: "unicamarsella@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mistrato",
nit: "",
email: "unicamistrato@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pueblo Rico Risaralda",
nit: "",
email: "unicapuebloricorisaralda@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Quinchia",
nit: "",
email: "unicaquinchia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Rosa de Cabal ",
nit: "",
email: "unicasantarosadecabal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Santuario Risaralda",
nit: "",
email: "unicaelsantuariorisaralda@supernotariado.gov.co"
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
email: "unicaalmaguer@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Balboa",
nit: "",
email: "unicabalboa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bolivar Cauca ",
nit: "",
email: "unicabolivarcauca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Buenos Aires ",
nit: "",
email: "unicabuenosaires@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caldono",
nit: "",
email: "unicacaldono@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caloto",
nit: "",
email: "unicacaloto@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Corinto",
nit: "",
email: "unicacorinto@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Tambo Cauca",
nit: "",
email: "unicaeltambocauca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guapi",
nit: "",
email: "unicaguapi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Inza",
nit: "",
email: "unicainza@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Vega Cauca",
nit: "",
email: "unicalavegacauca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Lopez de Micay",
nit: "",
email: "unicalopezdemicay@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mercaderes",
nit: "",
email: "unicamercaderes@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Miranda",
nit: "",
email: "unicamiranda@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Morales Cauca ",
nit: "",
email: "unicamoralescauca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Patia El Bordo",
nit: "",
email: "unicapatiaelbordo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Piendamo",
nit: "",
email: "unicapiendamo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Tejada ",
nit: "",
email: "unicapuertotejada@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Rosas",
nit: "",
email: "unicarosas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Sebastian ",
nit: "",
email: "unicasansebastian@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santander de Quilichao",
nit: "",
email: "unicasantanderdequilichao@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Silvia",
nit: "",
email: "unicasilvia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Timbio",
nit: "",
email: "unicatimbio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Timbiqui",
nit: "",
email: "unicatimbiqui@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Toribio",
nit: "",
email: "unicatoribio@supernotariado.gov.co"
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
email: "unicaacandi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Alto Baudo Pie de Pato",
nit: "",
email: "unicaaltobaudopiedepato@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bahia Solano ",
nit: "",
email: "unicabahiasolano@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bajo Baudo Pizarro",
nit: "",
email: "unicabajobaudopizarro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bojaya Bellavista ",
nit: "",
email: "unicabojayabellavista@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Istmina",
nit: "",
email: "unicaistmina@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Jurado",
nit: "",
email: "unicajurado@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Lloro",
nit: "",
email: "unicalloro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Novita",
nit: "",
email: "unicanovita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Nuqui",
nit: "",
email: "unicanuqui@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Jose del Palmar ",
nit: "",
email: "unicasanjosedelpalmar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sipi",
nit: "",
email: "unicasipi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tado",
nit: "",
email: "unicatado@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Unguia",
nit: "",
email: "unicaunguia@supernotariado.gov.co"
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
email: "unicasanjosedealban@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Barbacoas",
nit: "",
email: "unicabarbacoas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Buesaco",
nit: "",
email: "unicabuesaco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cumbal",
nit: "",
email: "unicacumbal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Charco ",
nit: "",
email: "unicaelcharco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Tambo Nariño",
nit: "",
email: "unicaeltambonarino@supernotariado.gov.co"
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
email: "unicalacruz@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Union Nariño",
nit: "",
email: "unicalaunionnarino@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Linares",
nit: "",
email: "unicalinares@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Los Andes ",
nit: "",
email: "unicalosandes@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerres",
nit: "",
email: "unicapuerres@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ricaurte",
nit: "",
email: "unicaricaurte@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Samaniego",
nit: "",
email: "unicasamaniego@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sandona",
nit: "",
email: "unicasandona@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Taminango",
nit: "",
email: "unicataminango@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tumaco",
nit: "",
email: "unicatumaco@supernotariado.gov.co"
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
email: "unicasanpablo@supernotariado.gov.co"
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
nombre: "Notaría Veintiun de Cali",
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
email: "unicaalcala@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Andalucia",
nit: "",
email: "unicaandalucia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Anserma Nuevo ",
nit: "",
email: "unicaansermanuevo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Argelia Valle ",
nit: "",
email: "unicaargeliavalle@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bolivar Valle ",
nit: "",
email: "unicabolivarvalle@supernotariado.gov.co"
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
email: "unicabugalagrande@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Caicedonia",
nit: "",
email: "unicacaicedonia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Calima El Darien",
nit: "",
email: "unicacalimaeldarien@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Candelaria",
nit: "",
email: "unicacandelaria@supernotariado.gov.co"
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
email: "unicadagua@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Aguila ",
nit: "",
email: "unicaelaguila@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Cairo ",
nit: "",
email: "unicaelcairo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Cerrito ",
nit: "",
email: "unicaelcerrito@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Dovio ",
nit: "",
email: "unicaeldovio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Florida",
nit: "",
email: "unicaflorida@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ginebra",
nit: "",
email: "unicaginebra@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guacari",
nit: "",
email: "unicaguacari@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Jamundi",
nit: "",
email: "unicajamundi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Cumbre ",
nit: "",
email: "unicalacumbre@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Union Valle",
nit: "",
email: "unicalaunionvalle@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Victoria Valle",
nit: "",
email: "unicalavictoriavalle@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Obando",
nit: "",
email: "unicaobando@supernotariado.gov.co"
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
email: "unicapradera@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Restrepo",
nit: "",
email: "unicarestrepo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Rio Frio ",
nit: "",
email: "unicariofrio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Roldanillo",
nit: "",
email: "unicaroldanillo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Pedro Valle",
nit: "",
email: "unicasanpedrovalle@supernotariado.gov.co"
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
email: "unicatoro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Trujillo",
nit: "",
email: "unicatrujillo@supernotariado.gov.co"
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
email: "unicaulloa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Versalles",
nit: "",
email: "unicaversalles@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Vijes",
nit: "",
email: "unicavijes@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Yotoco",
nit: "",
email: "unicayotoco@supernotariado.gov.co"
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
email: "unicazarzal@supernotariado.gov.co"
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
email: "unicabaranoa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Campo de la Cruz ",
nit: "",
email: "unicacampodelacruz@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Galapa",
nit: "",
email: "unicagalapa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Juan de Acosta",
nit: "",
email: "unicajuandeacosta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Luruaco",
nit: "",
email: "unicaluruaco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Malambo",
nit: "",
email: "unicamalambo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Manati",
nit: "",
email: "unicamanati@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ponedera",
nit: "",
email: "unicaponedera@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Colombia ",
nit: "",
email: "unicapuertocolombia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Repelon",
nit: "",
email: "unicarepelon@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sabanalarga",
nit: "",
email: "unicasabanalarga@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santo Tomas ",
nit: "",
email: "unicasantotomas@supernotariado.gov.co"
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
email: "unicaachi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Arjona",
nit: "",
email: "unicaarjona@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Barranco de Loba",
nit: "",
email: "unicabarrancodeloba@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Calamar",
nit: "",
email: "unicacalamar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cordoba",
nit: "",
email: "unicacordoba@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Carmen de Bolivar",
nit: "",
email: "unicacarmendebolivar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Guamo Bolivar",
nit: "",
email: "unicaelguamobolivar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Magangue",
nit: "",
email: "unicamagangue@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mahates",
nit: "",
email: "unicamahates@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Maria La Baja",
nit: "",
email: "unicamarialabaja@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mompos",
nit: "",
email: "unicamompos@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Morales Bolvar ",
nit: "",
email: "unicamoralesbolvar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pinillos",
nit: "",
email: "unicapinillos@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Rio Viejo ",
nit: "",
email: "unicarioviejo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Estanislao ",
nit: "",
email: "unicasanestanislao@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Jacinto ",
nit: "",
email: "unicasanjacinto@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Juan Nepomuceno",
nit: "",
email: "unicasanjuannepomuceno@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Martin de Loba ",
nit: "",
email: "unicasanmartindeloba@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Pablo Bolivar",
nit: "",
email: "unicasanpablobolivar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Catalina ",
nit: "",
email: "unicasantacatalina@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Rosa del Sur ",
nit: "",
email: "unicasantarosadelsur@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Simiti",
nit: "",
email: "unicasimiti@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Talaigua Nuevo ",
nit: "",
email: "unicatalaiguanuevo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Turbaco",
nit: "",
email: "unicaturbaco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Zambrano",
nit: "",
email: "unicazambrano@supernotariado.gov.co"
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
email: "unicaaguachica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Codazzi",
nit: "",
email: "unicacodazzi@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Astrea",
nit: "",
email: "unicaastrea@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Becerril",
nit: "",
email: "unicabecerril@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Bosconia",
nit: "",
email: "unicabosconia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chimichagua",
nit: "",
email: "unicachimichagua@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chiriguana",
nit: "",
email: "unicachiriguana@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Curumani",
nit: "",
email: "unicacurumani@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Copey ",
nit: "",
email: "unicaelcopey@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Paso ",
nit: "",
email: "unicaelpaso@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Gamarra",
nit: "",
email: "unicagamarra@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Gonzalez",
nit: "",
email: "unicagonzalez@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Gloria ",
nit: "",
email: "unicalagloria@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Jagua de Ibirico ",
nit: "",
email: "unicalajaguadeibirico@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pailitas",
nit: "",
email: "unicapailitas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pueblo Bello ",
nit: "",
email: "unicapueblobello@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Rio de Oro",
nit: "",
email: "unicariodeoro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Paz Robles",
nit: "",
email: "unicalapazrobles@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Alberto ",
nit: "",
email: "unicasanalberto@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Diego ",
nit: "",
email: "unicasandiego@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tamalameque",
nit: "",
email: "unicatamalameque@supernotariado.gov.co"
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
email: "unicaayapel@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Buenavista",
nit: "",
email: "unicabuenavista@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cerete",
nit: "",
email: "unicacerete@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chinu",
nit: "",
email: "unicachinu@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cienaga de Oro",
nit: "",
email: "unicacienagadeoro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Lorica",
nit: "",
email: "unicalorica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Montelibano",
nit: "",
email: "unicamontelibano@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Planeta Rica ",
nit: "",
email: "unicaplanetarica@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pueblo Nuevo ",
nit: "",
email: "unicapueblonuevo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Libertador ",
nit: "",
email: "unicapuertolibertador@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Purisima",
nit: "",
email: "unicapurisima@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sahagun",
nit: "",
email: "unicasahagun@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Andres de Sotavento ",
nit: "",
email: "unicasanandresdesotavento@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Antero ",
nit: "",
email: "unicasanantero@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Bernardo del Viento",
nit: "",
email: "unicasanbernardodelviento@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Carlos ",
nit: "",
email: "unicasancarlos@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Jose de Ure ",
nit: "",
email: "unicasanjosedeure@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Pelayo ",
nit: "",
email: "unicasanpelayo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tierralta",
nit: "",
email: "unicatierralta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Valencia",
nit: "",
email: "unicavalencia@supernotariado.gov.co"
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
email: "unicabarrancas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Fonseca",
nit: "",
email: "unicafonseca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Maicao",
nit: "",
email: "unicamaicao@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Juan del Cesar ",
nit: "",
email: "unicasanjuandelcesar@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Uribia",
nit: "",
email: "unicauribia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villanueva Guajira ",
nit: "",
email: "unicavillanuevaguajira@supernotariado.gov.co"
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
email: "unicaalgarrobo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Aracataca",
nit: "",
email: "unicaaracataca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ariguani",
nit: "",
email: "unicaariguani@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cerro de San Antonio ",
nit: "",
email: "unicacerrodesanantonio@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Chivolo",
nit: "",
email: "unicachivolo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cienaga",
nit: "",
email: "unicacienaga@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Banco ",
nit: "",
email: "unicaelbanco@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Piñon Magdalena",
nit: "",
email: "unicaelpinonmagdalena@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Fundacion",
nit: "",
email: "unicafundacion@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guamal",
nit: "",
email: "unicaguamal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pedraza",
nit: "",
email: "unicapedraza@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Pivijay",
nit: "",
email: "unicapivijay@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Plato",
nit: "",
email: "unicaplato@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Remolino",
nit: "",
email: "unicaremolino@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sabanas de San Angel ",
nit: "",
email: "unicasabanasdesanangel@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Salamina Magdalena ",
nit: "",
email: "unicasalaminamagdalena@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Sebastian de Buenavista ",
nit: "",
email: "unicasansebastiandebuenavista@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Zenon ",
nit: "",
email: "unicasanzenon@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Ana ",
nit: "",
email: "unicasantaana@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sitio Nuevo ",
nit: "",
email: "unicasitionuevo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tenerife",
nit: "",
email: "unicatenerife@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Zona Bananera ",
nit: "",
email: "unicazonabananera@supernotariado.gov.co"
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
email: "unicacaimito@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Coloso",
nit: "",
email: "unicacoloso@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Corozal",
nit: "",
email: "unicacorozal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Galeras",
nit: "",
email: "unicagaleras@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Guaranda",
nit: "",
email: "unicaguaranda@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Los Palmitos ",
nit: "",
email: "unicalospalmitos@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Majagual",
nit: "",
email: "unicamajagual@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Ovejas",
nit: "",
email: "unicaovejas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Palmito",
nit: "",
email: "unicapalmito@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sampues",
nit: "",
email: "unicasampues@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Benito Abad",
nit: "",
email: "unicasanbenitoabad@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Marcos ",
nit: "",
email: "unicasanmarcos@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Onofre ",
nit: "",
email: "unicasanonofre@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Pedro ",
nit: "",
email: "unicasanpedro@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Since",
nit: "",
email: "unicasince@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Sucre",
nit: "",
email: "unicasucre@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tolu",
nit: "",
email: "unicatolu@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tolu Viejo",
nit: "",
email: "unicatoluviejo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Andres Islas",
nit: "",
email: "unicasanandresislas@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Providencia",
nit: "",
email: "unicaprovidencia@supernotariado.gov.co"
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
email: "unicabelendelosandaquies@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cartagena del Chaira ",
nit: "",
email: "unicacartagenadelchaira@supernotariado.gov.co"
},
{
nombre: "Notaría Única de El Doncello",
nit: "",
email: "unicaeldoncello@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Montañita",
nit: "",
email: "unicalamontanita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Rico Caqueta ",
nit: "",
email: "unicapuertoricocaqueta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Vicente del Caguan",
nit: "",
email: "unicasanvicentedelcaguan@supernotariado.gov.co"
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
email: "unicaacacias@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Granada Meta",
nit: "",
email: "unicagranadameta@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Macarena",
nit: "",
email: "unicalamacarena@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Uribe Uribe",
nit: "",
email: "unicauribeuribe@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Gaitan",
nit: "",
email: "unicapuertogaitan@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Lopez",
nit: "",
email: "unicapuertolopez@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Rico Rico ",
nit: "",
email: "unicapuertoricorico@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Juan de Arama",
nit: "",
email: "unicasanjuandearama@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Martin",
nit: "",
email: "unicasanmartin@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Vistahermosa ",
nit: "",
email: "unicavistahermosa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Arauca ",
nit: "",
email: "unicaarauca@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Arauquita ",
nit: "",
email: "unicaarauquita@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cravo Norte",
nit: "",
email: "unicacravonorte@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Fortul ",
nit: "",
email: "unicafortul@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Rondon",
nit: "",
email: "unicapuertorondon@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Saravena ",
nit: "",
email: "unicasaravena@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tame ",
nit: "",
email: "unicatame@supernotariado.gov.co"
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
email: "unicaaguazul@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Hato Corozal",
nit: "",
email: "unicahatocorozal@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Monterrey ",
nit: "",
email: "unicamonterrey@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Nunchia ",
nit: "",
email: "unicanunchia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Orocue ",
nit: "",
email: "unicaorocue@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Paz de Ariporo ",
nit: "",
email: "unicapazdeariporo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Tauramena ",
nit: "",
email: "unicatauramena@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villanueva Casanare",
nit: "",
email: "unicavillanuevacasanare@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mocoa ",
nit: "",
email: "unicamocoa@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Orito ",
nit: "",
email: "unicaorito@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Asis",
nit: "",
email: "unicapuertoasis@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Leguizamo",
nit: "",
email: "unicapuertoleguizamo@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Miguel",
nit: "",
email: "unicasanmiguel@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santiago ",
nit: "",
email: "unicasantiago@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Valle del Guamez ",
nit: "",
email: "unicavalledelguamez@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Villagarzon ",
nit: "",
email: "unicavillagarzon@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Leticia ",
nit: "",
email: "unicaleticia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Inirida Guainia ",
nit: "",
email: "unicapuertoiniridaguainia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de San Jose del Guaviare",
nit: "",
email: "unicasanjosedelguaviare@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Mitu ",
nit: "",
email: "unicamitu@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Puerto Carreño",
nit: "",
email: "unicapuertocarreno@supernotariado.gov.co"
},
{
nombre: "Notaría Única de La Primavera",
nit: "",
email: "unicalaprimavera@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Santa Rosalia",
nit: "",
email: "unicasantarosalia@supernotariado.gov.co"
},
{
nombre: "Notaría Única de Cumaribo ",
nit: "",
email: "unicacumaribo@supernotariado.gov.co"
},
// Oficinas de Registro de Instrumentos Públicos - ORIP
{
    nombre:"Oficina de Registro de Instrumentos Públicos de Riohacha, La Guajira",
    nit:"",
    email:"ofiregisriohacha@supernotariado.gov.co"
},
{
    nombre:"Oficina de Registro de Instrumentos Públicos de San Juan del Cesar, La Guajira",
    nit:"",
    email:"ofiregissanjuandelcesar@supernotariado.gov.co"
},
// Instituciones Educativas
{
nombre: "Institución Etnoeducativa Monte Alvernia",
nit: "",
email: "montealvernia1968@yahoo.es"
},
{
    nombre:"Universidad Nacional de Colombia",
    nit:"",
    email:""
},
{
    nombre:"Universidad Libre de Colombia",
    nit:"",
    email:""
},
{
nombre:"Universidad del Norte",
nit:"",
email:""
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
nit: "901.380.930-2",
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
// Empresas Proveedoras de Gas Domiciliario.
{
    nombre:"Gases de La Guajira S.A. E.S.P.",
    nit:"892.115.036-6",
    email:"gasguajira@gasguajira.com"
},
// Empresas de Telecomunicaciones | Telefonía Móvil
{
nombre:"ComNotaría Única deción Celular S.A. Comcel S.A. - CLARO",
nit:"800.153.993-7",
email:"notificacionesclaro@claro.com.co"
},
{
    nombre: "EMPRESA DE TELECOMUNICACIONES DE BOGOTÁ S.A. E.S.P - ETB",
    nit:"899.999.115-8",
    email:"quejas_call_digitex@etb.com.co"
},
// Otro Tipo de Empresas.
{
nombre:"Su Personal Ya S.A.S.",
nit:"901.203.439-1",
email:"coordinadorgeneral@supersonalya.com.co"
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
"Distracción, La Guajira",
"Medellín, Antioquia",
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