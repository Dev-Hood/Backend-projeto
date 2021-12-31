const express = require('express')
const bodyparser = require('body-parser')
const UserController = require('./controllers/UserController');
const routes = express.Router();
const Users = require('./models/Users')
routes.use(bodyparser.urlencoded({extended:false}))
routes.use(bodyparser.json())

routes.get('/login',(req,res)=>{
    res.sendFile(__dirname + '/public/login.html')
})
routes.post('/login', async (req,res)=>{
    const email = req.body.email
    const user = await Users.findOne({where:{email}})
    console.log(user)
    /*if(req.body.email == 'ta@gmail.com'){
        res.sendFile(__dirname+'/dashboard/dashboard.html')
    }*/
})


routes.post('/user',UserController.store)

module.exports = routes
