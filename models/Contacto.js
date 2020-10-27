
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
		institucion:{label:'Institución', type:Relationship, ref:'Institucion.contacto', isRequired:true},
		cargo:{
			label:'Cargo', 
			type:Select,
			options:'Delegado,Alcalde,Director,Administrador,Gerente,Jefe,Técnico,Responsable',
			isRequired:true
		},
	}
};