const fs = require('fs');


console.clear();

let salida = '';


for(i = 1; i<=10;i++){

    
    
     salida += `5 x ${i} = ${5*i}\n`;

}


fs.writeFile('tabla del 5.txt',salida,(err) =>{

    if(err) throw err;

    console.log('archivo creado correctamente');

})