const fs = require('fs');

let listadoRecetas = [];

const guardarDB = () =>
{
    let data = JSON.stringify(listadoRecetas);
    fs.writeFile('./bd/bd-recetas.json', data, (err) =>
    {
        if (err)
        {
            throw new new Error("No se pudo guardar la receta");
        }
    }
    );
}

const cargarDB = () =>
{
    try
    {
        listadoRecetas = require('../bd/bd-recetas.json');
    }
    catch
    {
        listadoRecetas = [];
    }
}

const crear = (nombre, ingredientes, preparacion) =>
{
    let id;
    cargarDB();
    if (listadoRecetas.length > 0)
    {
        id = listadoRecetas[listadoRecetas.length - 1].id + 1;
    }
    else
    {
        id = 1;
    }

    let fecha = new Date();
    let fecFormat= `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
    let receta =
    {
        id,
        nombre,
        ingredientes,
        preparacion,
        fecha_subida:fecFormat
    }
    listadoRecetas.push(receta);
    guardarDB();
}

const getListado = () =>
{
    cargarDB();
    return listadoRecetas;
}

const eliminar = (nombre) =>
{
    cargarDB();
    if (listadoRecetas.some(receta => receta.nombre === nombre))
    {
        let listadoTemp = listadoRecetas.filter(receta => receta.nombre != nombre);
        listadoRecetas = listadoTemp;
        guardarDB();
        console.log('Se elimino la receta correctamente');
    }
    else
    {
        console.log('No se elimino ninguna receta');
    }
}

const actualizar = (nombre, ingredientes, preparacion) =>
{
    cargarDB();
    let index = listadoRecetas.findIndex(receta => receta.nombre === nombre);
    if (index >= 0)
    {
        listadoRecetas[index].ingredientes = ingredientes;
        listadoRecetas[index].preparacion = preparacion;
        guardarDB();
        console.log("Se actualizo la receta");
    }
    else
    {
    	console.log("No se actualizo ninguna receta");
    }
}

module.exports =
{
    getListado,
    crear,
    eliminar,
    actualizar
}
