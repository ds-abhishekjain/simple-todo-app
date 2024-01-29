// input validation using zod

const zod = require('zod')

const todoSchema = zod.object(
    {
        title : zod.string(),
        description : zod.string()
    }
)

const updateTodoSchema = zod.object(
    {
        id : zod.string()
    }
)

// export the files

module.exports = {
    todoSchema : todoSchema,
    updateTodoSchema : updateTodoSchema
}