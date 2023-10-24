function addString(num1, num2) {
  num1 = num1.split("");
  num2 = num2.split("");
  let carry = "0";
  let result = [];
  while (num1.length || num2.length) {
    let [c1 = "0", c2 = "0"] = [num1.pop(), num2.pop()];
    let sum = (Number(carry) + Number(c1) + Number(c2)).toString();
    carry = "0";
    if (Number(sum) >= 10) {
      const [c1, c2] = sum.split("");
      carry = c1;
      sum = c2;
    }
    result.unshift(sum);
  }
  if (carry > 0) result.unshift(carry);
  return result.join("");
}

console.log(addString("123", "11"));
