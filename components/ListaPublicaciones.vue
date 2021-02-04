<template>
	<b-container>
		<b-row>
			<b-col>
				<h1 v-bind:class="[{'u-bg-tertiary': publicaciones.tipo == 'noticia', 'u-bg-secondary': publicaciones.tipo=='informe'}, 'section-header']">{{ publicaciones.titulo }}</h1>
			</b-col>
		</b-row>
		<b-row>
			<ItemPublicacion 
			v-for="publicacion in publicaciones.lista" 
			v-bind:key="publicacion.id" 
			v-bind:publicacion="publicacion" 
			/>
		</b-row>
		<b-row>
			<b-col cols="2" class="mx-auto my-4 text-center">
				<b-button :to="publicaciones.enlace" variant="dark" size="lg" class="text-uppercase">Mas {{ publicaciones.tipo }}s</b-button>
			</b-col>
		</b-row>
	</b-container>
</template>
<script>
	export default {
		props:['publicaciones']
	};
</script>