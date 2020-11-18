class Math {
    sum(x, y) {
        return x + y
    }
    
    sumAsync(x, y, callback) {
        setTimeout(() => {
            callback(x + y)
        }, 400)
    }
    
    divide(x, y) {
        return x/y
    }

    sub(x, y) {
        return x - y
    }
}

export default Math
/**
 * Para que eu pudesse utilizar esse export,
 * precisei adicionar "type":"module" em package.json
 */