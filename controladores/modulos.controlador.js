const Modulos = require('../modelos/Modulo');
const Roles = require('../modelos/Rol');
const Submenu = require('../modelos/Submenu');



async function getAll(req, res) {
  
    
    const [lisModulos, total] = await Promise.all([
        Modulos.find({}),
            
        Modulos.count()

    ]);

    return res.status(200).json({
        status: "success",
        data: lisModulos,
        total: total
    });

}
/*Obtenemos todos los modulos*/
async function getMenu(req, res) {
    /*Obtenemos el id del rol*/
    const rol = req.params.id;
    /*Buscamos el rol*/
    const listaRol = await Roles.findById(rol);
    listaRol.modulos.sort(compare)
    /*Retornamos la lista de modulos que contiene el rol*/
    return res.status(200).json({
        status: "success",
        data: listaRol.modulos
    });
}
/*Obtenemos un modulo especifico*/
async function getOne(req, res) {
    /*Obtenemos el id del modulo*/
    const { id } = req.params;
    /*Creamos un arreglo para almacenar los submenus del modulo*/
    var submenus = [];
    await Modulos.findById(id, (err, moduloStorage) => {
        if (err || !moduloStorage) {
            return res.status(500).json({
                status: "Error",
                data: "Error al devolver los datos",
            });
        } else {
            Promise.all(moduloStorage.submenu.map(async submenuId => {
                if (submenuId)
                {
                    const sub = await Submenu.findById(submenuId)
                    submenus.push(sub)
                }
            })
            ).then(() => {
                submenus.sort(compare)
                moduloStorage.submenu = submenus;  
                return res.status(200).json({
                    status: "success",
                    data: moduloStorage,
                });
            })
        }
    });

}
/*Guardamos un modulo*/
async function create(req, res) {
    /*Obtenemos los datos del modulos del body*/
    const body = req.body;
    /*Creamos un nuevo modulo*/
    const modulo = new Modulos({
        titulo: body.titulo,
        icono: body.icono,
        data: body.submenu
    });
    /*Guardamos el modulo*/
    await modulo.save((err, moduloStore) => {
        if (err || !moduloStore) {
            console.log(err);
            return res.status(400).json({
                status: 'error',
                message: 'El modulo no se ha guardado !!!'
            });
        }/*
        moduloStore.submenu.map(submenu=>{
            var submenustored = await Submenu.findById(submenu);
            var submenuAct = submenustored.modulos.push(moduloStore);
            await Submenu.findOneAndUpdate({ _id: submenu }, {submenuAct}, { new: true });
        })
        */
        // Devolver una respuesta 
        return res.status(200).json({
            status: 'success',
            data: moduloStore
        });
    });
}

async function edit(req, res) {
    const { id } = req.params;
    var { titulo, icono, submenu } = req.body;
    await Modulos.findOneAndUpdate({ _id: id }, {
        titulo,
        icono,
        submenu
    }, { new: true }, (err, modulos) => {
        if (err || !modulos) {
            console.log(err)
            return res.status(400).json({
                status: "Error",
                data: "Error al actualizar el modulo",
            });
        }
        return res.status(200).json({
            status: "success",
            data: modulos,
        });
    });
}

async function eliminar(req, res) {
    const { id } = req.params;
    await Modulos.findByIdAndDelete({ _id: id }, (err, modulo) => {
        
        if (err || !modulo) {
            return res.status(400).json({
                status: "Error",
                error: {
                    mensaje: "modulo no encontrado"
                }
            });
        }
        return res.status(200).json({
            status: "success",
            data: modulo,
        });
    });
}

function compare( a, b ) {
    if ( a.posicion < b.posicion ){
      return -1;
    }
    if ( a.posicion > b.posicion ){
      return 1;
    }
    return 0;
  }

module.exports = {
    getAll,
    getMenu,
    create,
    getOne,
    edit,
    eliminar

}