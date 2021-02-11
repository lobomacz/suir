const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { Text, Checkbox, Password } = require('@keystonejs/fields');
const { SchemaRouterApp } = require('@keystonejs/app-schema-router');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NuxtApp } = require('@keystonejs/app-nuxt');
const { StaticApp } = require('@keystonejs/app-static');
const initialiseData = require('./initial-data');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'suir';
const adapterConfig = { mongoUri: 'mongodb://localhost/suir' };

const TablaSchema = require('./models/Tabla.js');
const DetalleTablaSchema = require('./models/DetalleTabla.js');
const UserSchema = require('./models/User.js');
const EntidadSchema = require('./models/Entidad.js');  
const FechaSchema = require('./models/Fecha.js');
const InstitucionSchema = require('./models/Institucion.js');
const ContactoSchema = require('./models/Contacto.js');
const LinkSchema = require('./models/LinkExterno.js');
const ComentarioSchema = require('./models/Comentario.js');
const IndicadorSchema = require('./models/Indicador.js');
const ValorSchema = require('./models/ValorIndicador.js');
const PublicacionSchema = require('./models/Publicacion.js'); 
const ExternalLinkSchema = require('./models/ExternalLink.js');   
const AnuncioSchema = require('./models/Anuncio.js');                                                                                                                                                                                                                                             


const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
});


keystone.createList('Tabla', TablaSchema);
keystone.createList('DetalleTabla', DetalleTablaSchema);
keystone.createList('Entidad', EntidadSchema);
keystone.createList('User', UserSchema);
keystone.createList('Fecha', FechaSchema);
keystone.createList('Contacto', ContactoSchema);
keystone.createList('Institucion', InstitucionSchema);
keystone.createList('LinkExterno', LinkSchema);
keystone.createList('Comentario', ComentarioSchema);
keystone.createList('Publicacion', PublicacionSchema);
keystone.createList('Indicador', IndicadorSchema);
keystone.createList('ValorIndicador', ValorSchema);
keystone.createList('ExternalLink', ExternalLinkSchema);
keystone.createList('Anuncio', AnuncioSchema);


// Consulta personalizada de tablas
/*
const cuentaTablas = async (_, context) => {
  console.log('Funcion cuentaTablas');
  const { data: tablas} = await context.executeGraphQL({
    query: `
      Tabla{
        id
      }
    `,
  });

  return tablas.length;

};


// Verificar que existen tablas
keystone.extendGraphQLSchema({
  queries:[
    {
      schema: 'cuentaTablas:Int',
      resolver: cuentaTablas,
    }
  ]
});
*/
// Fin de consulta personalizada

const nuxtConf = {
  buildDir: 'nuxt-app',
  components: true,
  modules: [
    '@nuxt/components',
    'bootstrap-vue/nuxt',
  ],
  bootstrapVue: {
    icons: true,
  },
  transformAssetUrls: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href',
    'b-avatar': 'src',
    'b-img': 'src',
    'b-img-lazy': ['src', 'blank-src'],
    'b-card': 'img-src',
    'b-card-img': 'src',
    'b-card-img-lazy': ['src', 'blank-src'],
    'b-carousel-slide': 'img-src',
    'b-embed': 'src',
  },
  head: {
    title: "Sistema de Gestión de Información Regional",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', hid: 'description', content: 'Sistema de Gestión de Información Estadística Regional'},
      { name: 'keywords', content: 'GRACCS, RACCS, Gobierno Regional, Indicadores, Noticias' },
      { name: 'author', content: 'Marvin Córdoba' }
    ],
  },
  css:[
    '~/assets/css/bebas.css',
    '~/assets/css/lato.css',
    '~/assets/sass/estilos.scss',
  ],
  static: {
    prefix:false,
  }
};


const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new NuxtApp(nuxtConf),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
    new StaticApp({
      path:'/',
      src:'public',
    }),
  ],
};

