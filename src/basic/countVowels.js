const countVowels = (str) => {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let count = 0;
  for (let i = 0; i < formattedStr.length; i++) {
    let char = formattedStr[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
};

countVowels("asadsasdasd*212--123123fafs");

console.log(countVowels("asadsasdasd*212--123123fafs") === 5); // true
console.log(countVowels("12345") === 0); // true
console.log(countVowels("AEIOU") === 5); // true (gets converted to lowercase)

function test(name, actual, expected) {
  if (actual === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.error(`❌ ${name}: expected ${expected}, but got ${actual}`);
  }
}
