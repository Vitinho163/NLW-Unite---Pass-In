# pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramente permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes incritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan de credencial de participante para permitir a entrada do evento.

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript construido no motor JavaScript V8 do Chrome.
- **[Fastify]()**: Um framework web extremamente rápido e eficiente para Node.js. Ele foi projetado para fornecer alto desempenho com baixo consumo de recursos, adequado para desenvolvimento de APIs e serviços web.
- **[Fastify-Swagger](https://github.com/fastify/fastify-swagger)**: Um plugin Fastify que gera automaticamente a especificação OpenAPI (conhecida como Swagger) com base nos esquemas de rota e parâmetros fornecidos.
- **[Fastify-Swagger-UI](https://github.com/fastify/fastify-swagger-ui)**: Um pacote independente que fornece uma interface de usuário para visualizar e interagir com APIs definidas pelo Swagger. Este plugin é projetado especificamente para integrar o Swagger UI com o Fastify.
- **[@Fastify/cors](https://github.com/fastify/fastify-cors)**: Um plugin para Fastify que permite configurar políticas de Cross-Origin Resource Sharing (CORS) para controlar o acesso a recursos de origens diferentes.
- **[Prisma](https://www.prisma.io/)**: Uma biblioteca de banco de dados ORM (Object-Relational Mapping) para Node.js e TypeScript. Ele fornece uma interface de programação de aplicativo (API) para interagir com um banco de dados usando o Prisma Schema.
- **[Zod](https://zod.dev/)**: Uma biblioteca de validação de esquemas altamente eficiente e fácil de usar para JavaScript e TypeScript. Ele permite definir e validar esquemas de forma declarativa, ajudando a garantir a integridade dos dados em seu aplicativo.

## Requisitos

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poder visualizar a lista de participantes;
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição.
- [x] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in uma única vez;

### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode.

## 🛠️ Instalação

1. Clone o repositório ou faça o download e extraia o arquivo zip do repositório.
```
git clone https://github.com/Vitinho163/NLW-Unite---Pass-In.git
```

2. Instale as dependências:
```
npm install
```

3. Renomeie o arquivo `.env.example` para `.env` e preencha as informações:
```
DATABASE_URL=""
```

4. Execute as migrações:
```
npm run migrate
```

## Iniciando aplicação

Para rodar a aplicação em modo produção:

1. Build na aplicação:
```
npm run build
```

2. Inicie a aplicação:
```
npm run start
```

Para rodar a aplicação em modo desenvolvimento:
```
npm run dev
```

## Diagrama ERD

<img src=".github/erd.svg" width="600" alt="Diagrama ERD do banco de dados" />

## 💻 Deploy

Esta API foi hospedada diretamente no Render.

O deployment pode ser acessado no seguinte endereço:
```
https://nlw-unite-pass-in.onrender.com/
```

>Nota: Como está hospedado em um serviço gratuito, a aplicação 'hiberna' após 15 minutos de inatividade. Se você estiver tentando acessar o site e o BackEnd não responder, basta aguardar, pois ele estará 'inicializando' os serviços.

## Documentação da Rotas

A documentação de todas as rotas está disponivel em:
```
http://localhost:3333/docs
```

>Nota: Esta aplicação foi desenvolvida usando a versão Node.js v20.12. Em caso de problemas, tente atualizar o Node.js para a versão mais recente.
