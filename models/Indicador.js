
const { Checkbox, File, Relationship, Slug, Select, Text } = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const imgAdapter = new LocalFileAdapter({
	src:'./files/indicators/img',
	path:'./files/indicators/img',
});

const fileAdapter = new LocalFileAdapter({
	src:'./files/indicators/doc',
	path:'./files/indicators/doc',
});

module.exports = {
	fields:{
		titulo:{label:'Título', type:Text, isRequired:true},
		slug:{
			type:Slug,
			from:'titulo',
			adminConfig:{
				isReadOnly:true
			},
			isUnique:true
		},
		descripcion:{label:'Descripción', type:Text, isMultiline:true, isRequired:true, adminDoc:'Descripción detallada del indicador y a partir de qué variables o datos se obtiene.'},
		sector:{label:'Sector de Desarrollo', type:Relationship, ref:'DetalleTabla', isRequired:true},
		formula:{label:'Fórmula', type:Text, isRequired:true, adminDoc:'Fórmula con la que se calcula el indicador. Ejemplo: (Total/Cantidad)*100'},
		metrica:{
			label:'Métrica',
			type:Select,
			options:'Creciente, Decreciente',
			isRequired:true,
		},
		tipoDeValores:{
			label:'Tipo de Valores',
			type:Select,
			options:[
				{value:'suma', label:'Sumatoria'},
				{value:'percentil', label:'Percentil'},
				{value:'promedio', label:'Promedio'},
				{value:'mediana', label:'Mediana'},
				{value:'moda', label:'Moda'},
				{value:'max', label:'Valor Más Alto'},
				{value:'min', label:'Valor Más Bajo'},
			],
			adminDoc:'El tipo de valor en que se expresa el indicador.'
		},
		periodicidad:{
			label:'Periodicidad', 
			type:Select,
			options:[
				{value:'m', label:'Mensual'},
				{value:'tm', label:'Trimestral'},
				{value:'sm', label:'Semestral'},
				{value:'a', label:'Anual'},
				{value:'ba', label:'Bi-anual'},
				{value:'ta', label:'Tri-anual'},
				{value:'qa', label:'Quinquenial'},
				{value:'d', label:'Década'}
			],
			isRequired:true,
			adminDoc:'Frecuencia con la que se recopilan los datos.'
		},
		imagen:{
			label:'Imagen Relacionada',
			type:File,
			adapter:imgAdapter,
			isRequired:true
		},
		ficha:{
			label:'Ficha del Indicador',
			type:File,
			adapter:fileAdapter,
			isRequired:false,
			defaultValue:null
		},
		tags:{label:'Etiquetas', type:Text, isRequired:false, adminDoc:'Etiquetas con las que se clasifica el indicador.'},
		entidad:{label:'Entidad de Seguimiento', type:Relationship, ref:'Entidad.indicadores', adminDoc:'Entidad del G.R.A.C.C.S. encargada del seguimiento del indicador.', many:false},
		colaboradores:{label:'Instituciones Colaboradoras', type:Relationship, ref:'Institucion.indicadores', many:true},
		responsable:{label:'Responsable', type:Relationship, ref:'User', adminDoc:'Usuario responsable de alimentar los datos del indicador.'},
		desagregacion:{
			label:'Nivel Mínimo de Desagregación', 
			type:Select,
			options:[
				{value:'mun', label:'Por Municipio'},
				{value:'ter', label:'Por Territorio'},
				{value:'com', label:'Por Comunidad'},
			],
			isRequired:true
		},
		desagregacionSexo:{label:'Desagregación por sexo', type:Checkbox, defaultValue:false},
		desagregacionEtnia:{label:'Desagregación por etnia', type:Checkbox, defaultValue:false},
		tipoValor:{
			label:'Tipo de Valor', 
			type:Select, 
			options:[
				{value:'int', label:'Entero'},
				{value:'dec', label:'Decimal'}
			],
			defaultValue:'int', 
			adminDoc:'Tipo de número para el valor del indicador', isRequired:true},
		fuente:{label:'Fuentes de Datos', type:Text, isRequired:true},
		marcoLegal:{label:'Marco Legal', type:Text, isRequired:true},
		estado:{
			label:'Estado',
			type:Relationship,
			ref:'DetalleTabla'
		},
		activo:{label:'Activo', type:Checkbox, defaultValue:true},
		seguimiento:{label:'En Seguimiento', type:Checkbox, defaultValue:true},
		valores:{label:'Valores', type:Relationship, ref:'ValorIndicador.indicador', many:true, isRequired:false, defaultValue:null},
		comentarios:{label:'Comentarios', type:Relationship, ref:'Comentario.indicador', many:true, isRequired:false, defaultValue:null},
	}
};

