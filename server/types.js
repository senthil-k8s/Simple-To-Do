const zod = require("zod");

const createToDoSchema = zod.object({
    title: zod.string(),
    description : zod.string()
})

const updateToDoSchema = zod.object({
    id: zod.string()
})
// type createToDo = zod.inferOf<typeof createToDoSchema>
// type updateToDo = zod.inferOf<typeof updateToDoSchema>

module.exports = {
    createToDo : createToDoSchema,
    updateToDo :updateToDoSchema
}