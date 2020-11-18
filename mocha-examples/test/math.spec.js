/**
 * TDD (Test Driven Development)
 * BDD (Behaviour Driven Development)
 * 
 * * Comandos necessários
 * $ npm init -y
 * $ npm install assert
 * $ npm install --save-dev mocha
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
import { strict as assert } from 'assert' // npm install assert
import Math from '../src/math.js'

//uma das formas de descrever os testes
describe('Math class', () => {
    /**
     * it -> para descrever o comportamento esperado da minha classe
     */
    it('Sum two numbers', () => {
        const math = new Math()
        assert.strictEqual(math.sum(5, 5), 10)
    })

    /**
     * Avaliação de métodos assíncronos
     */
    it('Async sum two numbers', function(done) {
        const math = new Math()

        this.timeout(3000)
        /**
         * Só consigo usar o this se não estiver usando arrow function, pq o this
         * não faz referência ao describe. A arrow function "pensaria" que esse timeout
         * seria um método do escribe.
         * 
         * RECOMENDAÇÃO: não utilizar arrow function em testes
         */

        math.sumAsync(5, 5, value => {
            assert.strictEqual(value, 10)
            
            /**
             * O done() precisa ser invocado para testes assíncronos
             * Obs.: ele só espera no máximo 2000 ms, passando disso 
             * o teste falhará. Por isso foi utilizado lá em cima o 
             * this.timeout()
             */
            done()
        })
    })

    // Como o teste abaixo nao existe, ele aparece como pending
    it('Multiply two numbers')

    // com o only, apenas esse test será executado  
    it.only('Divide two numbers', function() {
        const math = new Math()
        assert.strictEqual(math.divide(5,2), 2.5)
    })

    // com o skip, posso pular so esse test
    it.skip('Subtracts two numbers', function() {
        assert.strictEqual(new Math().sub(2, 4), -2)
    })
})