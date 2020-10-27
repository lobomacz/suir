const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
	fields:{
		tabla:{
			type:Text,
			isRequired:true,
			isUnique:true
		},
		listaDetalle:{
			type:Relationship,
			ref:'DetalleTabla.tabla',
			many:true
		}
	}
};
