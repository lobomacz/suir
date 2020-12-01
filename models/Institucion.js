
const { Text, Url, Relationship, Slug  } = require('@keystonejs/fields');

module.exports = {
	fields:{
		title:{label:'Nombre', type:Text, isRequired:true},
		slug:{type:Slug, isUnique:true},
		siglas:{label:'Siglas', type:Text, isRequired:true},
		url:{label:'Sitio web', type:Url, defaultValue:null},
		//sector:{label:'Sector Social', type:Relationship, ref:'DetalleTabla', isRequired:true},
		//contacto:{label:'Contacto', type:Relationship, ref:'Contacto.institucion', isRequired:true},
		telefono:{label:'Teléfono', type:Text, defaultValue:null},
		//indicadores:{label:'Indicadores', type:Relationship, ref:'Indicador.colaboradores', many:true, isRequired:true}
	}
};