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
// day 4
function createCounter(init) {
    let count = init;  // current value store karega

    return {
        increment: function() {
            count++;
            return count;
        },

        decrement: function() {
            count--;
            return count;
        },

        reset: function() {
            count = init;
            return count;
        }
    };
}

// day5
function map(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i);  
    }

    return result;
}

//day 6
function filter(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {   
            result.push(arr[i]); 
        }
    }

    return result;
}
// day 7
function reduce(nums, fn, init) {
    let result = init;  

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);  
    }

    return result;
}

