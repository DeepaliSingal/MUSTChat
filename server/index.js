const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const loginRouter=require('./routes/login');
const signinRouter=require('./routes/signin');
const conversationRouter=require('./routes/conversations');
const messageRouter=require('./routes/messages');

const app=express();

const url='mongodb://localhost/MUSTChat'

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/login',loginRouter);
app.use('/signin',signinRouter);
app.use('/conversations',conversationRouter);
app.use('/messages',messageRouter);

mongoose.connect(url,{useNewUrlParser:true});

const con=mongoose.connection;

con.on('open',function(){
    console.log("connected successfully");
});

app.listen(9000,()=>{
    console.log("server started at port 9000");
});

