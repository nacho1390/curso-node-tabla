const fs = require('fs')

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        
        

        salida = ''

        for (let index = 0; index <= hasta; index++) {
            salida += `${ base } x ${ index } = ${ base * index } \n` 
        }

        if ( listar ){
            console.log('=====================')
            console.log('Tabla del:',  base )
            console.log('=====================')
            
            console.log(salida)
        }

        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida )
        
        return `tabla-${ base }.txt`

    } catch (error) {
        throw err
    }

    

}

module.exports = { 
    crearArchivo
 }