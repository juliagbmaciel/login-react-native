const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const router = require('./router')

app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())
app.use(router)



app.get('/', (request, response)=>{
    response.send(`
    <form action="/login" method="POST">
    <input type="text" name="email" placeholder="Insira o seu email">
    <input type="password" name="senha" placeholder="Insira a sua senha">
    <button>enviar</button>  
    </form>
    `)
})





app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})