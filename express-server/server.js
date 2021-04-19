//to run the nodemon. add script on package.json
//"start" : "./node-modules/.bin/nodemon server.js"
//proper file path in required and mention on what server to run like 'server.js on above example'


const express = require('express');
const port = 8888;


//call express  function which provide all the features and functionality on server
const app = express();  //now the server has been created

app.listen(port,()=>{
    console.log(`Server Running...... at port ${port}`)
  
})


app.get('/',(req,res)=>{
    const {url, method, headers} = req;
    console.log(url,method,headers);
    res.send("Hello World")     //this will be print on browser
})


app.get('/json', (req,res)=>{
    const {url, method, headers}=req;
   res.json({hello: 'world'})
})



    /*      IMPORTANT: CODE LINE 26-29
        express does not need content type setting to print json.
        res.json({}) will do that as well as strinfy for us

    */



//-------IMPORTANT: READ IT-----------

//On package.json, to run the nodemon you are required to add scrrip

/*
//according to Prof Aumna-Script should be
"Script"{
"start": "./node_modules/.bin/nodemon server.js"
}


OR---USE ANOTHER
{
    "start": nodemon ./server.js
}

*/ 