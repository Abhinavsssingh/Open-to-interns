const express = require("express")
const{default:mongoose} = require("mongoose")
const port = 3000
const app = express()
const route = require("./routes/route")

app.use(express.json()) //express has inbuilt function to parse data.

mongoose.connect("mongodb+srv://AbhinavSIngh:9936522959@cluster0.wtmx5b4.mongodb.net/group13Database", { useNewUrlParser: true })

.then(()=> console.log("MongoDb is connected"))
.catch( err => console.log(err))



app.use('/', route)

app.listen(port,function(){
    console.log("express app running on the port 3000")
})


