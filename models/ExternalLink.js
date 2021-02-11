
const { Checkbox, Text, Url, Virtual } = require('@keystonejs/fields');

module.exports = {
	fields: {
		texto: {label:'Texto del Enlace', type:Text, isRequired:true, isUnique:true},
		titulo: {type: Virtual, resolver: $item => $item.texto.toUpperCase()},
		url: {label:'Url', type:Url, isRequired:true, isUnique:true},
		habilitado: {label:'Habilitado', type:Checkbox, defaultValue:true},
	}
};