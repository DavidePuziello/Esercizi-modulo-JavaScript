function memoize(fn) {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache for ', n)
      return cache[n];
    }
      console.log('Calculating result for', n)
      let result = fn(n);
      cache[n] = result;
      return result;
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

let factory = memoize(factorial);
console.log(factory(10));
console.log(factory(10));
console.log(factory(6));
console.log(factory(5));