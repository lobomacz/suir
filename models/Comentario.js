
const { DateTime, Relationship, Text } = require('@keystonejs/fields');

module.exports = {
	fields:{
		fecha:{type:DateTime, defaultValue: new Date(), isRequired:true},
		direccion:{type:Text, defaultValue:null, isRequired:true},
		nombre:{label:'Nombre', type:Text, isRequired:true},
		email:{label:'E-mail', type:Text, isRequired:true},
		comentario:{label:'Comentario', type:Text, isRequired:true, isMultiline:true},
		publicacion:{type:Relationship, ref:'Publicacion.comentarios', isRequired:false, defaultValue:null, many:false},
		indicador:{type:Relationship, ref:'Indicador.comentarios', isRequired:false, defaultValue:null, many:false},
	}
};