const EntityModel = require('../modelos/Rol');
var path = require('path');
const fs = require('fs');



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
    const fecha = `${objDate.getFullYear()}/${objDate.getMonth() + 1}/${objDate.getDate()}`; //yyyy/mm/dd




    const newObject = new EntityModel({

        nomRol: body.nomRol,
        modulos: body.modulos,
        dateAddRol: fecha,
       

    });
    await newObject.save((err, dataStore ) => {
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
            nomRol: body.nomRol,
            modulos: body.modulos,
            

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

 /* var file_nombre = req.files.archivo.originalFilename;
  var file_path = req.files.archivo.path;
 
  var nombreCortado = file_nombre.split(".")

  const extension = nombreCortado[nombreCortado.length -1];

   //validar extencion 
   const extencionesvalidas = ['csv','txt', 'xlsx'];

   if ( !extencionesvalidas.includes(extension)){
    fs.unlink(file_path, (err) => {
        console.log(err)
    return res.status(200).send({
        status: 'error',
        message: 'La extensión del archivo no es válida !!!'
    });
});
} else {
   
   // actualizarArchivo(file_path);
   
    */


    return res.status(200).send({
        status: 'success',
    
    });

    
}

    




async function createImport(req, res) {

  
    var cadena = [];     

    const dir = './tmp/files/dataFile/Roles/';
    const files = fs.readdirSync(dir);
  
   
    for (const file of files) {

         
       const data = fs.readFileSync(`./tmp/files/dataFile/Roles/${file}`,'UTF-8')
      
           
    
        cadena = data.split('\n')
       
       
    }
    
 var corre = true;


    for(i=0;i<cadena.length;i++){
        
            
       var recorre = cadena[i].split(/[ |,;]/)
      
        var nombreR = recorre[0];
        var date = recorre[1]; 

      
        
        const newObject = new EntityModel({

            nomRol: nombreR,
            dateAddRol: date,
           
    
        });
    


        await newObject.save((err, dataStore ) => {
            if (err || !dataStore) {
                corre = false;
            }
            
    
        })
           

    }

if(corre){
       const directory = './tmp/files/dataFile/Roles/';

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

}else{
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