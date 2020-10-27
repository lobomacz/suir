const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
	fields:{
		tabla:{type:Relationship, ref:'Tabla.listaDetalle', isRequired:true},
		elemento:{type:Text, label:'Elemento', isRequired:true},
		codigo_eq:{type:Text, label:'Código de Equivalencia', isRequired:false, defaultValue:null}
	}
};