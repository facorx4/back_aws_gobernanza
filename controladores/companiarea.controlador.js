const AreasCompania = require('../modelos/AreaCompania');
const Compania = require('../modelos/Compania');

async function getAreasCompanias(req, res) {
    const id = req.params.id; //id de la compañia
    const compania = await Compania.findById(id)
    const listAreas = await AreasCompania.find({ compania: id })
        .populate('Companias', '_id, nombreCompania');

    return res.status(200).json({
        status: "success",
        compania,
        areas: listAreas,
    });

}



async function getAll(req, res) {
  
    
    const [companiaArea, total] = await Promise.all([
        AreasCompania.find({}),
            
        AreasCompania.count()

    ]);

    return res.status(200).json({
        status: "success",
        companias: companiaArea,
        total: total
    });

}
async function create(req, res) {
    try {

        const body = req.body;

        const { id } = req.params;

        const area = new AreasCompania({
            nombre: body.nombre,
            compania: id
        });

        //const area = new AreasCompania(req.body);
        await area.save();

        return res.status(200).json({
            status: 'Success',
            areaC: area
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

    var { nombre } = req.body;

    await AreasCompania.findOneAndUpdate({ _id: id }, { nombre }, { new: true }, (err, areaUpdate) => {

        if (err || !areaUpdate) {
            return res.status(400).json({
                status: "Error",
                compania: "Error al actualizar el Área!",
            });
        }

        return res.status(200).json({
            status: "success",
            compania: areaUpdate,
        });

    });
}

async function eliminar(req, res) {

    const { id } = req.params;

    await AreasCompania.findByIdAndDelete({ _id: id }, (err, area) => {
        if (err || !area) {
            return res.status(400).json({
                status: "Error",
                error: {
                    mensaje: "Área no encontrada!"
                }
            });
        }

        return res.status(200).json({
            status: "success",
            companias: area,
        });

    });
}

async function getDetalleArea(req, res) {

    const { id } = req.params;

    await AreasCompania.findById(id, (err, areaStorage) => {

        if (err || !areaStorage) {
            return res.status(500).json({
                status: "Error",
                compania: "Error al devolver los datos",
            });
        }

        return res.status(200).json({
            status: "success",
            compania: areaStorage,
        });

    });
}

module.exports = {
    getAreasCompanias,
    create,
    getAll,
    edit,
    eliminar,
    getDetalleArea
}