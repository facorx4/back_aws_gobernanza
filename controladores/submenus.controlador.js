const EntityModel = require('../modelos/Submenu');
var fs = require('fs');
var path = require('path');

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





    const newObject = new EntityModel({

        titulo: body.titulo,
        ruta: body.ruta,

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
            titulo: body.titulo,
            ruta: body.ruta,





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


async function cargarArchivo(req, res) {
    // Recoger el fichero de la petición
    var file_name = 'Archivo no subido...';
    if (!req.files) {
        return res.status(404).send({
            status: 'error',
            message: file_name
        });
    }

    return res.status(200).send({
        status: 'success',

    });


}






async function createImport(req, res) {


    var cadena = [];

    const dir = './tmp/files/dataFile/Submenus/';
    const files = fs.readdirSync(dir);


    for (const file of files) {


        const data = fs.readFileSync(`./tmp/files/dataFile/Submenus/${file}`, 'utf16le')


        cadena = data.split('\n')


    }

    var corre = true;


    for (i = 0; i < cadena.length; i++) {


        var recorre = cadena[i].split(/[ |,;]/)
        var titulo = recorre[0]; 
        var ruta = recorre[1];
       
        
        const newObject = new EntityModel({

            titulo: titulo,
            ruta: ruta,      
      

        });



        await newObject.save((err, dataStore) => {
            if (err || !dataStore) {
                corre = false;
            }


        })


    }

    if (corre) {
        const directory = './tmp/files/dataFile/Submenus/';

        fs.readdir(directory, (err, files) => {
            if (err) throw err;

            for (const file of files) {
                fs.unlink(path.join(directory, file), err => {
                    if (err) throw err;
                });
            }
        });

        return res.status(200).json({
            status: "success",
            data: "todo bien",
        });

    } else {
        return res.status(400).json({
            status: "success",
            data: "error al insertar los datos",
        });

    }

}

module.exports = {
    getAll,
    create,
    getOne,
    edit,
    eliminar,
    cargarArchivo,
    createImport
}