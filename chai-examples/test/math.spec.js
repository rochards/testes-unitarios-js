/**
 * TDD (Test Driven Development)
 * BDD (Behaviour Driven Development)
 * 
 * Comandos necessários
 * $ npm init -y
 * $ npm install --save-dev mocha
 * $ npm install --save-dev chai
 * $ npm run test
 * 
 * O mocha precisa ser setado em 
 * "scripts": {
 *   "test": "mocha"
 * }
 * =======
 * Para que eu pudesse utilizar esses imports,
 * precisei adicionar "type":"module" em package.json
 */
import Math from '../src/math.js'
import chai from 'chai'

//uma das formas de descrever os testes
describe('Math class', () => {
    /**
     * it -> para descrever o comportamento esperado da minha classe
     */
    it('Sum two numbers', () => {
        const math = new Math()
        chai.expect(math.sum(5, 5)).to.equal(10)
    })
})