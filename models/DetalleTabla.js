const { Text, Relationship, Slug } = require('@keystonejs/fields');

module.exports = {
	fields:{
		tabla:{type:Relationship, ref:'Tabla.listaDetalle', many:false},
		elemento:{type:Text, label:'Elemento', isRequired:true},
		slug:{type:Slug, from:'elemento', adminConfig:{isReadOnly:true}, isUnique:true},
		codigo_eq:{type:Text, label:'Código de Equivalencia', isRequired:false, defaultValue:null}
	}
};