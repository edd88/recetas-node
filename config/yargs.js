const argv= require('yargs')
		.command('crear','inserta una receta en la base de datos',{
			nombre:{
				demand:true,
				alias:'n',
				desc:'Nombre de la receta'
			},
			ingredientes:{
				demand:true,
				type:'array',
				alias:'i',
				desc:'Ingredientes de la receta'
			},
			preparacion:{
				demand:true,
				type:'array',
				alias:'p',
				desc:'Descripción de la receta'
			}
		})
		.command('eliminar','elimina una receta',{
			nombre:{
				demand:true,
				alias:'n',
				desc:'Nombre de la receta'
			}
		})
		.command('actualizar','actualiza una receta',{
			nombre:{
				demand:true,
				alias:'n',
				desc:'Nombre de la receta'
			},
			ingredientes:{
				demand:true,
				type:'array',
				alias:'i',
				desc:'Ingredientes de la receta'
			},
			preparacion:{
				demand:true,
				type:'array',
				alias:'p',
				desc:'Descripción de la receta'
			}
		})
		.help()
		.argv;

module.exports = {
	argv,
}