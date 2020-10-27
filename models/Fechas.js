
const { CalendarDay, Integer, Text } = require('@keystonejs/fields');

module.exports = {
	fields:{
		fecha:{type:CalendarDay, isRequired:true},
		anio:{type:Integer, isRequired:true},
		mes:{type:Text, isRequired:true},
		trimestre:{type:Text, isRequired:true},
		semana:{type:Integer, isRequired:true}
	}
};