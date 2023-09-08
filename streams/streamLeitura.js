// Streams --> VocÊ consegue trabalhar com dados antes deles estraem completos 
process.stdin // tudo o que estou recebendo como entrada --> Stream de leitura
    .pipe(process.stdout) //pipe encaminhar para uma saída--> Stream de escrita

import { Readable } from 'node:stream'

class OneToHundredStream  extends Readable {
    index =1;
    _read() {
    // método obrigatorio 
    //*Retorna quais são os dados da stream 
    setTimeout(()=>{
        const i = this.index++;
        if(i > 100){
        this.push(null)
        }else{
        const buf = Buffer.from(String(i))
        this.push(buf)
        }
    }, 1000)
        
    }
}

new OneToHundredStream().pipe(process.stdout)