const express=require('express');
const mongoose=require('mongoose');
const Todos=require('./dbModel')
//app config
const app=express();
const port=process.env.PORT||9000;

//middlewares
app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*')
    next()
})
//DB config AZZEPzrdjCxRn6Vg

mongoose.connect('mongodb+srv://todoclient:AZZEPzrdjCxRn6Vg@cluster0.9qhta.mongodb.net/todos?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
});

mongoose.connection.once('open',()=>console.log("DB connected"));
//app routes
app.get('/',(req,res)=> res.status(200).send('hello world'));

app.get('/gettodos',(req,res)=>{
    Todos.find({},(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
})
app.post('/todos',(req,res)=>{
    const dbTodo=req.body
      Todos.create(dbTodo,(err,data)=>{
          if(err){
              res.status(500).send(err)
          }else{
              res.status(201).send(data)
          }
      })
})


//listen
app.listen(port,() => console.log(`listening to localhost:${port}`))