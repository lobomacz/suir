
const { Checkbox, Relationship, Select, Slug, Text } = require('@keystonejs/fields');

module.exports = {
	fields:{
		title:{label:'Nombre', type:Text, isRequired:true},
		slug:{type:Slug, isUnique:true},
		sector:{label:'Sector Social', type:Relationship, ref:'DetalleTabla', isRequired:true},
		//director:{label:'Director', type:Relationship, ref:'User', isRequired:true},
		indicadores:{label:'Indicadores', type:Relationship, ref:'Indicador.entidad', many:true},
		nivel:{
			label:'Nivel',
			type:Select,
			options:['secretaria','comision','direccion','oficina'],
			isRequired:true
		},
		esEnlace:{label:'Es Enlace', type:Checkbox, defaultValue:false}
	}
};