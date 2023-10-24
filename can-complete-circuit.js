function canCompleteCircuit(gas, costs) {
  let totalGas = 0;
  let totalCosts = 0;
  let startIndex = 0;
  let currentGas = 0;
  let len = gas.length;
  for (let i = 0; i < len; i++) {
    totalCosts += costs[i];
    totalGas += gas[i];
    currentGas += gas[i] - costs[i];
    if (currentGas < 0) {
      currentGas = 0;
      startIndex = i + 1;
    }
  }
  return totalCosts > totalGas ? -1 : startIndex;
}

const gas = [1, 2, 3, 4, 5];
const costs = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas, costs));

// identify which index should be choosen as startIndex
// index = 1 cost = 4
