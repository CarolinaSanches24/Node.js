//*Representação de um espaço na memoria do computador
//* Usado pra transitar dados de uma maneira muito rápida
//*Salvar e ler da memória o buffer guarda os dados de uma maneira binaria
// É UMA API CRIADA NO NODE

const buf = Buffer.from("ok");
console.log(buf)// Gera um hexadecimal
console.log(buf.toJSON())//Gera um decimal



