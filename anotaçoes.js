/*
Protocolo HTTP

> VERBOS HTTP
get - leitura
post - criaçao
put - atualizaçao
delete - deleçao
pacht - atualizaçao parcial

> QUERY PARAMS
query params = ?teste=1
http://api.com/celulares?name?=samsung&preço=2000

(
    {
        method:'get',
        url:'http://servidor.com/user?name=rodolfo
    }
);

> ROUTE PARAMS
route params = /user/1
GET - http://api.com/movies/1
DELETE - http://api.com/movies/1
PUT - http://api.com/movies/1
(
    {
        method:'get',
        url:'http://servidor.com/user/3
    }
);

> BODY PARAMS
(
    {
        method:'get',
        url:'http://servidor.com/user/12345
        data: {
            "name":"rodolfo",
            "age": 28,
            "email":"rodolfo@mail.com"
        }

    }
);

> CODIGOS HTTP
2xx confirmaçao / sucesso
4xx erro do cliente (front-end)
5xx erro do servidor (falha ao concluir solicitaçao)

> COMANDOS POWER SHELL
MkDIR - para criar uma pasta ou arquivo
CD .. - para voltar a pasta anterior ou iniciar uma nova
LS - para ver o status do arquivo, localizar aonde voce esta
NPM INIT - para iniciar um projeto
RM -RF (NOME DO PROJETO) - para deletar
^C - para parar o servidor
NPM I - para instalar um framework
WIN . - para colocar emojis

> JSON = JAVASCRIPT OBJECT NOTATION
ele é em formato de objeto um padrao para que o back-end e o front-end possam se comunicar de uma forma padrão
so aceita aspas duplas ""
não aceita vingula no ultimo elemento

> QUERY PARAMS 
filtros
/users?name=beatriz&age=24

> ROUT PARAMS 
deletar, buscar ou atualizar algo especifico
/users/2
 
> REQUEST BODY
AQUI ESTA O CODIGO QUE USAMOS COMO EXMPLO PARAR RODAR COM O BODY E JSON
Const express = require('express')
const port = 3000
const app = express()
app.use(express.json())

app.get('/users', (request, response) => {
    const { name, age } = request.body

    return response.json({name, age})
})

app.listen(port, () => {
    console.log(`server started on port ${port} 😊`)
})
*/