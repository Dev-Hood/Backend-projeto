const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const conection = new Sequelize(dbConfig);
 
/*conection.authenticate().then(
    ()=>{
        console.log('conectado')
    }).catch(
        (erro)=>{console.log('deu zebra:',erro)
    })
*/
module.exports = conection