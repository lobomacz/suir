
const { CalendarDay, DateTime, File, Relationship, Slug, Text, Virtual } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const imgAdapter = new LocalFileAdapter({
	src:'./files/posts/img',
	path:'./files/posts/img'
});

const fileAdapter = new LocalFileAdapter({
	src:'./files/posts/doc',
	path:'./files/posts/doc'
});



module.exports = {
	fields:{
		title:{label:'Título', type:Text, isRequired:true},
		slug:{type:Slug},
		fecha:{label:'Fecha', type:CalendarDay, isRequired:true},
		//autor:{label:'Autor', type:Relationship, ref:'User', isRequired:true},
		portada:{
			label:'Imagen de Portada',
			type:File,
			adapter:imgAdapter,
			isRequired:false,
			defaultValue:null
		},
		contenido:{
			label:'Contenido',
			type:Wysiwyg,
			editorConfig:{
				height:'60vh',
				min_height: 200,
				max_height: 500,
				width: '100%',
				min_width: 400,
				plugins: 'casechange image imagetools link lists media',
				toolbar: [
					'undo redo | styleselect | bold italic underline | copy cut paste | link unlink image media',
					'casechange | fontselect fontsizeselect forecolor backcolor | superscript subscript strikethrough',
					'outdent indent | alignleft aligncenter alignright alignjustify | numlist bullist | selectall remove removeformat'
				],
				default_link_target: '_blank',
				link_assume_external_targets: true,
				link_quicklink: true,
				image_caption: true,
				file_picker_types:"image media",
			}
		},
		documento:{label:'Documento', type:File, adapter:fileAdapter, isRequired:false, defaultValue:null},
		etiquetas:{label:'Etiquetas', type:Text, isRequired:true},
		//tipo:{label:'Tipo de Publicación', type:Relationship, ref:'DetalleTabla', isRequired:true},
		//estado:{label:'Estado', type:Relationship, ref:'DetalleTabla', isRequired:true},
		//comentarios:{type:Relationship, ref:'Comentario.publicacion', many:true, defaultValue:null, isRequired:false},
		creado:{label:'Creado', type:DateTime, isRequired:true},
		publicado:{label:'Publicado', type:DateTime, isRequired:false, defaultValue:null}
	}
};