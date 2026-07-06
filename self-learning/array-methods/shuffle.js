let arr = [1, 2, 3];

function shuffleIndex(arr) {
   arr.sort(() => Math.random() - 0.5); 
}
shuffleIndex(arr);
alert(arr);