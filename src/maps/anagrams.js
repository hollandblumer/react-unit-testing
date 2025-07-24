function anagrams(arr) {
  const arrMap = new Map();

  for (const word of arr) {
    const key = str.split("").sort().join("");
    if (!arrMap.has(key)) {
      arrMap.set(key, []);
    }
    arrMap.get(key).push(word);
  }

  return Array.from(arrMap.values());
}

// sort through each element in array
// add a hashing function to sum the elements in each array
// add it to a map
// set the map back to array
