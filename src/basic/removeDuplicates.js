function removeDuplicates(arr) {
  const set = new Set();
  let result = [];

  for (const el of arr) {
    if (!set.has(el)) {
      set.add(el);
      result.push(el);
    }
  }

  console.log(result);
  return result;
}

function removeDuplicates2(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  console.log(uniqueArr);
  return uniqueArr;
}

removeDuplicates([1, 1, 2, 3, 2, 1, 3]);
removeDuplicates2([1, 1, 2, 3, 2, 1, 3]);

function removeDuplicates3(arr) {
  return Array.from(new Set(arr));
}
