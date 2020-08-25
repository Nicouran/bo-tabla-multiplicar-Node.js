// requires
const fs = require('fs');

let listarTabla= (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}  * ${i} = ${base * i} \n `);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        
        let contenido = '';
        // Que me reconozca que la base sea un numero.
        if (!Number(base)) {
            reject (`Lo ingresado no es un número`);
            return;
        }
        // Imprimir la tabla
        for (let i = 1; i <= limite; i++) {
            contenido += `${base}  * ${i} = ${base * i} \n `;
        }
        //imprimiendo y generando un archivo txt con este contenido
        fs.writeFile(`C:/Users/Nico Uran S/Desktop/World Tech/clases full stack/BO/Bases de node/tablas/tabla-del-${base}-al-${limite}.txt`, contenido, (err) => {
            if (err) 
                reject(err)
            else 
                resolve(`tabla-del-${base}-al-${limite}.txt`);
        });
    })
};
// para exportar el archivo
module.exports = {
    crearArchivo,
    listarTabla
};