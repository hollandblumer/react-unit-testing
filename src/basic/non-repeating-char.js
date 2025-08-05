function nonRepeating(str) {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }

  for (let char of str) {
    if (map.get(char) === 1) {
      return char;
    }
  }
  return null;
}

console.log(nonRepeating("abcabd"));

// function nonRepeating2(str) {
//   const charCount = {};
//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   for (const char of str) {
//     if (charCount[char] == 1) {
//       return char;
//     }
//   }

//   return null;
// }
