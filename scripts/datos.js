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
    email:""
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
    email: "unicabarrancas@supernotariado.gov.co"
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
  // Empresas de Telecomunicaciones | Telefonía Móvil
  {
    nombre:"Comunicación Celular S.A. Comcel S.A. - CLARO",
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