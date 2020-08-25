// Para llamar el archivo exportado.

const {crearArchivo, listarTabla} = require('./Logica/Multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors')


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
        case 'crear':
            crearArchivo(argv.base, argv.limite)
                .then(archivo => console.log(`Archivo creado ${archivo}`.blue))
                .catch(err => console.log(err))
            break;
    default: console.log('El comando ingresado no es valido!'.bgBrightRed);
        break;
}
// base o muestra tabla de multiplicar
// let argv2 = process.argv;

// console.log('BASE', argv);
// console.log('LIMITE',argv.limite);

// console.log('PROCCESS',argv2);

// let b = argv[2];
// let base = b.split('=')[1];


