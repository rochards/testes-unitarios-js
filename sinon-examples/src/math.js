class Math {
    sum(x, y) {
        return x + y
    }

    printSum(req, res, a, b) {
        res.load('index', a + b)
    }
}

export default Math
/**
 * Para que eu pudesse utilizar esse export,
 * precisei adicionar "type":"module" em package.json
 */