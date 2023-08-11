const express = require('express')
const router = express.Router()



const users = [{
    email: 'teste@gmail.com',
    senha: '123456',
    nome: 'julinha'

},
{
    email: 'teste1@gmail.com',
    senha: '123456',
    nome: 'keth'

},
{
    email: 'teste2@gmail.com',
    senha: '123456',
    nome: 'lalal'

}]

module.exports = router.post('/login', (req, res)=>{
    const { email, password } = req.body
    const user = users.find(user => user.email === email && user.senha === password)
    console.log(email)
    console.log(req.body.password)
    if (user){
        return res.status(201).json(user)
    }else{
        return res.json({message: `Usuário ou senha inválidos`})
    }
})