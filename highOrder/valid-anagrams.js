function validAnagram(str1, str2) {
  const str1Arr = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  const str2Arr = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(str1Arr).every((char) => str1Arr[char] === str2Arr[char]);
}

console.log(validAnagram("hello", "elloh"));
