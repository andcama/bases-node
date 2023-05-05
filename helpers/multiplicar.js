const fs = require("fs");
const colors = require('colors');


const crearArchivoTabla = async (base = 5, list = false,until=20) => {
  try {
    let salida ,consola = "";
    

    for (let i = 1; i <= until; i++) {
      salida += `${base}${'x'}${i}=${base * i}\n`;
      consola += `${base}${'x'.bgBlue}${i}${'='.green}${base * i}\n`;
    }
    if (list) {
      console.log("============================".bgCyan);
      console.log(`Table of ${base}`.bold);
      console.log("============================".bgCyan);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/table-${base}.txt`, salida);

    return `table-${base}.txt file created !!`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivoTabla,
};
