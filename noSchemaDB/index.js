import express from 'express'
import mongoose from 'mongoose'
const app = express()
const port = 3000


mongoose.connect('mongodb://127.0.0.1:27017/schemalessDB')
console.log("mongodb Connected")

const DataModel = mongoose.model('Data', mongoose.Schema({},{ strict: false }));
app.use(express.json())
app.get('/', async (req, res) => {
  const data = await DataModel.find()
  res.send(data)
})

app.post('/', async(req, res)=>{
    try {
    const body = req.body
    // console.log(body)
    const data = await DataModel.create(body)
    const savedData = await data.save();
    console.log(savedData)
    res.send(savedData)
    }catch (error) {
        res.status(500).json({ error: error.message });
      }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// git config --global user.email "you@example.com"
//git config --global user.name "Your Name"