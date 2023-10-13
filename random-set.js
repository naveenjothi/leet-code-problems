var RandomizedSet = function () {
  this.randomSet = new Map(); // Use a Map to store the elements.
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (!this.randomSet.has(val)) {
    this.randomSet.set(val, true);
    return true;
  }
  return false;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.randomSet.has(val)) {
    this.randomSet.delete(val);
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const values = [...this.randomSet.keys()];
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};

// Your RandomizedSet object will be instantiated and called as such:
var obj = new RandomizedSet();
obj.insert(0);
obj.insert(1);
obj.insert(2);
obj.insert(3);
obj.insert(4);
obj.remove(obj.getRandom());

console.log("param", obj);
