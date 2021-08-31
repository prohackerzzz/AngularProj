const express= require ('express');
const app = express();
const cors = require('cors')
const path=require('path')
const mongoose= require('mongoose');
require('dotenv').config();


app.use(cors());
app.use(express.json())
const port = process.env.PORT || 3003
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser : true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("connected to mongodb");
});



app.get('/',(req,res)=>{
    res.json("Hello world")
})

app.get('/users',(req,res)=>{
    res.json([
        {
            "titlee":"rehan",
            "descrip":20

        },
    
        {
            "titlee":"amaan",
            "descrip":13
        
        }
    ]

    )
})

const userRouter  = require('./routes/userRoute');
const user = require('./model/user.model');
app.use('/users',userRouter)

app.listen(port, ()=>{console.log(`server running ${port}`)} );