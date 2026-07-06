let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    arr = arr.filter(item => (a <= item && b >= item));
}

filterRangeInPlace(arr, 1, 4);
alert(arr);