
const count = 0;

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    count = n;
    
    return function() {
        
    };
};

/* * 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */