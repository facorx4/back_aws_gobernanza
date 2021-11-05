const EntityModel = require('../modelos/ReglaCalidad');

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

async function getBusqueda(req, res) {
    const { id } = req.params;
    const datos = await EntityModel.find({ conceptoNegocio: id });
    return res.status(200).json({
        status: "success",

        data: datos
    });

}

async function create(req, res) {
    const body = req.body;
    let objDate = new Date();
    const fecha = `${objDate.getFullYear()}/${objDate.getMonth() + 1}/${objDate.getDate()}`; //yyyy/mm/dd
    const newObject = new EntityModel({


        nombreEntidadDato: body.nombreEntidadDato,
        identificador: body.identificador,
        descripcion: body.descripcion,
        umbralSuperior: body.umbralSuperior,
        umbralInferior: body.umbralInferior,
        fechaCreacion: fecha,
        validado: body.validado,
        aplicativo: body.aplicativo,
        periodicidad: body.periodicidad,
        tipo: body.tipo,
        principio: body.principio,
        conceptoNegocio: body.conceptoNegocio,


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
            nombreEntidadDato: body.nombreEntidadDato,
            identificador: body.identificador,
            descripcion: body.descripcion,
            umbralSuperior: body.umbralSuperior,
            umbralInferior: body.umbralInferior,
            
            validado: body.validado,
            aplicativo: body.aplicativo,
            periodicidad: body.periodicidad,
            tipo: body.tipo,
            principio: body.principio,
            conceptoNegocio: body.conceptoNegocio,


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

module.exports = {
    getAll,
    create,
    getOne,
    edit,
    eliminar,
    getBusqueda
}