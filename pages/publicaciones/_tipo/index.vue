<template>
	<h1 style="margin-top:20rem;">
		Esta es la página de {{tipo}}s.
	</h1>
</template>
<script>
	export default {
		data() {
			return {
				tipo: this.$route.params.tipo,
			}
		},

	};
</script>