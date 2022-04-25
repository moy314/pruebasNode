const fs = require('fs');

const crearArchivo = (base = 5 ) =>{
console.log("====================");
console.log("tabla del ",base);
console.log("====================");



let salida = '';

for(i = 1; i<=10;i++){

    
    
     salida += `${base} x ${i} = ${base*i}\n`;

}



fs.writeFileSync(`tabla del ${base}.txt`,salida);

console.log(`tabla del ${base}.txt creado`)
console.log(salida);

}

module.exports = {

    crearArchivo:crearArchivo
}