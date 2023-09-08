import  http  from 'node:http' 

const users = [];
const server = http.createServer((req, res) =>{ //ArrowFuction
    const {method, url } = req //Desestruturação
    

    if(method==='GET' && url==='/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users)); 
    }

    if(method==='POST' && url==='/users'){

        users.push({id:1, name: 'John Doe', email: 'johndoe@example.com'})

        //*Status Code
        return res.writeHead(201).end();
    }

    return res.writeHead(404).end();
})

server.listen(3333)

// O servidor ouça a porta local host :3333