const express = require("express");
const bodyParse = require("body-parser");
const aplicacion = express();
const cors = require('cors')

aplicacion.use(bodyParse.urlencoded({ extended: false }));
aplicacion.use(bodyParse.json());
aplicacion.set('view engine', 'ejs');

aplicacion.use(cors())

const RouterUsuario = require('./routes/usuario.router');
const RouterRol = require('./routes/rol.router');
const RouterModulo = require('./routes/modulo.router');
const RouterBusqueda = require('./routes/busqueda.router');
const RouterRepositorio = require('./routes/repositorio.router');
const RouterSubmenu = require('./routes/submenu.router');
const RouterCompania = require('./routes/compania.router');
const RouterCompaniaArea = require('./routes/companiaarea.router');
const RouterCompaniaDominio = require('./routes/companiadominio.router');
const RouterConcepto = require('./routes/concepto.router');
const RouterSubdominio = require('./routes/subdominio.router');
const RouterTipoRepositorio = require('./routes/tipoRepositorio.router');
const RouterConceptoNegocio = require('./routes/conceptoNegocio.router');
const RouterReporte = require('./routes/reporte.router');
const RouterPeriodicidad = require('./routes/periodicidad.router');
const RouterPrioridad = require('./routes/prioridad.router');
const RouterTipoEntidad = require('./routes/tipoentidaddato.router');
const RouterIndicador = require('./routes/indicador.router');
const RouterAplicativo = require('./routes/aplicativo.router');
const RouterFuenteOficial = require('./routes/fuenteoficial.router');
const RouterOtroConsumidor = require('./routes/otroConsumidor.router');
const RouterPrincipio = require('./routes/principio.router');
const RouterTipoRegla = require('./routes/tipoRegla.router');
const RouterReglasCalidad = require('./routes/reglascalidad.router');
const RouterRepoEsquema = require('./routes/repoesquema.router');
const RouterRepoTabla = require('./routes/repotabla.router');
const RouterRepoTablaCampo = require('./routes/repotablacampo.router');
const RouterEntidad = require('./routes/entidad.router');
const RouterTicket = require('./routes/ticket.router');
const RouterCompaniaSubdominio = require('./routes/companiasubdominio.router');
const RouterTrazabilidad = require('./routes/trazabilidad.router');
const RouterEstilo = require('./routes/estilo.router');




aplicacion.use(RouterUsuario);
aplicacion.use(RouterRol);
aplicacion.use(RouterModulo);
aplicacion.use(RouterBusqueda);
aplicacion.use(RouterRepositorio);
aplicacion.use(RouterSubmenu);
aplicacion.use(RouterCompania);
aplicacion.use(RouterCompaniaArea);
aplicacion.use(RouterCompaniaDominio);
aplicacion.use(RouterConcepto);
aplicacion.use(RouterSubdominio);
aplicacion.use(RouterTipoRepositorio);
aplicacion.use(RouterConceptoNegocio);
aplicacion.use(RouterReporte);
aplicacion.use(RouterPeriodicidad);
aplicacion.use(RouterPrioridad);
aplicacion.use(RouterTipoEntidad);
aplicacion.use(RouterIndicador);
aplicacion.use(RouterAplicativo);
aplicacion.use(RouterFuenteOficial);
aplicacion.use(RouterOtroConsumidor);
aplicacion.use(RouterPrincipio);
aplicacion.use(RouterTipoRegla);
aplicacion.use(RouterReglasCalidad);
aplicacion.use(RouterRepoEsquema);
aplicacion.use(RouterRepoTabla);
aplicacion.use(RouterRepoTablaCampo);
aplicacion.use(RouterEntidad);
aplicacion.use(RouterTicket);
aplicacion.use(RouterCompaniaSubdominio);
aplicacion.use(RouterTrazabilidad);
aplicacion.use(RouterEstilo);





module.exports = aplicacion;