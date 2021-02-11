
const { Text, Checkbox, Select, Relationship, Virtual } = require('@keystonejs/fields');

module.exports = {
	fields:{
		nombre:{label:'Nombre', type:Text, isRequired:true},
		apellido:{label:'Apellido', type:Text, isRequired:true},
		nombreCompleto:{
			type:Virtual,
			resolver:item => `${item.nombre} ${item.apellido}`
		},
		movil:{label:'Móvil', type:Text, isRequired:true},
		correo:{label:'Correo-e', type:Text, defaultValue:null},
		institucion:{label:'Institución', type:Relationship, ref:'Institucion.contactos', isRequired:true, many:false},
		cargo:{
			label:'Cargo', 
			type:Relationship,
			ref:'DetalleTabla',
			isRequired:true
		},
	}
};