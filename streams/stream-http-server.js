import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumber extends Transform{
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString())* -1

        console.log(transformed)

        callback(null, Buffer.from(String(transformed)))
    }
}

//req => ReadableStream
//res => Writable Stream

const server = http.createServer(async(req, res)=>{
  const buffers =[]
  
  // o async await dentro de uma stream aguarda cada pedaço ser retornado
  
  for await(const chunk of req){
    buffers.push(chunk)
    //* Permite percorrer toda a stream
    // enquanto ela nao for percorrida por completo nada abaixo será executado
  }

  const fullStreamContent = Buffer.concat(buffers).toString()

  console.log(fullStreamContent)

  return res.end(fullStreamContent)

})

server.listen(3334)