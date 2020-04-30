const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
	it('should generate an unique ID', () => {
		const id= generateUniqueId()

		expect(id).toHaveLength(8)
	})
})

/**
 * Teste unitário:
 * Teste para funcionalidades bem específicas que não dependem ou conectam a outras funcionalidades, APIs ou banco de dados
 */