<template>
	<!-- Barra de navegación -->
	<nav class="navbar" role="navigation">
        <div class="navbar-container">
            <div class="navbar-wrapper">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header u-align-middle">
                    <div class="navbar-header__logo d-inline-block">
                        <button type="button" class="menu-button d-sm-none d-xs-inline-block" 
								data-action="toggle" data-target="body" data-toggle="menu-visible">
                            <span class="menu-button__icon menu-button__icon-1"></span>
                            <span class="menu-button__icon menu-button__icon-2"></span>
                            <span class="menu-button__icon menu-button__icon-3"></span>
                        </button>
                        <a class="navbar-header__link" href="/">
							<img class="navbar-header__img" src="/img/graccs-logo.svg" alt="" />
						</a>
                    </div>
                </div>
                <div class="navbar-text d-none d-md-inline-block">
                    <h4 class="navbar-text__title text-uppercase">
							<!-- Pendiente nombre de la sección -->
							Sistema de Información Regional
                    </h4>
                    <h5 class="navbar-text__date">{{ date.toLocaleDateString() }}</h5>
                </div>
                <div class="navbar-menu u-align-middle">
                    <ul class="nav navbar-menu__list">
                        
                        <li class="navbar-menu__list-el">
                            <a id="lnkNoticias" class="navbar-menu__list-ln" v-bind:class="{active:path.includes('noticias')}" v-bind:href="urlNoticias" v-b-tooltip.hover.top title="Noticias">
                                <b-icon-newspaper class="navbar-menu__icon"></b-icon-newspaper>
                            </a>
                        </li>
                        <li class="navbar-menu__list-el">
                            <a v-bind:href="urlInformes" class="navbar-menu__list-ln" v-bind:class="{active:path.includes('informes')}" v-b-tooltip.hover.top title="Informes">
                                <b-icon-file-text class="navbar-menu__icon"></b-icon-file-text>
                            </a>
                        </li>
                        <li class="navbar-menu__list-el">
                            <!-- Aplica clase 'active' segun el valor de sección activada -->
                            <a class="navbar-menu__list-ln" v-bind:class="{active:sectionActive=='indicadores'}" href="#seccionIndicadores" v-b-tooltip.hover.top title="Indicadores">
                                <b-icon-bar-chart class="navbar-menu__icon"></b-icon-bar-chart>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
	export default {
		data() {
			return {
				date: new Date(),
                path: this.$route.path,
                sectionActive:null,
                urlNoticias: "/publicaciones/noticias/page/1",
                urlInformes: "/publicaciones/informes/page/1",
			}
		},
	};
	
</script>