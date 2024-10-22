import * as primePairs from "../primePairs.mjs";



function testPrimePairs(p, q) {
  const n = p*q;

  console.assert(primePairs.handler({n:n}).then(function (result) {
    return result = [p,q];
  }))
}

testPrimePairs(691,167);
testPrimePairs(751,281);
testPrimePairs(277,197);
