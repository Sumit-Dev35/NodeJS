const express=require('express');

const app=express();
const port=5000;

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.all('*',(req,res)=>{
    res.status(404).send(`<h1>Resource Not Found</h1>`)
})

app.listen(port,(error)=>{
    if(error){
        console.log(`Getting an error on this port ${port}`);
    }
    else{
        console.log(`Server is running on ${port} number`)
    }
})