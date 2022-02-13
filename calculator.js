const express = require('express');
const app = express();


app.get('/' , (req , res)=>{
    res.sendFile(__dirname + "/index.html"); //__dirname is same as pwd
});



app.listen('3000',()=>{
    console.log("Listening at port : 3000");
});