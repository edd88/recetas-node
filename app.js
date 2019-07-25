const argv = require('./config/yargs').argv;
const crud = require('./crud/crud-consola.js');
const colors = require('colors');

let comando = argv._[0];
try
{
    switch (comando)
    {
    case 'crear':
        console.log('pulso crear una receta');
        crud.crear(argv.nombre, argv.ingredientes, argv.preparacion);
        console.log("Se guardo la receta");
        break;
    case 'listar':
        console.log('pulso listar las recetas');
        let listado = crud.getListado();
        for (receta of listado)
        {
            console.log(`======> ${receta.nombre} <========`.green.bold);
            console.log("Ingredientes:".yellow);
            for (ingrediente of receta.ingredientes)
            {
                console.log(ingrediente);
            }
            console.log("Preparación:".cyan);
            for (preparacion of receta.preparacion)
            {
                console.log("-" + preparacion);
            }
            console.log(`fecha de subida: ${receta.fecha_subida}`.bold);
        }
        break;
    case 'actualizar':
        console.log('pulso actualizar una receta');
        crud.actualizar(argv.nombre,argv.ingredientes,argv.preparacion);
        break;
    case 'eliminar':
        crud.eliminar(argv.nombre);
        break;
    default:
        console.log('escriba una opción valida');
        break;
    }
}
catch (e)
{
    console.log('Error: ', e);
}
