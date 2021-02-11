<template>
	<b-col cols="3">
		<b-card
			v-bind:img-src="publicacion.portada"
			class="mb-2"
		>
		<a :href="publicacion.url">
			<b-card-title>
				{{ publicacion.titulo }}
			</b-card-title>
		</a>
		</b-card>
	</b-col>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		props:['publicacion']
	};
</script>