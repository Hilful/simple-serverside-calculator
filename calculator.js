const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));


app.get('/bmiCalculator' , (req , res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html"); //__dirname is same as pwd
});

app.post("/bmiCalculator", (req,res)=>{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height*height);
    console.log(weight);
    console.log(height);
    res.send("Your BMI is : " + bmi);
});
app.get('/' , (req , res)=>{
    res.sendFile(__dirname + "/index.html"); //__dirname is same as pwd
});



app.post("/", (req,res)=>{
    var num1 = Number(req.body.number1);
    var num2 = Number(req.body.number2);
    var result = num1 + num2;
    console.log(num1);
    console.log(num2);
    res.send("The result of the sum of two number is " + result);
})


app.listen('3000',()=>{
    console.log("Listening at port : 3000");
});