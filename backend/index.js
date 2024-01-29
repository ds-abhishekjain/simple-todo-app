const express = require('express')
const port = 3000
const app = express()
const {todoModel} = require('./db')

app.use(express.json())

const {todoSchema,updateTodoSchema} = require("./types");


app.get('/todos',async (req,res) => {
    const todos = await todoModel.find({}); 
    res.json({
        todos
    })
})

app.post('/todos',async (req,res) => {
    const createPayLoad = req.body;
    const parsedPayLoad = todoSchema.safeParse(createPayLoad)
    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg : "You sent wrong inputs"
        })
        return;
    }
    // put it in mongo db
    await todoModel.create({
        title : createPayLoad.title,
        description : createPayLoad.description,
        completed : false
    }) 

    res.json({
        msg: "Todo created"
    })
})

app.put('/completed',async (req,res) => {
    const updatePayLoad = req.body;
    const parsedPayLoad = todoSchema.safeParse(updatePayLoad)
    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg : "You sent wrong inputs"
        })
        return;
    }
    await todoModel.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(port,() => {
    console.log(`Listening on ${port}`);
})