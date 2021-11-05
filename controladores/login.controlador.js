const Usuarios = require("../modelos/Usuario");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function iniciarSesion(req,res){

    const body = req.body;
    await Usuarios.findOne({ userEmail: body.userEmail }, async (err, usuarioDB)=>{ 

        if(err || !usuarioDB ){
            return res.status(400).json({
                status: "Error",
                error: {
                    mensaje : "Usuario o contraseña invalidos"
                }
            });
        }

        /* validamos la contraseña  */
        if( !bcrypt.compareSync(body.userPassword, usuarioDB.userPassword ) ){
            return res.status(400).json({
                status: "Error",
                error: {
                    mensaje : "Usuario o contraseña invalidos"
                }
            });
        }
        /* creamos el token del usuario */
        let Authorization = jwt.sign({usuario:usuarioDB},process.env.SEED , {expiresIn: process.env.CADUCIDAD_TOKEN  })
        let idUsuario = usuarioDB._id;
        let objDate = new Date();
        
        const fechaIngreso = `${objDate.getFullYear()}/${objDate.getMonth() + 1}/${objDate.getDate()}-${objDate.getHours()}:${objDate.getMinutes()}:${objDate.getSeconds()}`;//yyyy/mm/dd - hh:mm:ss
        
        await Usuarios.findOneAndUpdate( {_id:idUsuario} , {userLastDate:fechaIngreso}, {new:true});

        /* retornamos los datos para el frontend */
        return res.status(200).json({
            status: "success",
            usuario: usuarioDB,
            Authorization
        });

    })

}



module.exports = {
    iniciarSesion
}