const leapYears = function(inputYear) {
  // Leap year rule booleans
  const isDivisibleByFour = inputYear % 4 === 0;
  const isCentury = inputYear % 100 === 0;
  const isDivisibleByFourHundred = inputYear % 400 === 0;

  if (isDivisibleByFour &&
      (!isCentury || 
      isDivisibleByFourHundred)
  ) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
