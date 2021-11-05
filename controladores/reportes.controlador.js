const EntityModel = require('../modelos/Reporte');

async function getOne(req, res) {
    const { id } = req.params;
    await EntityModel.findById(id, (err, appStorage) => {

        if (err || !appStorage) {
            return res.status(500).json({
                status: "Error",
                data: "Error al devolver los datos",
            });
        }

        return res.status(200).json({
            status: "success",
            data: appStorage,
        });
    });
}

async function getAll(req, res) {
    const datos = await EntityModel.find();

    return res.status(200).json({
        status: "success",
        data: datos
    });
}

async function create(req, res) {
    const body = req.body;
    let objDate = new Date();
    const fecha = `${objDate.getFullYear()}/${objDate.getMonth() + 1}/${objDate.getDate()}/${objDate.getHours()}/${objDate.getMinutes()}`; //yyyy/mm/dd



    const newObject = new EntityModel({


        identificador: body.identificador,
        nombre: body.nombre,
        propietario: body.propietario,
        descripcion: body.descripcion,
        regulatorio: body.regulatorio,
        periodicidad: body.periodicidad,
        dimenciones: body.dimenciones,
        indicadores: body.indicadores,
        cuadro: body.cuadro,
        nombreCuadro: body.nombreCuadro,
        areas: body.areas,
        validado: body.validado,
        DominiosCompania: body.DominiosCompania,
        fechaCreacion: fecha,



    });
    await newObject.save((err, dataStore) => {
        if (err || !dataStore) {
            return res.status(400).json({
                status: 'error',
                message: 'Error no se ha guardado !!!' + err
            });
        }
        // Devolver una respuesta 
        return res.status(200).json({
            status: 'success',
            data: dataStore
        });

    })
}

async function edit(req, res) {

    const { id } = req.params;

    const body = req.body;

    await EntityModel.findOneAndUpdate({ _id: id },

        {
            identificador: body.identificador,
            nombre: body.nombre,
            propietario: body.propietario,
            descripcion: body.descripcion,
            regulatorio: body.regulatorio,
            periodicidad: body.periodicidad,
            dimenciones: body.dimenciones,
            indicadores: body.indicadores,
            cuadro: body.cuadro,
            nombreCuadro: body.nombreCuadro,
            areas: body.areas,
            validado: body.validado,
            DominiosCompania: body.DominiosCompania




        }, { new: true }, (err, dato) => {

            if (err || !dato) {
                console.log(err)
                return res.status(400).json({
                    status: "Error",
                    data: "Error al actualizar",
                });
            }
            return res.status(200).json({
                status: "success",
                data: dato,
            });
        });
}




async function eliminar(req, res) {

    const { id } = req.params;

    await EntityModel.findByIdAndDelete({ _id: id }, (err, datos) => {
        if (err || !datos) {
            return res.status(400).json({
                status: "Error",
                error: {
                    mensaje: "Objeto no encontrado!"
                }
            });
        }

        return res.status(200).json({
            status: "success",
            data: datos,
        });
    });
}

async function getDominio(req, res) {
    const { id } = req.params;
    const listaReportes = await EntityModel.find({DominiosCompania: id})
    return res.status(200).json({
        status: "success",
        data: listaReportes
    });

}

module.exports = {
    getAll,
    create,
    getOne,
    edit,
    eliminar,
    getDominio
}