const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

// Desenvolvimento: Todo mundo acessa o back-end
app.use(cors())	
// Produção: Apenas a origin pode acessar o back-end
// app.use(cors({
// 	origin: 'http:meuapp.com'
// }))
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app

/**
 * Rota / Recurso
 * 
 * Métodos HTTP:
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 * Tipos de parâmetros:
 * Query Params: parâmetros nomeados enviados na rota após "?" (filtro, paginação)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * Bancos de Dados
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsot SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Instalar Driver: SELECT * FROM users
 * Instalar Query Builder: table('users').select('*').where()
 */