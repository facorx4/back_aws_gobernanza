const jwt = require('jsonwebtoken');


/***********************************************************
    Verificar Token
***********************************************************/
let verificaToker = (req, res, next)=> {
    //obtenemos el token que envia el usuario
    let token = req.get('Authorization');

    jwt.verify( token , process.env.SEED , (err,decoded) =>{
        if(err){
            return res.status(401).json({
                status: "Error",
                error: {
                    mensaje : "Token invalido"
                }
            });
        }

        /************************************************************************ 
        asignamos al req los datos que hemos guardado en el payload 
        ************************************************************************/
        req.usuario = decoded.usuario;
        /*********************************************************************** 
        pasamos al siguiente callback de la peticion HTTP 
        ***********************************************************************/
        next();

    })

};

module.exports = {
    verificaToker
}
