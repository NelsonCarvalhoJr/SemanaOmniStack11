# SemanaOmniStack11
Semana OmniStack 11 - Rocket Seat - Projeto "Be The Hero"

## Estrutura do projeto

| Pasta | Descrição |
| ----------- | ----------- |
| ./backend | API REST feita em Express conectando o mobile e o front-end ao banco de dados SQLite |
| ./frontend | Interface web RectJS para cadastro de Devs |
| ./mobile | Interface mobile para consultar os Devs cadastrados |

## Entidades
 * ONG
 * Caso (Incident)

## Funcionalidades

 * Login de ONG
 * Logout de ONG
 * Cadastro de ONG
 * Cadastrar novos casos
 * Deletar casos
 * Listar casos específicos de uma ONG
 * Listar todos os casos
 * Entrar em contato com a ONG

## Cofigurações

Arquivo **./frontend/src/services/api.js**

```javascript
// Substituir <ip_backend> pelo endereço IP em que está executando o back-end
const api = axios.create({
	baseURL: '<ip_backend>',
})
```

Arquivo **./mobile/src/services/api.js**

```javascript
// Substituir <ip_backend> pelo endereço IP em que está executando o back-end
const api = axios.create({
	baseURL: '<ip_backend>',
})
```