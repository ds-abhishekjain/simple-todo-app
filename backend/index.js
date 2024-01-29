const express = require('express')
const port = 3000
const app = express()

app.use(express.json())

app.get('/todos',(req,res) => {
    res.send("Hello!")
})

app.post('/todos',(req,res) => {

})

app.put('/todos',(req,res) => {

})

app.listen(port,() => {
    console.log(`Listening on ${port}`);
})