module.exports = reverse;
function reverse (n) {
  let changeNumber = String(Math.abs(n));
  let result = '';
  for (let i = 0; i < changeNumber.length; i++) {
    let currentSymbol = changeNumber[i];   
    result = currentSymbol + result;   
  }
  return Number(result);
}
