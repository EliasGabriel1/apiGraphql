const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const sqlite3 = require('sqlite3').verbose();

// Inicia o servidor
const port = 3000;

// Define o schema GraphQL
const schema = buildSchema(`
"""
Essas são as informações do Cliente
"""
type Clientes {
    """
    Esse é o Id do Cliente
    """
    nameid: Int 
    """
    Esse é o nome do Cliente
    """
    name: String
    """
    Essa é a idade do Cliente
    """
    idade: Int
    """
    Esse é a identidade do Cliente
    """
    cpf: String
    """
    Esse é o telefone do Cliente
    """
    telefone: String
}

"""
Aqui temos tudo sobre a loja
"""
type Lojas {
    """
    Esse é o id do Cliente
    """
    lojaid: Int 
    """
    Essa é a razão social do Cliente
    """
    razaosocial: String
    """
    Esse é a identidade do Cliente
    """
    cnpj: String
    """
    Esse é o primeiro telefone do Cliente
    """
    telefoneloja1: String
    """
    Esse é o segundo telefone do Cliente
    """
    telefoneloja2: String
    """
    Esse é o responsável do Cliente
    """
    responsavel: String
    """
    Esse é o telefone do responsável do Cliente
    """
    telefoneresponsavel: String
}

"""
Aqui são os canais de venda b2b e b2c, tendo tanto sobre os clientes, quanto sobre as lojas
"""
type Query {
    clientes: [Clientes]
    lojas: [Lojas]
}
`);

// Conecta-se ao banco de dados
const db = new sqlite3.Database('./mydatabase.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados SQLite.');
});

// Define o resolver para a query "people"
const root = {
    lojas: () => {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM lojas', (err, rows) => {
                if (err) {
                    reject(err);
                }

                if (!rows) {
                    resolve([]);
                    return;
                }

                // Mapeia os resultados para o formato esperado pela query GraphQL
                const lojas = rows.map(row => ({ razaosocial: row.razaosocial, cnpj: row.cnpj, telefoneloja1: row.telefoneloja1, telefoneloja2: row.telefoneloja2, responsavel: row.responsavel, telefoneresponsavel: row.telefoneresponsavel }));

                resolve(lojas);
            });
        });
    },

    clientes: () => {
        // Utiliza uma Promise para fazer uma consulta assíncrona ao banco de dados
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM clientes', (err, rows) => {
                if (err) {
                    reject(err);
                }

                if (!rows) {
                    resolve([]);
                    return;
                }

                // Mapeia os resultados para o formato esperado pela query GraphQL
                const clientes = rows.map(row => ({ id: row.nameid, name: row.name, idade: row.idade, cpf: row.cpf, telefone: row.telefone }));

                resolve(clientes);
            });
        });
    }
};

// Cria o app Express e adiciona o endpoint GraphQL
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/graphql`);
});
