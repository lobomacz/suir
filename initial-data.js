const crypto = require('crypto');
const randomString = () => crypto.randomBytes(6).hexSlice();
const { createItems } = require('@keystonejs/server-side-graphql-client');

module.exports = async keystone => {

  // Count existing users
  const {
    data: {
      _allUsersMeta: { count = 0 },
    },
  } = await keystone.executeGraphQL({
    context: keystone.createContext({ skipAccessControl: true }),
    query: `query {
      _allUsersMeta {
        count
      }
    }`,
  });

  // Contar registros de tablas
  /*
  const {
    cuentaT = 0
  } = await keystone.executeGraphQL({
    context: keystone.createContext({ skipAccessControl: true }),
    query: `query {
      cuentaTablas{
        cuentaT
      }
    }`,
  });*/


  if (count === 0) {
    const password = randomString();
    const email = 'admin@example.com';

    const { errors } = await keystone.executeGraphQL({
      context: keystone.createContext({ skipAccessControl: true }),
      query: `mutation initialUser($password: String, $email: String) {
            createUser(data: {nombre:"Admin", apellido:"Admin", email: $email, isAdmin: true, password: $password, entidad:null}) {
              id
            }
          }`,
      variables: { password, email },
    });

    if (errors) {
      console.log('failed to create initial user:');
      console.log(errors);
    } else {
      console.log(`

      User created:
        email: ${email}
        password: ${password}
      Please change these details after initial login.
      `);
    }

    const tablas = await createItems({
      keystone,
      listKey: 'Tabla',
      items: [
        {data: {tabla:"sector"}},
        {data: {tabla:"estado"}},
        {data: {tabla:"sexo"}},
        {data: {tabla:"etnia"}},
        {data: {tabla:"tipo_pub"}},
      ],
      returnFields: 'id, tabla',
    });

    for(t of tablas){
      t_items = [];
      switch (t.tabla) {
        case 'sector':
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"educación", codigo_eq:"edu"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"salud", codigo_eq:"sld"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"niñez y adolescencia", codigo_eq:"nya"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"juventud", codigo_eq:"juv"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"producción, industria y comercio", codigo_eq:"piyc"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"medio ambiente", codigo_eq:"ma"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"pesca", codigo_eq:"pesc"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"turismo", codigo_eq:"tur"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"seguridad ciudadana", codigo_eq:"segc"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"transporte e infraestructura", codigo_eq:"trei"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"energía y minas", codigo_eq:"eym"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"tecnologías de la información y comunicaciones", codigo_eq:"tics"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"agua, saneamiento e higiene", codigo_eq:"ash"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"economía", codigo_eq:"ec"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"demografía", codigo_eq:"dem"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"nutrición", codigo_eq:"nut"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"empleo", codigo_eq:"emp"}});
          break;
        case 'estado':
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"borrador", codigo_eq:"b"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"listo para publicar", codigo_eq:"lpp"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"publicado", codigo_eq:"pub"}});
          break;
        case 'sexo' :
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"masculino", codigo_eq:"m"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"femenino", codigo_eq:"f"}});
          break;
        case 'etnia':
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"mestizo", codigo_eq:"mtz"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"creole", codigo_eq:"cre"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"miskitu", codigo_eq:"msk"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"garifuna", codigo_eq:"gar"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"ulwa", codigo_eq:"ulw"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"rama", codigo_eq:"ram"}});
          break;
        default:
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"noticia", codigo_eq:"not"}});
          t_items.push({data: {tabla:{connect:{id:t.id}}, elemento:"informe de actividad", codigo_eq:"inf"}});  
          break;
      }

      await createItems({
        keystone,
        listKey: 'DetalleTabla',
        items: t_items,
      });

    }

  }

  // CONSULTA DE PRUEBA PARA VERIFICAR GRAPHQL

  const { 
    data : {
      Tabla: {
        listaDetalle
      }
    }
  } = await keystone.executeGraphQL({
    context:keystone.createContext({ skipAccessControl:true }),
    query: `query {
      Tabla(where:{id:"5fbfccfd1dd84829ddc2cf00"}){
        tabla
        listaDetalle {
          id
          elemento
        }
      }
    }`,
  });

  // FIN DE LA CONSULTA DE RPRUEBA

};
