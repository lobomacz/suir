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


const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
    new NuxtApp(),
    new StaticApp({
      path:'/',
      src:'public',
    }),
  ],
};
