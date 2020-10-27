
const { Checkbox, Text, Relationship, Virtual } = require('@keystonejs/fields');

module.exports = {
	fields: {
	nombre:{label:'Nombre', type:Text, isRequired:true},
	apellido:{label:'Apellido', type:Text, isRequired:true},
    name: { type: Virtual, resolver:item => `${item.nombre} ${item.apellido}` },
    email: {
      type: Text,
      isUnique: true,
    },
    entidad:{label:'Entidad', type:Relationship, ref:'Entidad', isRequired:false, defaultValue:null},
    isAdmin: {
      type: Checkbox,
      // Field-level access controls
      // Here, we set more restrictive field access so a non-admin cannot make themselves admin.
      access: {
        update: access.userIsAdmin,
      },
    },
    password: {
      type: Password,
    },
    likePost:{type:Relationship, ref:'Publicacion.likes', many:true, isRequired:false, defaultValue:null},
    dislikePost:{type:Relationship, ref:'Publicacion.dislikes', many:true, isRequired:false, defaultValue:null},
    likeIndicador:{type:Relationship, ref:'ValorIndicador.likes', many:true, isRequired:false, defaultValue:null},
    dislikeIndicador:{type:Relationship, ref:'ValorIndicador.likes', many:true, isRequired:false, defaultValue:null},
  },
  // List-level access controls
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
};