// function arrayIntersection(arr1, arr2) {
//   const intersectionArr = [];
//   let set = new Set();
//   for (const char of arr1) {
//     set.add(char);
//   }
//   for (const char of arr2) {
//     if (set.has(char)) {
//       intersectionArr.push(char);
//     }
//   }
//   return intersectionArr;
// }

function arrayIntersection(arr1, arr2) {
  const intersectionArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersectionArr.includes(arr1[i])) {
      intersectionArr.push(arr1[i]);
    }
  }

  return intersectionArr;
}

function arrayIntersection2(arr1, arr2) {
  const intersectionArr = [];
  let set1 = new Set(arr1);

  for (const char of arr2) {
    if (set1.has(char)) {
      intersectionArr.push(char);
    }
  }

  return intersectionArr;
}

console.log(arrayIntersection2([1, 2, 3, 4], [1, 2, 5, 6]));
