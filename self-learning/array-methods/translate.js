let str = 'huge-ass-string';
function camelize(str) {
  return str
  .split('-') // splits word into array divided by '-'
  .map(
    // capitalizes first letters of all array items except for first one
    (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  )
  .join(''); //joins back together
}
console.log(camelize(str))