const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
	beforeEach(async () => {
		await connection.migrate.rollback()
		await connection.migrate.latest()
	})

	afterAll(async () => {
		await connection.destroy()
	})

	it('should be able to create a new ONG', async () => {
		const response = await request(app)
			.post('/ongs')
			/* .set('Authorization', '<id_ong>) // -> setar header */
			.send({
				name: "Teste Ong",
				email: "contato@teste.com",
				whatsapp: "5547000000",
				city: "Rio do Sul",
				uf: "SC"
			})
		
		expect(response.body).toHaveProperty('id')
		expect(response.body.id).toHaveLength(8)
	})
})

/**
 * Teste integrado:
 * Teste de funcionalidades que dependem ou se conectam a outras funcionalidades, APIs, ou banco de dados.
 * São testes que acontecem de ponta a ponta, verificando todas as funcionalidades existentes nesse fluxo.
 */