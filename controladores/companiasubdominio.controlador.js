const SubDominiosCompania = require('../modelos/SubDominioCompania');
const Compania = require('../modelos/Compania');
const DominiosCompania = require('../modelos/DominioCompania');

async function getSubDominiosCompanias(req, res) {

    const id = req.params.id;

    const idDom = req.params.idDominio;

    const compania = await Compania.findById(id);

    const dominio = await DominiosCompania.findById(idDom);

    const listSubDominios = await SubDominiosCompania.find({ compania: id, dominio: idDom })
        .populate('Companias', '_id, nombreCompania');

    return res.status(200).json({
        status: "success",
        compania: compania,
        dominio: dominio,
        subdominios: listSubDominios,
    });
}

async function getSubDominios(req, res) {

    const idDom = req.params.idDominio;

    const listSubDominios = await SubDominiosCompania.find({ dominio: idDom })

    return res.status(200).json({
        status: "success",
        subdominios: listSubDominios,
    });
}

async function create(req, res) {
    try {

        const body = req.body;

        const { id } = req.params;

        const { idDominio } = req.params;

        const subdominio = new SubDominiosCompania({
            nombre: body.nombre,
            propietario: body.propietario,
            compania: id,
            dominio: idDominio
        });

        await subdominio.save();

        return res.status(200).json({
            status: 'Success',
            subdominioC: subdominio
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'Error',
            msg: error
        });
    }
}

async function edit(req, res) {

    const { id } = req.params;

    var { nombre } = req.body;

    var { propietario } = req.body;

    await SubDominiosCompania.findOneAndUpdate({ _id: id }, { nombre, propietario }, { new: true }, (err, subdominioUpdate) => {

        if (err || !subdominioUpdate) {
            return res.status(400).json({
                status: "Error",
                subdominio: "Error al actualizar el SubDominio!",
            });
        }

        return res.status(200).json({
            status: "success",
            subdominio: subdominioUpdate,
        });

    });
}

async function deleteSubDominio(req, res) {

    const { id } = req.params;

    await SubDominiosCompania.findByIdAndDelete({ _id: id }, (err, subdominio) => {
        if (err || !subdominio) {
            return res.status(400).json({
                status: "Error",
                error: {
                    mensaje: "SubDominio no encontrado!"
                }
            });
        }

        return res.status(200).json({
            status: "success",
            subdominio: subdominio,
        });

    });
}

async function getDetalleSubDominio(req, res) {

    const { id } = req.params;

    await SubDominiosCompania.findById(id, (err, subdominioStorage) => {

        if (err || !subdominioStorage) {
            return res.status(500).json({
                status: "Error",
                subdominio: "Error al devolver los datos",
            });
        }

        return res.status(200).json({
            status: "success",
            subdominio: subdominioStorage,
        });

    });
}

module.exports = {
    getSubDominiosCompanias,
    getSubDominios,
    create,
    edit,
    deleteSubDominio,
    getDetalleSubDominio
}