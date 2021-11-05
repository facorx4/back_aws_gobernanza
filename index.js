const mongoose = require("mongoose");
const aplicacion = require('./app');
const puerto = 3900;

const nanmeDB = 'datagovernance';
const userDB = 'guandera';
const passUserDB = '1234';


const url = `mongodb+srv://${userDB}:${passUserDB}@datagovernance.03ptx.mongodb.net/${nanmeDB}?retryWrites=true&w=majority`;




/**********************************************************************************
    Semilla del Token 
**********************************************************************************/
process.env.SEED = 'aplicac/-*+-+ion-*gobiernode-Datos-2020';
/**********************************************************************************
 Vencimiento del Token
 **********************************************************************************/
// 60 segundos
// 60 minutos
// 24 horas
// 5 dias
process.env.CADUCIDAD_TOKEN = '8h';


// Configurar cabeceras y cors
aplicacion.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

/**********************************************************************************
    Configuracion Base de datos
**********************************************************************************/
aplicacion.set("port", process.env.PORT || puerto);
mongoose.connect(url , { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex:true })
            .then((db) => {
                
                /*********************************************************
                    lenvantar servicio NODEJS en el puerto 3900
                **********************************************************/
                aplicacion.listen(aplicacion.get("port"), () => {
                    console.log(`Iniciando el servico `);
                });

                /********************************************************/

            })
            .catch((err) => {
                
                /*********************************************************
                    Errores al momento de conectarse a la BD
                **********************************************************/
                console.log(err);

                /********************************************************/

            });

/**********************************************************************************/
