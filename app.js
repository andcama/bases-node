const argv = require('./config/yargs')
 require('colors');

const { crearArchivoTabla } = require("./helpers/multiplicar");

console.clear();

crearArchivoTabla(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado')).catch(err=>console.log(err));
