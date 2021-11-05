const Companias = require('../modelos/Compania');


async function getOne(req, res) {

     const { id } = req.params; //obtenemos el id del usuario
    await Companias.findById(id, (err, companiaStorage) => {

        if (err || !companiaStorage) {
            return res.status(500).json({
                status: "Error",
                data: "Error al devolver los datos",
            });
        }

        return res.status(200).json({
            status: "success",
            data: companiaStorage,
        });

    });


}

async function getAll(req, res) {
    const compania = await Companias.find();

    return res.status(200).json({
        status: "success",
        data: compania
    });

}

async function create(req, res) {

    try {

        const datos = new Companias(req.body);
        await datos.save();

        // Devolver una respuesta
        return res.status(200).json({
            status: 'success',
            compania: datos
        });

    } catch (error) {

        return res.status(400).json({
            status: 'error',
            message: 'La compania no se ha guardado !!!'
        });

    }


}

async function edit(req, res) {

    const { id } = req.params;

    var { nombreCompania } = req.body;

    await Companias.findOneAndUpdate({ _id: id }, { nombreCompania }, { new: true }, (err, companiaUpdate) => {

        if (err || !companiaUpdate) {
            console.log(err)
            return res.status(400).json({
                status: "Error",
                compania: "Error al actualizar compañía",
            });
        }

        return res.status(200).json({
            status: "success",
            compania: companiaUpdate,
        });

    });
}

async function eliminar(req, res) {

    const { id } = req.params;

    await Companias.findByIdAndDelete({ _id: id }, (err, compania) => {
        if (err || !compania) {
            return res.status(400).json({
                status: "Error",
                error: {
                    mensaje: "Compañía no encontrada"
                }
            });
        }

        return res.status(200).json({
            status: "success",
            companias: compania,
        });

    });
}

module.exports = {
    getOne,
    getAll,
    edit,
    eliminar,
    create
}