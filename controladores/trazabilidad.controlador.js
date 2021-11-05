const Trazabilidad = require('../modelos/Trazabilidad');


async function getOne(req, res) {

    const { id } = req.params;

    await Trazabilidad.findById(id, (err, dataStorage) => {

        if (err || !dataStorage) {
            return res.status(500).json({
                status: "Error",
                data: "Error al devolver los datos",
            });
        }

        return res.status(200).json({
            status: "success",
            data: dataStorage,
        });
    });
}



async function getAll(req, res) {

    const listaDatos = await Trazabilidad.find({})
        .populate('dominio', 'nombreDom')
        .populate('subDominio', 'nombre')
        .populate('conceptoNegocio', 'nombre')
        .populate('tipoEntidadDato', 'nombre')


    return res.status(200).json({
        status: "success",
        data: listaDatos
    });
}


async function getBusqueda(req, res) {
    const { id } = req.params;
    const trazabilidad = await Trazabilidad.find({ conceptoNegocio: id })
        .populate('dominio', 'nombreDom')
        .populate('subDominio', 'nombre')
        .populate('conceptoNegocio', 'nombre')
        .populate('tipoEntidadDato', 'nombre')

    return res.status(200).json({
        status: "success",

        data: trazabilidad
    });
}

async function create(req, res) {

    const body = req.body;

    const trazabilidadUser = new Trazabilidad({
        dominio: body.dominio,
        subDominio: body.subDominio,
        conceptoNegocio: body.conceptoNegocio,
        nombreEntidadDato: body.nombreEntidadDato,
        tipoEntidadDato: body.tipoEntidadDato,
        nombreFuente: body.nombreFuente,
        fuenteOficial: body.fuenteOficial,
        repoFuenteOficial: body.repoFuenteOficial,
        rutaOrigenRepositorio: body.rutaOrigenRepositorio,
        tipoRepositorio: body.tipoRepositorio,
        tablaFuenteOficial: body.tablaFuenteOficial,
        nombreCampoFuenteOficial: body.nombreCampoFuenteOficial,
        descripcionCampo: body.descripcionCampo,
        dataEntry: body.dataEntry,
        periodicidadAct: body.periodicidadAct,
        profundidadDato: body.profundidadDato,
        tipoDato: body.tipoDato,
        longitud: body.longitud,
        valoresValidos: body.valoresValidos,
        esLlavePrimaria: body.esLlavePrimaria,
        responsableDefinición: body.responsableDefinición,
    });

    await trazabilidadUser.save((err, appStore) => {
        if (err || !appStore) {
            return res.status(400).json({
                status: 'error',
                message: 'El registro no se ha guardado !!!'
            });
        }

        // Devolver una respuesta 
        return res.status(200).json({
            status: 'success',
            data: appStore
        });
    });
}


async function edit(req, res) {

    const { id } = req.params;

    var {
        dominio,
        subDominio,
        conceptoNegocio,
        nombreEntidadDato,
        tipoEntidadDato,
        nombreFuente,
        fuenteOficial,
        repoFuenteOficial,
        rutaOrigenRepositorio,
        tipoRepositorio,
        tablaFuenteOficial,
        nombreCampoFuenteOficial,
        descripcionCampo,
        dataEntry,
        periodicidadAct,
        profundidadDato,
        tipoDato,
        longitud,
        valoresValidos,
        esLlavePrimaria,
        responsableDefinición
    } = req.body;

    await Trazabilidad.findOneAndUpdate({ _id: id }, {
        dominio,
        subDominio,
        conceptoNegocio,
        nombreEntidadDato,
        tipoEntidadDato,
        nombreFuente,
        fuenteOficial,
        repoFuenteOficial,
        rutaOrigenRepositorio,
        tipoRepositorio,
        tablaFuenteOficial,
        nombreCampoFuenteOficial,
        descripcionCampo,
        dataEntry,
        periodicidadAct,
        profundidadDato,
        tipoDato,
        longitud,
        valoresValidos,
        esLlavePrimaria,
        responsableDefinición
    }, { new: true },
        (err, respuesta) => {
            if (err || !respuesta) {
                return res.status(400).json({
                    status: "Error",
                    data: "Error al actualizar concepto negocio",
                });
            }

            return res.status(200).json({
                status: "success",
                data: respuesta,
            });
        });
}

async function eliminar(req, res) {

    const { id } = req.params;

    await Trazabilidad.findByIdAndDelete({ _id: id }, (err, respuesta) => {
        if (err || !respuesta) {
            return res.status(400).json({
                status: "Error",
                error: {
                    mensaje: "Registro no encontrado!"
                }
            });
        }

        return res.status(200).json({
            status: "success",
            data: respuesta,
        });

    });
}

module.exports = {
    getAll,
    create,
    getOne,
    edit,
    eliminar,
    getBusqueda,
}