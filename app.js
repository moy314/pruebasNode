
const {crearArchivo} = require('./helpers/multiplicar');

const base = 7;
console.clear();

console.log(process.argv);

const [,,tercerArgumento = 'base= 5'] = process.argv;
console.log(tercerArgumento)

// crearArchivo(base)
// .then(nombreArchivo => console.log(nombreArchivo,'creado'))
// .catch(err => console.log(err));
