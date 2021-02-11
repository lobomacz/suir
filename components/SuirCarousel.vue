<template>
	<b-container>
		<b-row>
			<b-col cols="8" class="mx-auto">

				<b-carousel
					id="suirCarousel" 
					v-model="slide" 
					:interval="4000"
					controls 
					indicators 
					class="u-margin-top-realhuge"
				>
					<b-carousel-slide
						caption="Coordinación de Gobienrno"
						text="Foto de la Coordinación de Gobierno" 
						img-src="/img/graccs.jpg" 
					></b-carousel-slide>
					<b-carousel-slide
						caption="M/N Río Escondido"
						img-src="/img/rio_escondido.jpg"
					></b-carousel-slide>
					<b-carousel-slide
						caption="Productos del Caribe"
						img-src="/img/productos_bluefields.jpg"
					></b-carousel-slide>
				</b-carousel>

			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	export default {
		data() {
			return {
				slide: null,
			}
		},
	};
</script>