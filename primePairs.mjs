function sive(n) {
  let primes = [];

  if (n < 2) {
    return primes;
  }

  const limit = Math.sqrt(n) - 2;
  let nums = [];

  for (var i = 2; i <= n; i++) {
    nums.push(i);
  }

  for (var i = 0; i <= limit; i++) {
    const p = nums[i]
    if (p) {
      for (var j = p * p - 2; j < nums.length; j += p) {
        nums[j] = 0;
      }
    }
  }
  

  for (var i = 0; i < nums.length; i++) {
    var p = nums[i];
    if (p) {
      primes.push(p);
    }
  }

  return primes;
};

export const handler = async (event) => {
  const n = event.n;

  let primes = sive(Math.sqrt(n));

  let factors = [];

  for (const prime of primes) {
    while (n % i === 0) {
      factors.push(i);
      n = n/i;
    }
  }

  return factors;
};

console.log(handler({n:158}));
