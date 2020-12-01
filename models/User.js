
const { Checkbox, Password, Relationship, Text, Virtual } = require('@keystonejs/fields');

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

module.exports = {
	fields: {
	nombre:{label:'Nombre', type:Text, isRequired:true},
	apellido:{label:'Apellido', type:Text, isRequired:true},
    name: { type: Virtual, resolver:item => `${item.nombre} ${item.apellido}` },
    email: {
      type: Text,
      isUnique: true,
    },
    entidad: {label:'Entidad', type:Relationship, ref:'Entidad', isRequired:false, defaultValue:null},
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
    moderador: {label:'Es Moderador', type:Checkbox, defaultValue:false, isRequired:false},
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