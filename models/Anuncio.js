const { Checkbox, File, Text, Url } = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');

imgAdapter = new LocalFileAdapter({
	src: './files/ads',
	path: './files/ads',
});

module.exports = {
	fields: {
		titulo: { label: 'Título', type: Text },
		imagen: { label: 'Imagen', type: File, adapter: imgAdapter, isRequired: true },
		url: { label: 'Url', type: Url, isRequired: true },
		activo: { label: 'Activo', type: Checkbox, defaultValue: false }
	}
};