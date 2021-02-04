
const { CalendarDay, Decimal, Relationship, Text, Virtual } = require('@keystonejs/fields');

module.exports = {
	fields:{
		fechaInicio:{label:'Inicio de Recolección de Datos', type:CalendarDay, isRequired:true},
		fechaFinal:{label:'Fin de Recolección de Datos', type:CalendarDay, isRequired:true, dateTo:new Date().toISOString('YYYY-MM-DD').substring(0,10)},
		fecha:{label:'Fecha', type:CalendarDay, defaultValue:new Date().toISOString('YYYY-MM-DD').substring(0, 10)},
		indicador:{label:'Indicador', type:Relationship, ref:'Indicador.valores', isRequired:true, many:false},
		recolector:{label:'Recolector de Datos', type:Text, isRequired:true},
		entidadRecolectora:{label:'Entidad Recolectora de Datos', type:Text},
		digitador:{label:'Digitador', type:Relationship, ref:'User', isRequired:true},
		supervisor:{label:'Supervisor', type:Relationship, ref:'User', isRequired:false},
		codigoFicha:{label:'Código Ficha', type:Text, adminDoc:'Número o Código de la ficha de recolección de datos.', isRequired:false},
		nivel:{
			label:'Nivel de desagregación', 
			type:Virtual,
			resolver: item => {
				nivel = '';
				switch (item.indicador.desagregacion) {
					case 'mun':
						nivel = 'Municipio';
						break;
					case 'ter':
						nivel = 'Territorio';
						break;
					default:
						nivel = 'Comunidad';
						break;
				}
				return nivel;
			}
		},
		sexo:{label:'Sexo', type:Relationship, ref:'DetalleTabla', isRequired:false, defaultValue:null},
		etnia:{label:'Etnia', type:Relationship, ref:'DetalleTabla', isRequired:false, defaultValue:null},
		valor:{label:'Valor', type:Decimal, isRequired:true},
		estado:{label:'Estado', type:Relationship, ref:'DetalleTabla', isRequired:true},
	}
};