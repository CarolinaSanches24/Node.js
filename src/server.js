import  http  from 'node:http' 
import { json } from './middlewares/json.js';
import { routes } from './routes.js';

const server = http.createServer(async(req, res) =>{ //ArrowFuction
    
    const {method, url } = req //Desestruturação

    await json(req, res)

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    if(route){
        const routeParams = req.url.match(route.path)
        
        req.params = {...routeParams.groups}

      
        return route.handler(req, res)
    }
    console.log(route)
    return res.writeHead(404).end();
})

server.listen(3333)

// O servidor ouça a porta local host :3333