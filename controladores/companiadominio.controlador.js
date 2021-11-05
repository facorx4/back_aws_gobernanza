const DominiosCompania = require('../modelos/DominioCompania');
const Compania = require('../modelos/Compania');

async function getDominiosCompanias(req, res) {
    const id = req.params.id; //id de la compañia
    const compania = await Compania.findById(id)
    const listDominios = await DominiosCompania.find({ compania: id })
        .populate('Companias', '_id, nombreCompania');

    return res.status(200).json({
        status: "success",
        compania,
        dominios: listDominios,
    });

}




async function getAll(req, res) {
  
    
    const [companiaDominio, total] = await Promise.all([
        DominiosCompania.find({}),
            
        DominiosCompania.count()

    ]);

    return res.status(200).json({
        status: "success",
        companias: companiaDominio,
        total: total
    });

}



async function create(req, res) {
    try {

        const body = req.body;

        const { id } = req.params;

        const dominio = new DominiosCompania({
            nombreDom: body.nombreDom,
            detalle: body.detalle,
            compania: id
        });

        await dominio.save();

        return res.status(200).json({
            status: 'Success',
            dominioC: dominio
        });

    } catch (error) {

        return res.status(500).json({
            status: 'Error',
            msg: error
        });
    }
}

async function edit(req, res) {

    const { id } = req.params;

    var { nombreDom , detalle } = req.body;

    await DominiosCompania.findOneAndUpdate({ _id: id }, { nombreDom, detalle }, { new: true }, (err, dominioUpdate) => {

        if (err || !dominioUpdate) {
            return res.status(400).json({
                status: "Error",
                compania: "Error al actualizar el Dominio!",
            });
        }

        return res.status(200).json({
            status: "success",
            compania: dominioUpdate,
        });

    });
}

async function deleteDominio(req, res) {

    const { id } = req.params;

    await DominiosCompania.findByIdAndDelete({ _id: id }, (err, dominio) => {
        if (err || !dominio) {
            return res.status(400).json({
                status: "Error",
                error: {
                    mensaje: "Dominio no encontrado!"
                }
            });
        }

        return res.status(200).json({
            status: "success",
            companias: dominio,
        });

    });
}

async function getDetalleDominio(req, res) {

    const { id } = req.params;

    await DominiosCompania.findById(id, (err, dominioStorage) => {

        if (err || !dominioStorage) {
            return res.status(500).json({
                status: "Error",
                compania: "Error al devolver los datos" ,
            });
        }

        return res.status(200).json({
            status: "success",
            compania: dominioStorage,
        });

    });
}

module.exports = {
    getDominiosCompanias,
    getAll,
    create,
    edit,
    deleteDominio,
    getDetalleDominio
}