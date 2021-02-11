<template>
	<footer class="footer">
        <div class="container footer-container">
            <div class="row align-items-center footer-row">
                <div class="footer-nav col-md-4 col-sm-6 col-xs-12 text-center">
                    <ul class="nav">
                    	<!-- If has links, show inline links -->
                    	<!-- la url se obtiene de un objeto de lista de links -->
                            <li class="footer-nav__el nav-item">
                                <a href="#" class="footer-nav__el-link nav-link" target="_blank">CRACCS</a>
                            </li>
                            <li class="footer-nav__el nav-item">
                                <a href="#" class="footer-nav__el-link nav-link" target="_blank">BICU</a>
                            </li>
                            <li class="footer-nav__el nav-item">
                                <a href="#" class="footer-nav__el-link nav-link" target="_blank">FADCANIC</a>
                            </li>
                    </ul>
                </div>
                <div class="hidden-xs hidden-sm col-md-4 text-center">
                    <div class="footer-copyright">
                        <p class="footer-copyright__text">Todos los derechos reservados {{ date.getFullYear() }} &copy;
                            <span class="meta-separator">|</span>
                            <a href="#">Condiciones y Políticas</a>
                        </p>
                    </div>
                </div>
                <div class="hidden-xs col-sm-6 col-md-3 text-center">
                    <ul class="nav links footer-social">
						<!-- Si hay información general, generar los enlaces a sitios relacionados -->
						<!-- la url se toma de un campo del objeto generalInfo para cada sitio relacionado. Ej. generalInfo.facebook -->
                            <li class="nav-item">
                                <a href="#" target="_blank" class="nav-link"><img src="/assets/img/icon-facebook.svg" width="28" alt=""></a>
                            </li>
						
                            <li class="nav-item">
                                <a href="#" target="_blank" class="nav-link"><img src="/assets/img/icon-twitter.svg" width="28" alt=""></a>
                            </li>
                        
                            <li class="nav-item">
                                <a href="#" target="_blank" class="nav-link"><img src="/assets/img/icon-instagram.svg" width="28" alt=""></a>
                            </li>
                        
                            <li class="nav-item">
                                <a href="#" target="_blank" class="nav-link"><img src="/assets/img/icon-youtube.svg" width="28" alt=""></a>
                            </li>
                        
                    </ul>
                </div>
            </div>
       </div>
    </footer>
</template>
<script>
	export default {
		data() {
			return {
				date: new Date(),
			}
		},
	}
</script>