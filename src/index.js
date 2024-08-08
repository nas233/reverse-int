module.exports = function reverse (n) {
  let s = Math.abs(n);
  let res = 0;
  while (s > 0) {
    res = res * 10 + s % 10;
    s = Math.floor( s / 10);
    console.log(s);
  }

  return res;
}
