const User = require('../models/Users')

module.exports = {
    async store(req, res){
        const {nome, email, senha} = req.body
        const user = await User.create({nome, email, senha})
        res.send(res.json(user),'deu tudo certo carai')
        return res.json(user)

    }
}