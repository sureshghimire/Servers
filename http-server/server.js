const http = require('http');

const app = http.createServer((request,response)=>{
    //create a GET route for the main site

    if(request.url==='/'){

        //destructring the object
        const {url,method, headers}=request;
        console.log(url);
        console.log(method);
        console.log(headers)

        //console.log(request);
        response.end("Hello World")
    }
    else if(request.url ==='/JSON'){
       
        // http server you must mention content type on header
        response.writeHead(200, {'Content-Type':'application/json'})
        response.end(JSON.stringify({'hello':'World'}))
    }
})

app.listen(8888,'localhost',)