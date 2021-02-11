<template>
	
	<div>
		<b-container v-if="anuncios" class="anuncio-container d-none d-md-block">
			<b-row>
				<b-col cols="8" class="mx-auto">
					<a class="anuncio-link" href="anuncios[0].url" target="_blank">
							<b-img
						v-bind:src="anuncios[0].imagen"
						v-bind:title="anuncios[0].titulo"
						center
						fluid
						rounded
						class="anuncio-img"
						></b-img>
					</a>
				</b-col>
			</b-row>
		</b-container>

		<!--
		<div v-for="anuncio in anuncios" class="anuncio-container d-block d-md-none">
			<a class="anuncio-link" href="anuncio.url" target="_blank">
					<b-img
				v-bind:src="anuncio.imagen"
				v-bind:title="anuncio.titulo"
				center
				fluid
				rounded
				class="anuncio-img"
				></b-img>
			</a>
		</div>
		-->
		
		<section id="seccionNoticias" class="seccion-publicacion">
			<ListaPublicaciones 
			v-bind:publicaciones="noticias" 
			/>
		</section>

		<b-container v-if="anuncios && anuncios.length > 1" class="anuncio-container d-none d-md-block">
			<b-row>
				<b-col cols="8" class="mx-auto">
					<a class="anuncio-link" href="anuncios[1].url" target="_blank">
							<b-img
						v-bind:src="anuncios[1].imagen"
						v-bind:title="anuncios[1].titulo"
						center
						fluid
						rounded
						class="anuncio-img"
						></b-img>
					</a>
				</b-col>
			</b-row>
		</b-container>

		<section id="seccionInformes" class="seccion-publicacion">
			<ListaPublicaciones 
			v-bind:publicaciones="informes"
			/>
		</section>
	</div>
	

</template>
<script>

	export default {
		data() {
			return {
				noticias: {
					titulo: "noticias",
					tipo: "noticia",
					enlace: "/publicaciones/noticia/page/1",
					lista: [
						{id:1, titulo:"Llegan productos del campo a la ciudad de Bluefields", portada:"/img/productos_bluefields.jpg", url:"#"},
						{id:2, titulo:"Se reactivan los viajes a Corn Island con la Motonave Río Escondido", portada:"/img/rio_escondido.jpg", url:"#"},
						{id:3, titulo:"Gobierno Regional Destina presupuesto para ayudar a damnificados de huracanes", portada:"/img/graccs.jpg", url:"#"},
						{id:4, titulo:"Productos del Caribe serán exportados a Jamaica", portada:"/img/productos_bluefields.jpg", url:"#"},
					],
				},
				anuncios: [
					{ id: 1, titulo: "Propaganda 1", imagen: "/img/01-banner-web-PRE-720x3002.jpg", url: "#" },
					{ id: 2, titulo: "Propaganda 2", imagen: "/img/01-banner-web-PRE-720x3002.jpg", url: "#" },
				],
				informes: {
					tipo: "informe",
					enlace:"/publicaciones/informe/page/1",
					titulo: "gestión del graccs",
					lista: [
						{id: 1, titulo: "Reunión de la Secretaría de Salud con la Ministra ", portada: "/img/graccs.jpg", url:"#"},
						{id: 2, titulo: "Entrega de matas de cacao a cooperativas del programa CACAO-CARIBE", portada: "/img/productos_bluefields.jpg", url:"#"},
						{id: 3, titulo: "Informe de reunión de la Secretaría de Transporte e Infraestructura con EPN e Intur.", portada: "/img/rio_escondido.jpg", url:"#"},
						{id: 4, titulo: "Director ejecutivo se reune con todo el personal del GRACCS.", portada: "/img/graccs.jpg", url:"#"},
					],
				},
			}
		},
		layout: 'inicio',
	};

</script>