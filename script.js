// day 1
function memoize(fn) {
    let cache = new Map();

    return function (...args) {
        let key = args.toString();

        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = fn(...args);
        cache.set(key, result);

        return result;
    };
}


// day 2
function createCounter(n) {
    return function() {
        return n++;   
    };
}

//day  3
function expect(val) {
    return {
        toBe: function(val2) {
            if (val === val2) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },

        notToBe: function(val2) {
            if (val !== val2) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}
