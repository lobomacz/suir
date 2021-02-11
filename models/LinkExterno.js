
const { Text, Url } = require('@keystonejs/fields');

module.exports = {
	fields:{
		titulo:{label:'Título', type:Text, isRequired:true},
		url:{label:'Url', type:Url, isRequired:true},
		descripcion:{label:'Descripción', type:Text, isRequired:true}
	}
};