function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseStr = formattedStr.split("").reverse().join("");
  console.log(formattedStr === reverseStr);
}

isPalindrome("racecar");

function isPalindrome2(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const strArr = formattedStr.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] != strArr[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
