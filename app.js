// required: 3 tipos
/*  1. Propio de Node
    2. No propia, ej: Express.
    3. Creados por el usuario
*/




const argv = require('./config/yargs').argv;
const colors = require('colors')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo crado: ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}

/* let base = "abc"; */


/* console.log(process.argv); */

/* let parametro = argv[2];

let base = parametro.split('=')[1];

console.log(base); */