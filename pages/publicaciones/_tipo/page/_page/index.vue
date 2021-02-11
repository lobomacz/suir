<template>
	<b-container class="publicacion-list">
		<b-row>
			<b-col class="mx-auto">
				<h1 class="text-uppercase display-4 publicacion-list__title">
					{{tipo}}s &#10022;
				</h1>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="4" class="mx-auto text-center">
				<div class="d-inline-block mx-auto">
					<b-pagination
					v-model="currentPage"
					:total-rows="rows"
					:per-page="perPage"
					size="lg"
					aria-controls="my-list"
					class="mx-auto"
					></b-pagination>
				</div>
			</b-col>
		</b-row>
		<b-row>
			<b-col class="mx-auto">
				<ListaPublicaciones 
					v-for="n in 4"
					:publicaciones="{'lista':pageRows.slice(n-1, (n-1)+4),'tipo':tipo}"
					:key="(currentPage*n*4)"
					:listrow="true"
					v-bind:class="{'list-row':n > 1}"
				/>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="4" class="mx-auto text-center">
				<div class="d-inline-block mx-auto">
					<b-pagination
					v-model="currentPage"
					:total-rows="rows"
					:per-page="perPage"
					size="lg"
					aria-controls="my-list"
					class="mx-auto"
					></b-pagination>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>
<script>
	export default {
		data() {
			return {
				tipo: this.$route.params.tipo,
				page: this.$route.params.page,
				perPage: 12,
				currentPage: 1,
				lista: [
					{id:1, titulo:"Llegan productos del campo a la ciudad de Bluefields", portada:"/img/productos_bluefields.jpg", url:"/publicaciones/ver/1"},
					{id:2, titulo:"Se reactivan los viajes a Corn Island con la Motonave Río Escondido", portada:"/img/rio_escondido.jpg", url:"/publicaciones/ver/2"},
					{id:3, titulo:"Gobierno Regional Destina presupuesto para ayudar a damnificados de huracanes", portada:"/img/graccs.jpg", url:"/publicaciones/ver/3"},
					{id:4, titulo:"Productos del Caribe serán exportados a Jamaica", portada:"/img/productos_bluefields.jpg", url:"/publicaciones/ver/1"},
					{id: 1, titulo: "Reunión de la Secretaría de Salud con la Ministra ", portada: "/img/graccs.jpg", url:"/publicaciones/ver/3"},
					{id: 2, titulo: "Entrega de matas de cacao a cooperativas del programa CACAO-CARIBE", portada: "/img/productos_bluefields.jpg", url:"/publicaciones/ver/1"},
					{id: 3, titulo: "Informe de reunión de la Secretaría de Transporte e Infraestructura con EPN e Intur.", portada: "/img/rio_escondido.jpg", url:"/publicaciones/ver/2"},
					{id: 4, titulo: "Director ejecutivo se reune con todo el personal del GRACCS.", portada: "/img/graccs.jpg", url:"publicaciones/ver/3"},
					{id:1, titulo:"Llegan productos del campo a la ciudad de Bluefields", portada:"/img/productos_bluefields.jpg", url:"/publicaciones/ver/1"},
					{id:2, titulo:"Se reactivan los viajes a Corn Island con la Motonave Río Escondido", portada:"/img/rio_escondido.jpg", url:"/publicaciones/ver/2"},
					{id:3, titulo:"Gobierno Regional Destina presupuesto para ayudar a damnificados de huracanes", portada:"/img/graccs.jpg", url:"/publicaciones/ver/3"},
					{id:4, titulo:"Productos del Caribe serán exportados a Jamaica", portada:"/img/productos_bluefields.jpg", url:"/publicaciones/ver/1"},
					{id: 1, titulo: "Reunión de la Secretaría de Salud con la Ministra ", portada: "/img/graccs.jpg", url:"publicaciones/ver/3"},
					{id: 2, titulo: "Entrega de matas de cacao a cooperativas del programa CACAO-CARIBE", portada: "/img/productos_bluefields.jpg", url:"/publicaciones/ver/1"},
					{id: 3, titulo: "Informe de reunión de la Secretaría de Transporte e Infraestructura con EPN e Intur.", portada: "/img/rio_escondido.jpg", url:"/publicaciones/ver/2"},
					{id: 4, titulo: "Director ejecutivo se reune con todo el personal del GRACCS.", portada: "/img/graccs.jpg", url:"/publicaciones/ver/3"},
					{id:1, titulo:"Llegan productos del campo a la ciudad de Bluefields", portada:"/img/productos_bluefields.jpg", url:"/publicaciones/ver/1"},
					{id:2, titulo:"Se reactivan los viajes a Corn Island con la Motonave Río Escondido", portada:"/img/rio_escondido.jpg", url:"/publicaciones/ver/2"},
					{id:3, titulo:"Gobierno Regional Destina presupuesto para ayudar a damnificados de huracanes", portada:"/img/graccs.jpg", url:"/publicaciones/ver/3"},
					{id:4, titulo:"Productos del Caribe serán exportados a Jamaica", portada:"/img/productos_bluefields.jpg", url:"/publicaciones/ver/1"},
					{id: 1, titulo: "Reunión de la Secretaría de Salud con la Ministra ", portada: "/img/graccs.jpg", url:"/publicaciones/ver/3"},
					{id: 2, titulo: "Entrega de matas de cacao a cooperativas del programa CACAO-CARIBE", portada: "/img/productos_bluefields.jpg", url:"/publicaciones/ver/1"},
					{id: 3, titulo: "Informe de reunión de la Secretaría de Transporte e Infraestructura con EPN e Intur.", portada: "/img/rio_escondido.jpg", url:"/publicaciones/ver/2"},
					{id: 4, titulo: "Director ejecutivo se reune con todo el personal del GRACCS.", portada: "/img/graccs.jpg", url:"/publicaciones/ver/3"},
					{id:1, titulo:"Llegan productos del campo a la ciudad de Bluefields", portada:"/img/productos_bluefields.jpg", url:"/publicaciones/ver/1"},
					{id:2, titulo:"Se reactivan los viajes a Corn Island con la Motonave Río Escondido", portada:"/img/rio_escondido.jpg", url:"/publicaciones/ver/2"},
					{id:3, titulo:"Gobierno Regional Destina presupuesto para ayudar a damnificados de huracanes", portada:"/img/graccs.jpg", url:"/publicaciones/ver/3"},
					{id:4, titulo:"Productos del Caribe serán exportados a Jamaica", portada:"/img/productos_bluefields.jpg", url:"/publicaciones/ver/1"},
					{id: 1, titulo: "Reunión de la Secretaría de Salud con la Ministra ", portada: "/img/graccs.jpg", url:"/publicaciones/ver/3"},
					{id: 2, titulo: "Entrega de matas de cacao a cooperativas del programa CACAO-CARIBE", portada: "/img/productos_bluefields.jpg", url:"/publicaciones/ver/1"},
					{id: 3, titulo: "Informe de reunión de la Secretaría de Transporte e Infraestructura con EPN e Intur.", portada: "/img/rio_escondido.jpg", url:"/publicaciones/ver/2"},
					{id: 4, titulo: "Director ejecutivo se reune con todo el personal del GRACCS.", portada: "/img/graccs.jpg", url:"/publicaciones/ver/3"},
				],
			}
		},
		computed: {
			rows() {
				return this.lista.length
			},
			pageRows() {
				return this.lista.slice(((this.currentPage - 1)*this.perPage), (((this.currentPage - 1)*this.perPage)+this.perPage));
			},
		}
	};
</script>