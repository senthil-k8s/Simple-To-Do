const express = require("express")
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const { createToDo, updateToDo } = require("./types");
const { toDo } = require("./models/toDo");
dotenv.config();

mongoose.connect(process.env.MONGO_URL);

app.use(express.json());
const PORT = 3000 

app.post("/todo", async (req, res) => {
    const createPayLoad = req.body;
    const parsePayLoad = createToDo.safeParse(createPayLoad);

    if(!parsePayLoad.success){
        res.status(411).json({
            messsage: "invalid input"
        })
        return;
    }

    const response = await toDo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })

    res.json({
        message: "created successfully"
    })
})

app.get("/todo", (req, res)=> {

})

app.put("/completed", async (req,res) => {
    const payLoad = req.body;
    const parsePayLoad = updateToDo.safeParse(payLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            messsage: "invalid input"
        })
        return;
    }

    const response = await toDo.findOneAndUpdate({
        _id: req.body.id
    }, {
        completed:true
    })

    res.json({
        message:  "marked as done"
    })
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})