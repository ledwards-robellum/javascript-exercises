const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR'; // Check if NOT integer
  if (min < 0 || max < 0) return "ERROR"; // Check if negative
  // Reverse if min is larger than max
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  let sum = 0;
  // Iterate between min and max, adding to sum each time
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
