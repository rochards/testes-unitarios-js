/**
 * TDD (Test Driven Development)
 * BDD (Behaviour Driven Development)
 * 
 * * Comandos necessários
 * $ npm init -y
 * $ npm install assert
 * $ npm install --save-dev mocha
 * $ npm install --save-dev
 * $ npm install --save-dev sinon
 * $ npm run test
 * 
 * O mocha precisa ser setado em package.json ->
 * "scripts": {
 *   "test": "mocha"
 * }
 * =======
 * Para que eu pudesse utilizar esses imports,
 * precisei adicionar "type":"module" em package.json
 */

import Math from '../src/math.js'
import { strict as assert } from 'assert' // npm install assert
import chai from 'chai'
import sinon from 'sinon'

//uma das formas de descrever os testes
describe('Math class', () => {
    /**
     * it -> para descrever o comportamento esperado da minha classe
     */
    it('Sum two numbers', () => {
        const math = new Math()
        assert.strictEqual(math.sum(5, 5), 10)
    })

    it.only('Calls req with sum and index values', function() {
        const req = {}
        const res = {
            load: sinon.spy()
        }
        const math = new Math()
        math.printSum(req, res, 5, 5)
        chai.expect(res.load.calledOnce).to.be.true
    })
})