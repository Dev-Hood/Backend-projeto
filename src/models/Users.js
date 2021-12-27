const { Model, DataTypes } = require('sequelize');

class Users extends Model {
    static init(connection){
        super.init({
            email: DataTypes.STRING,
            nome: DataTypes.STRING,
            senha: DataTypes.STRING
        },{
            sequelize: connection
        })
    }
}
module.exports = Users