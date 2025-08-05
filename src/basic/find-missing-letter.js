function findMissingLetter(arr) {
  let start = arr[0].charCodeAt;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].charCodeAt(0);
    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }
    start = current;
  }

  return "";
}

console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));

console.log(String.fromCharCode(65));
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
