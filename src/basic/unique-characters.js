// expect "abcdefg" to be true

/*FUNCTION UniqueChars:
    BEGIN
        set set1 = new SET();
        FOR char IN chars DO:
            BEGIN
            if SET HAS char
                RETURN false
            else ADD char to set 
        
    return true  

 */

function uniqueChars(arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return false;
    } else {
      set.add(arr[i]);
    }
  }
  return true;
}

function areAllCharactersUnique(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charCount[char]) {
      return false;
    }

    charCount[char] = true;
  }

  return true;
}
