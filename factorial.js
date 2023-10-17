function factorial(k) {
  const ans = new Array({ length: k }).map((x) => 1);
  for (let i = 1; i < k; i++) {
    ans[i] = ans[i - 1] * i;
  }

  return ans;
}

console.log("Factorial of given number", factorial(0));
