function recursiveCount(num = 0) {
  if (num === 10) return undefined;
  console.log(num);
  num++;
  return recursiveCount(num);
  // type your code here
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
