const Conceptonegocios = require("../modelos/ConceptoNegocio");






async function getBusquedas(req, res) {
    const busqueda = req.params.busqueda;
    const regex = new RegExp(busqueda, "i");

    const [
        conceptosnegocios,


    ] = await Promise.all([


        Conceptonegocios.find({ nombre: regex }),



    ]);

    res.json({
        ok: true,
        conceptosnegocios,


    });
}






async function getDocumentosColeccion(req, res) {
    const tabla = req.params.tabla;
    const busquedas = req.params.busquedas;
    const regex = new RegExp(busquedas, "i");

    let data = [];

    switch (tabla) {
        case "usuarios":
            data = await Usuarios.find({ userNombres: regex });

            break;
        case "roles":

            data = await Roles.find({ nomRol: regex });

            break;
        case "modulos":
            data = await Modulos.find({ titulo: regex });
            break;
        default:
            return res.status(400).json({
                ok: false,
                msg: "la tabla tiene que ser usuarios/roles/modulos",
            });


    }

    res.json({
        ok: true,
        resultados: data,
    });
}

module.exports = {
    getBusquedas,
    getDocumentosColeccion,

}