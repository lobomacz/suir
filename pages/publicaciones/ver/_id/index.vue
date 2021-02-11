<template>
	<b-container class="detalle">
		<b-row>
			<b-col cols="8" class="mx-auto">
				<h4 class="detalle-title text-uppercase text-wrap text-light">
					{{ record.titulo }}
				</h4>
				<div class="detalle-body">
					<b-img
					:src="record.portada"
					fluid
					alt="imagen publicación"
					class="detalle-body__img mx-auto"
					></b-img>
					<p class="lead text-monospace detalle-body__text">
						{{ record.cuerpo }}
					</p>
				</div>
			</b-col>
		</b-row>
		<b-row></b-row>
	</b-container>
</template>
<script>
	export default {
		data() {
			return {
				id:this.$route.params.id,
				publicaciones:{
					1:{ titulo:"Llegan productos del campo a la ciudad de Bluefields", portada:"/img/productos_bluefields.jpg", cuerpo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
					2:{ titulo:"Se reactivan los viajes a Corn Island con la Motonave Río Escondido", portada:"/img/rio_escondido.jpg", cuerpo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
					3:{ titulo:"Gobierno Regional Destina presupuesto para ayudar a damnificados de huracanes", portada:"/img/graccs.jpg", cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
				}
			}
		},
		computed: {
			record(){
				console.log(this.$route.path);
				return this.publicaciones[this.id];
			},
		}
	};
</script>