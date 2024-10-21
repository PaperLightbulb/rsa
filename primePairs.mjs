function sive(limit) {
  let primes = [];

  if (limit < 2) {
    return primes;
  }

  const rootLimit = Math.sqrt(limit) - 2;
  let nums = [];

  for (var i = 2; i <= limit; i++) {
    nums.push(i);
  }

  for (var i = 0; i <= rootLimit; i++) {
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
  let n = event.n;

  let primes = sive(n);

  let factors = [];

  for (const prime of primes) {
    while (n % prime === 0) {
      factors.push(prime);
      n = n/prime;
    }
  }

  return factors;
};

