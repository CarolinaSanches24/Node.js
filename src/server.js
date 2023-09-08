import  http  from 'node:http' 
import { json } from './middlewares/json.js';

const users = [];
const server = http.createServer(async(req, res) =>{ //ArrowFuction
    
    const {method, url } = req //Desestruturação

    await json(req, res)

    if(method==='GET' && url==='/users'){
        return res
        .end(JSON.stringify(users)); 
    }

    if(method==='POST' && url==='/users'){

        const { name, email} = req.body
        users.push({id:1, name, email})

        //*Status Code
        return res.writeHead(201).end();
    }

    return res.writeHead(404).end();
})

server.listen(3333)

// O servidor ouça a porta local host :3333