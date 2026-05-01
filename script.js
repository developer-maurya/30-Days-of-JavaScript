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